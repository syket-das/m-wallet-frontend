import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './layout/navigationSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});
