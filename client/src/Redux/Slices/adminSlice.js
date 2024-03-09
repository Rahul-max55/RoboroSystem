import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const adminLoginAsync = createAsyncThunk(
  "admin/loginAsync",
  async (data) => {
    const response = await fetch("http://localhost:5001/admin/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseObj = await response.json();
    return responseObj;
  }
);

export const registerUserAsync = createAsyncThunk(
  "admin/createAccount",
  async (data) => {
    const response = await fetch("http://localhost:5001/admin/createAccount", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseObj = await response.json();
    return responseObj;
  }
);

export const getAllUserAsync = createAsyncThunk(
  "admin/getAllUser",
  async (data) => {
    const response = await fetch("http://localhost:5001/admin/getAllUser");
    const responseObj = await response.json();
    return responseObj;
  }
);

export const deleteUserDataAsync = createAsyncThunk(
  "admin/deleteUser",
  async (id) => {
    const response = await fetch("http://localhost:5001/admin/deleteUser", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const responseObj = await response.json();
    return responseObj;
  }
);

const initialState = {
  profile: {},
  allUser: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "admin",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(adminLoginAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      Cookies.set("token", action.payload.token);
      state.profile = action.payload;
    });
    builder.addCase(adminLoginAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(adminLoginAsync.rejected, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(registerUserAsync.fulfilled, (state, action) => {
      console.log();
      state.allUser = [...state.allUser, action.payload];
    });
    builder.addCase(registerUserAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getAllUserAsync.fulfilled, (state, action) => {
      state.allUser = [...action.payload.updatedUser];
    });
    builder.addCase(getAllUserAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllUserAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteUserDataAsync.fulfilled, (state, action) => {
      const id = action.payload.allUser._id;
      state.allUser = state.allUser.filter((val, index) => val._id !== id);
    });
    builder.addCase(deleteUserDataAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUserDataAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
export const profile = (state) => state.admin.profile;
export const role = (state) => state.admin.profile.role;
export const allUser = (state) => state.admin.allUser;
