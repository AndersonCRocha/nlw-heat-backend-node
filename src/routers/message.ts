import { Router } from 'express';
import { createMessageController } from '../controllers';

export const messagesRouter = Router()
  .post('/', createMessageController.handle.bind(createMessageController));
