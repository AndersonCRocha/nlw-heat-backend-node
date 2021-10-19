import { Router } from 'express';
import { authenticationController } from '../controllers';

export const authRouter = Router()
  .get('/signin/github', authenticationController.githubSignIn.bind(authenticationController))
  .post('/signin/github/callback', authenticationController.authenticate.bind(authenticationController));
