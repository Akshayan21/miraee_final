import { Reveal } from '@/components/motion/reveal';
import companyImage from '@/assets/Company_image.png';

export function Hero() {
  return (
    <section className="bg-[radial-gradient(110%_80%_at_85%_0%,var(--color-glow-85),rgba(17,14,9,0)_60%)] pt-[clamp(120px,16vh,180px)] pb-[clamp(48px,7vw,80px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
          THE COMPANY
        </Reveal>
        <h1 className="sr-only">About Miraee</h1>
        <div className="relative mx-auto mt-6 w-full max-w-[960px]">
          <div
            aria-hidden="true"
            className="absolute top-[17.5%] left-[3.6%] h-[18.5%] w-[47%] rounded-2xl bg-[#f3f1ed] shadow-[0_10px_30px_rgba(0,0,0,.25)]"
          />
          <img
            src={companyImage}
            alt="Miraee, part of the Tabhi group"
            width={3780}
            height={1890}
            className="relative h-auto w-full object-contain"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <Reveal delay={160}>
          <p className="mt-8 max-w-[54ch] text-pretty font-mi-body text-[clamp(1.05rem,1.3vw,1.24rem)] leading-[1.55] text-mi-cream/74">
            Miraee is the AI-native employee travel platform of the Tabhi group, built on the supply,
            payments and engineering the group already runs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
