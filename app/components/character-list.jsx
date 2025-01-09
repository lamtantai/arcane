'use client';

import { motion } from 'framer-motion';

import CharacterCard from './character-card';
import { characters } from '../lib/placeholder-data';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { scaleAnimate } from '../lib/animate';

export default function CharacterList() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section className='my-20'>
      <motion.div
        className='mb-4'
        variants={scaleAnimate}
        initial='initial'
        whileInView='enter'
        viewport={{ once: true }}
      >
        <h3 className='text-5xl lg:text-7xl uppercase font-manuka'>
          characters
        </h3>
        <p className='text-lg lg:text-2xl'>
          Characters from Season 2 of Arcane
        </p>
      </motion.div>

      <div className='relative h-full' ref={container}>
        {characters.map((character, index) => {
          return (
            <CharacterCard
              character={character}
              key={character.name}
              progress={scrollYProgress}
              range={[
                index * (1 / (characters.length - 1)),
                1 + 1 / (characters.length - 1),
              ]}
            />
          );
        })}
      </div>
    </section>
  );
}
