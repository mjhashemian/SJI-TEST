import { configureStore } from '@reduxjs/toolkit';
import ThemeSlice from './theme';
import DirectionSlice from './languageDirection';
export const store = configureStore({
  reducer: {
    ThemeSlice,
    DirectionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
