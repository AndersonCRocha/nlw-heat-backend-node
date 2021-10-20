import { Request, Response } from 'express';
import { GetUserProfileUseCase } from '../useCases/GetUserProfileUseCase';

class GetUserProfileController {
  constructor(
    private getUserProfileUseCase: GetUserProfileUseCase,
  ) {}

  async handle(request: Request, response: Response) {
    const user = await this.getUserProfileUseCase.execute(request.userId);
    return response.json(user);
  }
}

export { GetUserProfileController };
