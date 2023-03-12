import { createSlice } from "@reduxjs/toolkit";



const uiSlice = createSlice({
    name:"ui",
    initialState:{cartIsVisible:false},
    reducers:{
        toggle(state){
            state.cartIsVisible=!state.cartIsVisible
            console.log('button clicked')
        }
    }
})

export const uiActions= uiSlice.actions

export default uiSlice;