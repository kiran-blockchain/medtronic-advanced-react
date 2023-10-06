import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {   
            totalProducts: 0,
            totalValue: 0,
            products: []
        
    },
    reducers: {
        addToCart: (state, data) => {
            let itemIndex = state.products.findIndex(x => x.id == data.id)
            let totalProducts = state.totalProducts + 1;
            let products =[...state.products,data.payload];
            let totalValue = products.map(x => x.price).reduce((x, y) => {
                return x + y
            });
            
            return{...state,totalProducts,totalValue,products}
        },
        removeFromCart: (state, data) => {

        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;