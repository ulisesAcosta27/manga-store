import React, { FC } from 'react'
import { BsChevronDown, BsInstagram, BsChevronUp } from "react-icons/bs";
import { VscClose } from "react-icons/vsc";
import { ImFacebook } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";

export const SlideMenu: FC = () => {
  return (
    <div className="w-[26rem] h-[100vh] bg-white absolute top-0 right-0 shadow-2xl">
    {/* <div className="w-[-100%] h-[100vh] bg-white absolute top-0 right-0 shadow-2xl"> */}
      <div className="h-[100%]">
      {/* <div className="h-[100%] hidden"> */}
        <div className=" flex justify-end m-6 text-gray-500">
          <VscClose size={32} />
        </div>

        <div className=" m-6">
          <div className="">
            <div className="flex justify-between items-center">
              <p className="py-2 font-bold text-lg">MANGAS Y NOVELAS</p>
              <BsChevronUp size={20} className="text-black" />
            </div>
            <p className="pb-1 pl-4 font-light">Mangas</p>
            <p className="py-1 pl-4 font-light">Novelas</p>
            <p className="py-1 pl-4 font-light">Libros de Arte</p>
            <p className="py-1 pl-4 font-light">Juegos de libros</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="py-2 font-bold text-lg">FIGURAS DE ACCION</p>
            <BsChevronDown size={20} className="text-black" />
          </div>

          <div className="flex justify-between items-center">
            <p className="py-2 font-bold text-lg">LOS MAS COMPRADOS</p>
            <BsChevronDown size={20} className="text-black" />
          </div>

          <div className="flex justify-between items-center">
            <p className="py-2 font-bold text-lg">SERIES POPULARES</p>
            <BsChevronDown size={20} className="text-black" />
          </div>
        </div>

        <div className=" mx-6">
          <p className="py-2 font-light text-gray-500">Login</p>
          <p className="py-2 font-light text-gray-500">Register</p>
          <p className="py-2 font-light text-gray-500">Lista de deseos</p>
          <p className="py-2 font-light text-gray-500">¿Tienes una pregunta?</p>
        </div>

        <div className="my-6">
          <p className="text-center pb-4 text-gray-600">
            Nuestas redes sociales
          </p>

          <div className="flex items-center justify-around px-12 py-2">
            <BsInstagram size={25} />
            <ImFacebook size={25} />
            <FaTiktok size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}
