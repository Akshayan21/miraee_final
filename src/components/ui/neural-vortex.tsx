import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const vertexShaderGLSL = `
precision mediump float;
attribute vec2 a_position;
varying vec2 vUv;
void main() {
  vUv = .5 * (a_position + 1.);
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const fragmentShaderGLSL = `
precision mediump float;
varying vec2 vUv;
uniform float u_time;
uniform float u_ratio;
uniform vec2 u_pointer_position;
uniform float u_scroll_progress;
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform vec3 u_color3;

vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}

float neuro_shape(vec2 uv, float t, float p) {
  vec2 sine_acc = vec2(0.);
  vec2 res = vec2(0.);
  float scale = 8.;
  for (int j = 0; j < 15; j++) {
    uv = rotate(uv, 1.);
    sine_acc = rotate(sine_acc, 1.);
    vec2 layer = uv * scale + float(j) + sine_acc - t;
    sine_acc += sin(layer) + 2.4 * p;
    res += (.5 + .5 * cos(layer)) / scale;
    scale *= 1.2;
  }
  return res.x + res.y;
}

void main() {
  vec2 uv = .5 * vUv;
  uv.x *= u_ratio;
  vec2 pointer = vUv - u_pointer_position;
  pointer.x *= u_ratio;
  float p = clamp(length(pointer), 0., 1.);
  p = .5 * pow(1. - p, 2.);
  float t = .001 * u_time;

  float noise = neuro_shape(uv, t, p);
  noise = 1.2 * pow(noise, 3.);
  noise += pow(noise, 10.);
  noise = max(.0, noise - .5);
  noise *= (1. - length(vUv - .5));

  vec3 color = u_color1;
  color = mix(color, u_color2, 0.32 + 0.16 * sin(2.0 * u_scroll_progress + 1.2));
  color += u_color3 * sin(2.0 * u_scroll_progress + 1.5);
  color = color * noise;

  gl_FragColor = vec4(color, noise);
}
`;

export interface NeuralVortexProps {
  colors?: [string, string, string];
  opacity?: number;
  className?: string;
}

const DEFAULT_COLORS: [string, string, string] = ['#450e14', '#c74400', '#e55602'];

const hexToRgb = (hex: string): [number, number, number] => {
  const h = hex.replace('#', '');
  return [
    parseInt(h.slice(0, 2), 16) / 255,
    parseInt(h.slice(2, 4), 16) / 255,
    parseInt(h.slice(4, 6), 16) / 255,
  ];
};

const NeuralVortex = ({ colors = DEFAULT_COLORS, opacity = 0.9, className }: NeuralVortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const colorsRef = useRef(colors);
  const pointer = useRef({ x: 0, y: 0, tX: 0, tY: 0 });

  useEffect(() => {
    colorsRef.current = colors;
  }, [colors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vertexShader = compileShader(vertexShaderGLSL, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderGLSL, gl.FRAGMENT_SHADER);

    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const locs = {
      time: gl.getUniformLocation(program, 'u_time'),
      ratio: gl.getUniformLocation(program, 'u_ratio'),
      pointerPos: gl.getUniformLocation(program, 'u_pointer_position'),
      scroll: gl.getUniformLocation(program, 'u_scroll_progress'),
      color1: gl.getUniformLocation(program, 'u_color1'),
      color2: gl.getUniformLocation(program, 'u_color2'),
      color3: gl.getUniformLocation(program, 'u_color3'),
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = container.clientWidth * dpr;
      canvas.height = container.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(locs.ratio, canvas.width / canvas.height);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    let raf = 0;
    const draw = (t: number) => {
      pointer.current.x += (pointer.current.tX - pointer.current.x) * 0.2;
      pointer.current.y += (pointer.current.tY - pointer.current.y) * 0.2;

      const rect = container.getBoundingClientRect();
      const [c1, c2, c3] = colorsRef.current;

      gl.uniform1f(locs.time, t);
      gl.uniform2f(
        locs.pointerPos,
        (pointer.current.x - rect.left) / rect.width,
        1 - (pointer.current.y - rect.top) / rect.height,
      );
      gl.uniform1f(locs.scroll, window.pageYOffset / (2 * window.innerHeight));
      gl.uniform3f(locs.color1, ...hexToRgb(c1));
      gl.uniform3f(locs.color2, ...hexToRgb(c2));
      gl.uniform3f(locs.color3, ...hexToRgb(c3));

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const render = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(render);
    };

    if (reduceMotion) {
      pointer.current.tX = window.innerWidth / 2;
      pointer.current.tY = window.innerHeight / 2;
      pointer.current.x = pointer.current.tX;
      pointer.current.y = pointer.current.tY;
      draw(0);
    } else {
      raf = requestAnimationFrame(render);
    }

    const handlePointerMove = (e: PointerEvent) => {
      pointer.current.tX = e.clientX;
      pointer.current.tY = e.clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        pointer.current.tX = e.touches[0].clientX;
        pointer.current.tY = e.touches[0].clientY;
      }
    };

    if (!reduceMotion) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchmove', handleTouchMove);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return (
    <div ref={containerRef} className={cn('absolute inset-0 overflow-hidden', className)}>
      <canvas ref={canvasRef} className="pointer-events-none h-full w-full" style={{ opacity }} />
    </div>
  );
};

export default NeuralVortex;
