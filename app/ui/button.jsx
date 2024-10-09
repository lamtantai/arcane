'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const hover = {
  hover: {
    transition: {
      staggerChildren: 0.075,
    },
  },

  out: {
    transition: {
      staggerChildren: 0.075,
    },
  },
};

const rotateChar = {
  initial: {
    rotateX: '90deg',
    rotateY: '-4deg',
  },

  hover: {
    rotateX: '0deg',
    rotateY: '0deg',

    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },

  out: {
    rotateX: '90deg',
    rotateY: '-4deg',
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

const rotateChar1 = {
  initial: {
    rotateX: '0deg',
    rotateY: '0deg',
  },

  hover: {
    rotateX: '-90deg',
    rotateY: '-4deg',
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },

  out: {
    rotateX: '0deg',
    rotateY: '0deg',
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Button({ word, link, ...props }) {
  const chars = word.split('');
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href={link}
      target='_blank'
      className='flex items-center relative text-[31vw] sm:text-[11rem] lg:text-[15rem] leading-[0.8] font-zentry'
      {...props}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <motion.span
        className=''
        variants={hover}
        initial='initial'
        animate={isHover ? 'hover' : 'out'}
      >
        {chars.map((char, index) => {
          return (
            <motion.span
              key={index}
              {...props}
              style={{
                fontFeatureSettings: "'ss01' on",
                transformOrigin: 'center center 0.42em',
              }}
              variants={rotateChar1}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.span>

      <motion.span
        className='absolute inset-0'
        variants={hover}
        initial='initial'
        animate={isHover ? 'hover' : 'out'}
      >
        {chars.map((char, index) => {
          return (
            <motion.span
              key={index}
              {...props}
              style={{
                fontFeatureSettings: "'ss01' on",
                transformOrigin: 'center center 0.42em',
              }}
              variants={rotateChar}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.span>
    </Link>
  );
}
