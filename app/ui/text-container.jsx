import Link from 'next/link';
import { motion } from 'framer-motion';
import { scale3D } from '../lib/animate';

export default function TextContainer({ bigText, smallText, smallTextEnd }) {
  return (
    <div className='flex flex-col gap-4 text-primary'>
      <Link
        href='https://www.netflix.com/title/81435684'
        target='_blank'
        className='flex items-center relative text-[28vw] sm:text-[11rem] lg:text-[15rem] leading-[0.8] font-zentry'
      >
        <motion.p
          initial='initial'
          animate='enter'
          variants={scale3D}
          className='origin-top-left'
        >
          {bigText}
        </motion.p>
      </Link>

      <motion.p
        initial='initial'
        animate='enter'
        variants={scale3D}
        className={`text-[4vw] sm:text-2xl font-bold ${
          smallTextEnd && 'text-right'
        }`}
      >
        {smallText}
      </motion.p>
    </div>
  );
}
