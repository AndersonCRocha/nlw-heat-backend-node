import jsonwebtoken from 'jsonwebtoken';
import { GithubClient } from "../http/clients/GithubClient";
import { prismaClient } from "../prisma";

class AuthenticationService {
  constructor (
    private githubClient: GithubClient
  ) {}

  async authenticateUserByGithubCode(code: string) {
    const accessToken = await this.githubClient.getAccessTokenByCode(code);
    const userInfo = await this.githubClient.getUserInfo(accessToken)

    const { login, id, avatar_url, name } = userInfo;

    let user = await prismaClient.user.findFirst({ 
      where: {
        github_id: id
      }
    });

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          name,
          login,
          avatar_url,
          github_id: id,
        }
      });
    }

    const token = jsonwebtoken.sign(
      { 
        user: {
          name: user.name,
          avatar_url: user.avatar_url,
          id: user.id 
        }
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '1d'
      }
    );

    return {
      user,
      access_token: token,
    };
  }
}

export { AuthenticationService }