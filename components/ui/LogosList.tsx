import React, { FC } from "react";
import kc from "@/common/kc.jpg";
import darkHorse from "@/common/dhorse.jpg";
import ninja from "@/common/ninja.png";
import square from "@/common/square.jpg";
import viz from "@/common/viz.jpg";
import Link from "next/link";
import Image from "next/image";

const listLogoItems = [
  { imgUrl: kc, name: "ks", link: "/" },
  { imgUrl: darkHorse, name: "darkHorse", link: "/" },
  { imgUrl: ninja, name: "ninja", link: "/" },
  { imgUrl: square, name: "square", link: "/" },
  { imgUrl: viz, name: "viz", link: "/" },
];

export const LogosList: FC = () => {
  return (
    <div className="container mx-auto my-2">
      <h2 className="text-3xl py-2 font-bold text-center">
        Las marcas que nos apoyan
      </h2>
      <div className="flex items-center justify-around p-4">
        {listLogoItems.map(({ name, imgUrl, link }) => (
          <Link href={link} key={name}>
            <Image src={imgUrl} alt={name} />
          </Link>
        ))}
      </div>
    </div>
  );
};
