
import { useEffect, useState, lazy, Suspense } from "react";
import { Dropdown } from "./components/Dropdown";
import { Header } from "./components/Header";
import { Textbox } from "./components/Textbox";
import { register } from "./data/register";
import { getData, getDataByAxios } from "./services";
import { Register } from "./pages/regsiter";
import { CartContext } from "./context/cartContext";
import { AppRoutes } from "./AppRoutes";
import { AuthContext } from "./context/authContext";
import { InputFocus } from "./components/Refdemo";
import { DemoUsePrevious } from "./components/Refdemo/Index3";
import { Toggle } from "./components/Toggle";

import Dashboard from "./components/DemoMemo";
import FilterProducts from "./components/FilterProducts";
import { Parent } from "./components/Example1";
import ParentComponent from "./components/DemoCallback";
import ItemList from "./components/DemoCallback/index2";
//import LazyDemo from "./components/LazyDemo";

const LazyDemo = lazy(() => import('./components/LazyDemo'));
const Products= lazy(()=>import("./pages/products"))

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
        {/* <Header companyName={nameOfTheCompany} />
        <AppRoutes /> */}
        {/* <InputFocus />
        <DemoUsePrevious />
        <Toggle />
        <h1>I am first</h1>
        <LazyDemo userId="1" />
        <h1>I am lazy</h1>
        {/* <Dashboard/> */}
        {/* <Parent/> */}
        {/* <ParentComponent/> */}
        <ItemList/>
      </div>

    </AuthContext.Provider>
  )
};

