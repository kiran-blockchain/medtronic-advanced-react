import { Route, Routes } from "react-router"
import { Login } from "./pages/login"
import { Register } from "./pages/regsiter"

import { Cart } from "./pages/cart"
import Protected from "./components/Protected"
import Products from "./pages/products"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products"
                element={<Protected>
                    <Products/>
                </Protected>} />
            <Route path="/cart"
                element={<Protected><Cart />
                </Protected>} />
            <Route path="*" element={<Login />} />
        </Routes>
    )
}