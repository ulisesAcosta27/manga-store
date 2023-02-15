import { ShopLayout } from "@/components/layouts";
import React from "react";

const Address = () => {
  return (
    <ShopLayout
      name="Manga Store - Address"
      description="please enter your address in order to proceed with the purchase."
    >
      <div className="container mx-auto">
        <h4 className="font-bold text-2xl py-6">Address</h4>
        <div className="grid grid-cols-2 mt-2">
          <div className="flex flex-col px-4">
            <div className="global-div-address">
              <label className="global-label-address">Nombre</label>
              <input type="text" className="global-input-address" />
            </div>
            <div className="global-div-address">
              <label className="global-label-address">Apellido</label>
              <input type="text" className="global-input-address" />
            </div>
            <div className="global-div-address">
              <label className="global-label-address">Direccion</label>
              <input type="text" className="global-input-address" />
            </div>
            <div className="global-div-address">
              <label className="global-label-address">
                Direccion 2 (Opcional)
              </label>
              <input type="text" className="global-input-address" />
            </div>
          </div>
          <div className="flex flex-col px-4">
            <div className="global-div-address">
              <label className="global-label-address">Codigo Postal</label>
              <input type="text" className="global-input-address" />
            </div>
            <div className="global-div-address">
              <label className="global-label-address">Cuidad</label>
              <input type="text" className="global-input-address" />
            </div>
            <div className="global-div-address">
              <label className="global-label-address">Pais</label>
              <input type="text" className="global-input-address" />
            </div>
            <div className="global-div-address">
              <label className="global-label-address">Telefono</label>
              <input type="text" className="global-input-address" />
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm p-4">
          Desea guardad esta informacion
        </p>
        <div className="w-full flex justify-center">
          <button className="global-button px-4 text-lg">
            Siguiente
          </button>
        </div>
      </div>
    </ShopLayout>
  );
};

export default Address;
