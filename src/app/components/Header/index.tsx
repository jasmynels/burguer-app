import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../assets/logo-template.png";

const Header = ({ onSearch }: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="h-20 w-full bg-[#F5F5F5] p-5 flex flex-row justify-between items-center">
      <Image src={logo} alt="logo-hamburguer" width={140} height={100} />
      <input
        className="h-8 p-3 no-underline rounded-md border-2 text-[#000] focus:border-0"
        placeholder="Pesquise aqui.."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Header;
