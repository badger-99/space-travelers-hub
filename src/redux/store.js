import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlice';

import { missionsReducer, joinMission } from './slices/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
});

export * from './thunks/fetchMissionsThunk';
export { joinMission, store };
