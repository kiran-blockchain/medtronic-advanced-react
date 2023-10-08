import React, { useState } from "react"


export const Component1 =React.memo(({name})=>{
    console.log(`I am c1 ${name}`)
    return<h1>C1 {name}</h1>
})
export const Component2 =({name2})=>{
    console.log(`I am c2 ${name2}`)
    return<h1>C2 {name2}</h1>
}

export const Parent =()=>{
    const[count,setCount] = useState(0)
    const[name1,setname1] = useState("Kiran")
    const[name2,setname2] = useState("PVS")
    return(
        <div>
            <h1>Count: {count}</h1>
            <Component1 name={name1}/>
            <Component2 name2={name2}/>
            <button className="btn btn-primary"
                onClick={e=>{
                    setCount(count+1)
                }}
            >Increment</button>
             <button className="btn btn-primary"
                onClick={e=>{
                    setname1("ABCD")
                }}
            >Name1</button>
             <button className="btn btn-primary"
                onClick={e=>{
                    setname2("XYZ")
                }}
            >Name1</button>
        </div>
    )
}