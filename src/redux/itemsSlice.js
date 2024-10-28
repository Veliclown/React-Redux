import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log('Стан до виконання addItem:', JSON.stringify(state));
      state.items.push(action.payload);
      console.log('Стан після виконання addItem:', JSON.stringify(state));
    },
    removeItem: (state, action) => {
      console.log('Стан до виконання removeItem:', JSON.stringify(state));
      state.items = state.items.filter(item => item.id !== action.payload);
      console.log('Стан після виконання removeItem:', JSON.stringify(state));
    },
    filterItems: (state, action) => {
      console.log('Стан до виконання filterItems:', JSON.stringify(state));
      state.items = state.items.filter(item => item.name.includes(action.payload));
      console.log('Стан після виконання filterItems:', JSON.stringify(state));
    },
  },
});


export const { addItem, removeItem, filterItems } = itemsSlice.actions;


export default itemsSlice.reducer;