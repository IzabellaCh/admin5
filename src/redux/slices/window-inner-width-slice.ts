import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/index';

const initialState = {
  data: 0,
};

const windowInnerWidthSlice = createSlice({
  name: 'windowInnerWidth',
  initialState,
  reducers: {
    setWindowInnerWidth: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const selectWindowInnerWidth = (state: RootState) =>
  state.windowInnerWidth.data;

export const { setWindowInnerWidth } = windowInnerWidthSlice.actions;

export const windowInnerWidthReducer = windowInnerWidthSlice.reducer;
