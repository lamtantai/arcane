'use client';

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';

import { useRef } from 'react';
import { scaleAnimate } from '../lib/animate';

export default function HeroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const percent1 = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const percent2 = useTransform(scrollYProgress, [0, 1], ['100%', '80%']);
  const percent3 = useTransform(scrollYProgress, [0, 1], ['100%', '70%']);
  const percent4 = useTransform(scrollYProgress, [0, 1], ['100%', '90%']);

  const clipPath = useMotionTemplate`polygon(${percent1} 0%, ${percent2} 0%, 100% ${percent3}, 0% ${percent4})`;

  return (
    <section className='relative'>
      {/* LAYER 1 */}
      <motion.div
        className='relative h-screen z-10'
        ref={ref}
        style={{
          clipPath,
        }}
      >
        <BackgroundVideo />

        <HeroLayer className='text-primary' />
      </motion.div>

      {/* LAYER 2 */}
      <HeroLayer className='text-black' />
    </section>
  );
}

function BackgroundVideo() {
  return (
    <video autoPlay loop muted className='w-full h-full object-cover'>
      <source src='https://i.imgur.com/aiC7e8P.mp4' type='video/mp4' />
    </video>
  );
}

function HeroLayer({ className }) {
  return (
    <div className='absolute top-0 left-0 flex flex-col justify-between w-full h-full pt-16 pb-4 px-[3vw] uppercase'>
      <motion.div
        className={className}
        initial='initial'
        animate='enter'
        variants={scaleAnimate}
      >
        <p className='text-[clamp(5.25rem,1.7778rem+14.8148vw,16rem)]/[0.8] font-zentry'>
          arcane
        </p>

        <p className='text-[clamp(1rem,0.677rem+1.3781vw,2rem)] font-bold flex items-center gap-2 '>
          league <span className='text-xs '>of</span> legends
        </p>
      </motion.div>

      <motion.div
        className={`${className} text-end`}
        initial='initial'
        animate='enter'
        variants={scaleAnimate}
      >
        <p className='text-[clamp(5.25rem,1.7778rem+14.8148vw,16rem)]/[0.8] font-zentry'>
          season 2
        </p>

        <p className='text-[clamp(1rem,0.677rem+1.3781vw,2rem)] font-bold'>
          coming november
        </p>
      </motion.div>
    </div>
  );
}
