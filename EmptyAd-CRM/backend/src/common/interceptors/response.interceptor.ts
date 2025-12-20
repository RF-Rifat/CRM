import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map((data: unknown) => {
        const req: Request = context.switchToHttp().getRequest<Request>();
        return {
          data,
          meta: {
            path: req.url,
            method: req.method,
          },
          timestamp: new Date().toISOString(),
        };
      }),
    );
  }
}
