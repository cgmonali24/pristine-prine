// src/features/categories/categorySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: null,
  categories: [],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
      
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    updateProductQuantity: (state, action) => {
      const { categoryId, productId, quantity } = action.payload;
      console.log(state.categories)
      // if (state.categories[categoryId] && state.categories[categoryId][productId]) {
      //   state.categories[categoryId][productId].quantity = quantity;
      // }
    },
  },
});

export const { setSelectedCategory,setCategories,addCategory,updateProductQuantity } = categorySlice.actions;
export default categorySlice.reducer;
