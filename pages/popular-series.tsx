import React from "react";
import { NextPage } from "next";
import { GetStaticProps } from "next";
import { ShopLayout } from "@/components/layouts";
import { BannerCollections } from "@/components/ui";
import { ProductPopularSerie } from "@/components/products";
import { dbMangaStore } from "@/api";
import { IFormatSeries, ISeries } from "@/interfaces";
import Link from "next/link";

interface Props {
  series: IFormatSeries[];
}

const PopularSeries: NextPage<Props> = ({ series }) => {
  return (
    <ShopLayout
      name="Manga Store - Popular Series"
      description="Encuentras todas los mangas mas relevante de la estacion de verano"
    >
      <BannerCollections name="POPULAR SERIES" imgBanner="bg-banner-popular-series" />
      <div className="container mx-auto my-10">
        <div className="py-4 px-10 flex flex-wrap items-center justify-around">
          {series.map(({ _id, imgUrl, name }) => (
            <Link href={`/product/manga/${_id}`} key={_id}>
              <ProductPopularSerie imgUrl={imgUrl} name={name} />
            </Link>
          ))}
        </div>
      </div>
    </ShopLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await dbMangaStore.get<ISeries[]>("/series");

  const series = data.map(({ _id, imgUrl, name, title }) => ({
    _id,
    title,
    imgUrl: imgUrl.secure_url,
    name,
  }))

  return {
    props: {
      series,
    },
  };
};

export default PopularSeries;
