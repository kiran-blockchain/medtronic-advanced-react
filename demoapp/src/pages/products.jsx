import { useEffect, useState } from "react";
import Product from "../components/Product";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";

const Products = () => {
    const { products,
        isLoading,
        error } = useSelector(x => x.product)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    const renderProducts = () => {
        if (products) {
            return products.map((item, index) => {
                console.log(item);
                return <div class="col-md-3"><Product product={item} key={index} /></div>
            });
        }
        return <div>There are no products</div>;
    }
    const showLoader = () => {
        return (isLoading && <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar" aria-valuenow="75" aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "100%" }}></div>
        </div>)
    }
    const showError = () => {
        return (error && <div class="alert alert-danger" role="alert">
            Error in fetching the data
        </div>)
    }
    return (
        <div className="container">
            <div class="row mt-5">
                {showLoader()}
                {showError()}
                {renderProducts()}
            </div>
        </div>
    )

}

export default Products;

//
// totalNumberOfRecords
// NumberOfRecordsPerPage
// CurrentPage