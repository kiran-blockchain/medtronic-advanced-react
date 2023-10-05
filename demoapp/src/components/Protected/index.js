import { Navigate } from "react-router-dom"

const Protected = (props) => {
    console.log(props);
    if (localStorage.getItem('token')==null) {
        return <Navigate to="/" />
    }
    return props.children
}
export default Protected;