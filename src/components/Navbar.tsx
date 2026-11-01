import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { assets } from '../data/assets';
import { Artwork } from './Artwork';
import { Button } from './Button';
import type { NavigationLink, Solution } from '../types';

interface NavbarProps { solutions: readonly Solution[]; onSolution: (id: string) => void; onLogin: () => void; onContact: () => void }
interface DropdownProps { label: string; items: readonly NavigationLink[]; onNavigate: () => void }

function Dropdown({ label, items, onNavigate }: DropdownProps) {
  return (
    <details className="nav-dropdown group">
      <summary className="flex cursor-pointer list-none items-center gap-3 py-3">
        {label}<ChevronDown size={14} className="text-neutral-500 transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      <div className="dropdown-panel">
        {items.map((item) => <a key={item.href} href={item.href} onClick={(event) => {
          event.currentTarget.closest('details')?.removeAttribute('open'); onNavigate();
        }}>{item.label}</a>)}
      </div>
    </details>
  );
}

export function Navbar({ solutions, onSolution, onLogin, onContact }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) {
        header.current?.querySelectorAll('details[open]').forEach((node) => node.removeAttribute('open'));
        setMobileOpen(false);
      }
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, []);
  return (
    <header ref={header} className="site-header page-container" onKeyDown={(event) => {
      if (event.key === 'Escape') {
        const summary = (event.target as HTMLElement).closest('details')?.querySelector('summary');
        header.current?.querySelectorAll('details[open]').forEach((node) => node.removeAttribute('open'));
        if (mobileOpen) { setMobileOpen(false); toggle.current?.focus(); }
        else summary?.focus();
      }
    }}>
      <a href="#home" aria-label="Campus Tech home" className="brand"><Artwork asset={assets.logo} eager /></a>
      <button ref={toggle} type="button" className="mobile-toggle lg:hidden" aria-expanded={mobileOpen} aria-controls="main-nav" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X /> : <Menu />}
      </button>
      <nav id="main-nav" aria-label="Main navigation" className={`main-nav ${mobileOpen ? 'is-open' : ''}`}>
        <details className="nav-dropdown group">
          <summary className="flex cursor-pointer list-none items-center gap-3 py-3">Solutions<ChevronDown size={14} className="text-neutral-500 group-open:rotate-180" aria-hidden="true" /></summary>
          <div className="dropdown-panel">{solutions.map((item) => <button key={item.id} type="button" onClick={(event) => {
            event.currentTarget.closest('details')?.removeAttribute('open'); setMobileOpen(false); onSolution(item.id);
          }}>{item.title}</button>)}</div>
        </details>
        <Dropdown label="Resources" items={[{ label: 'Explore our solutions', href: '#solutions' }, { label: 'Institutions that trust us', href: '#institutions' }]} onNavigate={() => setMobileOpen(false)} />
        <a href="#about" onClick={() => setMobileOpen(false)}>About Us</a>
        <button type="button" onClick={() => { setMobileOpen(false); onContact(); }}>Contact Us</button>
        <Button variant="outline" onClick={() => { setMobileOpen(false); onLogin(); }}>Login</Button>
      </nav>
    </header>
  );
}
