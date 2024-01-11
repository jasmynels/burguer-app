import hamburguer1 from "../../assets/hamburguer1.png";
import hamburguer2 from "../../assets/hamburguer2.png";
import hamburguer3 from "../../assets/hamburguer3.png";
import refrigerante1 from "../../assets/refrigerante1.png";
import refrigerante2 from "../../assets/refrigerante2.png";
import mcShake from "../../assets/mcShake.png";
import { ICart, IProdutos } from "../components/Cart/types";

export const menu = [
  {
    id: 1,
    imagem: hamburguer1,
    title: "BigBurguer",
    preco: 20.7,
    setor: "Sanduíche",
  },
  {
    id: 2,
    imagem: hamburguer2,
    title: "BigMac",
    preco: 26.2,
    setor: "Sanduíche",
  },
  {
    id: 3,
    imagem: refrigerante1,
    title: "Fanta Guaraná",
    preco: 12.3,
    setor: "Bebidas",
  },
  {
    id: 4,
    imagem: refrigerante2,
    title: "Coca Cola",
    preco: 14.3,
    setor: "Bebidas",
  },
  {
    id: 5,
    imagem: mcShake,
    title: "McShake Ovomaltine",
    preco: 16.5,
    setor: "Bebidas",
  },
  {
    id: 6,
    imagem: hamburguer3,
    title: "MacChicken",
    preco: 43.2,
    setor: "Sanduíche",
  },
];

export const carrinho = [];
