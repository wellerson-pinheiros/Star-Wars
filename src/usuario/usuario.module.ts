import { Controller, forwardRef, Module } from "@nestjs/common";
import { UsuarioService } from "./service/usuario.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioController } from "./controller/usuario.controller";
import { UsuarioEntity } from "./entities/usuario.entity";
import { Bcrypt } from "../auth/bcrypt/bcrypt";
import { AuthModule } from "../auth/auth.module";

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioEntity]),
forwardRef(()=> AuthModule)],
    exports: [UsuarioService],
    providers: [UsuarioService],
    controllers: [UsuarioController]
})
export class UsuarioModule{}