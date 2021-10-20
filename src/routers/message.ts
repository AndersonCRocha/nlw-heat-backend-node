import { Router } from 'express';
import { createMessageController, getLastThreeMessagesController } from '../controllers';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

export const messagesRouter = Router()
  .post('/', ensureAuthenticated, createMessageController.handle.bind(createMessageController))
  .get('/last3', getLastThreeMessagesController.handle.bind(getLastThreeMessagesController));
