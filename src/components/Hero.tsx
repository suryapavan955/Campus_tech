import { useId, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { HeroSlide } from '../types';
import { Artwork } from './Artwork';
import { Button } from './Button';

interface HeroProps { slides: readonly HeroSlide[]; onDemo: () => void; onSolution: (id: string) => void }
export function Hero({ slides, onDemo, onSolution }: HeroProps) {
  const [index, setIndex] = useState(0);
  const slideId = useId();
  const active = index % Math.max(slides.length, 1);
  const slide = slides[active];
  if (!slide) return null;
  const move = (direction: number) => setIndex((value) => (value + direction + slides.length) % slides.length);
  return (
    <section className="hero-section" aria-label="Campus Tech highlights" aria-roledescription="carousel">
      <div className="page-container hero-content">
        <div className="hero-grid" id={slideId} role="group" aria-roledescription="slide" aria-label={`${active + 1} of ${slides.length}`}>
          <div className="hero-copy" aria-live="polite" aria-atomic="true">
            <h1>{slide.prefix}<span className="text-brand-orange">{slide.emphasis}</span>{slide.suffix}</h1>
            <p>{slide.description}</p>
            <Button onClick={() => slide.solutionId ? onSolution(slide.solutionId) : onDemo()}>{slide.buttonLabel}</Button>
          </div>
          <Artwork asset={slide.artwork} className="hero-art" eager />
        </div>
        <div className="hero-controls">
          <div className="flex" aria-label="Choose highlight">
            {slides.map((item, itemIndex) => <button key={item.id} type="button" className="slide-dot" aria-label={`Show highlight ${itemIndex + 1}`} aria-current={active === itemIndex ? 'true' : undefined} aria-controls={slideId} onClick={() => setIndex(itemIndex)}><span className={active === itemIndex ? 'bg-brand-orange' : 'bg-neutral-300'} /></button>)}
          </div>
          <div className="flex gap-4">
            <button className="carousel-arrow" type="button" aria-label="Previous highlight" onClick={() => move(-1)}><ChevronLeft aria-hidden="true" /></button>
            <button className="carousel-arrow" type="button" aria-label="Next highlight" onClick={() => move(1)}><ChevronRight aria-hidden="true" /></button>
          </div>
        </div>
      </div>
      <div className="hero-rule" aria-hidden="true" />
    </section>
  );
}
