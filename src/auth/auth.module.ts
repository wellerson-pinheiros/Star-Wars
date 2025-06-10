import { forwardRef, Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypt/bcrypt";
import { UsuarioModule } from "../usuario/usuario.module";
import { PassportModule } from "@nestjs/passport";
import { jwtConstants } from "./constants/constants";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./controller/auth.controller";
import { AuthService } from "./service/auth.service";
import { LocalStrategy } from "./estrategy/local.strategy";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtStrategy } from "./estrategy/jwt.strategy";

@Module({
     imports: [
        forwardRef(() => UsuarioModule),
        PassportModule,
        ConfigModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'), // ou use JWT_SECRET se renomear
                signOptions: { expiresIn: '1h' },
            }),
        }),
    ],
    exports: [Bcrypt],
    providers: [Bcrypt,AuthService,LocalStrategy,JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule{}