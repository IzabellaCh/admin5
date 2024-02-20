import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/index';

type TInitialState = {
  requisitions: number;
  outcalls: number;
  failures: number;
  plannedOutcalls: number | string;
};

const initialState: TInitialState = {
  requisitions: 4,
  outcalls: 13,
  failures: 0,
  plannedOutcalls: 'X',
};

const statisticDataSlice = createSlice({
  name: 'statisticData',
  initialState: initialState,
  reducers: {},
});

export const selectRequisitions = (state: RootState) =>
  state.statisticData.requisitions;
export const selectOutcalls = (state: RootState) =>
  state.statisticData.outcalls;
export const selectFailures = (state: RootState) =>
  state.statisticData.failures;
export const selectPlannedOutcalls = (state: RootState) =>
  state.statisticData.plannedOutcalls;

export const statisticDataReducer = statisticDataSlice.reducer;
