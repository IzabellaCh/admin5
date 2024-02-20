import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/index';

const initialState = {
  data: false,
};

const modalConditionSlice = createSlice({
  name: 'modalCondition',
  initialState: initialState,
  reducers: {
    changeModalCondition: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const selectIsModalOpen = (state: RootState) =>
  state.modalCondition.data;

export const { changeModalCondition } = modalConditionSlice.actions;

export const modalConditionReducer = modalConditionSlice.reducer;
