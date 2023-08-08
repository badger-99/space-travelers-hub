import { configureStore } from '@reduxjs/toolkit';

import { missionsReducer, joinMission } from './slices/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export * from './thunks/fetchMissionsThunk';
export { joinMission, store };
