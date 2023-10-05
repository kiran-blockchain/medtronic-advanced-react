import { Route, Routes } from "react-router"
import { Login } from "./pages/login"
import { Register } from "./pages/regsiter"
import { Products } from "./pages/products"
import { Cart } from "./pages/cart"

export const AppRoutes =()=>{
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<Login/>}/>
        </Routes>
    )
}