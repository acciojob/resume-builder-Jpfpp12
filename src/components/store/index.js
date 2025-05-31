import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import educationReducer from './educationSlice';
import skillsReducer from './skillsSlice';
import projectsReducer from './projectsSlice';
import socialMediaReducer from './socialMediaSlice';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    education: educationReducer,
    skills: skillsReducer,
    projects: projectsReducer,
    socialMedia: socialMediaReducer,
  },
});

export default store;
