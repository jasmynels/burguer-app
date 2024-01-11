import { StaticImageData } from "next/image";
import { ICart, IProdutos } from "../Cart/types";

export interface ICardCarts {
  imagem: string | StaticImageData;
  title: string;
  setor: string;
  preco: number;
}
