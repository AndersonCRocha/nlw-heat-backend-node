import { Request, Response } from "express";
import { AuthenticationService } from "../useCases/AuthenticationService";

class AuthenticationController {
  constructor (
    private authenticationService: AuthenticationService
  ) { }

  async githubSignIn(request: Request, response: Response) {
    return response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
  }

  async authenticate(request: Request, response: Response) {
    try {
      const { code } = request.body;
      const accessToken = await this.authenticationService.authenticateUserByGithubCode(String(code));
      return response.json(accessToken);
    } catch (err) {
      return response.status(401).json({ message: err.message });
    }
  }
}

export { AuthenticationController }