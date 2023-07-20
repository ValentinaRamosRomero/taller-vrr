import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchList = createAsyncThunk(
  'recipes/fetchList',
  async (query) => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`
    );
    return response.data;
  }
);

export const fetchItem = createAsyncThunk('recipes/fetchItem', async (id) => {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
  );
  return response.data;
});

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    list: {
      items: [],
      status: 'idle',
      error: null,
    },
    selectedItem: {
      item: {},
      status: 'idle',
      error: null,
    },
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchList.pending, (state) => {
        state.list.status = 'loading';
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        state.list.status = 'succeeded';
        state.list.items = action.payload.results;
      })
      .addCase(fetchList.rejected, (state, action) => {
        state.list.status = 'failed';
        state.list.error = action.error.message;
      })
      .addCase(fetchItem.pending, (state) => {
        state.selectedItem.status = 'loading';
      })
      .addCase(fetchItem.fulfilled, (state, action) => {
        state.selectedItem.status = 'succeeded';
        state.selectedItem.item = action.payload;
      })
      .addCase(fetchItem.rejected, (state, action) => {
        state.selectedItem.status = 'failed';
        state.selectedItem.error = action.error.message;
      });
  },
});

export const selectRecipesList = (state) => state.recipes.list;
export const selectRecipeItem = (state) => state.recipes.selectedItem;

export default recipesSlice.reducer;
