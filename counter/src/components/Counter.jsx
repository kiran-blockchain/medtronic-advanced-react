import { useSelector } from "react-redux"

export const Counter =()=>{
    const count = useSelector(x=>x.counter)
    console.log(count)
    return(
        <h1>Count:{count.count}</h1>
    )
}