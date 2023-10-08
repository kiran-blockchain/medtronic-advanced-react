import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 100
    },
    reducers: {
        //define actions
        increment: (state, action) => {
            return { ...state, count: state.count + 1 }
        }
    }
});
//this will be used by component
export const {increment} = CounterSlice.actions;

//this will be used by store.
export default CounterSlice.reducer;