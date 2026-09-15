import { Reveal } from '@/components/motion/reveal';
import { ContactForm } from '@/components/forms/contact-form';

export function DemoFormPanel() {
  return (
    <Reveal delay={120}>
      <ContactForm />
    </Reveal>
  );
}
