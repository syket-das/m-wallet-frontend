import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hightlight: '1',
  link: '/',
};

export const navigationSlice = createSlice({
  name: 'navigationHighlight',
  initialState,
  reducers: {
    changeNavigationHighlight: (state, action) => {
      state.hightlight = action.payload;
    },

    changeNavigationLink: (state, action) => {
      state.link = action.payload;
    }
  },
});

export const { changeNavigationHighlight, changeNavigationLink } =
  navigationSlice.actions;

export default navigationSlice.reducer;
