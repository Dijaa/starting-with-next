import React from "react";

interface Props {
    error: boolean;
    errorMessage: string;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default function PasswordField(props:Props) {
    return (
        <div>
            <label htmlFor="password" className="sr-only">
                Senha
            </label>
            <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                    props.error ? "border-red-300" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Senha"
                onBlur={props.onBlur}
            />
            {props.error && (
                <p className="mt-2 text-sm text-red-600" id="password-error">
                    {props.errorMessage}
                </p>
            )}
        </div>
    );
}