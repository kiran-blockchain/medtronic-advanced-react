import { useEffect, useState } from "react";
import { Dropdown } from "./components/Dropdown";
import { Header } from "./components/Header";
import { Textbox } from "./components/Textbox";
import { register } from "./data/register";
import { getData, getDataByAxios } from "./services";

export const App =()=>{
  const nameOfTheCompany='Medtronic';
  
  return(
  <div>
    <Header companyName={nameOfTheCompany}/>
    <div className="container mt-5">
      <Register/>
    </div>
  </div>
  )
};

