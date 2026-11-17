import type { CSSProperties } from 'react';
import type { CropAsset } from '../types';

interface ArtworkProps { asset: CropAsset; className?: string; eager?: boolean }

/** An accessible, responsive window into an unchanged source image. */
export function Artwork({ asset, className = '', eager = false }: ArtworkProps) {
  const style = { aspectRatio: `${asset.width} / ${asset.height}`, '--art-ratio': asset.width / asset.height } as CSSProperties;
  return (
    <span className={`artwork ${className}`} style={style}>
      <img
        src={asset.src} alt={asset.alt} loading="eager"
        decoding={eager ? 'auto' : 'async'} draggable={false}
        style={{
          width: `${asset.sourceWidth / asset.width * 100}%`,
          maxWidth: 'none',
          left: `${-asset.x / asset.width * 100}%`,
          top: `${-asset.y / asset.height * 100}%`,
        }}
      />
    </span>
  );
}
