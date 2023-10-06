import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";


const Product = ({product}) => {
    const dispatch= useDispatch();

    return (
        <div class="card mt-3" style={{ width: "18rem", height:"40rem" }}>
            <img src={product.thumbnail} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{product.brand}-{product.title}</h5>
                <p class="card-text">{product.description}</p>
                <p class="card-text">{product.price}</p>
                <p class="card-text">{product.rating}</p>
                <a href="#" class="btn btn-primary" onClick={()=>{
                    dispatch(addToCart(product));
                }}>Add to Cart</a>
            </div>
        </div>
    )
}

export default Product;