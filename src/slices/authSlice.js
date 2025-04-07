import { createSlice } from "@reduxjs/toolkit";

// Initial state for auth-related data
const initialState = {
  signupData: null,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
  loading: false,
};

// Creating the auth slice with actions and reducers
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // Stores signup form data temporarily
    setSignupData: (state, value) => {
      state.signupData = value.payload;
    },

    // Sets loading state (can be used to show loaders during API calls)
    setLoading(state, value) {
      state.loading = value.payload;
    },

    // Stores auth token in state
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

// Exporting actions to use them in components or thunks
export const { setSignupData, setLoading, setToken } = authSlice.actions;

// Exporting reducer to add it to the Redux store
export default authSlice.reducer;
