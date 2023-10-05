import axios from "axios";
import { useEffect, useState } from "react"

export const useApi = (url, type, payload) => {
    const [apiResult, setData] = useState({
        data: '',
        error: ''
    });
    //setData({data:"ii888",error:""})
    // setTimeout(()=>{
    //     setData({data:"I am after 10 mins",error:""})
    // },10000)
    // useEffect( () => {
    //     setTimeout(()=>{
    //         setData({data:"I am after 10 mins",error:""})
    //     },10000)
    //     const api = async () => {
    //         let result;
    //         try {

    //             if (type == 'get') {
    //                 result = await axios.get(url);
    //             } else if (type == 'post') {
    //                 result = await axios.post(url, payload);                 
    //             }
    //             setData({ data: result.data,error:"" })
    //         }
    //         catch (ex) {
    //             console.log(ex);
    //             setData({ ...apiResult, error: "Error in api" })

    //         }
    //     };
    //     api();
    // }, [])

    return apiResult;
}