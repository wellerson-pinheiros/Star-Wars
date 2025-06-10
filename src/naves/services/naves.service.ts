import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, ILike, DeleteResult } from "typeorm";
import { NavesEntity } from "../entities/naves.entity";

@Injectable()
export class    NavesService {
  constructor(
    @InjectRepository(NavesEntity)
    private navesRepository: Repository<NavesEntity>,
  ) {}

  async findAll(): Promise<NavesEntity[]> {
    return await this.navesRepository.find();
  }

  async findById(id: number): Promise<NavesEntity> {
    const buscaNaves = await this.navesRepository.findOne({
      where: {
        id,
      },
    });
    if (!buscaNaves) {
      throw new HttpException('Nave não encontrado!', HttpStatus.NOT_FOUND);
    }
    return buscaNaves;
  }

  async findByName(nome: string): Promise<NavesEntity[]> {
    const buscaNavesNome = await this.navesRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
    if (buscaNavesNome.length === 0) {
      throw new HttpException('Nave não encontrado!', HttpStatus.NOT_FOUND);
    }
    return buscaNavesNome;
  }

  async creat(naves: NavesEntity): Promise<NavesEntity> {
    return await this.navesRepository.save(naves);
  }

  async update(naves: NavesEntity): Promise<NavesEntity> {
    this.findById(naves.id);
    return this.navesRepository.save(naves);
  }

  async delete(id: number): Promise<DeleteResult> {
    this.findById(id);
    return this.navesRepository.delete(id);
  }
}