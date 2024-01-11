/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Button from "../Button";
import CardCart from "../CardCart";
import "../../../app/globals.css";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/app/page";

const Cart = () => {
  const productContext = useContext(ProductContext);
  const [totalCart, setTotalCart] = useState(0);

  if (!productContext) {
    return;
  }

  const { products, setProducts } = productContext;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function total() {
    const soma = products.reduce(
      (accumulator, item) => accumulator + item.preco,
      0
    );
    setTotalCart(soma);
  }

  useEffect(() => {
    total();
  }, [products]);

  function handleRemoveAll() {
    setProducts([]);
  }

  function handleRemoveItem(idToRemove: number) {
    setProducts((prevCartList) =>
      prevCartList.filter((item) => item.id !== idToRemove)
    );
  }

  function renderCart() {
    if (products.length == 0) {
      return (
        <div className="bg-[#F5F5F5] rounded-b-lg md:w-80 h-40 flex flex-col items-center justify-center ">
          <div className=" gap-5 flex flex-col justify-center items-center">
            <p className="text-[#000] text-lg font-bold">
              Sua sacola está vazia
            </p>
            <p className="text-[#828282] text-sm">Adicione itens</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-[#F5F5F5] py-3 rounded-b-lg  md:w-80 max-h-[20rem] md:max-h-[31.25rem] flex flex-col items-center justify-center ">
          <div className="overflow-class w-full">
            {products.map((item, index) => (
              <div key={index} className="flex flex row">
                <CardCart
                  key={item.id}
                  imagem={item.imagem}
                  title={item.title}
                  preco={item.preco}
                  setor={item.setor}
                />
                <div className=" flex w-full justify-end ">
                  <p
                    onClick={() => handleRemoveItem(item.id)}
                    className="font-normal text-xs text-[#828282] cursor-pointer p-1 h-5 hover:text-[#000] hover:underline "
                  >
                    Remover
                  </p>
                </div>
              </div>
            ))}
          </div>
          <br></br>
          <div className="flex w-full p-4 justify-between">
            <p className="text-[#000] text-sm font-medium">Total</p>
            <p className="text-[#828282] text-sm font-medium">
              R$ {totalCart.toFixed(2)}
            </p>
          </div>
          <Button
            size="default"
            color="gray"
            text="Remover todos"
            disabled={false}
            onClick={handleRemoveAll}
          />
        </div>
      );
    }
  }

  return (
    <div>
      <div className="bg-[#27AE60] md:w-80 md:h-20 rounded-t-lg flex p-5 items-center justify-center text-white">
        <p className="font-bold text-lg">Carrinho de compras</p>
      </div>
      <div>{renderCart()}</div>
    </div>
  );
};

export default Cart;
