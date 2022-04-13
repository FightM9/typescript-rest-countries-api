import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ALL_COUNTRIES } from '../../services/api/config';
import { ICountry } from '../../shared/types/ICountry';
import axios, { AxiosError } from 'axios';
import { sortArrayofObjects } from '../../utils';
import { LoadingStatusEnum } from '../../shared/enums';

interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

export const fetchCounries = createAsyncThunk(
  'countries/fetchCounries',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(ALL_COUNTRIES);
      return response.data;
    } catch (err: any) {
      let error: AxiosError<ValidationErrors> = err;
      return rejectWithValue(error.message);
    }
  }
);

// Sort

export enum SortOrderEnum {
  asc = 'ASC',
  desc = 'DESC',
}

export enum SortOptionEnum {
  name = 'NAME',
  population = 'POPULATION',
  area = 'AREA',
}

type SortType = {
  option: SortOptionEnum;
  order: SortOrderEnum;
};

// Countries view

export enum ViewModesEnums {
  list = 'LIST',
  grid = 'GRID',
}

type MinMaxValueType = {
  min: number;
  max: number;
};

interface CountriesState {
  countries: ICountry[];
  filteredCountries: ICountry[];
  search: string;
  region: string;
  area: MinMaxValueType;
  population: MinMaxValueType;
  sort: SortType;
  viewMode: ViewModesEnums;
  loading: LoadingStatusEnum;
  error: string;
}

const initialState = {
  countries: [],
  filteredCountries: [],
  search: '',
  region: 'All regions',
  sort: { option: SortOptionEnum.name, order: SortOrderEnum.asc },
  area: { min: 0, max: Number.MAX_SAFE_INTEGER },
  population: { min: 0, max: Number.MAX_SAFE_INTEGER },
  viewMode: ViewModesEnums.grid,
  loading: LoadingStatusEnum.pending,
  error: ''
} as CountriesState;

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setFilter: (state) => {
      if (state.loading !== LoadingStatusEnum.succeeded) return;
      let countries = state.countries;

      // Search Filer
      if (state.search) {
        countries = countries?.filter((country) =>
          country.name.common.toLocaleLowerCase().includes(state.search)
        );
      }

      // Region filter
      if (state.region !== 'All regions') {
        countries = countries?.filter((country) =>
          country.region.includes(state.region)
        );
      }
      // Population filter
      countries = countries?.filter((country) => {
        if (country.population) {
          return (
            parseInt(country.population) > state.population.min &&
            parseInt(country.population) < state.population.max
          );
        }
        return false;
      });

      // Area filter
      countries = countries?.filter((country) => {
        if (country.area) {
          return (
            parseInt(country.area) > state.area.min &&
            parseInt(country.area) < state.area.max
          );
        }
        return false;
      });

      state.filteredCountries = countries;
    },
    setSort: (state) => {
      let countries = state.filteredCountries;
      if (countries.length === 0) return;

      switch (state.sort.option) {
        case SortOptionEnum.name: {
          countries.sort((a: ICountry, b: ICountry) =>
            a.name.common > b.name.common ? 1 : -1
          );
          break;
        }
        case SortOptionEnum.population: {
          sortArrayofObjects(countries, SortOptionEnum.population);
          break;
        }
        case SortOptionEnum.area: {
          sortArrayofObjects(countries, SortOptionEnum.area);
          break;
        }
        default:
          break;
      }

      state.sort.order === SortOrderEnum.asc
        ? (state.filteredCountries = countries)
        : (state.filteredCountries = countries.reverse());
    },
    resetFilter: (state) => {
      state.search = initialState.search;
      state.region = initialState.region;
      state.area = initialState.area;
      state.population = initialState.population;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
    setArea: (state, action: PayloadAction<MinMaxValueType>) => {
      state.area = action.payload;
    },
    setPopulation: (state, action: PayloadAction<MinMaxValueType>) => {
      state.population = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<SortOrderEnum>) => {
      state.sort.order = action.payload;
    },
    setSortOption: (state, action: PayloadAction<SortOptionEnum>) => {
      state.sort.option = action.payload;
    },
    setViewMode: (state, action: PayloadAction<ViewModesEnums>) => {
      state.viewMode = action.payload;
    },
  },
  extraReducers: (bulder) => {
    bulder.addCase(
      fetchCounries.fulfilled,
      (state, action: PayloadAction<ICountry[]>) => {
        state.loading = LoadingStatusEnum.succeeded;

        //  First sort by name in ascending order
        let countries = action.payload;
        countries.sort((a: ICountry, b: ICountry) =>
          a.name.common > b.name.common ? 1 : -1
        );

        // Save state
        state.countries = countries;
        state.filteredCountries = countries;
      }
    );
    bulder.addCase(fetchCounries.pending, (state) => {
      state.loading = LoadingStatusEnum.pending;
    });
    bulder.addCase(fetchCounries.rejected, (state, action) => {
      state.loading = LoadingStatusEnum.failed;
      if (typeof action.payload === 'string') state.error = action.payload;
    });
  },
});

export const {
  setCountries,
  setFilter,
  resetFilter,
  setSearch,
  setRegion,
  setArea,
  setPopulation,
  setSort,
  setSortOrder,
  setSortOption,
  setViewMode,
} = countriesSlice.actions;
export default countriesSlice.reducer;
