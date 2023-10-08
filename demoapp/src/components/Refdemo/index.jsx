import { useRef, useEffect, useState } from "react";

export  const InputFocus=() =>{

  const [count,setCount] =useState(0)
  const inputRef = useRef();
//   useEffect(() => {
    
//   }, []);

  return(
    <div>
        <button onClick={()=>{
             
            inputRef.current.style="color:red;background-color:green"
            
        }}>Click Me</button>
        <input ref={inputRef} type="text" />
        <input ref={inputRef} type="text" />
        <input ref={inputRef} type="text" />
    </div>
  ) 
}
