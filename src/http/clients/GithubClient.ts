import axios from 'axios';

interface IAccessTokenResponse {
  access_token: string
}

interface IGithubUserResponse {
  avatar_url: string
  login: string
  id: number
  name: string
}

class GithubClient {
  async getUserInfo(accessToken: string) {
    const { data } = await axios.get<IGithubUserResponse>('https://api.github.com/user', {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  }

  async getAccessTokenByCode(code: string) {
    const url = 'https://github.com/login/oauth/access_token';

    const { data } = await axios.post<IAccessTokenResponse>(url, null, {
      params: {
        code,
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
      },
      headers: {
        Accept: 'application/json',
      },
    });

    return data.access_token;
  }
}

export { GithubClient };
