import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlice';

import { missionsReducer } from './slices/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
});

export * from './thunks/fetchMissionsThunk';
export default store;
