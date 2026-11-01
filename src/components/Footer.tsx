import { assets } from '../data/assets';
import type { ContactConfig } from '../types';
import { Artwork } from './Artwork';

interface FooterProps { contact: ContactConfig }
export function Footer({ contact }: FooterProps) {
  return (
    <footer className="site-footer"><div className="page-container">
      <a href="#home" className="footer-brand" aria-label="Campus Tech home"><Artwork asset={assets.footerLogo} /></a>
      <div className="footer-columns">
        <nav aria-label="Footer navigation"><a href="#institutions">Resources</a><a href="#solutions">Solutions</a><a href="#about">About Us</a></nav>
        <div><h2>Contact Us</h2><address><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={`tel:${contact.phoneHref}`}>{contact.phone}</a></address></div>
        <div><h2>Chat with us</h2><div className="social-icons">{assets.social.map((asset) => <Artwork key={asset.alt} asset={asset} />)}</div></div>
      </div>
      <div className="footer-bottom"><p>© 2022, Kahan Technologies Pvt. Ltd.</p><p>Designed by <strong>Grapdes</strong></p></div>
    </div></footer>
  );
}
