import { render, screen } from '@testing-library/react';
import { HomeScreen } from '../components/HomeScreen';
import { EnhancedStore, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { RootState } from '../redux/store';
import userReducer from '../features/userSlice';

const mockStore: EnhancedStore<RootState> = configureStore({
  reducer: userReducer,
  preloadedState: {
    firstName: 'Peter',
    lastName: 'Parker',
  },
});

describe('HomeScreen', () => {
  it('should render HomeScreen', () => {
    render(
      <Provider store={mockStore}>
        <HomeScreen />
      </Provider>
    );
  });

  it('should show welcome message', () => {
    render(
      <Provider store={mockStore}>
        <HomeScreen />
      </Provider>
    );

    screen.getByText(/welcome peter parker/i);
  });
});
