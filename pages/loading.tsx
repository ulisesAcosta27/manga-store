import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "@/common/Nanuka_1080px.jpg";

const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center flex-col">
      <h2 className="font-dekko text-4xl py-4">Loading...</h2>
      <Image src={img} width={400} alt={"error 404 page not found"} />
    </div>
  );
};

export default Loading;
