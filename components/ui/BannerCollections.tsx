import Link from 'next/link'
import React, { FC } from 'react'

interface Props {
  name: string
  imgBanner: string
}

export const BannerCollections: FC<Props> = ({ name, imgBanner }) => {
  return (
    <div className={`${imgBanner} bg-cover bg-center w-full h-[25rem] flex items-center justify-center`} >
      <div className="text-center text-white">
        <Link href={"/"}>
          <p className="text-lg">/Home</p>
        </Link>
        <h2 className="text-3xl font-semibold">{ name }</h2>
      </div>
    </div>
  );
}
