import { assets } from '../data/assets';
import type { Statistic } from '../types';
import { Artwork } from './Artwork';
import { NumberTicker } from './ui/number-ticker';
import { TextAnimate } from './ui/text-animate';

interface TrustProps { items: readonly Statistic[] }

function parseStatValue(val: string) {
  const match = val.match(/^([^0-9]*)([\d,]+)(.*)$/);
  if (!match) return null;
  const num = parseInt(match[2].replace(/,/g, ''), 10);
  if (isNaN(num)) return null;
  return { prefix: match[1], num, suffix: match[3] };
}

export function Trust({ items }: TrustProps) {
  return (
    <section id="institutions" className="trust-section" aria-labelledby="trust-title">
      <div className="page-container">
        <h2 id="trust-title">
          <TextAnimate as="span" by="word" animation="blurInUp" once>
            {"The best in the"}
          </TextAnimate>
          <br />
          <TextAnimate as="span" by="word" animation="blurInUp" delay={0.15} once>
            {"country "}
          </TextAnimate>
          <TextAnimate as="span" by="word" animation="blurInUp" className="text-brand-orange" delay={0.25} once>
            {"trust us"}
          </TextAnimate>
        </h2>
        <dl className="stats-grid">
          {items.map((item, index) => {
            const parsed = parseStatValue(item.value);
            return (
              <div key={item.label}>
                <dt>
                  <TextAnimate as="span" by="word" animation="slideUp" delay={0.2 + index * 0.1} once>
                    {item.label}
                  </TextAnimate>
                </dt>
                <dd className={item.color === 'yellow' ? 'text-brand-yellow' : 'text-brand-green'}>
                  {parsed ? (
                    <>
                      {parsed.prefix}
                      <NumberTicker value={parsed.num} />
                      {parsed.suffix}
                    </>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            );
          })}
        </dl>
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
