import Image from "next/image";
import { Cards } from "./types";
import Button from "../Button";

const Card = ({ imagem, titulo, setor, preco, onClick, id }: Cards) => {
  return (
    <div className="max-h-[350px]">
      <div className="text-black w-72 border-2 h-[100%] border-[#E0E0E0] rounded-md">
        <div className="bg-[#F5F5F5] h-3/6 flex justify-center ">
          <Image
            src={imagem}
            className="object-contain"
            alt="Imagem comida"
            width={100}
            height={100}
          />
        </div>
        <div className="p-4 gap-4 h-3/4">
          <div className="flex flex-col gap-2.5">
            <p className="font-bold text-lg">{titulo}</p>
            <p className="font-normal text-xs text-[#828282] h-full">{setor}</p>
            <p className="font-semibold text-sm text-[#27AE60]  h-full mb-3">
              R${preco}
            </p>
          </div>
          <Button
            size="medium"
            color="green"
            text="Adicionar"
            disabled={false}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
