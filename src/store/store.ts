import { configureStore } from '@reduxjs/toolkit';
import { countrySlice } from './reducer/CountrySlice';
import { countryDetailsSlice } from './reducer/CountryDetailsSlice';


const store = configureStore({
  reducer: {
    countriesReducer: countrySlice.reducer,
    countryDetailsReducer: countryDetailsSlice.reducer     
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = typeof store.dispatch
