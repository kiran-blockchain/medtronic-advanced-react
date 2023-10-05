import axios from "axios"
export const getData = (url) => {
    fetch(url).then(result => {
        console.log(result)
        return result.json()
    }).then(response => {
        console.log(response)
        return response;
    }).catch(err => {
        console.log(err);
    })
}
export const getDataByAxios = async (url) => {
    try {
        const result = await axios.get(url);
        return result.data;
    } catch (ex) {
        console.log(ex);
        return ex;
    }
}
export const postDataByAxios = async (url,payload) => {
    try {
        const result = await axios.post(url,payload);
        return result.data;
    } catch (ex) {
        console.log(ex);
        return ex;
    }
}