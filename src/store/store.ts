import { configureStore } from '@reduxjs/toolkit';
import { countriesSlice } from './reducer/CountriesSlice';
import { countryDetailsSlice } from './reducer/CountryDetailsSlice';


const store = configureStore({
  reducer: {
    countriesReducer: countriesSlice.reducer,
    countryDetailsReducer: countryDetailsSlice.reducer     
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = typeof store.dispatch
