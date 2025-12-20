import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ClientsModule } from './modules/clients/clients.module';
import { InteractionsModule } from './modules/interactions/interactions.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { FinancialModule } from './modules/financial/financial.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => getTypeOrmConfig(config),
    }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const secret: string = config.get<string>('JWT_SECRET') ?? 'secret';
        const raw = config.get<string>('JWT_EXPIRES_IN') ?? '3600s';
        const match = raw.match(/^(\d+)/);
        const expiresIn: number = Number(match ? match[1] : '3600');
        return { secret, signOptions: { expiresIn } };
      },
    }),
    UsersModule,
    AuthModule,
    ClientsModule,
    InteractionsModule,
    TasksModule,
    FinancialModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtAuthGuard],
})
export class AppModule {}
