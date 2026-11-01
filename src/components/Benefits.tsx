import type { Benefit } from '../types';
import { Artwork } from './Artwork';
import { Button } from './Button';

interface BenefitsProps { items: readonly Benefit[]; onAbout: () => void }
export function Benefits({ items, onAbout }: BenefitsProps) {
  return (
    <section id="about" className="benefits-section" aria-labelledby="benefits-title">
      <div className="orange-circle" aria-hidden="true" /><div className="green-circle" aria-hidden="true" />
      <div className="page-container benefits-grid">
        <div><h2 id="benefits-title">Why your educational <span className="text-brand-orange">institution needs Campus Tech</span></h2><Button className="mt-7" onClick={onAbout}>About Us</Button></div>
        <ul className="benefits-list">{items.map((item) => <li key={item.id}><Artwork asset={item.icon} /><p>{item.label}</p></li>)}</ul>
      </div>
    </section>
  );
}
