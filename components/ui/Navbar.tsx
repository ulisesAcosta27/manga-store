import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/common/manga-store.png";
import { IoPersonOutline, IoCartOutline, IoSearch } from "react-icons/io5";
import { SlideMenu } from "./SlideMenu";

export const Navbar: FC = () => {
  return (
    <div className="w-full h-[4rem]">
      <div className="px-2 container mx-auto h-full flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center">
            <Image src={logo} width={50} alt="Manga Store Logo" />
            <h1 className="font-bold text-xl pl-1">Manga Store</h1>
          </div>
        </Link>

        <div className="relative">
          <input
            type="text"
            className="bg-gray-100 rounded-full h-[2.5rem] w-[32rem] px-6"
            placeholder="Busca tu producto favorito"
          />
          <IoSearch size={22} className='text-gray-400 absolute top-2 right-6' />
        </div>

        <div className="flex">
          <Link href={"/users"}>
            <div className="flex items-center p-2">
              <IoPersonOutline size={20} />
              <p className="pl-1 ">Cuenta</p>
            </div>
          </Link>

          <Link href={"/users"}>
            <div className="flex items-center p-2">
              <IoCartOutline size={20} />
              <p className="pl-1">Carrito</p>
            </div>
          </Link>
        </div>
      </div>
      {/* <SlideMenu /> */}
    </div>
  );
};
