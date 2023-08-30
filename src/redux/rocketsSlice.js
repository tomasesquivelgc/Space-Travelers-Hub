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
      }));
      return filteredRockets;
    },
  },
});

export const { setRockets } = rocketsSlice.actions;
export default rocketsSlice.reducer;
