import { useRef, useState } from 'react';
import type { Solution } from '../types';
import { Artwork } from './Artwork';
import { Button } from './Button';
import { TextAnimate } from './ui/text-animate';

interface SolutionsProps { items: readonly Solution[]; onSelect: (id: string) => void }
export function Solutions({ items, onSelect }: SolutionsProps) {
  const track = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  return (
    <section id="solutions" className="solutions-section" aria-labelledby="solutions-title">
      <div className="page-container">
        <h2 id="solutions-title">
          <TextAnimate as="span" by="word" animation="blurInUp" once>
            {"Learn more about "}
          </TextAnimate>
          <TextAnimate as="span" by="word" animation="blurInUp" className="text-brand-orange" delay={0.2} once>
            {"what we solve"}
          </TextAnimate>
        </h2>
      </div>
      <div ref={track} className="solutions-track" tabIndex={0} role="region" aria-label="Solution cards; scroll for more" onScroll={() => {
        const element = track.current;
        if (element) setProgress(element.scrollLeft / Math.max(1, element.scrollWidth - element.clientWidth) * 100);
      }}>
        {items.map((item, index) => <article className="solution-card" key={item.id}>
          <Artwork asset={item.icon} className="solution-icon" />
          <TextAnimate as="h3" by="word" animation="slideUp" delay={0.1 + index * 0.08} once>
            {item.title}
          </TextAnimate>
          <TextAnimate as="p" by="word" animation="fadeIn" delay={0.2 + index * 0.08} once>
            {item.description}
          </TextAnimate>
          <Button variant="outline" onClick={() => onSelect(item.id)} aria-label={`Learn more about ${item.title}`}>Learn More</Button>
        </article>)} 
      </div>
      <input className="solutions-progress" type="range" min={0} max={100} step={1} value={progress} aria-label="Scroll solutions" onChange={(event) => {
        const element = track.current;
        if (element) element.scrollLeft = Number(event.target.value) / 100 * (element.scrollWidth - element.clientWidth);
      }} />
    </section>
  );
}
