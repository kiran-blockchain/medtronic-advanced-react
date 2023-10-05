import { useEffect, useState } from "react";
import { Dropdown } from "./components/Dropdown";
import { Header } from "./components/Header";
import { Textbox } from "./components/Textbox";
import { register } from "./data/register";
import { getData, getDataByAxios } from "./services";
import { Register } from "./pages/regsiter";
import { CartContext } from "./context/cartContext";
import { AppRoutes } from "./AppRoutes";
import { AuthContext } from "./context/authContext";

export const App = () => {
  const nameOfTheCompany = 'Medtronic';
  const [cart, setCart] = useState(0);
  const [isLoggedIn, setLogin] = useState(false);
  const setLoggedInStatus = (token) => {
    localStorage.setItem('token', token);
    setLogin(true);
  }
  const setLogout = () => {
    localStorage.removeItem('token');
    setLogin(false);
  }
  const addItemToCart = () => {
    setCart(cart + 1);
  };


  return (
    <AuthContext.Provider value={{
      setLogin: setLoggedInStatus,
      setLogout: setLogout,
      isLoggedIn: isLoggedIn
    }}>
      <div>
        <Header companyName={nameOfTheCompany} />
        <AppRoutes />
      </div>
    </AuthContext.Provider>
  )
};

