export interface CropAsset {
  src: string;
  sourceWidth: number;
  sourceHeight: number;
  x: number;
  y: number;
  width: number;
  height: number;
  alt: string;
}

export interface HeroSlide {
  id: string;
  prefix: string;
  emphasis: string;
  suffix: string;
  description: string;
  buttonLabel: string;
  solutionId?: string;
  artwork: CropAsset;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: CropAsset;
}

export interface Benefit { id: string; label: string; icon: CropAsset }
export interface Statistic { value: string; label: string; color: 'green' | 'yellow' }
export interface NavigationLink { label: string; href: string }
export interface ContactConfig { email: string; phone: string; phoneHref: string; loginUrl?: string }
export type EnquiryKind = 'demo' | 'contact' | 'login' | 'solution';
export interface Enquiry { kind: EnquiryKind; title: string; description?: string }
