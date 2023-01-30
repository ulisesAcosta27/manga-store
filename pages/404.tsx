import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import img from "@/common/404.jpg";
import Link from 'next/link';

const ErrorPage: NextPage = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center flex-col">
      <div className="py-4">
        <h1 className="font-dekko text-4xl text-center">Error 404</h1>
        <h2 className="font-dekko text-4xl">
          Lo sentimos esta pagina no existe
        </h2>
      </div>
      <Image src={img} width={400} alt={"error 404 page not found"} />
      <p className="font-dekko text-3xl py-4">
        por favor diríjase al{" "}
        <Link href={"/"} passHref className="font-dekko text-3xl underline">
          Home
        </Link>
      </p>
    </div>
  );
}

export default ErrorPage