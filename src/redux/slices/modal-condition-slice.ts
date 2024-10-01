import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/index';

export enum EModals {
  Communication = 'Communication',
  MobileMenu = 'MobileMenu',
  ServicesMenu = 'ServicesMenu',
}

type TModalConditionSlice = {
  openModal:
    | EModals.Communication
    | EModals.MobileMenu
    | EModals.ServicesMenu
    | null;
};

const initialState: TModalConditionSlice = {
  openModal: null,
};

const modalConditionSlice = createSlice({
  name: 'modalCondition',
  initialState: initialState,
  reducers: {
    changeOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
  },
});

export const selectOpenModal = (state: RootState) =>
  state.modalCondition.openModal;

export const { changeOpenModal } = modalConditionSlice.actions;

export const modalConditionReducer = modalConditionSlice.reducer;
