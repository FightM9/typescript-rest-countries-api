import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ALL_COUNTRIES } from "../../services/api/config";

export const fetchCounries = createAsyncThunk(
  "countries/fetchCounries",
  async () => {
    const response = await axios.get(ALL_COUNTRIES);
    return response.data;
  }
);

export enum LoadingStatus {
  pending = "pending",
  succeeded = "succeeded",
  failed = "failed",
}

interface CountriesState {
  countries: [];
  loading: LoadingStatus;
}

const initialState = {
  countries: [],
  loading: LoadingStatus.pending,
} as CountriesState;

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
  },
  extraReducers: (bulder) => {
    bulder.addCase(fetchCounries.fulfilled, (state, action) => {
      state.loading = LoadingStatus.succeeded;
      state.countries = action.payload;
    });
    bulder.addCase(fetchCounries.pending, (state, action) => {
      state.loading = LoadingStatus.pending;
    });
    bulder.addCase(fetchCounries.rejected, (state, action) => {
      state.loading = LoadingStatus.failed;      
    });
  },
});

export const { setCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
