import { assets } from '../data/assets';
import { Artwork } from './Artwork';
import { Button } from './Button';

interface ContactProps { onContact: () => void }
export function Contact({ onContact }: ContactProps) {
  return (
    <section id="contact" className="contact-section page-container" aria-labelledby="contact-title">
      <div><h2 id="contact-title">Ready to give your <span className="text-brand-orange">institution an upgrade?</span></h2><Button onClick={onContact}>Contact Us</Button></div>
      <Artwork asset={assets.campus} className="campus-photo" />
    </section>
  );
}
