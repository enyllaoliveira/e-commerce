import React from "react";

export default function Cart() {
  return (
    <div className="w-full max-w-7xl mx-auto ">
      <h1 className="font-medium text-2xl text-center my-4">
        {" "}
        Carrinho de compras{" "}
      </h1>

      <section className="flex items-center justify-between border-b-2 border-gray-300">
        <img
          className="w-28"
          src="https://quatrorodas.abril.com.br/wp-content/uploads/2020/11/Volkswagen-Nivus-Comfortline-200TSI-8-1-e1638817693310.jpg?quality=70&strip=info&w=1080&h=720&crop=1"
          alt="Logo do produto"
        />
        <strong className="text-zinc-700/90"> Preço do produto</strong>

        <div className="flex items-cneter justify-center gap-3">
          <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
            {" "}
            -{" "}
          </button>
          2
          <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
            {" "}
            +{" "}
          </button>
        </div>

        <strong className="float-right"> Subtotal: R$</strong>

      </section>
      <p className="font-bold mt-4"> Total: </p>
    </div>
  );
}
