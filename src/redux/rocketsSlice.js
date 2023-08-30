import { createSlice } from '@reduxjs/toolkit';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    setRockets: (state, action) => {
      const filteredRockets = action.payload.map((rocket) => ({
        id: rocket.id,
        rocket_name: rocket.rocket_name,
        flickr_images: rocket.flickr_images,
        engines: {
          type: rocket.engines.type,
        },
        description: rocket.description,
        reserved: false,
      }));
      return filteredRockets;
    },
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      return state.map((rocket) => (rocket.id === rocketId
        ? { ...rocket, reserved: true }
        : rocket));
    },
    cancelRocket: (state, action) => {
      const rocketId = action.payload;
      return state.map((rocket) => (rocket.id === rocketId
        ? { ...rocket, reserved: false }
        : rocket));
    },
  },
});

export const { setRockets, reserveRocket, cancelRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
