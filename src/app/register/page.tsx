"use client";
import React, { useEffect, useState } from "react";
import { create } from "../actions";
import { dataForm } from "../actions";
import { z } from "zod";
import PasswordField from "../components/PasswordField";

type FieldState = {
  value: string;
  error: boolean;
  errorMessage: string;
};

const ERROR_MESSAGES = {
  name: {
    too_small: "O nome deve ter pelo menos 3 caracteres",
  },
  email: {
    invalid: "O email não é válido",
  },
  password: {
    too_small: "A senha deve ter pelo menos 6 caracteres",
  },
  confirmPassword: {
    too_small: "A confirmação de senha deve ter pelo menos 6 caracteres",
  },
};

const PASSWORD_VALIDATION = z
  .string()
  .min(6, ERROR_MESSAGES.password.too_small);

export default function Home() {
  const [passwordState, setPasswordState] = useState<FieldState>({
    value: "",
    error: false,
    errorMessage: "",
  });

  const [confirmPasswordState, setConfirmPasswordState] = useState<FieldState>({
    value: "",
    error: false,
    errorMessage: "",
  });

  const schema = z.object({
    name: z.string().min(3, ERROR_MESSAGES.name.too_small),
    email: z.string().email(ERROR_MESSAGES.email.invalid),
    password: z.string().min(6, ERROR_MESSAGES.password.too_small),
    confirmPassword: z
      .string()
      .min(6, ERROR_MESSAGES.confirmPassword.too_small),
  });

  function validateField(
    e: React.FocusEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<FieldState>>
  ): void {
    const parsed = PASSWORD_VALIDATION.safeParse(e.target.value);
    if (!parsed.success) {
      setState({
        value: e.target.value,
        error: true,
        errorMessage: parsed.error.errors[0].message,
      });
      return;
    }
    setState({
      value: e.target.value,
      error: false,
      errorMessage: "",
    });
  }

  useEffect(() => {
    if (confirmPasswordState.value.length < 6) return;
    if (
      passwordState.value &&
      confirmPasswordState.value &&
      passwordState.value !== confirmPasswordState.value
    ) {
      setConfirmPasswordState({
        ...confirmPasswordState,
        error: true,
        errorMessage: "Senhas não conferem",
      });
      return;
    }
    setConfirmPasswordState({
      ...confirmPasswordState,
      error: false,
      errorMessage: "",
    });
  }, [passwordState, confirmPasswordState]);

  /*async function validation(formData: FormData) {
    const formdata = Object.fromEntries(formData);
    const data: dataForm = {
      name: formdata["name"] as string,
      email: formdata["email"] as string,
      password: formdata["password"] as string,
      confirmPassword: formdata["confirm-password"] as string,
    };
    if (data.password !== data.confirmPassword) {
    }
    // valid schema
    let dataParsed = schema.safeParse(data);
    if (!dataParsed.success) {
      // Aqui você pode retornar ou manipular as mensagens de erro
      console.log(dataParsed.error.errors);
    }
  }
*/
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crie sua conta
          </h2>
        </div>
        <form className="mt-8 space-y-6" action={create}>
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
              <PasswordField
                error={passwordState.error}
                errorMessage={passwordState.errorMessage}
                onBlur={(e) => validateField(e, setPasswordState)}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Repita a Senha
              </label>
              <PasswordField
                error={confirmPasswordState.error}
                errorMessage={confirmPasswordState.errorMessage}
                onBlur={(e) => validateField(e, setConfirmPasswordState)}
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
