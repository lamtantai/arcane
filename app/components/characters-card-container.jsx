'use client';

import CharacterCard from '../ui/character-card';
import { characters } from '../lib/placeholder-data';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';

export default function CardContainer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <div className='relative h-full' ref={container}>
      {characters.map((character, index) => {
        return (
          <CharacterCard
            {...character}
            key={index}
            progress={scrollYProgress}
            range={[
              index * (1 / (characters.length - 1)),
              1 + 1 / (characters.length - 1),
            ]}
          />
        );
      })}
    </div>
  );
}
