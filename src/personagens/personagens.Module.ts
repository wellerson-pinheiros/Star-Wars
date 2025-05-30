import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonagensEntity } from './entities/personagens.entity';
import { PersonagemController } from './controllers/personagem.controller';
import { PersonagenService } from './services/personagens.service';

@Module({
  imports: [TypeOrmModule.forFeature([PersonagensEntity])],
  exports: [],
  controllers: [PersonagemController],
  providers: [PersonagenService],
})
export class PersonagensModule {}
