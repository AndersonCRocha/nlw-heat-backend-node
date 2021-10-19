import { Request, Response } from "express";
import { CreateMessageUseCase } from "../useCases/CreateMessageUseCase";

class CreateMessageController {
  constructor (
    private messageService: CreateMessageUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { userId } = request;
    const message = await this.messageService.execute({ userId, text: request.body.message });
    return response.status(201).json({ message });
  }
}

export { CreateMessageController }