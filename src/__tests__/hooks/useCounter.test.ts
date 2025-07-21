import { renderHook, act } from '@testing-library/react-native';
import { useCounter } from '../../hooks/useCounter';

describe('useCounter', () => {
  describe('default behavior', () => {
    it('should initialize with default value of 0', () => {
      const { result } = renderHook(() => useCounter());

      expect(result.current.count).toBe(0);
    });

    it('should increment by 1 by default', () => {
      const { result } = renderHook(() => useCounter());

      act(() => {
        result.current.increment();
      });

      expect(result.current.count).toBe(1);
    });

    it('should decrement by 1 by default', () => {
      const { result } = renderHook(() => useCounter());

      act(() => {
        result.current.decrement();
      });

      expect(result.current.count).toBe(-1);
    });

    it('should reset to initial value', () => {
      const { result } = renderHook(() => useCounter({ initialValue: 5 }));

      act(() => {
        result.current.increment();
        result.current.increment();
      });

      expect(result.current.count).toBe(7);

      act(() => {
        result.current.reset();
      });

      expect(result.current.count).toBe(5);
    });
  });

  describe('custom options', () => {
    it('should initialize with custom initial value', () => {
      const { result } = renderHook(() => useCounter({ initialValue: 10 }));

      expect(result.current.count).toBe(10);
    });

    it('should increment by custom step', () => {
      const { result } = renderHook(() => useCounter({ step: 5 }));

      act(() => {
        result.current.increment();
      });

      expect(result.current.count).toBe(5);
    });

    it('should decrement by custom step', () => {
      const { result } = renderHook(() => useCounter({ step: 3 }));

      act(() => {
        result.current.decrement();
      });

      expect(result.current.count).toBe(-3);
    });
  });

  describe('boundaries', () => {
    it('should respect minimum boundary', () => {
      const { result } = renderHook(() => useCounter({ min: 0, max: 10 }));

      act(() => {
        result.current.decrement();
      });

      expect(result.current.count).toBe(0);
      expect(result.current.isAtMin).toBe(true);
    });

    it('should respect maximum boundary', () => {
      const { result } = renderHook(() => useCounter({ min: 0, max: 5 }));

      act(() => {
        result.current.setValue(5);
        result.current.increment();
      });

      expect(result.current.count).toBe(5);
      expect(result.current.isAtMax).toBe(true);
    });

    it('should not exceed maximum when incrementing', () => {
      const { result } = renderHook(() => useCounter({ min: 0, max: 3 }));

      act(() => {
        result.current.setValue(3);
        result.current.increment();
      });

      expect(result.current.count).toBe(3);
    });

    it('should not go below minimum when decrementing', () => {
      const { result } = renderHook(() => useCounter({ min: -2, max: 10 }));

      act(() => {
        result.current.setValue(-2);
        result.current.decrement();
      });

      expect(result.current.count).toBe(-2);
    });
  });

  describe('setValue', () => {
    it('should set value within boundaries', () => {
      const { result } = renderHook(() => useCounter({ min: 0, max: 10 }));

      act(() => {
        result.current.setValue(5);
      });

      expect(result.current.count).toBe(5);
    });

    it('should not set value below minimum', () => {
      const { result } = renderHook(() => useCounter({ min: 0, max: 10 }));

      act(() => {
        result.current.setValue(-5);
      });

      expect(result.current.count).toBe(0);
    });

    it('should not set value above maximum', () => {
      const { result } = renderHook(() => useCounter({ min: 0, max: 10 }));

      act(() => {
        result.current.setValue(15);
      });

      expect(result.current.count).toBe(0);
    });
  });

  describe('boundary flags', () => {
    it('should correctly identify when at minimum', () => {
      const { result } = renderHook(() => useCounter({ min: 0, max: 10 }));

      expect(result.current.isAtMin).toBe(true);

      act(() => {
        result.current.increment();
      });

      expect(result.current.isAtMin).toBe(false);
    });

    it('should correctly identify when at maximum', () => {
      const { result } = renderHook(() => useCounter({ min: 0, max: 5 }));

      act(() => {
        result.current.setValue(5);
      });

      expect(result.current.isAtMax).toBe(true);
    });

    it('should handle edge case when min equals max', () => {
      const { result } = renderHook(() => useCounter({ min: 5, max: 5 }));

      expect(result.current.count).toBe(0); // default initial value
      expect(result.current.isAtMin).toBe(false);
      expect(result.current.isAtMax).toBe(false);

      act(() => {
        result.current.setValue(5);
      });

      expect(result.current.isAtMin).toBe(true);
      expect(result.current.isAtMax).toBe(true);
    });
  });

  describe('multiple operations', () => {
    it('should handle multiple increments and decrements', () => {
      const { result } = renderHook(() => useCounter({ min: 0, max: 10 }));

      act(() => {
        result.current.increment();
        result.current.increment();
        result.current.decrement();
        result.current.increment();
      });

      expect(result.current.count).toBe(2);
    });

    it('should maintain state across multiple operations', () => {
      const { result } = renderHook(() => useCounter({ initialValue: 3 }));

      act(() => {
        result.current.increment();
        result.current.increment();
        result.current.reset();
        result.current.decrement();
      });

      expect(result.current.count).toBe(2);
    });
  });
});
