import { githubClient } from '../http/clients';
import { AuthenticationService } from './AuthenticationService';
import { CreateMessageUseCase } from './CreateMessageUseCase';

const authenticationService = new AuthenticationService(githubClient);
const createMessageUseCase = new CreateMessageUseCase();

export {
  authenticationService,
  createMessageUseCase,
};
