import { Router } from 'express';
import { authenticationController } from '../controllers';

export const authRouter = Router()
  .get('/signin/github', authenticationController.githubSignIn.bind(authenticationController))
  .get('/signin/github/callback', authenticationController.githubCallback.bind(authenticationController));
