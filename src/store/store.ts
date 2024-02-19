import { configureStore } from '@reduxjs/toolkit';
import ThemeSlice from './theme';
export const store = configureStore({
  reducer: {
    ThemeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
