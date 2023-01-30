import React, { FC } from 'react'
import { IoClose } from 'react-icons/io5'
import { useContextUI } from '@/contexts';

export const SlideMenu: FC = () => {
  const state = useContextUI((state) => state.isOpen);
  const { setIsOpen } = useContextUI()
  return (
    <div className="bg-white w-[25rem] h-[100vh] absolute top-0 right-0">
      <div className="my-9 mx-8 relative bg-red-300 h-8">
        <button className="absolute right-0" onClick={() => setIsOpen(!state)}>
          <IoClose size={30} className="text-gray-500" />
        </button>
      </div>
    </div>
  );
}
