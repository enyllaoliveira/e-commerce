import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='w-full px-1 bg-slate-200'>
     <nav className='flex justify-between w-full max-w-7xl h-14 items-center px-5 mx-auto'>
      <Link className='font-bold text-2xl' to="/">Shopping Car</Link>
      <Link className='relative' to="/cart">
        <FiShoppingCart size={20} color='black'/>
        <span className='absolute -right-3 -top-3 px-2.5 bg-slate-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs'>
2
        </span>
      </Link>
     </nav>
    </header>
  );
}