import {
  TRequestMiddleware,
  TResponseMiddleware,
} from '@/api/types';

//
// Middleware for generalized request modify
//
export const requestMiddlewares: TRequestMiddleware[] = [];

//
// Middleware for generalized response modify
//
export const responseMiddlewares: TResponseMiddleware[] = [];
