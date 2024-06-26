import React from 'react';
import { BsCartPlus } from 'react-icons/bs';
export default function Home() {
  return (
    <div>
     <main className='w-full max-w-7xl px-4 mx-auto '> 
    <h1 className='font-bold text-2xl mb-4 mt-10 text-center bg-gray-300'> Nossos produtos</h1>

    <div className='grid grid-cols-1 gap-6 mb-grid-cols-2 lg:grid-cols-5'>
    <section className='w-full'>
    <img
    className='w-full rounded-lg max-h-70 mb-2'
    src='https://quatrorodas.abril.com.br/wp-content/uploads/2020/11/Volkswagen-Nivus-Comfortline-200TSI-8-1-e1638817693310.jpg?quality=70&strip=info&w=1080&h=720&crop=1'
    alt='Logo do produto'
    />
    <p className='font-medium my-2'> Título do produto </p>
    <div className='flex gap-3 items-center'>
      <strong className='text-zinc-700/90'> Preço do produto</strong>
      <button className='bg-zinc-900 p-1 rounded'>  <BsCartPlus size={20} color='white'/> </button>
    </div>
    </section>
    </div>
     </main>
    </div>
  );
}