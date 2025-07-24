import { useCallback } from 'react';

export function useEmailValidation() {
  // Updated regex: no consecutive dots, stricter domain and TLD, no leading/trailing dot, at least one character before and after @ and .
  const validateEmail = useCallback((email: string) => {
    return /^[^\s@]+(?:\.[^\s@]+)*@[^\s@.]+(?:\.[^\s@.]+)+$/.test(email);
  }, []);

  return { validateEmail };
}
