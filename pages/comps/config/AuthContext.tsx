
import useLocalStorage from "./useLocalStorage"
import { createContext, useContext, ReactNode, useState} from "react";
import { useRouter } from "next/router";
import React from "react";


type authContextType = {
    user: any;
    jwt:any;
};

const authContextDefaultValues: authContextType = {
    user: null,
    jwt:"",
};

const AuthContext = React.createContext([null, () => {}]);

export const useAuth = () => React.useContext(AuthContext);

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [auth, setAuth] = useLocalStorage("auth",null);
    return (
        <>
            <AuthContext.Provider value={[auth, setAuth]}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

export default AuthContext;