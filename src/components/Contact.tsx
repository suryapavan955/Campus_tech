import { assets } from '../data/assets';
import { Artwork } from './Artwork';
import { Button } from './Button';
import { TextAnimate } from './ui/text-animate';

interface ContactProps { onContact: () => void }
export function Contact({ onContact }: ContactProps) {
  return (
    <section id="contact" className="contact-section page-container" aria-labelledby="contact-title">
      <div>
        <h2 id="contact-title">
          <TextAnimate as="span" by="word" animation="blurInUp" once>
            {"Ready to give your "}
          </TextAnimate>
          <TextAnimate as="span" by="word" animation="blurInUp" className="text-brand-orange" delay={0.2} once>
            {"institution an upgrade?"}
          </TextAnimate>
        </h2>
        <Button onClick={onContact}>Contact Us</Button>
      </div>
      <Artwork asset={assets.campus} className="campus-photo" />
    </section>
  );
}
