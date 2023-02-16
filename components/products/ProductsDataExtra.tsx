import React, { FC } from 'react'
import icon from "@/common/add-more.webp";
import Image from 'next/image';
import { IoCardOutline } from 'react-icons/io5'
import { BsCreditCard2Front } from "react-icons/bs";
import { CiCreditCard2 } from "react-icons/ci";
import { TbMessages } from "react-icons/tb";


export const ProductsDataExtra: FC = () => {
  return (
    <div className="container mx-auto flex items-center justify-center my-20">
      <div className="flex flex-col w-[25rem] items-center p-2">
        <BsCreditCard2Front size={80} className="text-gray-500" />
        <p className="font-bold uppercase text-lg text-gray-500 pt-2">
          Pagos seguros
        </p>
      </div>

      <div className="flex flex-col w-[25rem] items-center p-2">
        <TbMessages size={80} className="text-gray-500" />
        <p className="font-bold uppercase text-lg text-gray-500 pt-2">
          Atención al cliente siempre
        </p>
      </div>

      <div className="flex flex-col w-[25rem] items-center p-2">
        <Image src={icon} alt="marron" width={90} />
        <p className="font-bold uppercase text-lg text-gray-500">
          Nuevos productos diariamente
        </p>
      </div>
    </div>
  );
}
