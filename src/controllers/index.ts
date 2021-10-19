import { authenticationService } from "../services";
import { AuthenticationController } from "./AuthenticationController";

const authenticationController = new AuthenticationController(authenticationService)

export {
  authenticationController
}