import { renderHook } from '@testing-library/react-native';
import { useEmailValidation } from '../../hooks/useEmailValidation';

describe('useEmailValidation', () => {
  it('returns true for valid email addresses', () => {
    const { result } = renderHook(() => useEmailValidation());
    expect(result.current.validateEmail('test@example.com')).toBe(true);
    expect(result.current.validateEmail('user.name+tag@domain.co.uk')).toBe(true);
    expect(result.current.validateEmail('a@b.io')).toBe(true);
  });

  it('returns false for invalid email addresses', () => {
    const { result } = renderHook(() => useEmailValidation());
    expect(result.current.validateEmail('invalid-email')).toBe(false);
    expect(result.current.validateEmail('user@.com')).toBe(false);
    expect(result.current.validateEmail('user@domain')).toBe(false);
    expect(result.current.validateEmail('user@domain.')).toBe(false);
    expect(result.current.validateEmail('@domain.com')).toBe(false);
    expect(result.current.validateEmail('user@domain..com')).toBe(false);
    expect(result.current.validateEmail('')).toBe(false);
  });
});
