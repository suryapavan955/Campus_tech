import { assets } from '../data/assets';
import type { ContactConfig } from '../types';
import { Artwork } from './Artwork';
import { TextAnimate } from './ui/text-animate';

interface FooterProps { contact: ContactConfig }
export function Footer({ contact }: FooterProps) {
  return (
    <footer className="site-footer"><div className="page-container">
      <a href="#home" className="footer-brand" aria-label="Campus Tech home"><Artwork asset={assets.footerLogo} /></a>
      <div className="footer-columns">
        <nav aria-label="Footer navigation"><a href="#institutions">Resources</a><a href="#solutions">Solutions</a><a href="#about">About Us</a></nav>
        <div>
          <TextAnimate as="h2" by="word" animation="fadeIn" once>
            Contact Us
          </TextAnimate>
          <address>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
          </address>
        </div>
        <div>
          <TextAnimate as="h2" by="word" animation="fadeIn" once>
            Chat with us
          </TextAnimate>
          <div className="social-icons">
            {assets.social.map((asset) => <Artwork key={asset.alt} asset={asset} />)}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <TextAnimate as="p" by="word" animation="fadeIn" once>
          © 2022, Kahan Technologies Pvt. Ltd.
        </TextAnimate>
        <p>Designed by <strong>Grapdes</strong></p>
      </div>
    </div></footer>
  );
}
