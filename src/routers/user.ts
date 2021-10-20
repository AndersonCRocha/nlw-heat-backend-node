import { Router } from 'express';
import { getUserProfileController } from '../controllers';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

export const userRouter = Router()
  .get('/me', ensureAuthenticated, getUserProfileController.handle.bind(getUserProfileController));
