import { dbMangaStore } from "@/api";
import { ShopLayout } from "@/components/layouts";
import { Product } from "@/components/products";
import { BannerCollections } from "@/components/ui";
import { useSWR } from "@/hooks";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const Novels: NextPage = () => {
  const { products, error } = useSWR("/products/category/novel");
  
  return (
    <ShopLayout
      name="Manga Store - Mangas"
      description="Aqui puedes encontra todas nuesta conleccion de mangas"
    >
      <BannerCollections name="NOVELS" imgBanner="bg-banner-novel" />
        <div className="container mx-auto">
        <div className="w-full mt-8 flex items-center py-4 justify-around flex-wrap">
          {products.map(({ _id, name, imgUrl, price, seller, category }) => (
            <Link href={`/product/${category}/${_id}`} key={_id}>
              <Product
                name={name}
                imgUrl={imgUrl}
                price={price}
                seller={seller}
              />
            </Link>
          ))}
        </div>
      </div>
    </ShopLayout>
  );
};

export default Novels;
