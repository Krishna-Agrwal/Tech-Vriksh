'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export function InstagramEmbed({ url, caption }: { url: string; caption?: string }) {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }

    if (document.getElementById('instagram-embed-script')) return;

    const script = document.createElement('script');
    script.id = 'instagram-embed-script';
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      aria-label={caption}
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: '12px',
        margin: '0 auto',
        maxWidth: '540px',
        minWidth: '326px',
        width: '99.375%'
      }}
    />
  );
}
