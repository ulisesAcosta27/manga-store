import Image from 'next/image';
import React from 'react'

const IMAGE =
  "https://res.cloudinary.com/dz6225u4u/image/upload/v1674494043/replit/vxeevcyu1bhnx5ouyjeh.png";

export const CartProducts = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="border border-gray-200 shadow-md w-full h-[11rem] rounded-md grid grid-cols-4">
        <div className="flex items-center justify-center py-1">
          <Image src={IMAGE} alt="" width={100} height={100} />
        </div>
        <div className="p-4 col-span-3 flex flex-col justify-center">
          <h5 className="text-xl font-bold pb-2">Jujutsu Kaisen Vol. 8</h5>
          <div className="flex font-light pb-1">
            <p className="font-bold">Editorial:</p>
            <h5 className="pl-2">VIZ</h5>
          </div>
          <div className="flex font-light pb-1">
            <p className="font-bold">Precio unitario:</p>
            <h5 className="pl-2">$2,800.00</h5>
          </div>
          <div className="flex font-light pb-1">
            <p className="font-bold">Cantidad producto(s):</p>
            <h5 className="pl-2">1</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
