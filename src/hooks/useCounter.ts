import { useState, useCallback } from 'react';

interface UseCounterOptions {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
}

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setValue: (value: number) => void;
  isAtMin: boolean;
  isAtMax: boolean;
}

export const useCounter = (options: UseCounterOptions = {}): UseCounterReturn => {
  const {
    initialValue = 0,
    min = -Infinity,
    max = Infinity,
    step = 1,
  } = options;

  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((prevCount) => {
      const newCount = prevCount + step;
      return newCount <= max ? newCount : prevCount;
    });
  }, [step, max]);

  const decrement = useCallback(() => {
    setCount((prevCount) => {
      const newCount = prevCount - step;
      return newCount >= min ? newCount : prevCount;
    });
  }, [step, min]);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  const setValue = useCallback((value: number) => {
    if (value >= min && value <= max) {
      setCount(value);
    }
  }, [min, max]);

  const isAtMin = min !== -Infinity && count === min;
  const isAtMax = max !== Infinity && count === max;

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
    isAtMin,
    isAtMax,
  };
}; 