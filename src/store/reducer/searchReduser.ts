import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: '',
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {      
      return state = action.payload      
    },
  },
});

export const {setSearch} = searchSlice.actions
export default searchSlice.reducer


