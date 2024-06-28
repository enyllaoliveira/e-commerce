import { useEffect, useState, useContext } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { UseApi } from '../../hooks/useApi';
import { CartContext } from '../../contexts/CartContext';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
export interface ProductsProps {
  cover: string;
  description: string;
  id: number;
  price: number;
  title: string;
}

export default function Home() {
  const { addItemCart} = useContext(CartContext)
  const api = new UseApi();
  const [products, setProducts] = useState<ProductsProps[]>([])

  const handleGetProducts = async () => {
    try {
    const response = await api.getProducts()
    setProducts(response.data)
  } catch (err) {
    alert('Erro ao carregar produtos.')
  }
}
useEffect(() => {
  handleGetProducts()
}, [])

function handleAddProduct(product: ProductsProps) {
  toast.success("Produto adicionado no carrinho.", {
    style: {
      borderRadius: 10,
      padding: "10px",
      fontSize: "16px",
      fontWeight: "bold"
    }
  })
  addItemCart(product)
}

  return (
    <div>
     <main className='w-full max-w-7xl px-4 mx-auto '> 
    <h1 className='font-bold text-2xl mb-4 mt-10 text-center bg-gray-300'> Nossos produtos</h1>

    <div className='grid grid-cols-1 gap-6 mb-grid-cols-2 lg:grid-cols-5'>
      {products.map((product) => (
    <section key={product.id} className='w-full'>
        <Link to={`/cartDetails/${product.id}`}>
    <img
    className='w-full rounded-lg max-h-70 mb-2'
    src={product.cover}
    alt='Logo do produto'
    />
    <p className='font-medium my-2'> {product.title} </p>
    </Link>
    <div className='flex gap-3 items-center'>
      <strong className='text-zinc-700/90'> {product.price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })}</strong>
      <button className='bg-zinc-900 p-1 rounded' onClick={() => handleAddProduct(product)}>  <BsCartPlus size={20} color='white'/> </button>
    </div>
    </section>
      ))}

    </div>
     </main>
    </div>
  );
}