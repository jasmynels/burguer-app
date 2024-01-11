import React, { useContext, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Cart from "../../components/Cart";
import { menu } from "../../api/api";
import { ProductContext } from "@/app/page";

export default function Home() {
  const productContext = useContext(ProductContext);
  const [filteredMenu, setFilteredMenu] = useState(menu);

  if (!productContext) {
    return null;
  }

  const { setProducts } = productContext;

  const addLista = (id: number) => {
    const itemToAdd = menu.find((item) => item.id === id);

    if (itemToAdd) {
      setProducts((prevLista: any) => [...prevLista, itemToAdd]);
    }
  };

  const handleSearch = (searchTerm: string) => {
    const filteredItems = menu.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMenu(filteredItems);
  };

  return (
    <div className="h-screen">
      <Header onSearch={handleSearch} />
      <div className="flex flex-col h-screen justify-around gap-7 md:flex-row md:justify-center md:mt-5 md:h-full">
        <div className="flex min-h-[22rem] gap-5 flex-row overflow-auto md:overflow-hidden md:grid md:grid-cols-3 md:gap-4 md:w-3/5">
          {filteredMenu.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              imagem={item.imagem}
              titulo={item.title}
              setor={item.setor}
              preco={item.preco}
              onClick={() => addLista(item.id)}
            />
          ))}
        </div>
        <div className="flex flex-col content-end">
          <Cart />
        </div>
      </div>
    </div>
  );
}
