// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categorySlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    auth: authReducer,

  },
});
