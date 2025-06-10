import { Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypt/bcrypt";

@Module({
    imports: [],
    exports: [Bcrypt],
    providers: [Bcrypt],
    controllers: []
})
export class AuthModule{}