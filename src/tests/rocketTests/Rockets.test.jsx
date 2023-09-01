import { render, screen, waitFor } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import nock from 'nock';
import Rockets from '../../components/Routes/Rockets';
import { setRockets } from '../../redux/rocketsSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Rockets Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: [],
    });

    nock('https://api.spacexdata.com/v3')
      .get('/rockets')
      .reply(200, [
        {
          id: 'Falcon1',
          rocket_name: 'Falcon 1',
          description: 'This is a rocket',
        },
      ]);
  });
  it('fetches rockets when the store is empty', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    await waitFor(() => {
      expect(store.getActions()).toEqual([setRockets(expect.any(Array))]);
    });
  });

  it('does not fetch rockets when the store is not empty', async () => {
    store = mockStore({
      rockets: [
        {
          id: 1,
          rocket_name: 'Falcon 2',
          flickr_images: ['image1.jpg', 'image2.jpg'],
          engines: {
            type: 'Merlin',
          },
          description: 'This is a rocket',
          reserved: false,
        },
      ],
    });

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    await waitFor(() => {
      expect(store.getActions()).toEqual([]);
    });

    expect(screen.getByText('Falcon 2')).toBeDefined();
  });
});
