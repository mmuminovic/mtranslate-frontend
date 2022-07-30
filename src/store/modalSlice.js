import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFirstVisit: true,
};

const modalSlice = createSlice({
  name: 'firstTimeModal',
  initialState: initialState,
  reducers: {
    firstTimeModal: (state) => {
      state.isFirstVisit = !state.isFirstVisit;
      return state;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
