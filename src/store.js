import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './utils/ThemeSlice/ThemeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
