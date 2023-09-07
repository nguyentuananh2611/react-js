import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  apiLogin,
  apiGetMe,
  apiLogout,
  apiGetSpecies,
  apiGetSix,
  apiAddSpecies,
  apiDelete,
} from "../../api/auth";
import { setToken, getToken } from "../../api/auth/helper";

export const loginAction = createAsyncThunk(
  `auth/login`,
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await apiLogin(data);
      setToken(response.access_token);
      dispatch(getInfoAction());
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getInfoAction = createAsyncThunk(`api/me`, async () => {
  const response = await apiGetMe();
  return response;
});

export const logoutAction = createAsyncThunk("auth/logout", async () => {
  const response = await apiLogout();
  return response;
});

export const getInitData = createAsyncThunk(
  "auth/init",
  async (_, { dispatch }) => {
    if (getToken()) dispatch(getInfoAction());
  }
);

export const getSpeciesAction = createAsyncThunk(
  "auth/species",
  async (filter) => {
    const response = await apiGetSpecies(filter);
    const { list, pagination } = response;
    return { list, pagination };
  }
);

export const loginReducer = (builder) => {
  builder
    .addCase(loginAction.pending, (state) => {
      state.loading = true;
      state.errMessage = "";
    })
    .addCase(loginAction.fulfilled, (state) => {
      state.loading = false;
      state.logged = true;
    })
    .addCase(loginAction.rejected, (state, action) => {
      state.logged = false;
      state.loading = false;
      if (action.error) state.errMessage = action.payload.message;
    });
};

export const getInfoReducer = (builder) => {
  builder
    .addCase(getInfoAction.pending, (state) => {
      state.loadingInfo = true;
    })
    .addCase(getInfoAction.fulfilled, (state, action) => {
      state.loadingInfo = false;
      state.currentUser = action.payload;
    })
    .addCase(getInfoAction.rejected, (state) => {
      state.loadingInfo = false;
      state.logged = false;
      state.currentUser = undefined;
      setToken("");
    });
};

export const logoutReducer = (builder) => {
  builder
    .addCase(logoutAction.rejected, (state) => {
      state.currentUser = undefined;
      state.errorMessage = "";
      state.logged = false;
      state.loading = false;
      setToken("");
    })
    .addCase(logoutAction.fulfilled, (state) => {
      state.currentUser = undefined;
      state.errorMessage = "";
      state.logged = false;
      state.loading = false;
      setToken("");
    });
};

export const getSpeciesReducer = (builder) => {
  builder
    .addCase(getSpeciesAction.pending, (state) => {
      state.loadingSpecies = true;
    })
    .addCase(getSpeciesAction.fulfilled, (state, action) => {
      state.loadingSpecies = false;
      state.currentSpecies = action.payload;
    })
    .addCase(getSpeciesAction.rejected, (state) => {
      state.loadingSpecies = false;
      state.currentSpecies = undefined;
    });
};
export const getDataSixAction = createAsyncThunk(`auth/six`, async (params) => {
  const response = await apiGetSix(params);
  return window.localStorage.setItem(params, JSON.stringify(response));
});

export const getDataSixReducer = (builder) => {
  builder
    .addCase(getDataSixAction.fulfilled, (state, action) => {
      state.dataSix = action.payload;
    })
    .addCase(getDataSixAction.rejected, (state, action) => {
      state.dataSix = undefined;
    });
};

export const addSpeciesDataAction = createAsyncThunk(
  `auth/addSpecies`,
  async (postData) => {
    const response = await apiAddSpecies(postData);
    return response;
  }
);

export const addSpeciesReducer = (builder) => {
  builder
    .addCase(addSpeciesDataAction.fulfilled, (state, action) => {
      state.addSpecies = action.payload;
    })
    .addCase(addSpeciesDataAction.rejected, (state, action) => {
      state.addSpecies = undefined;
    });
};

export const deleteAction = createAsyncThunk(`auth/delete`, async (id) => {
  const response = await apiDelete(id);
  return response;
});

export const deleteSpeciesReducer = (builder) => {
  builder
    .addCase(deleteAction.fulfilled, (state, action) => {
      state.deleteSpecies = action.payload;
    })
    .addCase(deleteAction.rejected, (state, action) => {
      state.deleteSpecies = undefined;
    });
};


