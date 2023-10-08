import { useDispatch } from "react-redux"
import { increment } from "../store/counterSlice";

export const Increment =()=>{
    const dispatch = useDispatch();
    return(
        <button onClick={e=>{
            dispatch(increment());
        }}> Increment</button>
    )
}