import { createContext } from "react";


export const CartContext = createContext({
    cartItemCount:0,
    setCartItem:()=>{}
})