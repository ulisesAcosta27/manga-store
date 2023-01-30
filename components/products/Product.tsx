import Image from "next/image";
import React, { FC } from "react";

interface Props {
  name: string;
  imgUrl: string;
  seller: string;
  price: number;
}

export const Product: FC<Props> = ({ name, imgUrl, price, seller }) => {
  return (
    <div className="shadow-lg my-2">
      <div>
        <Image src={imgUrl} width={280} height={400} alt={name} />
      </div>
      <div className="p-2 text-center">
        <p className="font-light text-lg">{name.slice(0, 33)}</p>
        <p className="text-gray-500 text-sm">{seller}</p>
        <p className="text-md font-light">
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
    </div>
  );
};
