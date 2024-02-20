import { configureStore } from '@reduxjs/toolkit';
import { mobileDeviceReducer } from './slices/mobile-device-slice';
import { modalConditionReducer } from './slices/modal-condition-slice';
import { statisticDataReducer } from './slices/statistic-data-slice';
import { windowInnerWidthReducer } from './slices/window-inner-width-slice';

export const store = configureStore({
  reducer: {
    mobileDevice: mobileDeviceReducer,
    modalCondition: modalConditionReducer,
    statisticData: statisticDataReducer,
    windowInnerWidth: windowInnerWidthReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
