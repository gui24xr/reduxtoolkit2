import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userslice";
import postsSlice from "./postsSlice";


const productsSlice = {}

export const store = configureStore({
    reducer:{
        user: userSlice,
        posts: postsSlice
        
    }
})



