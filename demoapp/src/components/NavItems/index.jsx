import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/authContext";

export const NavItems = () => {
    const navigate = useNavigate();
    const {isLoggedIn,setLogout} = useContext(AuthContext);
    const navLinks = [{
        id: 1,
        name: "Login",
        url: "/login"
    },
    {
        id: 2,
        name: "Register",
        url: "/register"
    },
    {
        id: 3,
        name: "Products",
        url: "/products"
    },
    {
        id: 4,
        name: "Cart",
        url: "/cart"
    },
    {
        id: 5,
        name: "Logout",
        url: "/login"
    }];

    const navContent = () => {

        return provideLinkArray().map((item, index) => {

            return (<li class="nav-item" key={index}>
                <a class="nav-link" href="#" onClick={e => {
                    if(item.url=='/login'){
                        // localStorage.removeItem('token');
                        setLogout();
                    }
                    navigate(item.url)
                }}>{item.name}</a>
                {/* <a class="nav-link" href={item.url} >{item.name}</a> */}
            </li>
            )
        })
    }
    const provideLinkArray = ()=>{
        if(isLoggedIn||localStorage.getItem('token')!=null){
            return navLinks.filter(x=>x.id>2);
        }else{
            return navLinks.filter(x=>x.id<=2)
        }
    }

    return (
        <ul class="navbar-nav me-auto">
            {navContent()}
        </ul>

    )
}