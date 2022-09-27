import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './layout/navigationSlice';
import userReducer from './auth/userSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    user: userReducer,
  },
});
