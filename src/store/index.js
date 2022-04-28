import { configureStore } from '@reduxjs/toolkit';
import episodesReducer from '../components/Episodes/state/slice';
import charactersReducer from '../components/Characters/state/slice';



export default configureStore({
  reducer: {
    episodes: episodesReducer,
    characters: charactersReducer
  },
});
