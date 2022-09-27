import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userAvailable: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { userAvailable } = userSlice.actions;

export default userSlice.reducer;
