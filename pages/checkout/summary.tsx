import React from "react";
import { ShopLayout } from "@/components/layouts";
import { CartResume, CartProducts } from "@/components/cart";

const Summary = () => {
  return (
    <ShopLayout name="Manga Store - Summary" description="Summary">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold py-6">Sumario</h3>
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <CartProducts />
          </div>
          <div className="flex items-center justify-center">
            <CartResume />
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

export default Summary;
