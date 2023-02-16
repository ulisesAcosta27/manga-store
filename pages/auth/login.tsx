import React from 'react'
import { NextPage } from "next";
import { useRouter } from "next/router";
import { AuthLayout } from "@/components/layouts";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useContextAuth } from "@/contexts/";
import { IFormRegister } from "@/interfaces";

const Login: NextPage = () => {
    const { getUser } = useContextAuth();
    const router = useRouter();
    const { handleSubmit, handleChange, values, errors } = useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        username: Yup.string()
          .max(15, "Tu nombre puede tener como maximo 15 caracteres")
          .required("valor requerido"),
        email: Yup.string()
          .email("Por favor ingrese un email valido")
          .required("valor requerido"),
        password: Yup.string()
          .min(6, "Tu email puede ser de minimo 6 caracteres")
          .required("valor requerido"),
      }),
      onSubmit: async (userValues: IFormRegister) => {
        await getUser(userValues);
        router.push("/");
      },
    });

  return (
    <AuthLayout name="Manga Store - Login">
      <h1 className="tittle-auth">Login</h1>

      <form
        className="w-[28rem] m-4 shadow-lg p-4 flex flex-col justify-center"
        onSubmit={handleSubmit}
      >
        <div className="div-input">
          <label htmlFor="email" className="label-input">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="input-input"
            placeholder="email@gmail.com"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email ? (
            <div className="error-message-input">{errors.email}</div>
          ) : null}
        </div>
        <div className="div-input my-2">
          <label htmlFor="password" className="label-input">
            Contraseña
          </label>
          <input
            type="text"
            name="password"
            id="password"
            className="input-input"
            placeholder="una contraseña segura"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password ? (
            <div className="error-message-input">{errors.password}</div>
          ) : null}
        </div>
        <button type="submit" className="global-button w-full my-3">
          Registrarse
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login