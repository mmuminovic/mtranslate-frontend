import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './authSlice'
import  modalSlice  from './modalSlice'

export const rootReducer = combineReducers({
  auth: authSlice.reducer,  firstTimeModal: modalSlice.reducer
});
