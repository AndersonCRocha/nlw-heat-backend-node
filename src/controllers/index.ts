import { authenticationService, createMessageUseCase } from '../useCases';
import { AuthenticationController } from './AuthenticationController';
import { CreateMessageController } from './MessageController';

const authenticationController = new AuthenticationController(authenticationService);
const createMessageController = new CreateMessageController(createMessageUseCase);

export {
  authenticationController,
  createMessageController,
};
