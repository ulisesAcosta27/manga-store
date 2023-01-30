import SWR from "swr";
import { dbMangaStore } from "@/api";
import { IProducts } from "@/interfaces";

const fetcher = (url: string) => dbMangaStore.get(url).then((res) => res.data);

export const useSWR = (resUrl: string) => {
  const { data, error, isLoading } = SWR<IProducts[]>(resUrl, fetcher);

   const products = data?.map(
     ({ _id, imgUrl, name, seller, price, category }) => ({
       _id,
       imgUrl: imgUrl.secure_url,
       name,
       seller,
       price,
       category,
     })
   );

  return {
    products: products || [],
    error,
  };
};
