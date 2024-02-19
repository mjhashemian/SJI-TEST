import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState: { userName: string } = {
  userName: '',
};

export const UserNamerSlice = createSlice({
  name: 'userNameSlice',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const selectUserNameState = (state: RootState) =>
  state.UserNameSlice.userName;

export const { setUserName } = UserNamerSlice.actions;

export default UserNamerSlice.reducer;
