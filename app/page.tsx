'use client';

import React from 'react';
import Script from 'next/script';

const App = () => {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black text-white font-inter">

      {/* Tailwind CSS CDN */}
      <Script src="https://cdn.tailwindcss.com" strategy="afterInteractive" />

      {/* Google Fonts - Inter */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* Font injection */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const style = document.createElement('style');
              style.innerHTML = \`
                body {
                  font-family: 'Inter', sans-serif;
                }
              \`;
              document.head.appendChild(style);
            })();
          `,
        }}
      />

      {/* Responsive Background Image (non-stretched) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg_spaceorbs.png"
          alt="Starry Orbs Background"
          className="w-full h-full object-contain sm:object-cover"
        />
      </div>

      {/* Logo top center */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-1 z-10">
        <img
          src="/images/orb_main.png"
          alt="Flowmode Icon"
          width={60}
          height={60}
          className="rounded-full"
        />
        <span className="text-2xl md:text-3xl font-bold tracking-tight">Flowmode</span>
      </div>

      {/* Slogan bottom center */}
      <div className="absolute bottom-8 right-6 md:right-12 z-10 max-w-sm text-right">
  <p className="text-lg md:text-2xl leading-relaxed text-white drop-shadow-lg">
    Escape the noise.<br />
    <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      Enter Flowmode.
    </span><br />
    Your guide is near.
  </p>
</div>

    </main>
  );
};

export default App;
