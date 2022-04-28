import { createSlice } from '@reduxjs/toolkit';

const characterSlice = createSlice({
  name: 'characters',
  initialState: {},
  reducers: {
    setCharacters: (state, action) => {
      console.log(state.characters);
      console.log(action);
      return {
        ...state,
        
      };
    }
  }
});

export const { setCharacters } = characterSlice.actions;

export default characterSlice.reducer;