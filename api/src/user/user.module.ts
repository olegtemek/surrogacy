import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { getJwtConfig } from 'src/config/jwt';
import { UserRepository } from './user.repository';
import { PrismaService } from 'lib/prisma';
import { LangService } from 'lib/lang';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    JwtStrategy,
    UserRepository,
    PrismaService,
    LangService,
  ],
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig,
    }),
  ],
})
export class UserModule {}
