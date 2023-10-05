import { useContext, useState } from "react"
import { postDataByAxios } from "../services"
import { useNavigate } from "react-router"
import { AuthContext } from "../context/authContext"

export const Login = () => {
    const {setLogin} =useContext(AuthContext)
    const navigate = useNavigate();
    const [login, setSignin] = useState({ username: 'kminchelle', password: '0lelplR' })
    const handleLogin = async () => {
        try {
            let result = await postDataByAxios('https://dummyjson.com/auth/login', login);
            setLogin(result.token);
            console.log(result)
            navigate("/products");
        }catch(ex){
            console.log(ex);
            navigate("/login")

        }
    };
    return (
        <div className="container">
            <div class="row mb-3">
                <label for="username" class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-10">
                    <input type="username"
                        name="username"
                        class="form-control"
                        id="username"
                        value={login.username}
                        onChange={e => {
                            setSignin({ ...login, username: e.target.value })
                        }} />
                </div>
            </div>
            <div class="row mb-3">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" name="password"
                        class="form-control" id="password"
                        value={login.password}
                        onChange={e => {
                            setLogin({ ...login, password: e.target.value })
                        }} />
                </div>
            </div>
            <div class="row mb-3">
                <button className="btn btn-primary"
                    onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    )
}