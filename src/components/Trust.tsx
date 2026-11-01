import { assets } from '../data/assets';
import type { Statistic } from '../types';
import { Artwork } from './Artwork';

interface TrustProps { items: readonly Statistic[] }
export function Trust({ items }: TrustProps) {
  return (
    <section id="institutions" className="trust-section" aria-labelledby="trust-title">
      <div className="page-container">
        <h2 id="trust-title">The best in the<br />country <span className="text-brand-orange">trust us</span></h2>
        <dl className="stats-grid">{items.map((item) => <div key={item.label}><dt>{item.label}</dt><dd className={item.color === 'yellow' ? 'text-brand-yellow' : 'text-brand-green'}>{item.value}</dd></div>)}</dl>
      </div>
     <div className="institutions-strip">
    <div className="institutions-track">
      <Artwork asset={assets.institutions} />

      <div aria-hidden="true" className="institutions-copy">
        <Artwork asset={assets.institutions} />
      </div>
    </div>
  </div>
      <div className="trust-rule" aria-hidden="true" />
    </section>
  );
}
