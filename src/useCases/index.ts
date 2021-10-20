import { githubClient } from '../http/clients';
import { AuthenticationService } from './AuthenticationService';
import { CreateMessageUseCase } from './CreateMessageUseCase';
import { GetLastThreeMessagesUseCase } from './GetLastThreeMessagesUseCase';
import { GetUserProfileUseCase } from './GetUserProfileUseCase';

const authenticationService = new AuthenticationService(githubClient);
const createMessageUseCase = new CreateMessageUseCase();
const getLastThreeMessagesUseCase = new GetLastThreeMessagesUseCase();
const getUserProfileUseCase = new GetUserProfileUseCase();

export {
  authenticationService,
  createMessageUseCase,
  getLastThreeMessagesUseCase,
  getUserProfileUseCase,
};
