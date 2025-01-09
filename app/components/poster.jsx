'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import React, { useRef } from 'react';

export default function Poster() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start 10%'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      className='relative w-full aspect-[5/4] lg:aspect-video'
      style={{ scale }}
      ref={container}
    >
      <Image
        src='https://i.imgur.com/mw9PMSN.png'
        alt="'Film's poster"
        fill
        sizes='90vw'
        className='object-cover rounded-xl'
      />
    </motion.div>
  );
}
