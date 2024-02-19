import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState: { direction: string } = {
  direction: '',
};

export const DirectionSlice = createSlice({
  name: 'directionSlice',
  initialState,
  reducers: {
    setDirection: (state, action) => {
      state.direction = action.payload;
    },
  },
});

export const selectDirectionState = (state: RootState) =>
  state.DirectionSlice.direction;

export const { setDirection } = DirectionSlice.actions;

export default DirectionSlice.reducer;
