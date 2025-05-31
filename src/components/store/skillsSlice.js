import { createSlice } from '@reduxjs/toolkit';

const skillsSlice = createSlice({
  name: 'skills',
  initialState: [],
  reducers: {
    addSkill: (state, action) => {
      state.push(action.payload);
    },
    deleteSkill: (state, action) => {
      return state.filter((_, idx) => idx !== action.payload);
    },
    updateSkills: (state, action) => {
      return action.payload; // replaces the whole skills array
    },
  },
});

export const { addSkill, deleteSkill, updateSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
