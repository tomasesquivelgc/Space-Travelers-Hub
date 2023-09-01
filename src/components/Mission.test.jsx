/* eslint-disable import/no-extraneous-dependencies */
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from './Routes/Mission'; // Import your component here

const mockStore = configureStore([]);

describe('Missions Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      missions: [
        // Mock missions data as needed for your tests
        {
          mission_id: '1',
          mission_name: 'Mission 1',
          description: 'Description 1',
          reserved: false,
        },
        {
          mission_id: '2',
          mission_name: 'Mission 2',
          description: 'Description 2',
          reserved: true,
        },
      ],
    });

    component = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
  });

  it('should handle joining a mission', () => {
    const { getByText } = component;

    fireEvent.click(getByText('Join Mission'));

    // You can add assertions here to check if the Redux store has been updated correctly
  });

  it('should handle leaving a mission', () => {
    const { getByText } = component;

    fireEvent.click(getByText('Leave Mission'));

    // You can add assertions here to check if the Redux store has been updated correctly
  });

  it('should display missions', () => {
    const { getByText } = component;

    // Add assertions here to check if mission information is displayed correctly
    expect(getByText('Mission 1')).toBeDefined();
    expect(getByText('Description 1')).toBeDefined();
    expect(getByText('Mission 2')).toBeDefined();
    expect(getByText('Description 2')).toBeDefined();
  });
});
