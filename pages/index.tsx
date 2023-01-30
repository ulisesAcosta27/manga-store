import { dbMangaStore } from "@/api";
import { ShopLayout } from "@/components/layouts";
import { Product, ProductList } from "@/components/products";
import { Filters, Hero, LogosList, Suscribe } from "@/components/ui";
import { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSWR } from "@/hooks";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Home: NextPage = () => {
  const { products, error } = useSWR("/products/fiveProducts");

  return (
    <ShopLayout
      name="Home - Manga Store"
      description="La unica pagina con todos los mangas actializados"
    >
      <Hero />
      <Filters />
      <div className="container mx-auto py-4">
        <h2 className="text-3xl font-semibold text-center pt-2 pb-4">
          Los mas comprados
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="w-full flex items-center py-4 justify-around"
        >
          {products.map(({ _id, name, imgUrl, price, seller, category }) => (
            <Link href={`/product/${category}/${_id}`} key={_id}>
              <motion.div variants={item}>
                <Product
                  name={name}
                  imgUrl={imgUrl}
                  price={price}
                  seller={seller}
                />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
      <LogosList />
      <Suscribe />
    </ShopLayout>
  );
};

export default Home;
