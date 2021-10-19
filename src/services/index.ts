import { githubClient } from "../http/clients";
import { AuthenticationService } from "./AuthenticationService";

const authenticationService = new AuthenticationService(githubClient);

export {
  authenticationService
}