export * from "./action";
export const authLoading = (state) => state.auth.loading;
export const authErrorMessage = (state) => state.auth.errMessage;
export const authUser = (state) => state.auth.currentUser;
export const authSpecies = (state) => state.auth.currentSpecies;
export const authDataSix = (state) => state.auth.dataSix;
