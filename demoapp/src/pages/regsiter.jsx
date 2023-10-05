import { useContext, useEffect, useState } from "react";
import { useApi } from "../hooks/useApi"
import { CartContext } from "../context/cartContext";

export const Register =()=>{
    const [data,setData] =useState('default');
    const {setCartItem} = useContext(CartContext)
    
   // const countryList = useApi("https://restcountries.com/v2/all",'get');

    return(
        <div>   
             <h1>{data}</h1>
             {/* <>{JSON.stringify(countryList)}</> */}
             <button className="btn btn-primary" onClick={e=>{
                setCartItem();
             }}>Add To  cart</button>
        </div>
    
        // <h1>{JSON.stringify(countryList)}</h1>
    )
}