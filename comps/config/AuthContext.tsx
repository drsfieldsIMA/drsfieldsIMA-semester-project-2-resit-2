/** @format */

import useLocalStorage from "./useLocalStorage";
import { createContext, useContext, ReactNode, useState } from "react";
import { useRouter } from "next/router";
import React from "react";

type authContextType = {
	user: { username: "" };
	jwt: any;
};

const authContextDefaultValues: authContextType = {
	user: { username: "" },
	jwt: "",
};

export const AuthContext: any = React.createContext([null, () => {}]);

export const useAuth: any = () => React.useContext(AuthContext);

type Props = {
	children: ReactNode;
};

export function AuthProvider({ children }: Props) {
	const [auth, setAuth] = useLocalStorage("auth", null);
	return (
		<>
			<AuthContext.Provider value={[auth, setAuth]}>
				{children}
			</AuthContext.Provider>
		</>
	);
}

export default AuthContext;
