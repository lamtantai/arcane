'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [mouseX, setMouseX] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMouseX({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [mouseX]);

  return (
    <footer className='h-screen p-4 bg-tertiary'>
      <div className='bg-red-500 overflow-hidden'>
        <h1
          className='text-[35.5vw] lg:text-[37vw] font-zentry text-center leading-[0.8]'
          style={{
            transform: `matrix3d(
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1
          )`,
          }}
        >
          arca<span style={{ fontFeatureSettings: "'ss01' on" }}>n</span>e
        </h1>
      </div>
    </footer>
  );
}

`matrix3d(
0.919051, -0.205268, 0, 0.00216395,
0.245555, 0.377324, 0, -0.000853363,
0, 0, 1, 0,
155.882, -66.7446, 0, 1)`;
