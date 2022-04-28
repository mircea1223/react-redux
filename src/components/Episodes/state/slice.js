import { createSlice } from '@reduxjs/toolkit';

const episodesSlice = createSlice({
  name: 'episodes',
  initialState: [],
  reducers: {
    setEpisodes: (state, action) => {
      return action.payload;
    }
  }
});

export const { setEpisodes } = episodesSlice.actions;

export default episodesSlice.reducer;