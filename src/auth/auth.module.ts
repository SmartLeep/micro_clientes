import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ClienteModule } from 'src/cliente/cliente.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import 'dotenv/config';
@Module({
  imports: [
    ClienteModule,
    PassportModule,
    JwtModule.register({
      secret: 'JWTCl4av3S3cr3ta4Api',
      signOptions: {
        expiresIn: 11,
        audience: 'Tu.COM',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
