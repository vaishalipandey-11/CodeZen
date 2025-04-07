import { createSlice } from "@reduxjs/toolkit"

// Initial state for viewing course details
const initialState = {
  courseSectionData: [],       // Contains sections and their lectures
  courseEntireData: [],        // Full course info
  completedLectures: [],       // List of completed lecture IDs
  totalNoOfLectures: 0,        // Total lectures in course
}

const viewCourseSlice = createSlice({
  name: "viewCourse",
  initialState,
  reducers: {
    setCourseSectionData: (state, action) => {
      state.courseSectionData = action.payload
    },
    setEntireCourseData: (state, action) => {
      state.courseEntireData = action.payload
    },
    setTotalNoOfLectures: (state, action) => {
      state.totalNoOfLectures = action.payload
    },
    setCompletedLectures: (state, action) => {
      state.completedLectures = action.payload
    },
    updateCompletedLectures: (state, action) => {
      state.completedLectures = [...state.completedLectures, action.payload]
    },
  },
})

// Exporting all actions
export const {
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
  setCompletedLectures,
  updateCompletedLectures,
} = viewCourseSlice.actions

// Exporting reducer to use in store
export default viewCourseSlice.reducer
