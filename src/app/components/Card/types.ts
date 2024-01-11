import { StaticImageData } from "next/image";

export interface Cards {
  id: number;
  imagem: string | StaticImageData;
  titulo: string;
  setor: string;
  preco: number;
  onClick?: () => void;
}
