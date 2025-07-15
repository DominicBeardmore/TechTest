import { z } from 'zod';

// User validation schemas
export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Name is required').max(50, 'Name too long'),
  email: z.string().email('Invalid email address'),
  avatar: z.string().url('Invalid URL').optional(),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z.object({
  name: z.string().min(1, 'Name is required').max(50, 'Name too long'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Counter validation schema
export const counterSchema = z.object({
  initialValue: z.number().int().min(-100).max(100),
  min: z.number().int().min(-1000),
  max: z.number().int().max(1000),
  step: z.number().int().positive(),
}).refine((data) => data.min < data.max, {
  message: "Min value must be less than max value",
  path: ["min"],
});

// Profile validation schema
export const profileSchema = z.object({
  name: z.string().min(1, 'Name is required').max(50, 'Name too long'),
  email: z.string().email('Invalid email address'),
  bio: z.string().max(500, 'Bio too long').optional(),
  website: z.string().url('Invalid URL').optional().or(z.literal('')),
});

// Type exports
export type User = z.infer<typeof userSchema>;
export type LoginForm = z.infer<typeof loginSchema>;
export type RegisterForm = z.infer<typeof registerSchema>;
export type CounterConfig = z.infer<typeof counterSchema>;
export type ProfileForm = z.infer<typeof profileSchema>;

// Validation helper functions
export function validateForm<T>(schema: z.ZodSchema<T>, data: unknown): T {
  return schema.parse(data);
}

export function validateFormSafe<T>(schema: z.ZodSchema<T>, data: unknown): { success: true; data: T } | { success: false; errors: z.ZodError } {
  const result = schema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data };
  }
  return { success: false, errors: result.error };
} 