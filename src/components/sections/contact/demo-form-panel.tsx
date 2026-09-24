import { Reveal } from '@/components/motion/reveal';
import { ContactForm } from '@/components/forms/contact-form';

export function DemoFormPanel() {
  return (
    <Reveal visibleOnLoad delay={120}>
      <ContactForm />
    </Reveal>
  );
}
