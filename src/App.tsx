import { useCallback, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { Benefits } from './components/Benefits';
import { Trust } from './components/Trust';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EnquiryDialog } from './components/EnquiryDialog';
import { benefits, contact, heroSlides, solutions, statistics } from './data/content';
import type { Enquiry } from './types';

export default function App() {
  const [enquiry, setEnquiry] = useState<Enquiry | null>(null);
  const close = useCallback(() => setEnquiry(null), []);
  const showContact = () => setEnquiry({ kind: 'contact', title: 'Contact Us' });
  const showSolution = (id: string) => {
    const solution = solutions.find((item) => item.id === id);
    if (solution) setEnquiry({ kind: 'solution', title: solution.title, description: solution.description });
  };
  return (
    <div id="home" className="site-shell">
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar solutions={solutions} onSolution={showSolution} onContact={showContact} onLogin={() => {
        if (contact.loginUrl) window.location.assign(contact.loginUrl);
        else setEnquiry({ kind: 'login', title: 'Institution Login' });
      }} />
      <main id="main" tabIndex={-1}>
        <Hero slides={heroSlides} onDemo={() => setEnquiry({ kind: 'demo', title: 'Get a Demo' })} onSolution={showSolution} />
        <Solutions items={solutions} onSelect={showSolution} />
        <Benefits items={benefits} onAbout={() => setEnquiry({ kind: 'contact', title: 'About Campus Tech', description: heroSlides[0].description })} />
        <Trust items={statistics} />
        <Contact onContact={showContact} />
      </main>
      <Footer contact={contact} />
      <EnquiryDialog enquiry={enquiry} contact={contact} onClose={close} />
    </div>
  );
}
