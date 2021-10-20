import { prismaClient } from '../prisma';

class GetUserProfileUseCase {
  async execute(userId: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: userId,
      },
    });

    return user;
  }
}

export { GetUserProfileUseCase };
