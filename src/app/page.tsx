"use client";
import React, {
  createContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
import Home from "./pages/Home";

interface Product {
  id: number;
  imagem: {
    src: string;
    height: number;
    width: number;
    blurDataURL: string;
    blurWidth: number;
    blurHeight: number;
  };
  title: string;
  preco: number;
  setor: string;
}

interface ProductContextProps {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>; 
}

export const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export default function ProductProvider() {
  const [products, setProducts] = useState<Product[]>([]);

  const contextValue: ProductContextProps = {
    products,
    setProducts,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      <Home />
    </ProductContext.Provider>
  );
}
