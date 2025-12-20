import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
type JwtPayload = { sub: number; email: string; role: string };

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwt: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: Request & { user?: JwtPayload } = context
      .switchToHttp()
      .getRequest();
    const h: string | undefined = req.headers['authorization'];
    if (!h) throw new UnauthorizedException();
    const [type, token] = h.split(' ');
    if (type !== 'Bearer' || !token) throw new UnauthorizedException();
    const payload = await this.jwt.verifyAsync<JwtPayload>(token);
    req.user = payload;
    return true;
  }
}
