import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PlanetaEntity } from './planeta/entities/planeta.entity';
import { planetaModule } from './planeta/planeta.module';
import { StarSystemsEntity } from './startsystems/entities/starsystem.entity';
import { StarSystemsModule } from './startsystems/starsystems.module';
import { PersonagensEntity } from './personagens/entities/personagens.entity';
import { PersonagensModule } from './personagens/personagens.Module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // permite acesso ao process.env em toda a aplicação
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [PlanetaEntity, StarSystemsEntity,PersonagensEntity],
      synchronize: true,
    }),
    planetaModule,
    StarSystemsModule,
    PersonagensModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
