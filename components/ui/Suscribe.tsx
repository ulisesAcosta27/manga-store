import React, { FC } from "react";

export const Suscribe: FC = () => {
  return (
    <div className="container mx-auto text-center">
      <div className="py-2">
        <h3 className="text-3xl font-bold">Suscribe</h3>
        <p className="font-light text-lg">
          Suscríbase para obtener ofertas especiales, obsequios gratuitos y
          ofertas únicas en la vida.
        </p>
      </div>
      <form className="py-4">
        <input
          type="text"
          name="suscribe"
          placeholder="example@gmail.com"
          className="rounded-full border border-gray-400 px-4 w-[25rem] h-10"
        />
        <button type="submit" className="global-button px-4 h-10 ml-2">
          Suscribirse
        </button>
      </form>
    </div>
  );
};
