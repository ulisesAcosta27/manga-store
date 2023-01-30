import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ShopLayout } from "@/components/layouts";
import { GetStaticProps, GetStaticPaths } from "next";
import { dbMangaStore } from "@/api";
import { IProduct, IProducts } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { IoHeartOutline } from 'react-icons/io5'
import { TableProduct } from "@/components/products";

interface Props {
  product: IProduct;
}

const MangaInfo: NextPage<Props> = ({ product }) => {
  const router = useRouter();
  if(router.isFallback) {
    return <h1>Loading</h1>
  }
  return (
    <ShopLayout
      name="Manga Store - Mangas"
      description="Aqui puedes encontra todas nuesta conleccion de mangas"
    >
      <div className="container mx-auto grid grid-cols-2 grid-rows-2 my-8">
        <div className="row-span-2 flex items-center justify-center p-4">
          <Image
            src={product.imgUrl}
            alt={product.name}
            width={470}
            height={470}
          />
        </div>
        <div className="row-span-2 flex flex-col justify-center py-8">
          <div>
            <p className="font-light text-lg">
              <Link href={"/"} passHref>
                Home/
              </Link>
              <Link href={"/collections/mangas"} passHref>
                {product.category.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase())}
              </Link>
            </p>
            <p className="text-sm font-semibold text-gray-400">
              {product.seller.replaceAll("", " ")}
            </p>
            <div className="my-4">
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <div className="flex items-end">
                <p className="font-light text-base text-red-500 mr-2 line-through">
                  $3,000.00
                </p>
                <p className="font-light text-xl">
                  {product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
              </div>
              <p className="text-sm my-1 text-gray-400">Tax incluidos</p>
            </div>
          </div>
          <div className="mb-4">
            <button className="global-button w-full">Agregar al Carrito</button>
            <div className="py-4 flex items-center">
              <IoHeartOutline size={20} className="text-gray-500" />
              <button className="pl-1 font-light text-base">
                Agregar a la lista de deseos
              </button>
            </div>
            <TableProduct />
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await dbMangaStore.get<IProducts[]>("/products");
  const onlyFifteen = data.slice(0, 4);
  const paths = onlyFifteen.map(({ _id }) => ({
    params: { id: `${_id}` },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await dbMangaStore.get<IProducts>(`/products/${params!.id}`);
  const product = {
    _id: data._id,
    name: data.name,
    price: data.price,
    author: data.author || "Gege Akutami",
    category: data.category,
    description: data.description,
    imgUrl: data.imgUrl.secure_url,
    seller: data.seller,
  };

  return {
    props: {
      product,
    },
  };
};

export default MangaInfo;
