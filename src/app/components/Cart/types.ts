import { StaticImageData } from "next/image";

export interface IProdutos {
  id: number;
  imagem: string | StaticImageData;
  title: string;
  setor: string;
  preco: number;
}
export interface ICart {
  lista: IProdutos[];
}
