import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    addProject: (state, action) => {
      state.push(action.payload);
    },
    deleteProject: (state, action) => {
      return state.filter((_, idx) => idx !== action.payload);
    },
    updateProjects: (state, action) => {
      return action.payload; // replaces the whole projects array
    },
  },
});

export const { addProject, deleteProject, updateProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
