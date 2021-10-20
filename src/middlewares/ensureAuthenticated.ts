import { NextFunction, Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';

interface ITokenPayload {
  sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ error_code: 'token.invalid' });
  }

  const [, token] = authorization.split(' ');

  try {
    const { sub } = jsonwebtoken.verify(token, process.env.JWT_SECRET) as ITokenPayload;
    request.userId = sub;

    return next();
  } catch (err) {
    return response.status(401).json({ error_code: 'token.expired' });
  }
}
