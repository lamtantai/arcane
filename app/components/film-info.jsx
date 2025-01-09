'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { scaleAnimate } from '../lib/animate';

export default function FilmInfo() {
  return (
    <section className='relative my-20 flex flex-col gap-6 justify-between'>
      <div className='grid lg:grid-cols-3 items-end'>
        <div className='lg:col-start-1 lg:col-span-2 font-manuka'>
          <p className='text-3xl lg:text-5xl uppercase'>
            arcane season 2 synopsis
          </p>
          <SplitText text='watch it' />

          <motion.p
            className='text-xl lg:text-3xl font-roobert lg:max-w-[70%]'
            initial='initial'
            whileInView='enter'
            variants={scaleAnimate}
            viewport={{ once: true }}
          >
            Jinx’s attack on the Council sets the stage for a dire escalation of
            the conflict between Piltover and Zaun.
          </motion.p>
        </div>

        <motion.div
          className='w-full p-1 bg-secondary mt-10 group'
          style={{
            clipPath: 'polygon(100% 0, 100% 80%, 92% 100%, 0 100%, 0 0)',
          }}
          variants={scaleAnimate}
          initial='initial'
          whileInView='enter'
          viewport={{ once: true }}
        >
          <Link href='https://www.netflix.com/title/81435684' target='_blank'>
            <div
              className='flex flex-col items-center justify-center gap-2 p-4 bg-primary'
              style={{
                clipPath: 'polygon(100% 0, 100% 80%, 92% 100%, 0 100%, 0 0)',
              }}
            >
              <p className='text-lg text-secondary uppercase'>Only on</p>

              <Image
                src='https://i.imgur.com/YlkTwx6.png'
                width={144}
                height={56}
                alt='netflix logo'
                className='group-hover:scale-110 group-hover:opacity-80 transition-transform duration-300 w-auto h-auto'
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export const translateY = {
  initial: {
    y: '100%',
  },
  enter: {
    y: '0%',
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
  },
};

function SplitText({ text }) {
  const chars = text.split('');

  return (
    <motion.p
      className='text-[clamp(8rem,5.7273rem+11.3636vw,13rem)]/none overflow-hidden uppercase'
      variants={{ enter: { transition: { staggerChildren: 0.05 } } }}
      initial='initial'
      whileInView='enter'
      viewport={{ once: true }}
    >
      {chars.map((char, index) => (
        <motion.span key={index} variants={translateY}>
          {char == ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.p>
  );
}
