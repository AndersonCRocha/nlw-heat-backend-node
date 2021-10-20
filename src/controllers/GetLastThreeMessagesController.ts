import { Request, Response } from 'express';
import { GetLastThreeMessagesUseCase } from '../useCases/GetLastThreeMessagesUseCase';

class GetLastThreeMessagesController {
  constructor(
    private getLastThreeMessagesUseCase: GetLastThreeMessagesUseCase,
  ) {}

  async handle(request: Request, response: Response) {
    const messages = await this.getLastThreeMessagesUseCase.execute();
    return response.json(messages);
  }
}

export { GetLastThreeMessagesController };
