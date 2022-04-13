import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICountryDetails } from '../../shared/types/ICountryDetails';
import { LoadingStatusEnum } from '../../shared/enums';
import axios, { AxiosError } from 'axios';
import { getCountryByName } from '../../services/api/config';

interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

export const fetchCounryDetails = createAsyncThunk
(
  'countryDetails/fetchCounryDetails',
  async (name: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(getCountryByName(name));
      return response.data;
    } catch (err: any) {
      let error: AxiosError<ValidationErrors> = err
      return rejectWithValue(error.message)
    }
  }
);

interface CountryState {
  country: ICountryDetails;
  loading: LoadingStatusEnum;
  error: string;
}

const initialState = {
  country: {},
  loading: LoadingStatusEnum.pending,
  error: '',
} as CountryState;

export const countryDetailsSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setCountryDetails: (state, action) => {
      state.country = action.payload;
    },
    setLoadPending: (state) => {
      state.loading = LoadingStatusEnum.pending;
    },
  },
  extraReducers: (bulder) => {
    bulder.addCase(
      fetchCounryDetails.fulfilled,
      (state, action: PayloadAction<ICountryDetails[]>) => {
        state.loading = LoadingStatusEnum.succeeded;
        state.country = action.payload[0];
      }
    );
    bulder.addCase(fetchCounryDetails.pending, (state) => {
      state.loading = LoadingStatusEnum.pending;
    });
    bulder.addCase(fetchCounryDetails.rejected, (state, action) => {
      state.loading = LoadingStatusEnum.failed;
      if (typeof action.payload === 'string') state.error = action.payload;
    });
  },
});

export const { setLoadPending , setCountryDetails } = countryDetailsSlice.actions;
export default countryDetailsSlice.reducer;
