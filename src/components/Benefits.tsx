import type { Benefit } from '../types';
import { Artwork } from './Artwork';
import { Button } from './Button';
import { TextAnimate } from './ui/text-animate';

interface BenefitsProps { items: readonly Benefit[]; onAbout: () => void }
export function Benefits({ items, onAbout }: BenefitsProps) {
  return (
    <section id="about" className="benefits-section" aria-labelledby="benefits-title">
      <div className="orange-circle" aria-hidden="true" /><div className="green-circle" aria-hidden="true" />
      <div className="page-container benefits-grid">
        <div>
          <h2 id="benefits-title">
            <TextAnimate as="span" by="word" animation="blurInUp" once>
              {"Why your educational "}
            </TextAnimate>
            <TextAnimate as="span" by="word" animation="blurInUp" className="text-brand-orange" delay={0.2} once>
              {"institution needs Campus Tech"}
            </TextAnimate>
          </h2>
          <Button className="mt-7" onClick={onAbout}>About Us</Button>
        </div>
        <ul className="benefits-list">
          {items.map((item, index) => (
            <li key={item.id}>
              <Artwork asset={item.icon} />
              <TextAnimate as="p" by="word" animation="slideUp" delay={0.1 + index * 0.08} once>
                {item.label}
              </TextAnimate>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
