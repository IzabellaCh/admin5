import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/index';

const initialState = {
  data: null,
};

const mobileDeviceSlice = createSlice({
  name: 'mobileDevice',
  initialState,
  reducers: {
    setDevise: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const selectIsMobileDevice = (state: RootState) =>
  state.mobileDevice.data;

export const { setDevise } = mobileDeviceSlice.actions;

export const mobileDeviceReducer = mobileDeviceSlice.reducer;
