import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, Dispatch } from "@reduxjs/toolkit";
import { store } from "../store";

const initialState = {
  language: "uz",
};
const configSlice = createSlice({
  name: "config",
  initialState: initialState,
  reducers: {
    setLanguage: (state, action) => {
      console.log(action.payload);
      state.language = action.payload;
    },
  },
});

// export const { setConfig } = configSlice.actions;

export const { setLanguage } = configSlice.actions;

export default configSlice.reducer;
