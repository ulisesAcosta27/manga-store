import React, { FC } from "react";
import data from "@/data/index.json";
import { Product } from "./Product";
import { IProduct, IProducts } from "@/interfaces";

export const ProductList: FC = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto py-4">
        <h2 className="text-3xl font-semibold text-center pt-2 pb-4">
          Productos relacionados
        </h2>
        <div className="w-full flex items-center p-4 justify-around">
          {data.map(({ _id, price, name, seller, imgUrl }) => (
            <Product
              imgUrl={imgUrl.secure_url}
              name={name}
              price={price}
              seller={seller}
              key={_id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
