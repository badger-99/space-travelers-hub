import { createSlice } from '@reduxjs/toolkit';
import { fetchMissions } from '../thunks/fetchMissionsThunk';

const missionsSlice = createSlice({
  name: 'Missions',
  reducers: {},
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      // mission_id
      // mission_name
      // description
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

export const missionsReducer = missionsSlice.reducer;
