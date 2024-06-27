import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);
  return (
    <div className="w-full max-w-7xl mx-auto ">
      <h1 className="font-medium text-2xl text-center my-4">
        {" "}
        Carrinho de compras{" "}
      </h1>
{cart.length === 0 && (
  <div className="flex flex-col items-center justify-center"> 
    <h1 className="font-medium">  Ops, o seu carrinho está vazio.</h1>
    <Link className="bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded hover:bg-slate-700" to='/'> Acessar produtos </Link>
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
            <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center" onClick={() => removeItemCart(product)}>
              {" "}
              -{" "}
            </button>
            {product.amount}
            <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center" onClick={() => addItemCart(product)}>
              {" "}
              +{" "}
            </button>
          </div>

          <strong className="float-right"> Subtotal: {product.total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
          </strong>
        </section>
      ))}

{cart.length !== 0 && (
       <p className="font-bold mt-4"> Total: {total} </p>

)}
    </div>
  );
}
