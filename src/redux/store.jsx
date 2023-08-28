// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore } from 'redux';
// Initial state (can be an empty object or any default values you might have)
const initialState = {};

// Dummy reducer that just returns the state as is
const dummyReducer = (state = initialState, action) => {
  return state;
};

// Create the store
const store = createStore(dummyReducer);

export default store;
