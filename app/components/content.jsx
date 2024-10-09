'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  cubicBezier,
  useSpring,
} from 'framer-motion';
import CardContainer from './characters-card-container';
import { scale3D, scaleAnimate, slideUp, splitText } from '../lib/animate';
import { useRef } from 'react';

const parent = {
  enter: { transition: { staggerChildren: 0.05 } },
};

function SplitText({ text }) {
  const chars = text.split('');
  return (
    <motion.p
      className='text-9xl md:text-[10rem] lg:text-[13rem] overflow-hidden'
      variants={parent}
      initial='initial'
      whileInView='enter'
    >
      {chars.map((char, index) => (
        <motion.span key={index} className='leading-none' variants={splitText}>
          {char == ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default function Content() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start 10%'],
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
  });

  const scale = useTransform(smoothScrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section className='relative my-20 px-[4vw]'>
      <div className='flex flex-col gap-20 w-full'>
        {/* INTRODUCE FILM CONTAINER*/}
        <div className='flex flex-col gap-6 justify-between w-full'>
          <div className='flex flex-col lg:flex-row items-end justify-between gap-3'>
            {/* SUMMARY*/}
            <div className='flex flex-col gap-2 w-full lg:max-w-[45vw]'>
              <div className='font-manuka uppercase'>
                <motion.p
                  className='text-3xl md:text-4xl'
                  variants={slideUp}
                  initial='initial'
                  whileInView='enter'
                >
                  arcane season 2 synopsis
                </motion.p>
                <SplitText text='watch it' />
              </div>
              <motion.p
                className='text-lg md:text-xl lg:text-2xl font-roobert'
                initial='initial'
                whileInView='enter'
                variants={scaleAnimate}
              >
                Jinx’s attack on the Council sets the stage for a dire
                escalation of the conflict between Piltover and Zaun.
              </motion.p>
            </div>

            {/* NETFLIX LOGO */}
            <motion.div
              className='w-full lg:max-w-[40vw] h-fit p-[2px] bg-secondary'
              style={{
                clipPath: 'polygon(100% 0, 100% 80%, 92% 100%, 0 100%, 0 0)',
              }}
              variants={scaleAnimate}
              initial='initial'
              whileInView='enter'
            >
              <div
                className='flex flex-col items-center justify-center gap-2 w-full p-4 bg-primary'
                style={{
                  clipPath: 'polygon(100% 0, 100% 80%, 92% 100%, 0 100%, 0 0)',
                }}
              >
                <p className='text-lg text-secondary uppercase'>Only on</p>
                <Link
                  href='https://www.netflix.com/title/81435684'
                  target='_blank'
                >
                  <div className='relative w-36 h-14'>
                    <Image
                      src='https://i.imgur.com/YlkTwx6.png'
                      sizes='auto'
                      fill
                      alt='netflix logo'
                    />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* FILM POSTER */}
          <motion.div
            className='relative h-[40vh] lg:h-screen w-full lg:my-10 rounded-[3vw] overflow-hidden'
            style={{ scale }}
            ref={container}
          >
            <Image
              src='https://i.imgur.com/mw9PMSN.png'
              alt="'Film's poster"
              fill
              sizes='auto'
            />
          </motion.div>
        </div>

        {/* CHARACTER CARD CONTAINER */}
        <div className='flex flex-col gap-2'>
          <motion.h3
            className='text-5xl lg:text-6xl uppercase font-manuka'
            variants={slideUp}
            initial='initial'
            whileInView='enter'
          >
            characters
          </motion.h3>
          <motion.p
            className='text-lg md:text-xl lg:text-3xl'
            variants={scale3D}
            initial='initial'
            whileInView='enter'
          >
            Characters from Season 2 of Arcane
          </motion.p>
          <CardContainer />
        </div>
      </div>
    </section>
  );
}
