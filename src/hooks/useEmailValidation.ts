import { useCallback } from 'react';

export function useEmailValidation() {
  const validateEmail = useCallback((email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }, []);

  return { validateEmail };
}
