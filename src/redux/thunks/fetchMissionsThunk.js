import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  return response.data;
});

export { fetchMissions };
