import { useRef, useState } from 'react';
import type { Solution } from '../types';
import { Artwork } from './Artwork';
import { Button } from './Button';

interface SolutionsProps { items: readonly Solution[]; onSelect: (id: string) => void }
export function Solutions({ items, onSelect }: SolutionsProps) {
  const track = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  return (
    <section id="solutions" className="solutions-section" aria-labelledby="solutions-title">
      <div className="page-container"><h2 id="solutions-title">Learn more about <span className="text-brand-orange">what we solve</span></h2></div>
      <div ref={track} className="solutions-track" tabIndex={0} role="region" aria-label="Solution cards; scroll for more" onScroll={() => {
        const element = track.current;
        if (element) setProgress(element.scrollLeft / Math.max(1, element.scrollWidth - element.clientWidth) * 100);
      }}>
        {items.map((item) => <article className="solution-card" key={item.id}>
          <Artwork asset={item.icon} className="solution-icon" />
          <h3>{item.title}</h3><p>{item.description}</p>
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
