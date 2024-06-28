import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductsProps } from "../home";

export default function CartDetails() {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<ProductsProps[]>([]);

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
        alert("Erro ao carregar produtos.");
      }
    };
    if (id) {
      handleGetProducts();
    }
  }, [id]);

  return (
    <div className="w-full max-w-7xl mx-auto ">
      <h1 className="font-medium text-2xl text-center my-4">
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
          className="flex items-center justify-between border-b-2 border-gray-300"
        >
          <img className="w-28" src={product.cover} alt={product.title} />
          <strong className="text-zinc-700/90"> {product.price}</strong>
          <p> {product.description}</p>
        </section>
      ))}
    </div>
  );
}
