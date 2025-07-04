'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

const App = () => {
  // Set dynamic viewport height for mobile
  useEffect(() => {
    const setHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setHeight();
    window.addEventListener('resize', setHeight);
    return () => window.removeEventListener('resize', setHeight);
  }, []);

  return (
    <main
      className="relative w-screen overflow-hidden bg-black text-white font-inter"
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      {/* Tailwind CDN */}
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

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg_spaceorbs.png"
          alt="Starry Orbs Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Logo Top Center */}
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

      {/* Slogan – slightly lower & larger on mobile */}
      <div className="absolute bottom-20 sm:bottom-24 md:bottom-16 right-6 z-10 max-w-sm text-right sm:right-8 md:right-12">
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white drop-shadow-lg">
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
