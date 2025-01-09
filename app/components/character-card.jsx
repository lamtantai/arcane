'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';

export default function CharacterCard({ character, range, progress }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const cardScale = useTransform(progress, range, [1, 0.75]);
  const blur = useTransform(progress, range, ['0px', '20px']);

  const filter = useMotionTemplate`blur(${blur})`;

  const [imageSrc, setImageSrc] = useState(character.src);

  return (
    <motion.div
      className='sticky top-0 flex items-center h-screen'
      ref={container}
    >
      <motion.div
        className='flex flex-col md:flex-row items-center justify-between gap-4 h-[90vh] w-full py-8 px-4 lg:px-10 rounded-xl text-secondary'
        style={{
          backgroundColor: character.color,
          scale: cardScale,
          filter,
        }}
      >
        <div className='flex flex-col justify-center gap-4 w-full h-full md:w-[55%]'>
          <div className='h-[80%] border-2 border-primary overflow-hidden w-full'>
            <motion.div
              className='relative h-full w-full'
              style={{
                opacity,
              }}
            >
              <Image
                src={imageSrc}
                alt='Character picture'
                sizes='(min-width: 768px) 50vw, 100vw'
                fill
              />
            </motion.div>
          </div>

          <ul className='flex items-center justify-center gap-4 w-full'>
            {character.subSrc.map((subSrc, index) => (
              <li
                key={index}
                className={`w-16 h-16 md:w-20 md:h-20 border-2 border-primary
                ${imageSrc === subSrc ? '' : 'opacity-50'}`}
                onClick={() => {
                  setImageSrc(subSrc);
                }}
              >
                <Image
                  src={subSrc}
                  alt='Character picture'
                  width={80}
                  height={80}
                  className='object-cover w-full h-full'
                />
              </li>
            ))}
          </ul>
        </div>

        <div className='md:w-[40%] text-center'>
          <p className='text-2xl xl:text-6xl font-black uppercase mb-4'>
            {character.name}
          </p>
          <p className='md:text-xl xl:text-3xl font-roobert'>
            {character.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
