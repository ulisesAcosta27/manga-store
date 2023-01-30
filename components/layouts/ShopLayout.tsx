import React, { FC, ReactNode } from "react";
import Head from "next/head";
import { Footer, Navbar, InfoNavbar } from "../ui";

interface Props {
  children: ReactNode;
  name: string;
  description: string;
}

export const ShopLayout: FC<Props> = ({ children, name, description }) => {
  return (
    <div>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Head>

      <nav>
        <InfoNavbar />
        <Navbar />
      </nav>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
