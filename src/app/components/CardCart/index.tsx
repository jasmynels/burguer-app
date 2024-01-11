import Image from "next/image";
import { ICardCarts } from "./types";

const CardCart = ({ imagem, setor, title, preco }: ICardCarts) => {
  function limitarTitulo(titulo: string, limite: number) {
    if (titulo.length <= limite) {
      return titulo;
    } else {
      return titulo.substring(0, limite) + "...";
    }
  }

  return (
    <>
      <div className="w-3/4 flex text-black gap-4 p-2">
        <div className="w-3/4 h-20 bg-[#E0E0E0] rounded-md flex justify-center">
          <Image
            src={imagem}
            className="object-contain"
            alt="Imagem comida"
            width={70}
            height={70}
          />
        </div>
        <div className="gap-2 w-[14rem] flex flex-col ">
          <abbr
            title={title}
            className="font-bold text-sm whitespace-nowrap overflow-hidden text-ellipsis no-underline"
          >
            {limitarTitulo(title, 11)}
          </abbr>
          <p className="font-normal text-xs text-[#828282]">{setor}</p>
          <p className="font-semibold text-xs text-[#27AE60] ">R${preco}</p>
        </div>
      </div>
    </>
  );
};

export default CardCart;
