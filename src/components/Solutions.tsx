import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Solution } from '../types';
import { Artwork } from './Artwork';
import { Button } from './Button';
import { TextAnimate } from './ui/text-animate';

interface SolutionsProps { items: readonly Solution[]; onSelect: (id: string) => void }

export function Solutions({ items, onSelect }: SolutionsProps) {
  const track = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const scroll = (direction: number) => {
    const element = track.current;
    if (element) {
      const firstCard = element.querySelector<HTMLElement>('.solution-card');
      const step = (firstCard?.offsetWidth || 340) + 32;
      if (direction < 0 && element.scrollLeft <= step) {
        element.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        element.scrollBy({ left: direction * step, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="solutions" className="solutions-section" aria-labelledby="solutions-title">
      <div className="page-container solutions-header">
        <h2 id="solutions-title">
          <TextAnimate as="span" by="word" animation="blurInUp" once>
            {"Learn more about "}
          </TextAnimate>
          <TextAnimate as="span" by="word" animation="blurInUp" className="text-brand-orange" delay={0.2} once>
            {"what we solve"}
          </TextAnimate>
        </h2>
      </div>

      <div
        ref={track}
        className="solutions-track"
        tabIndex={0}
        role="region"
        aria-label="Solution cards; scroll for more"
        onScroll={() => {
          const element = track.current;
          if (element) {
            const maxScroll = element.scrollWidth - element.clientWidth;
            setProgress(maxScroll > 0 ? (element.scrollLeft / maxScroll) * 100 : 0);
          }
        }}
      >
        {items.map((item, index) => (
          <article className="solution-card" key={item.id}>
            <Artwork asset={item.icon} className="solution-icon" />
            <TextAnimate as="h3" by="word" animation="slideUp" delay={0.1 + index * 0.08} once>
              {item.title}
            </TextAnimate>
            <TextAnimate as="p" by="word" animation="fadeIn" delay={0.2 + index * 0.08} once>
              {item.description}
            </TextAnimate>
            <Button
              variant="outline"
              onClick={() => onSelect(item.id)}
              aria-label={`Learn more about ${item.title}`}
            >
              Learn More
            </Button>
          </article>
        ))}
      </div>

      <div className="solutions-controls page-container">
        <input
          className="solutions-progress"
          type="range"
          min={0}
          max={100}
          step={1}
          value={progress}
          aria-label="Scroll solutions"
          onChange={(event) => {
            const element = track.current;
            if (element) {
              const val = Number(event.target.value);
              const maxScroll = element.scrollWidth - element.clientWidth;
              if (val === 0) {
                element.scrollTo({ left: 0, behavior: 'auto' });
              } else {
                element.scrollLeft = (val / 100) * maxScroll;
              }
            }
          }}
        />
        <div className="flex items-center gap-3">
          <button
            className="carousel-arrow"
            type="button"
            aria-label="Previous solutions"
            onClick={() => scroll(-1)}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            className="carousel-arrow"
            type="button"
            aria-label="Next solutions"
            onClick={() => scroll(1)}
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
