import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import RocketItem from '../../components/RocketItem';

const mockStore = configureMockStore();

describe('RocketItem', () => {
  const rocket = {
    id: 1,
    rocket_name: 'Falcon 9',
    flickr_images: ['image1.jpg', 'image2.jpg'],
    engines: {
      type: 'Merlin',
    },
    description: 'This is a rocket',
    reserved: false,
  };

  const store = mockStore({
    rockets: [rocket],
  });

  test('should have a name', () => {
    render(
      <Provider store={store}>
        <RocketItem id={rocket.id} rocket={rocket} />
      </Provider>,
    );
    expect(screen.getByText('Falcon 9')).toBeDefined();
  });
  test('should have a description', () => {
    render(
      <Provider store={store}>
        <RocketItem id={rocket.id} rocket={rocket} />
      </Provider>,
    );
    expect(screen.getByText('This is a rocket')).toBeDefined();
  });
  test('should have an engine type', () => {
    render(
      <Provider store={store}>
        <RocketItem id={rocket.id} rocket={rocket} />
      </Provider>,
    );
    expect(screen.getByText('Engine Type: Merlin')).toBeDefined();
  });
  test('should have a reserve button when rocket is not reserved', () => {
    render(
      <Provider store={store}>
        <RocketItem id={rocket.id} rocket={rocket} />
      </Provider>,
    );
    expect(screen.getByText('Reserve Rocket')).toBeDefined();
  });
  test('should have a cancel button when rocket is reserved', () => {
    render(
      <Provider store={store}>
        <RocketItem id={rocket.id} rocket={{ ...rocket, reserved: true }} />
      </Provider>,
    );
    expect(screen.getByText('Cancel Rocket')).toBeDefined();
  });
  test('should have an image', () => {
    render(
      <Provider store={store}>
        <RocketItem id={rocket.id} rocket={rocket} />
      </Provider>,
    );
    expect(screen.getByAltText('Falcon 9')).toBeDefined();
  });
  test('should have a reserved badge when rocket is reserved', () => {
    render(
      <Provider store={store}>
        <RocketItem id={rocket.id} rocket={{ ...rocket, reserved: true }} />
      </Provider>,
    );
    expect(screen.getByText('Reserved')).toBeDefined();
  });
  test('should not have a reserved badge when rocket is not reserved', () => {
    render(
      <Provider store={store}>
        <RocketItem id={rocket.id} rocket={rocket} />
      </Provider>,
    );
    expect(screen.queryByText('Reserved')).toBeNull();
  });
  test('should dispatch reserveRocket when reserve button is clicked', () => {
    render(
      <Provider store={store}>
        <RocketItem id={rocket.id} rocket={rocket} />
      </Provider>,
    );
    screen.getByText('Reserve Rocket').click();
    expect(store.getState().rockets[0].reserved).toBe(false);
  });
  test('should dispatch cancelRocket when cancel button is clicked', () => {
    render(
      <Provider store={store}>
        <RocketItem id={rocket.id} rocket={{ ...rocket, reserved: true }} />
      </Provider>,
    );
    screen.getByText('Cancel Rocket').click();
    expect(store.getState().rockets[0].reserved).toBe(false);
  });
});
