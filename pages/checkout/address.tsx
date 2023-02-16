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
              <label className="global-label-address">Dirección</label>
              <input type="text" className="global-input-address" />
            </div>
            <div className="global-div-address">
              <label className="global-label-address">
                Dirección 2 (Opcional)
              </label>
              <input type="text" className="global-input-address" />
            </div>
          </div>
          <div className="flex flex-col px-4">
            <div className="global-div-address">
              <label className="global-label-address">Código postal</label>
              <input type="text" className="global-input-address" />
            </div>
            <div className="global-div-address">
              <label className="global-label-address">Provincia</label>
              <input type="text" className="global-input-address" />
            </div>
            <div className="global-div-address">
              <label className="global-label-address">Ciudad</label>
              <input type="text" className="global-input-address" />
            </div>
            <div className="global-div-address">
              <label className="global-label-address">Teléfono</label>
              <input type="text" className="global-input-address" />
            </div>
          </div>
        </div>
        <div className="p-4 flex">
          <input type="checkbox" />
          <p className="text-gray-500 text-sm pl-1">
            Desea guardar esta información
          </p>
        </div>
        <div className="w-full flex justify-center">
          <button className="global-button px-4 text-lg">Siguiente</button>
        </div>
      </div>
    </ShopLayout>
  );
};

export default Address;
