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
  rocketArray: [],
  isLoading: false,
  error: null,
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    toggleReservation: (state, action) => {
      const targetId = action.payload;
      state.rocketArray = state.rocketArray.map((rocket) => {
        if (rocket.id === targetId) {
          rocket.isReserved = !rocket.isReserved;
          return rocket;
        }
        return rocket;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        action.payload.forEach((load) => {
          const rocket = {
            id: load.id,
            name: load.name,
            description: load.description,
            image: load.flickr_images[0],
            isReserved: false,
          };
          state.rocketArray.push(rocket);
        });
        state.isLoading = false;
      })
      .addCase(getRockets.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { toggleReservation } = rocketSlice.actions;

export default rocketSlice.reducer;
