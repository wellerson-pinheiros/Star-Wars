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
import { NavesModule } from './naves/naves.module';
import { NavesEntity } from './naves/entities/naves.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioEntity } from './usuario/entities/usuario.entity';
import { AuthModule } from './auth/auth.module';
import { ProdService } from './data/services/prod.service';
import { DevService } from './data/services/dev.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // permite acesso ao process.env em toda a aplicação
      envFilePath: '.env'
    }),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
      imports: [ConfigModule]
    }),
    planetaModule,
    StarSystemsModule,
    PersonagensModule,
    NavesModule,
    UsuarioModule,
    AuthModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
