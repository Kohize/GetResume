import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './utils/ThemeSlice/ThemeSlice';
import resumeSlice from './features/ResumePreview/ResumeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    initialResumeData: resumeSlice,
  },
});

export default store;
