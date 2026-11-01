import { useEffect, useId, useRef } from 'react';
import type { FormEvent } from 'react';
import { X } from 'lucide-react';
import type { ContactConfig, Enquiry } from '../types';
import { Button } from './Button';

interface EnquiryDialogProps { enquiry: Enquiry | null; contact: ContactConfig; onClose: () => void }
export function EnquiryDialog({ enquiry, contact, onClose }: EnquiryDialogProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const id = useId();
  useEffect(() => {
    if (!enquiry) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.showModal();
    return () => { dialog.current?.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, [enquiry]);
  if (!enquiry) return null;
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const body = `Name: ${values.get('name')}\nEmail: ${values.get('email')}\nInstitution: ${values.get('institution')}\n\n${values.get('message')}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(enquiry.title)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <dialog ref={dialog} aria-labelledby={`${id}-title`} onCancel={onClose} onClose={onClose} className="enquiry-dialog" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="dialog-content">
        <button type="button" className="dialog-close" aria-label="Close enquiry" onClick={onClose}><X /></button>
        <h2 id={`${id}-title`}>{enquiry.title}</h2>
        {enquiry.description && <p className="mt-4 text-sm leading-relaxed text-neutral-600">{enquiry.description}</p>}
        {enquiry.kind === 'login' ? <div className="mt-6 space-y-4"><p>Please contact your institution or Campus Tech support for your institution’s login portal.</p><a className="button button-primary" href={`mailto:${contact.email}`}>Contact support</a></div> :
          <form onSubmit={submit} className="mt-6 grid gap-4">
            <label htmlFor={`${id}-name`}>Name<input id={`${id}-name`} name="name" autoComplete="name" required maxLength={120} /></label>
            <label htmlFor={`${id}-email`}>Work email<input id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={254} /></label>
            <label htmlFor={`${id}-institution`}>Institution<input id={`${id}-institution`} name="institution" autoComplete="organization" required maxLength={200} /></label>
            <label htmlFor={`${id}-message`}>Message<textarea id={`${id}-message`} name="message" rows={3} maxLength={2000} /></label>
            <p className="text-xs text-neutral-500">Opens your email app with your enquiry. No information is submitted until you send the email.</p>
            <Button type="submit" className="justify-self-start">Continue to email</Button>
          </form>}
      </div>
    </dialog>
  );
}
