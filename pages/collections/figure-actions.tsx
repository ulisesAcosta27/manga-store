import { dbMangaStore } from "@/api";
import { ShopLayout } from "@/components/layouts";
import { Product } from "@/components/products";
import { BannerCollections } from "@/components/ui";
import { IFormatProducts, IProducts } from "@/interfaces";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React from "react";

interface Props {
  products: IFormatProducts[];
}

const FiguraActions: NextPage<Props> = ({ products }) => {
  return (
    <ShopLayout
      name="Manga Store - Mangas"
      description="Aqui puedes encontra todas nuesta conleccion de mangas"
    >
      <BannerCollections name="FIGURES ACTIONS" imgBanner="bg-banner-figure" />
      <div className="container mx-auto">
        <div className="w-full flex items-center py-4 justify-around flex-wrap">
          {products.map(({ _id, name, imgUrl, price, seller }) => (
            <Link href={`/product/${_id}`} key={_id}>
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

// Cambiar por Incremental Site Regeneration
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await dbMangaStore.get<IProducts[]>(
    "/products/category/figure-actions"
  );

  const products = data.map(({ _id, imgUrl, name, seller, price }) => ({
    _id: _id,
    imgUrl: imgUrl.secure_url,
    name: name,
    seller: seller,
    price: price,
  }));

  return {
    props: {
      products,
    },
  };
};

export default FiguraActions;
