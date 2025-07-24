import { useMarking } from '../../hooks/useMarking';
import { renderHook } from '@testing-library/react-native';

describe('useMarking', () => {
  it('returns true for correct sort answers', () => {
    const { result } = renderHook(() =>
      useMarking({
        question: '',
        userAnswer: '',
        questionType: 'sort',
        correctAnswerMapping: {
          Category1: ['a', 'b'],
          Category2: ['c']
        },
        categories: ['Category1', 'Category2'],
        cat1: ['a', 'b'],
        cat2: ['c']
      })
    );
    expect(result.current).toBe(true);
  });

  it('returns false for incorrect sort answers (wrong content)', () => {
    const { result } = renderHook(() =>
      useMarking({
        question: '',
        userAnswer: '',
        questionType: 'sort',
        correctAnswerMapping: {
          Category1: ['a', 'b'],
          Category2: ['c']
        },
        categories: ['Category1', 'Category2'],
        cat1: ['a'],
        cat2: ['c']
      })
    );
    expect(result.current).toBe(false);
  });

  it('returns false for incorrect sort answers (wrong length)', () => {
    const { result } = renderHook(() =>
      useMarking({
        question: '',
        userAnswer: '',
        questionType: 'sort',
        correctAnswerMapping: {
          Category1: ['a', 'b'],
          Category2: ['c']
        },
        categories: ['Category1', 'Category2'],
        cat1: ['a', 'b', 'd'],
        cat2: ['c']
      })
    );
    expect(result.current).toBe(false);
  });

  it('returns true for correct mcq answer', () => {
    const { result } = renderHook(() =>
      useMarking({
        question: 'A',
        userAnswer: 'A',
        questionType: 'mcq',
        correctAnswerMapping: {},
        categories: [],
        cat1: [],
        cat2: []
      })
    );
    expect(result.current).toBe(true);
  });

  it('returns false for incorrect mcq answer', () => {
    const { result } = renderHook(() =>
      useMarking({
        question: 'A',
        userAnswer: 'B',
        questionType: 'mcq',
        correctAnswerMapping: {},
        categories: [],
        cat1: [],
        cat2: []
      })
    );
    expect(result.current).toBe(false);
  });

  it('returns false for unknown question type', () => {
    const { result } = renderHook(() =>
      useMarking({
        question: '',
        userAnswer: '',
        questionType: 'unknown',
        correctAnswerMapping: {},
        categories: [],
        cat1: [],
        cat2: []
      })
    );
    expect(result.current).toBe(false);
  });
});
