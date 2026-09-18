import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowRight, Check, CheckCheck, Hotel, MessageCircle, Plane, ReceiptText, RefreshCw, ShieldCheck, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './how-it-works.css';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { name: 'Plan', icon: MessageCircle, title: 'A few words. A complete itinerary.', description: 'Tell Miraee where you need to be. Your calendar, preferences and travel policy take care of the details.', short: 'Just say where. We’ll take it from here.', message: 'Tokyo Tuesday for the Aoyama review, back Thursday night.', reply: 'Your Tokyo trip is ready. Built around your meeting, and already within policy.', status: 'Itinerary ready' },
  { name: 'Book', icon: Plane, title: 'The right trip. The better rate.', description: 'Flights, hotels and cars from Mondee One wholesale inventory. Your preferred options, together in one booking.', short: 'Your preferences. Our wholesale advantage.', message: 'Looks good. Book the flight and hotel.', reply: 'All booked. Your flight, stay and transfer are together in one itinerary.', status: 'Booking confirmed' },
  { name: 'Expense', icon: ReceiptText, title: 'Enjoy the trip. Skip the paperwork.', description: 'Receipts, reports and reconciliation handled automatically. Everything matched, without the follow-up.', short: 'Every receipt, already taken care of.', message: 'Can you take care of my Tokyo expenses?', reply: 'Already handled. Your receipts are matched and your report is ready.', status: 'Report reconciled' },
  { name: 'Change', icon: RefreshCw, title: 'Plans change. You stay a step ahead.', description: 'When a flight is disrupted, Miraee finds an alternative within policy and keeps the rest of your trip in sync.', short: 'A change of plans. Not a change of pace.', message: 'My flight is delayed. Will I still make it?', reply: 'I’ve rebooked your flight in the same cabin and moved your transfer. You’re all set.', status: 'Trip updated' },
];

