import { createSlice } from '@reduxjs/toolkit';

const socialMediaSlice = createSlice({
  name: 'social',
  initialState: [],
  reducers: {
    addSocial: (state, action) => {
      state.push(action.payload);
    },
    deleteSocial: (state, action) => {
      return state.filter((_, idx) => idx !== action.payload);
    },
    updateSocial: (state, action) => {
      return action.payload; // replaces the whole social array
    },
  },
});

export const { addSocial, deleteSocial, updateSocial } = socialMediaSlice.actions;
export default socialMediaSlice.reducer;
