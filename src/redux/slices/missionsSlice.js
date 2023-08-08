import { createSlice } from '@reduxjs/toolkit';
import { fetchMissions } from '../thunks/fetchMissionsThunk';

const missionsSlice = createSlice({
  name: 'Missions',
  reducers: {
    joinMission: (state, action) => {
      const id = action.payload;
      const newState = state.map((mission) => {
        if (mission.mission_id !== id) { return mission; }
        return { ...mission, reserved: true };
      });
      return newState;
    },
  },
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      const { payload } = action;
      const newMissions = payload.map((mission) => {
        const newMission = {
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
        };
        return newMission;
      });

      return newMissions;
    });
  },
});

export const { joinMission } = missionsSlice.actions;
export const missionsReducer = missionsSlice.reducer;
