import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { StarSystemsEntity } from '../entities/starsystem.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';

@Injectable()
export class StarSystemsService {
  constructor(
    @InjectRepository(StarSystemsEntity)
    private starSystemsRepository: Repository<StarSystemsEntity>,
  ) {}

  async findAll(): Promise<StarSystemsEntity[]> {
    return await this.starSystemsRepository.find();
  }

  async findById(id: number): Promise<StarSystemsEntity> {
    const buscaSistemaSolar = await this.starSystemsRepository.findOne({
      where: {
        id,
      },
    });
    if (!buscaSistemaSolar) {
      throw new HttpException(
        'Sistema estelar não encontrado!',
        HttpStatus.NOT_FOUND,
      );
    }
    return buscaSistemaSolar;
  }

  async findByName(nome: string): Promise<StarSystemsEntity[]> {
    const buscaSystems = await this.starSystemsRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
    if (buscaSystems.length === 0) {
      throw new HttpException('Sistema Solar não encontrado!', HttpStatus.NOT_FOUND);
    }
    return buscaSystems;
  }

  async creat(system: StarSystemsEntity): Promise<StarSystemsEntity> {
    return await this.starSystemsRepository.save(system);
  }

  async update(system: StarSystemsEntity): Promise<StarSystemsEntity> {
    this.findById(system.id);
    return this.starSystemsRepository.save(system);
  }

  async delete(id: number): Promise<DeleteResult> {
    this.findById(id);
    return this.starSystemsRepository.delete(id);
  }
}
