import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState : {theme : boolean} = {
    theme : false
};

export const ThemeSlice = createSlice({
  name: 'ThemeSlice',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const selectThemeState = (state: RootState) => state.ThemeSlice;

export const { setTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
