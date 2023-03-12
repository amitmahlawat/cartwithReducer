import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./UI-Slice";
import cartSlice from "./Cart-Slice";
const Store = configureStore({
    reducer:{ui:uiSlice.reducer,cart:cartSlice.reducer}
    
})


export default Store;