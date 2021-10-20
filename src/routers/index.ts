import { Router } from 'express';
import { authRouter } from './auth';
import { messagesRouter } from './message';
import { userRouter } from './user';

export const router = Router()
  .use(authRouter)
  .use('/users', userRouter)
  .use('/messages', messagesRouter);
