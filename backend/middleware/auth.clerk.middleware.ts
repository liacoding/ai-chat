import { requireAuth } from '@clerk/express';

export const protectedRoute = requireAuth();