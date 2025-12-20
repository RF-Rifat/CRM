import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';
import { UsersService } from '../../modules/users/users.service';
import { Role } from '../../shared/enums/role.enum';

async function run() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const users = app.get(UsersService);
  const seedUsers = [
    {
      email: 'william@emptyad.com',
      name: 'William Walsh',
      password: 'Password@1',
      role: Role.CEO,
    },
    {
      email: 'beck@emptyad.com',
      name: 'Beck Majdell',
      password: 'Password@1',
      role: Role.CGO,
    },
    {
      email: 'roman@emptyad.com',
      name: 'M.A. Roman',
      password: 'Password@1',
      role: Role.CTO,
    },
  ];
  for (const u of seedUsers) {
    const exists = await users.findByEmail(u.email);
    if (!exists) {
      await users.create(u.email, u.name, u.password, u.role);

      console.log('Seeded user', u.email);
    } else {
      console.log('User exists', u.email);
    }
  }
  await app.close();
}

void run();
