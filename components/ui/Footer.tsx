import React, { FC } from "react";
import { IDataLinksFooter } from "@/interfaces";
import Link from "next/link";

export const Footer: FC = () => {
  const aboutUs: IDataLinksFooter[] = [
    { id: 2, name: "Contáctanos", link: "contact-us" },
    { id: 1, name: "Sobre Nosotros", link: "about-us" },
    {
      id: 4,
      name: "Preguntas frecuentes",
      link: "frequently-asked-questions",
    },
    { id: 5, name: "Tarjetas de descuentos", link: "Gift-Cards" },
    { id: 3, name: "Estimaciones de pre-pedidos", link: "pre-order-estimates" },
  ];

  const policyAndTerm: IDataLinksFooter[] = [
    { id: 2, name: "Política de privacidad", link: "privacy-policy" },
    { id: 4, name: "Condiciones del servicio", link: "terms-of-service" },
    { id: 1, name: "Proceso de entrega", link: "delivery-process" },
    { id: 5, name: "Blind Box Manga", link: "blind-box-manga" },
    { id: 3, name: "Política de reembolso", link: "refund-policy" },
  ];

  const SocialMedias: IDataLinksFooter[] = [
    { id: 1, name: 'Tiktok', link: 'tiktok' },
    { id: 3, name: 'Youtube', link: 'youtube' },
    { id: 2, name: 'Instagram', link: 'instagram' }
  ]
  
  return (
    <div className="w-full h-[30rem] bg-[#2e2e2e] text-white mt-[4rem]">
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="grid grid-cols-3 w-[50%]">
          <div className="text-center">
            <h5 className="py-2 font-semibold text-lg">Informacion de la tienda</h5>
            {aboutUs.map(({ link, id, name }) => (
              <Link href={'/'} key={id}>
                <p className="font-light text-sm py-[.1rem]">{name}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <h5 className="py-2 font-semibold text-lg">Politica y Privacidad</h5>
            {policyAndTerm.map(({ link, id, name }) => (
              <Link href={'/'} key={id}>
                <p className="font-light text-sm py-[.1rem]">{name}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <h5 className="py-2 font-semibold text-lg">Nuestas Redes Sociales</h5>
            {SocialMedias.map(({ link, id, name }) => (
              <Link href={'/'} key={id}>
                <p className="font-light text-sm py-[.1rem]">{name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
