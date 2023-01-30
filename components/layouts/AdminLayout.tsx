import Head from "next/head";
import React, { FC, ReactNode } from "react";
import { Navbar } from "../ui";

interface Props {
  children: ReactNode;
  name: string;
}

export const AdminLayout: FC<Props> = ({ children, name }) => {
  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>

      <nav>
        <Navbar />
      </nav>

      <main>
        { children }
      </main>
    </div>
  );
};
