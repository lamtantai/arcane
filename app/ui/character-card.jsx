'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';

export default function CharacterCard({
  src,
  subSrc,
  name,
  description,
  color,
  range,
  progress,
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  const [blur, setBlur] = useState(0);

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, 0.75]);

  const blurTransform = useTransform(progress, range, [0, 20]);

  useMotionValueEvent(progress, 'change', () => {
    setBlur(blurTransform.current);
  });

  const [imageSrc, setImageSrc] = useState(src);

  function handleChangeImageSrc(src) {
    setImageSrc(src);
  }

  return (
    <motion.div
      className='sticky top-0 flex items-center justify-between h-screen'
      ref={container}
    >
      <motion.div
        className='flex flex-col md:flex-row items-center justify-between gap-4 h-[90vh] w-full py-8 px-[4vw] rounded-[3vw] text-secondary'
        style={{
          backgroundColor: color,
          // transform: `scale3d(${scale.current}, ${scale.current}, ${scale.current})`,
          scale,
          filter: `blur(${blur}px)`,
          // transform: `translate(0px, ${translateY.current}px) scale(${scale.current})`,
        }}
      >
        {/* CHARACTER IMAGE CONTAINER */}
        <div className='flex flex-col justify-center gap-[2vh] w-full h-full md:w-[55%]'>
          {/* BIG IMAGE */}
          <div className='h-[80%] border-2 border-primary overflow-hidden'>
            <motion.div
              className='relative h-full w-full'
              style={{
                scale: imageScale,
                opacity,
              }}
            >
              <Image
                src={imageSrc}
                alt='Character picture'
                sizes='auto'
                fill
                priority
                className='object-fill'
              />
            </motion.div>
          </div>

          {/* SMALL IMAGE LIST */}
          <ul className='flex items-center justify-between md:justify-start gap-4 w-full'>
            {subSrc.map((subSrc, index) => {
              return (
                <li
                  key={index}
                  className={`relative size-[18vw] md:size-20 border-2 border-primary
                ${imageSrc === subSrc ? '' : 'opacity-50'}`}
                  onClick={() => {
                    handleChangeImageSrc(subSrc);
                  }}
                >
                  <Image
                    src={subSrc}
                    alt='Character picture'
                    sizes='auto'
                    fill
                    className='object-cover'
                  />
                </li>
              );
            })}
          </ul>
        </div>

        {/* CHARACTER DESCRIPTION */}
        <div className='flex flex-col gap-2 md:w-[40%] text-center md:text-balance'>
          <p className='text-2xl md:text-3xl xl:text-6xl font-black uppercase'>
            {name}
          </p>
          <p className='md:text-xl xl:text-4xl font-roobert'>{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
