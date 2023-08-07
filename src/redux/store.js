import { configureStore } from '@reduxjs/toolkit';

import { missionsReducer } from './slices/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export * from './thunks/fetchMissionsThunk';
export default store;
