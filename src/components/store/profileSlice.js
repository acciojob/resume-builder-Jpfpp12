import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fname: '',
  lname: '',
  phone: '',
  address: '',
  url: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export const setProfile = profileSlice.actions.setProfile;
export default profileSlice.reducer;
