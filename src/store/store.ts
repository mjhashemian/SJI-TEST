import { configureStore } from '@reduxjs/toolkit';
import ThemeSlice from './theme';
import DirectionSlice from './languageDirection';
import UserNameSlice from './userName';
export const store = configureStore({
  reducer: {
    ThemeSlice,
    DirectionSlice,
    UserNameSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
