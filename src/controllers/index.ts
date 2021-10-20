import {
  authenticationService, createMessageUseCase, getLastThreeMessagesUseCase, getUserProfileUseCase,
} from '../useCases';
import { AuthenticationController } from './AuthenticationController';
import { GetLastThreeMessagesController } from './GetLastThreeMessagesController';
import { GetUserProfileController } from './GetUserProfileController';
import { CreateMessageController } from './MessageController';

const authenticationController = new AuthenticationController(authenticationService);
const createMessageController = new CreateMessageController(createMessageUseCase);
const getLastThreeMessagesController = new GetLastThreeMessagesController(
  getLastThreeMessagesUseCase,
);
const getUserProfileController = new GetUserProfileController(getUserProfileUseCase);

export {
  authenticationController,
  createMessageController,
  getLastThreeMessagesController,
  getUserProfileController,
};
