import React from 'react'
import { NextPage } from 'next';
import Link from 'next/link';
import { useSWR } from '@/hooks';
import { Product } from '@/components/products';
import { ShopLayout } from '@/components/layouts';
import { BannerCollections } from '@/components/ui';

const Mangas: NextPage = () => {
  const { products, error } = useSWR("/products/category/manga");
  const productsSplice = products.splice(0, 15)
  return (
    <ShopLayout
      name="Manga Store - Mangas"
      description="Aqui puedes encontra todas nuesta conleccion de mangas"
    >
      <BannerCollections name="MANGAS" imgBanner="bg-banner-manga" />
      <div className="container mx-auto">
        <div className="w-full mt-8 flex items-center py-4 justify-around flex-wrap">
          {productsSplice.map(({ _id, name, imgUrl, price, seller, category }) => (
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
}


export default Mangas;