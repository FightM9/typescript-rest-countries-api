import { configureStore } from "@reduxjs/toolkit";
import { countriesSlice } from "./reducer/countriesSlice";
import { searchSlice } from "./reducer/searchReduser";


const store = configureStore({
    reducer: {        
        search: searchSlice.reducer,
        countriesReducer: countriesSlice.reducer,
    },
})


export type RootState = ReturnType<typeof store.getState>
export default store
