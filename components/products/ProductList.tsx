import Link from "next/link";
import React, { FC } from "react";
import { Product } from "./Product";
import { GetStaticProps } from "next";
import { dbMangaStore } from "@/api";

export const ProductList: FC = (props) => {
  console.log({ props });
  return (
    <div className="w-full">
      <div className="container mx-auto py-4">
        <h2 className="text-3xl font-semibold text-center pt-2 pb-4">
          Los mas comprados
        </h2>
        <div className="w-full flex items-center p-4 justify-around">
          {/* {countItem.map(({ id }) => (
            <Link href={`/product/${id}`} key={id}>
              <Product />
            </Link>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const { data } = await dbMangaStore.get("/products/fiveProducts");
  console.log("Hola Mundo");
  return {
    props: {
      // products: data,
    },
  };
};
