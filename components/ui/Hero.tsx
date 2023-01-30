import Link from "next/link";
import React, { FC } from "react";
import { motion } from "framer-motion";

export const Hero: FC = () => {
  return (
    <div className="bg-hero w-full h-[45rem] bg-cover bg-center flex items-center justify-center text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex items-center justify-center flex-col"
      >
        <p className="text-lg">UP TO 60% OFF</p>
        <h1 className="text-5xl font-bold">CLEARANCE ITEMS!</h1>
        <p className="text-lg">You wont find these products cheaper!</p>
        <Link
          href={"/"}
          passHref
          className="bg-black text-white px-8 p-2 rounded-full my-2"
        >
          Comprar ahora
        </Link>
      </motion.div>
    </div>
  );
};
