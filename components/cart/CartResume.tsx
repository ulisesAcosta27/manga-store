import React from "react";
import mercadoPago from "@/common/mercado-pago.png";
import pagoFacil from "@/common/pago-facil.jpg";
import Image from "next/image";
import { CiCreditCard1 } from "react-icons/ci";

export const CartResume = () => {
  return (
    <div className="shadow-lg border border-gray-200 rounded-md h-[34rem] w-[28rem] p-6">
      <div className="flex items-center justify-between py-4">
        <p className="text-xl font-bold">Resumen: </p>
        <p className="text-xl font-bold">12 producto(s)</p>
      </div>
      <div className="pb-4">
        <div className="global-div-summary">
          <p>Nombre completo:</p>
          <p>Ulises David Acosta</p>
        </div>
        <div className="global-div-summary">
          <p>Direccion:</p>
          <p>Crnel. Arenas 986</p>
        </div>
        <div className="global-div-summary">
          <p>Provincia:</p>
          <p>San Salvador de Jujuy</p>
        </div>
        <div className="global-div-summary">
          <p>Cuidad:</p>
          <p>El carmen</p>
        </div>
        <div className="global-div-summary">
          <p>Telefono:</p>
          <p>3885390611</p>
        </div>
      </div>
      <div className="">
        <div className="global-div-summary">
          <h5 className="font-bold text-base text-gray-500">
            Total sin inpuestos:
          </h5>
          <p className="font-bold text-base text-gray-500">$7000</p>
        </div>
        <div className="global-div-summary">
          <h5>Impuestos:</h5>
          <p>15%</p>
        </div>
        <div className="global-div-summary">
          <h5 className="font-bold text-lg">Total con inpuestos:</h5>
          <p className="font-bold text-lg">$8050</p>
        </div>
        <div className="py-6">
          <h5 className="font-bold text-base mb-4">Metodos de pagos:</h5>
          <button className="global-button-summary p-2">
            <Image src={mercadoPago} alt="" width={110} />
          </button>
          <button className="global-button-summary p-1">
            <Image src={pagoFacil} alt="" width={70} />
          </button>
          <button className=" flex items-center justify-center w-full rounded-md bg-black text-white h-[3rem]">
            <CiCreditCard1 size={30} />
            <p className="font-semibold pl-1">Tarjeta de Debito o Credito</p>
          </button>
        </div>
      </div>
    </div>
  );
};
