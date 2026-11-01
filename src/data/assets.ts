import type { CropAsset } from '../types';

// CSS image windows preserve the supplied artwork without redrawing it.
// Coordinates refer to the reference's displayed coordinate system, not device pixels.
export function referenceCrop(x: number, y: number, width: number, height: number, alt = ''): CropAsset {
  return { src: `${import.meta.env.BASE_URL}assets/reference.png`, sourceWidth: 676, sourceHeight: 2048, x, y, width, height, alt };
}
function heroCrop(x: number, y: number, width: number, height: number, alt: string): CropAsset {
  return { src: `${import.meta.env.BASE_URL}assets/hero-slides.png`, sourceWidth: 2048, sourceHeight: 338, x, y, width, height, alt };
}

export const assets = {
  logo: referenceCrop(34, 19, 141, 30, 'Campus Tech'),
  footerLogo: referenceCrop(41, 1870, 154, 33, 'Campus Tech'),
  hero: [
    heroCrop(251, 70, 222, 173, 'Students and educators working around a digital campus platform'),
    heroCrop(749, 66, 224, 185, 'AI-powered campus dashboard with a friendly robot'),
    heroCrop(1278, 78, 228, 158, 'Accreditation approval dashboard and checklist'),
    heroCrop(1806, 73, 207, 189, 'Live reports and comparative analytics dashboard'),
  ],
  campus: referenceCrop(270.5, 1537.5, 386.5, 247.5, 'Student holding books outside a university building'),
  institutions: referenceCrop(0, 1343, 676, 57, 'Jadavpur University, Bangalore University, NUJS and Bennett University'),
  social: [
    referenceCrop(313, 1958, 18, 19, 'Facebook'),
    referenceCrop(337, 1958, 18, 19, 'Instagram'),
    referenceCrop(360, 1958, 18, 19, 'Twitter'),
    referenceCrop(383, 1958, 18, 19, 'LinkedIn'),
  ],
};
