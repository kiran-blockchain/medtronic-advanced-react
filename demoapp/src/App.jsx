import { useEffect, useState } from "react";
import { Dropdown } from "./components/Dropdown";
import { Header } from "./components/Header";
import { Textbox } from "./components/Textbox";
import { register } from "./data/register";
import { getData, getDataByAxios } from "./services";
import { Register } from "./pages/regsiter";
import { CartContext } from "./context/cartContext";
import { AppRoutes } from "./AppRoutes";

export const App = () => {
  const nameOfTheCompany = 'Medtronic';
  const [cart, setCart] = useState(0);
  const addItemToCart =()=>{
    setCart(cart+1);
  };


  return (
    <div>
        <Header companyName={nameOfTheCompany} />
        <AppRoutes/>
    </div>
  )
};

