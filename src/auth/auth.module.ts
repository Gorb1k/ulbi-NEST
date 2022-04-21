import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";




@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    UsersModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: {
        expiresIn: '24h'
      }
    })
  ]
})
export class AuthModule {}
