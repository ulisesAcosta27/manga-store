import React, { FC } from 'react'
import img from "@/common/attack_on_titan.jpg";
import Image from 'next/image';

interface Props {
  name: string
  imgUrl: string

}

export const ProductPopularSerie: FC<Props> = ({ name, imgUrl }) => {
  return (
    <div className="shadow-xl my-4">
      <div className="bg-red-400">
        <Image src={imgUrl} height={400} width={400} alt={"Attack on Titan"} />
      </div>
      <div className="flex items-center justify-center flex-col h-[6rem]">
        <h3 className="text-lg font-normal">{name}</h3>
        <button className="global-button px-6 my-1">Ver Mas</button>
      </div>
    </div>
  );
}
