import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ProductsProps } from "../home";
import toast from 'react-hot-toast';
import { CartContext } from '../../contexts/CartContext';
import { BsCartPlus } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
export default function CartDetails() {
  const { addItemCart} = useContext(CartContext)
  const navigate = useNavigate();
  const { id } = useParams();
  const [products, setProducts] = useState<ProductsProps[]>([]);


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
  navigate('/cart')
}

  useEffect(() => {
    const handleGetProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/${id}`
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data && typeof data === "object") {
          setProducts([data]);
        } else {
          console.error("A resposta da API não é válida:", data);
        }
      } catch (err) {
        toast.error("Erro ao carregar produtos. Tente novamente mais tarde.", {
          style: {
            borderRadius: 10,
            padding: "10px",
            fontSize: "16px",
            fontWeight: "bold"
          }
        })      }
    };
    if (id) {
      handleGetProducts();
    }
  }, [id]);

  return (
    <main className="w-full max-w-7xl mx-auto ">
      <h1 className="font-medium text-2xl text-center my-8">
        {" "}
        Detalhes do produto
      </h1>
      {products.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-medium"> Ops, o seu carrinho está vazio.</h1>
        </div>
      )}
      {products.map((product) => (
        <section
          key={product.id}
          className="flex items-start justify-between lg:flex-row flex-col w-full max-w-7xl h-14 px-5 mx-auto"
        >/
          <img className="lg:w-96 w-auto" src={product.cover} alt={product.title} />
         <div className="flex flex-col gap-8 my-auto">
          <h2 className="font-medium text-2xl"> {product.title}</h2>
          <p> {product.description}</p>
          <strong className="text-zinc-700/90">R$  {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}</strong>
          <button className="flex gap-8 max-w-80 text-center justify-center items-center bg-slate-200 my-3 p-1 px-3 text-black font-medium rounded hover:bg-slate-400" onClick={() => handleAddProduct(product)} > Adicionar produto ao carrinho <BsCartPlus size={20}/></button>

          </div>
        </section>
    
      ))}
    </main>
  );
}