function TripDetail({ active }: { active: number }) {
  if (active === 0) return <>
    <div className="journey-route"><div><small>Destination</small><strong>Tokyo<span>Japan</span></strong></div><Plane size={28} strokeWidth={1.3} /><div className="journey-route-end"><small>Your schedule</small><strong>Tue — Thu<span>Aoyama review</span></strong></div></div>
    <div className="journey-checks">{['Calendar checked', 'Grade A policy', 'Visa valid 14 mo'].map(text => <span key={text}><Check size={13} />{text}</span>)}</div>
  </>;
  if (active === 1) return <>
    <div className="journey-item"><span><Plane size={17} /> Return flight to Tokyo</span><Check size={16} /></div>
    <div className="journey-item"><span><Hotel size={17} /> Hotel + airport transfer</span><Check size={16} /></div>
    <div className="journey-price"><div><small>Published fare <s>$3,180</s></small><strong>$2,304 <span>wholesale rate</span></strong></div><b>Save $876</b></div>
  </>;
  if (active === 2) return <>
    {[['Taxi · Narita to Shiodome', 'GL 6410'], ['Dinner · Aoyama', 'Per diem OK'], ['Hotel folio', 'Matched']].map(([label, status]) => <div className="journey-item" key={label}><span><ReceiptText size={16} />{label}</span><em>{status}</em></div>)}
    <div className="journey-result"><CheckCheck size={18} /> Closed on landing</div>
  </>;
  return <>
    <div className="journey-flight"><span className="journey-delayed">NH 217 <small>Delayed · 2h 40m</small></span><ArrowRight size={18} /><span>NH 219 <small>14:05 · Same cabin</small></span></div>
    <div className="journey-checks"><span><Check size={13} />Within policy</span><span><Check size={13} />Transfer moved</span></div>
    <div className="journey-result"><ShieldCheck size={18} /> Traveler notified. Everything in sync.</div>
  </>;
}

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollBodyRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const body = scrollBodyRef.current;
    if (!section || !body) return;
    const media = gsap.matchMedia();
    media.add('(max-width: 760px)', () => {
      const cards = section.querySelectorAll<HTMLElement>('.journey-mobile-chapter');
      const triggers = Array.from(cards, (card, index) => ScrollTrigger.create({
        trigger: card, start: 'top 45%', end: 'bottom 45%',
        onEnter: () => setActive(index), onEnterBack: () => setActive(index),
      }));
      return () => triggers.forEach(trigger => trigger.kill());
    });
    media.add('(min-width: 761px) and (prefers-reduced-motion: no-preference)', () => {
      let frame = 0;
      let disposed = false;
      let lastWidth = 0;
      let lastHeight = 0;
      const create = () => {
        if (disposed) return;
        triggerRef.current?.kill();
        // Only pin when all of the interactive content fits below the navigation.
        const canPin = body.offsetHeight <= window.innerHeight - 104;
        const trigger = ScrollTrigger.create({
          trigger: canPin ? body : section,
          start: canPin ? 'top 88px' : 'top 25%',
          end: canPin ? () => `+=${window.innerHeight * 2.4}` : 'bottom 80%',
          pin: canPin ? body : false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: self => setActive(Math.min(3, Math.floor(self.progress * 4))),
        });
        triggerRef.current = trigger;
        setActive(Math.min(3, Math.floor(trigger.progress * 4)));
        lastWidth = window.innerWidth;
        lastHeight = window.innerHeight;
      };
      const resize = () => {
        if (lastWidth === window.innerWidth && Math.abs(lastHeight - window.innerHeight) < 100) return;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(create);
      };
      frame = requestAnimationFrame(create);
      // Font loading can change whether the content fits in the viewport.
      void document.fonts.ready.then(() => { if (!disposed) { cancelAnimationFrame(frame); frame = requestAnimationFrame(create); } });
      window.addEventListener('resize', resize);
      return () => {
        disposed = true;
        cancelAnimationFrame(frame);
        window.removeEventListener('resize', resize);
        triggerRef.current?.kill();
        triggerRef.current = null;
      };
    });
    return () => media.revert();
  }, []);

  function selectStage(index: number) {
    if (window.matchMedia('(max-width: 760px)').matches) {
      sectionRef.current?.querySelectorAll<HTMLElement>('.journey-mobile-chapter')[index]?.scrollIntoView({ block: 'start', behavior: 'instant' });
      setActive(index);
      return;
    }
    const trigger = triggerRef.current;
    if (trigger) {
      // Move to the middle of the selected stage so the next scroll continues there.
      trigger.scroll(trigger.start + (trigger.end - trigger.start) * ((index + 0.5) / 4));
      ScrollTrigger.update();
    }
    setActive(index);
  }
  function selectAndFocus(index: number) { selectStage(index); tabs.current[index]?.focus({ preventScroll: true }); }
  return <section ref={sectionRef} id="how" className="journey-section" aria-labelledby="journey-heading" style={{ '--journey-step': active } as CSSProperties}>
    <div className="journey-container">
      <header className="journey-heading"><p className="journey-eyebrow">The Miraee way</p><h2 id="journey-heading">You’re going places.<br />We’re with you all the way.</h2><p>One conversation. Every detail taken care of.</p></header>
      <div ref={scrollBodyRef} className="journey-scroll-body">
      <div className="journey-tabs" role="tablist" aria-label="Explore your journey" aria-orientation="horizontal" onKeyDown={event => {
        const offsets: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
        if (event.key in offsets) { event.preventDefault(); selectAndFocus((active + offsets[event.key] + 4) % 4); }
        if (event.key === 'Home' || event.key === 'End') { event.preventDefault(); selectAndFocus(event.key === 'Home' ? 0 : 3); }
      }}>
        <div className="journey-track" aria-hidden="true"><span /><i><Plane size={17} /></i></div>
        {STEPS.map((step, index) => <button key={step.name} ref={node => { tabs.current[index] = node; }} type="button" role="tab" id={`journey-tab-${index}`} aria-controls={`journey-panel-${index}`} aria-selected={active === index} tabIndex={active === index ? 0 : -1} className={`journey-tab ${active === index ? 'is-active' : ''}`} onClick={() => selectStage(index)}><span className="journey-stop">{index < active ? <Check size={12} /> : <span />}</span><span className="journey-tab-name">{step.name}</span><span className="journey-tab-description">{['A little inspiration', 'Everything, arranged', 'Paperwork, gone', 'Always a step ahead'][index]}</span></button>)}
      </div>
      <div className="journey-stage"><div className="journey-stories">
        {STEPS.map((step, index) => <div key={step.name} id={`journey-panel-${index}`} role="tabpanel" aria-labelledby={`journey-tab-${index}`} tabIndex={active === index ? 0 : -1} aria-hidden={active !== index} inert={active !== index} className={`journey-story ${active === index ? 'is-active' : ''}`}><span className="journey-chapter">0{index + 1} / {step.name}</span><h3>{step.title}</h3><p>{step.description}</p><div className="journey-prompt"><MessageCircle size={18} /><blockquote>“{step.message}”</blockquote></div></div>)}
        <button className="journey-next" type="button" onClick={() => selectStage((active + 1) % 4)}>{active === 3 ? 'Take the journey again' : `And then? ${STEPS[active + 1].name}`}<ArrowRight size={17} /></button>
      </div><div className="journey-passport" aria-label="Illustrative Tokyo trip preview">
        <div className="journey-ticket-top"><span><Sparkles size={16} /> Miraee</span><span>Your journey, together</span></div>
        <div className="journey-destination"><div><span>Your next chapter</span><strong>Tokyo.</strong><p>Aoyama review · Tuesday — Thursday</p></div><div className="journey-stamp" aria-hidden="true"><Plane size={23} strokeWidth={1.2} /><span>TYO</span></div></div>
        <div className="journey-ticket-seam" />
        <div className="journey-detail-stack">{STEPS.map((step, index) => <div key={step.name} className={`journey-detail ${active === index ? 'is-active' : ''}`} aria-hidden={active !== index} inert={active !== index}><div className="journey-card-label"><span><span className="journey-status-dot" />{step.status}</span><span><ShieldCheck size={13} /> In policy</span></div><TripDetail active={index} /><div className="journey-agent-reply"><Sparkles size={15} /><p>{step.reply}</p></div></div>)}</div>
        <div className="journey-ticket-bottom"><span>One agent. No loose ends.</span><span className="journey-barcode" aria-hidden="true" /></div>
      </div></div>
      </div>
      <div className="journey-mobile-chapters">
        {STEPS.map((step,index) => <article className="journey-mobile-chapter" key={step.name} aria-labelledby={`mobile-journey-${index}`}>
          <span className="journey-chapter">0{index + 1} / {step.name}</span>
          <h3 id={`mobile-journey-${index}`}>{step.title}</h3><p>{step.description}</p>
          <blockquote>“{step.message}”</blockquote>
          <div className="journey-passport"><div className="journey-ticket-top"><span><Sparkles size={16} /> Miraee</span><span>Tokyo · Tue — Thu</span></div><div className="journey-mobile-detail"><div className="journey-card-label"><span>{step.status}</span><span><ShieldCheck size={14} /> In policy</span></div><TripDetail active={index} /><div className="journey-agent-reply"><Sparkles size={16} /><p>{step.reply}</p></div></div></div>
        </article>)}
      </div>
      <footer className="journey-footer"><Sparkles size={15} /><span>Voice, chat or avatar. It remembers your preferences.</span></footer>
    </div>
  </section>;
}
