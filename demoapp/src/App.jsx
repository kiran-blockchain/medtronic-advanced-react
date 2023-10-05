import { useEffect, useState } from "react";
import { Dropdown } from "./components/Dropdown";
import { Header } from "./components/Header";
import { Textbox } from "./components/Textbox";
import { register } from "./data/register";
import { getData, getDataByAxios } from "./services";
import { Register } from "./pages/regsiter";
import { CartContext } from "./context/cartContext";

export const App = () => {
  const nameOfTheCompany = 'Medtronic';
  const [cart, setCart] = useState(0);
  const addItemToCart =()=>{
    setCart(cart+1);
  };


  return (
    <div>
      <CartContext.Provider value={{cartItemCount:cart,setCartItem:addItemToCart}}>
        <Header companyName={nameOfTheCompany} />
        <div className="container mt-5">

          <Register />
        </div>
      </CartContext.Provider>
    </div>
  )
};

