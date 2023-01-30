import React, { FC } from "react";

export const TableProduct: FC = () => {
  return (
    <table className="w-[35rem] mb-6">
      <tbody>
        <tr>
          <td className="pl-6 py-1 border border-slate-300 font-bold">
            BOOK NAME
          </td>
          <td className="pl-6 py-1 border border-slate-300">{"Marron"}</td>
        </tr>
        <tr>
          <td className="pl-6 py-1 border border-slate-300 font-bold">
            AUTHOR
          </td>
          <td className="pl-6 py-1 border border-slate-300">
            {"Gege Akutami"}
          </td>
        </tr>
        <tr>
          <td className="pl-6 py-1 border border-slate-300 font-bold">
            VENDOR
          </td>
          <td className="pl-6 py-1 border border-slate-300">{"VIZ"}</td>
        </tr>
        <tr>
          <td className="pl-6 py-1 border border-slate-300 font-bold">
            RELEASE DATE
          </td>
          <td className="pl-6 py-1 border border-slate-300">
            {" "}
            {"August 17, 2022"}
          </td>
        </tr>
        <tr>
          <td className="pl-6 py-1 border border-slate-300 font-bold">
            ID MANGA/NOVEL
          </td>
          <td className="pl-6 border border-slate-300">{"a6Wsf84A6wD8"}</td>
        </tr>
      </tbody>
    </table>
  );
};
