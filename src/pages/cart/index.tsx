import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
interface CepProps {
  localidade: string;
  complemento?: string;
  bairro?: string;
  uf: string;
}

export default function Cart() {
  const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);
  const [shipping, setShipping] = useState<CepProps | null>(null);
  const [cep, setCep] = useState("");

  const handleGetShipping = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setShipping(data);
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto ">
      <div className="flex flex-col gap-4">
        <h1 className="font-medium text-2xl text-center my-4">
          {" "}
          Carrinho de compras{" "}
        </h1>
        {cart.length === 0 && (
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-medium"> Ops, o seu carrinho está vazio.</h1>
            <Link
              className="bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded hover:bg-slate-700"
              to="/"
            >
              {" "}
              Acessar produtos{" "}
            </Link>
          </div>
        )}
        {cart.map((product) => (
          <section
            key={product.id}
            className="flex items-center justify-between border-b-2 border-gray-300"
          >
            <img className="w-28" src={product.cover} alt={product.title} />
            <strong className="text-zinc-700/90"> {product.price}</strong>

            <div className="flex items-cneter justify-center gap-3">
              <button
                className="bg-slate-600 hover:bg-slate-700  px-2 rounded text-white font-medium flex items-center justify-center"
                onClick={() => removeItemCart(product)}
              >
                {" "}
                -{" "}
              </button>
              {product.amount}
              <button
                className="bg-slate-600 hover:bg-slate-700 px-2 rounded text-white font-medium flex items-center justify-center"
                onClick={() => addItemCart(product)}
              >
                {" "}
                +{" "}
              </button>
            </div>

            <strong className="float-right">
              {" "}
              Subtotal:{" "}
              {product.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </section>
        ))}

        {cart.length !== 0 && (
          <p className="font-bold mt-4"> Total: {total} </p>
        )}
        {cart.length >= 1 && (
          <section className="flex flex-col">
            <h3> Local de entrega </h3>
            <label> Digite seu CEP </label>
            <input
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              className="border p-1 rounded mb-2 max-w-40"
            />
            <button
              className="bg-slate-600 w-40 rounded text-white font-normal hover:bg-slate-700"
              onClick={() => handleGetShipping()}
            >
              {" "}
              Calcular Frete{" "}
            </button>
            {shipping && (
              <div className="mt-4">
                <p>
                  Endereço: {shipping.localidade} - {shipping.uf}
                </p>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
