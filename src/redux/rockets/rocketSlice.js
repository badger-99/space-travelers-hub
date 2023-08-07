import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = createAsyncThunk('rockets/getRockets', async (_, thunkAPI) => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    const errorMsg = `${error.code}: ${error.msg}`;
    return thunkAPI.rejectWithValue(errorMsg);
  }
});

const initialState = {
  id: '',
  name: '',
  description: '',
  image: '',
  isLoading: false,
  error: null,
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.description = action.payload.description;
        [state.image] = action.payload.flickr_images;
        state.isLoading = false;
      })
      .addCase(getRockets.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default rocketSlice.reducer;
