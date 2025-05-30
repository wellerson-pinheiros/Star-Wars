import { Module } from '@nestjs/common';
import { PlanetaController } from './controllers/planeta.controller';
import { planetaService } from './service/planeta.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanetaEntity } from './entities/planeta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlanetaEntity])],
  exports: [],
  providers: [planetaService],
  controllers: [PlanetaController],
})
export class planetaModule {}
