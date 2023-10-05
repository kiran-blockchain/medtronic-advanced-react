import { useNavigate } from "react-router";

export const NavItems = () => {
    const navigate = useNavigate();
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
    }];

    const navContent = () => {

        return navLinks.map((item, index) => {

            return (<li class="nav-item" key={index}>
                <a class="nav-link" href="#" onClick={e => {
                    navigate(item.url)
                }}>{item.name}</a>
                {/* <a class="nav-link" href={item.url} >{item.name}</a> */}
            </li>
            )
        })
    }

    return (
        <ul class="navbar-nav me-auto">
            {navContent()}
        </ul>

    )
}