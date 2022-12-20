import { configureStore } from "@reduxjs/toolkit";
import PageReducer from "./PageReducer";
const store = configureStore({
    reducer :{
     page :PageReducer
    }
})

export default store