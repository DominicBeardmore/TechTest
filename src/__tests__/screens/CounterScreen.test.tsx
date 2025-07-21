import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CounterScreen from '../../../app/counter';

// Mock the useCounter hook
jest.mock('../../hooks', () => ({
  useCounter: jest.fn(),
}));

const mockUseCounter = require('../../hooks').useCounter;

describe('CounterScreen', () => {
  const mockCounterHook = {
    count: 5,
    increment: jest.fn(),
    decrement: jest.fn(),
    reset: jest.fn(),
    setValue: jest.fn(),
    isAtMin: false,
    isAtMax: false,
  };

  beforeEach(() => {
    mockUseCounter.mockReturnValue(mockCounterHook);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with counter value', () => {
    const { getByText } = render(<CounterScreen />);

    expect(getByText('Current Count:')).toBeTruthy();
    expect(getByText('5')).toBeTruthy();
  });

  it('calls increment when + button is pressed', () => {
    const { getByText } = render(<CounterScreen />);

    fireEvent.press(getByText('+'));

    expect(mockCounterHook.increment).toHaveBeenCalledTimes(1);
  });

  it('calls decrement when - button is pressed', () => {
    const { getByText } = render(<CounterScreen />);

    fireEvent.press(getByText('-'));

    expect(mockCounterHook.decrement).toHaveBeenCalledTimes(1);
  });

  it('calls reset when Reset button is pressed', () => {
    const { getByText } = render(<CounterScreen />);

    fireEvent.press(getByText('Reset'));

    expect(mockCounterHook.reset).toHaveBeenCalledTimes(1);
  });

  it('disables increment button when at max', () => {
    mockUseCounter.mockReturnValue({
      ...mockCounterHook,
      isAtMax: true,
    });

    const { getByTestId } = render(<CounterScreen />);
    const incrementButton = getByTestId('increment-button');
    expect(incrementButton.props.accessibilityState?.disabled).toBe(true);
  });

  it('disables decrement button when at min', () => {
    mockUseCounter.mockReturnValue({
      ...mockCounterHook,
      isAtMin: true,
    });

    const { getByTestId } = render(<CounterScreen />);
    const decrementButton = getByTestId('decrement-button');
    expect(decrementButton.props.accessibilityState?.disabled).toBe(true);
  });

  it('shows boundary indicators correctly', () => {
    mockUseCounter.mockReturnValue({
      ...mockCounterHook,
      isAtMin: true,
      isAtMax: false,
    });

    const { getByText } = render(<CounterScreen />);

    expect(getByText('Min: -10 ✓')).toBeTruthy();
    expect(getByText('Max: 10')).toBeTruthy();
  });
});
