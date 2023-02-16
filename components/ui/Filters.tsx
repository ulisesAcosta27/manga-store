import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';

export const Filters = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto flex flex-col py-4 justify-center items-center">
        <h2 className="text-3xl font-semibold pt-2 pb-4">Filtros</h2>
        <div className="grid grid-cols-2 grid-rows-3 w-full gap-4 h-[36rem] text-white">
          <motion.div
            className="bg-filter-1 filter-square"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <p>MANGAS</p>
            <Link href={"/collections/mangas"}>
              <button className="global-button-filters">Ver Mas</button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-filter-2 filter-square"
          >
            <p>NOVELAS</p>
            <Link href={"/collections/novels"}>
              <button className="global-button-filters">Ver Mas</button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="filter-rectangle"
          >
            <p>FIGURAS DE ACCIÓN</p>
            <Link href={"/collections/figure-actions"}>
              <button className="global-button-filters">Ver Mas</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
