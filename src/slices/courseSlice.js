import { createSlice } from "@reduxjs/toolkit";

// Initial state for course-related data
const initialState = {
  step: 1,                 // Tracks current step in a multi-step form
  course: null,            // Stores course data (like title, content, etc.)
  editCourse: false,       // Whether we're editing an existing course
  paymentLoading: false,   // Indicates if payment is in progress
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setEditCourse: (state, action) => {
      state.editCourse = action.payload;
    },
    setPaymentLoading: (state, action) => {
      state.paymentLoading = action.payload;
    },
    resetCourseState: (state) => {
      // Resets the form to default state
      state.step = 1;
      state.course = null;
      state.editCourse = false;
    },
  },
});

export const {
  setStep,
  setCourse,
  setEditCourse,
  setPaymentLoading,
  resetCourseState,
} = courseSlice.actions;

export default courseSlice.reducer;
