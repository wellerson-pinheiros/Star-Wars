import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StarSystemsEntity } from './entities/starsystem.entity';
import { StarSystemsService } from './services/starsystem.service';
import { StarSystemController } from './controller/systems.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StarSystemsEntity])],
  exports: [],
  providers: [StarSystemsService],
  controllers: [StarSystemController],
})
export class StarSystemsModule {}
