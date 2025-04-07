import { createSlice } from "@reduxjs/toolkit";

// Initial state for user profile
const initialState = {
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  loading: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    // Sets the user data in state
    setUser(state, value) {
      state.user = value.payload;
    },

    // Sets loading flag (for showing loader during fetch/update)
    setLoading(state, value) {
      state.loading = value.payload;
    },
  },
});

// Export actions and reducer
export const { setUser, setLoading } = profileSlice.actions;
export default profileSlice.reducer;
