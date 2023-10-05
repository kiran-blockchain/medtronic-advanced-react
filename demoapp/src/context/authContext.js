import { createContext, createFactory } from "react";

export const AuthContext=createContext({
    isLoggedIn:false,
    setLogin:()=>{},
    setLogout:()=>{}
});