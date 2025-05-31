import { createSlice } from '@reduxjs/toolkit';

const educationSlice = createSlice({
  name: 'education',
  initialState: [],
  reducers: {
    addEducation: (state, action) => {
      state.push(action.payload);
    },
    deleteEducation: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    updateEducation: (state, action) => {
      const { index, updated } = action.payload;
      state[index] = updated;
    },
  },
});

export const { addEducation, deleteEducation, updateEducation } = educationSlice.actions;
export default educationSlice.reducer;
