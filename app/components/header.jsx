'use client';
import Image from 'next/image';

import logo from '../../public/images/logo.svg';
import Link from 'next/link';
import { useMotionValueEvent, useScroll } from 'framer-motion';

export default function Header() {
  const { scrollY } = useScroll();
  return (
    <header className='fixed top-0 left-0 flex items-center w-full p-3 md:px-5 md:py-4 bg-black/20 backdrop-blur-xl z-50 hidden'>
      <Link href='/'>
        <Image src={logo} alt='Arcane 2 logo' className='md:w-10' />
      </Link>
    </header>
  );
}
