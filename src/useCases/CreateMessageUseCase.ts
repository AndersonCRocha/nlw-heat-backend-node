import { io } from '../app';
import { prismaClient } from '../prisma';

interface ICreateMessage {
  userId: string,
  text: string
}

class CreateMessageUseCase {
  async execute({ userId, text }: ICreateMessage) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id: userId,
      },
      include: {
        user: true,
      },
    });

    io.emit('messages:new', {
      text: message.text,
      user_id: message.user_id,
      created_at: message.created_at,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url,
      },
    });

    return message;
  }
}

export { CreateMessageUseCase };
