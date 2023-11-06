'use client';
import React from "react";
import { create } from "../actions";
import { dataForm } from "../actions";

export default function Home() {
 
async function createee(formData: FormData) {
  /* formData
    { name: 'name', value: '222' },
    { name: 'email', value: '222@aas.ccd' },
    { name: 'password', value: '333' },
    { name: 'confirm-password', value: '444' }
  */
  const formdata = Object.fromEntries(formData);
  const data: dataForm = {
    name: formdata['name'] as string,
    email: formdata['email'] as string,
    password: formdata['password'] as string,
    confirmPassword: formdata['confirm-password'] as string
  };
  console.log(formdata);
  create(data);
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crie sua conta
          </h2>
        </div>
        <form className="mt-8 space-y-6" action={createee}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm cursor-pointer"
                placeholder="Nome"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Endereço de Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm cursor-pointer"
                placeholder="Endereço de Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm cursor-pointer"
                placeholder="Senha"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Repita a Senha
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm cursor-pointer"
                placeholder="Repita a Senha"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
            >
              Registrar
            </button>
          </div>
        </form>
        <div className="text-sm">
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
          >
            Já tem uma conta? Entre aqui
          </a>
        </div>
      </div>
    </div>
  );
}
