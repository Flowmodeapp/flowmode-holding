'use client'; // This directive marks the component as a Client Component

import React from 'react';
import Script from 'next/script'

// Main App component for the holding page
const App = () => {
  return (
    // Main container for the entire page, covering the full screen
    <main className="relative w-screen h-screen overflow-hidden bg-black text-white font-inter">
      {/* Tailwind CSS CDN for styling */}
      <Script src="https://cdn.tailwindcss.com" strategy="afterInteractive" />
      {/* Google Fonts - Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />

      {/* Remove custom styles for the glow effect on the central orb as it's no longer present */}
      {/* If bg_spaceorbs.jpg has its own glow, no additional styles are needed here */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          const style = document.createElement('style');
          style.innerHTML = \`
            body {
              font-family: 'Inter', sans-serif;
            }
            /* .glow-orb styles removed as the central orb is gone */
          \`;
          document.head.appendChild(style);
        })();
      `}} />

      {/* Background image: Updated to bg_spaceorbs.jpg */}
      <img
        src="/images/bg_spaceorbs.png" // Updated background image path
        alt="Starry Orbs Background"
        className="absolute inset-0 w-full h-full object-fill z-0" 
      />

      {/* Logo and text at the top center */}
      {/* Adjusted gap from gap-3 to gap-1 to bring the logo orb and text closer */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-1 z-10">
        {/* Logo icon: Using the main orb image, reduced in size */}
        <img
          src="/images/orb_main.png" // Using the main orb image for the logo
          alt="Flowmode Icon"
          width={60} // Logo size
          height={60} // Logo size
          className="rounded-full"
        />
        {/* Flowmode text with responsive sizing */}
        <span className="text-2xl md:text-3xl font-bold tracking-tight">Flowmode</span>
      </div>

      {/* Central Orb with Glow effect: This section has been removed as requested */}
      {/*
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 glow-orb w-[500px] h-[500px]">
        <img
          src="/images/orb_main.png"
          alt="Flow Orb"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      */}

      {/* Slogan at the bottom center */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-10 px-4"> {/* Adjusted bottom position */}
        <p className="text-xl md:text-2xl leading-relaxed text-white">
          Escape the noise.<br />
          <span className="font-bold">Enter Flowmode.</span>
        </p>
      </div>
    </main>
  );
};

export default App;
