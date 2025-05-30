import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, ILike, DeleteResult } from "typeorm";
import { PersonagensEntity } from "../entities/personagens.entity";

@Injectable()
export class    PersonagenService {
  constructor(
    @InjectRepository(PersonagensEntity)
    private personagemRepository: Repository<PersonagensEntity>,
  ) {}

  async findAll(): Promise<PersonagensEntity[]> {
    return await this.personagemRepository.find();
  }

  async findById(id: number): Promise<PersonagensEntity> {
    const buscaPersonagem = await this.personagemRepository.findOne({
      where: {
        id,
      },
    });
    if (!buscaPersonagem) {
      throw new HttpException('Personagem não encontrado!', HttpStatus.NOT_FOUND);
    }
    return buscaPersonagem;
  }

  async findByName(nome: string): Promise<PersonagensEntity[]> {
    const buscaPersonagemName = await this.personagemRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
    if (buscaPersonagemName.length === 0) {
      throw new HttpException('Personagem não encontrado!', HttpStatus.NOT_FOUND);
    }
    return buscaPersonagemName;
  }

  async creat(personagem: PersonagensEntity): Promise<PersonagensEntity> {
    return await this.personagemRepository.save(personagem);
  }

  async update(personagem: PersonagensEntity): Promise<PersonagensEntity> {
    this.findById(personagem.id);
    return this.personagemRepository.save(personagem);
  }

  async delete(id: number): Promise<DeleteResult> {
    this.findById(id);
    return this.personagemRepository.delete(id);
  }
}