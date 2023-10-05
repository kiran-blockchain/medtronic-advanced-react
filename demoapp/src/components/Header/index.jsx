import { useContext } from "react"
import { NavItems } from "../NavItems"
import { CartContext } from "../../context/cartContext"

export const Header = (props) => {
    const {cartItemCount} = useContext(CartContext)
    //const companyName="Medtronic";
    return (
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">{props.companyName}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <NavItems />
                    <label className="btn btn-danger">Cart Count :{cartItemCount}</label>

                </div>
            </div>
        </nav>
    )
}