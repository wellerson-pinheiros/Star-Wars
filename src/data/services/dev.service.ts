import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { NavesEntity } from "../../naves/entities/naves.entity";
import { PersonagensEntity } from "../../personagens/entities/personagens.entity";
import { PlanetaEntity } from "../../planeta/entities/planeta.entity";
import { StarSystemsEntity } from "../../startsystems/entities/starsystem.entity";
import { UsuarioEntity } from "../../usuario/entities/usuario.entity";

@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
          type: 'mysql',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT || '3306'),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [PlanetaEntity, StarSystemsEntity,PersonagensEntity,NavesEntity,UsuarioEntity],
                synchronize: true,
              }
    };
  }
