'use client';

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef, useState } from 'react';
import BackgroundVideo from '../ui/background-video';
import Hero from '../ui/hero-layer';
import HeroLayer from '../ui/hero-layer';

export default function HeroSection() {
  const ref = useRef(null);
  const [percent, setPercent] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
  });

  const path = useTransform(smoothScrollYProgress, [0, 1], [-1, 25]);

  useMotionValueEvent(smoothScrollYProgress, 'change', (latest) => {
    setPercent(path.current);
  });

  const clipPath = `polygon(
          ${percent * 1.5}% 0%, 
          ${100 - percent * 2}% 0%,
          ${100 - percent}%  ${100 - percent / 2}%, 
          0% ${100 - percent}%
          )`;

  return (
    <section className='relative'>
      {/* LAYER 1 */}
      <div
        className='relative h-screen z-10'
        ref={ref}
        style={{
          clipPath,
        }}
      >
        {/* BACKGROUND VIDEO */}
        <BackgroundVideo />
        {/* HERO SECTION */}
        <HeroLayer />
      </div>

      {/* LAYER 2 */}
      <HeroLayer mixBlend />
    </section>
  );
}
