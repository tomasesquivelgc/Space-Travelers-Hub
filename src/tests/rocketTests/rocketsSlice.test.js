// tests for the rocketsSlice redux slice
import { expect, test } from 'vitest';
import rocketsReducer, { setRockets, reserveRocket, cancelRocket } from '../../redux/rocketsSlice';

describe('reducers', () => {
  test('should handle setRockets', () => {
    const initialState = [];
    const rockets = [
      {
        id: 'falcon1',
        rocket_name: 'Falcon 1',
        flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
        engines: {
          type: 'merlin',
        },
        description: 'description',
        reserved: false,
      },
    ];
    const action = setRockets(rockets);
    const nextState = rocketsReducer(initialState, action);
    expect(nextState).toEqual(rockets);
  });
  test('should handle reserveRocket', () => {
    const initialState = [
      {
        id: 'falcon1',
        rocket_name: 'Falcon 1',
        flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
        engines: {
          type: 'merlin',
        },
        description: 'description',
        reserved: false,
      },
      {
        id: 'falcon9',
        rocket_name: 'Falcon 9',
        flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
        engines: {
          type: 'merlin',
        },
        description: 'description',
        reserved: false,
      },
    ];
    const rocketId = 'falcon1';
    const action = reserveRocket(rocketId);
    const nextState = rocketsReducer(initialState, action);
    expect(nextState[0].reserved).toBe(true);
    expect(nextState[1].reserved).toBe(false);
  });
  test('should handle cancelRocket', () => {
    const initialState = [
      {
        id: 'falcon1',
        rocket_name: 'Falcon 1',
        flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
        engines: {
          type: 'merlin',
        },
        description: 'description',
        reserved: true,
      },
      {
        id: 'falcon9',
        rocket_name: 'Falcon 9',
        flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
        engines: {
          type: 'merlin',
        },
        description: 'description',
        reserved: false,
      },
    ];
    const rocketId = 'falcon1';
    const action = cancelRocket(rocketId);
    const nextState = rocketsReducer(initialState, action);
    expect(nextState[0].reserved).toBe(false);
    expect(nextState[1].reserved).toBe(false);
  });
});
