import { Request, Response } from "express";
import { AuthenticationService } from "../services/AuthenticationService";

class AuthenticationController {
  constructor (
    private authenticationService: AuthenticationService
  ) { }

  async githubSignIn(request: Request, response: Response) {
    return response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
  }

  async githubCallback(request: Request, response: Response) {
    const { code } = request.query;
    const accessToken = await this.authenticationService.authenticateUserByGithubCode(String(code));
    return response.json(accessToken);
  }

  async authenticate(request: Request, response: Response) {
    const { code } = request.body;
    
  }
}

export { AuthenticationController }