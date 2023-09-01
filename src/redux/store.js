import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocketsSlice';
import missionReducer from './missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionReducer,
  },
});

export default store;
