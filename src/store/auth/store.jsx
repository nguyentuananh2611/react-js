import { createSlice } from "@reduxjs/toolkit";
import {
  loginReducer,
  logoutReducer,
  getInfoReducer,
  getSpeciesReducer,
  getDataSixReducer,
  addSpeciesReducer,
  deleteSpeciesReducer
} from "./action";


const initialState = {
  logged: localStorage.getItem("t") ? true : false,
  currentUser: undefined,
  loading: false,
  loadingInfo: false,
  errMessage: "",
  currentSpecies: undefined,
  loadingSpecies: false,
  dataSix: undefined,
  addSpecies: undefined,
  deleteSpecies: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    loginReducer(builder);
    getInfoReducer(builder);
    logoutReducer(builder);
    getSpeciesReducer(builder);
    getDataSixReducer(builder);
    addSpeciesReducer(builder);
    deleteSpeciesReducer(builder);
  },
});

const { action, reducer } = authSlice;
export default reducer;
