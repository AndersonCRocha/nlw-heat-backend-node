import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { authRouter } from './auth';
import { messagesRouter } from './message';

export const router = Router()
  .use(authRouter)
  .use(ensureAuthenticated)
  .use('/messages', messagesRouter);
