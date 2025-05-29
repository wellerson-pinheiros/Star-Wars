import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PlanetaEntity } from "../entities/planeta.entity";
import { Repository } from "typeorm";

@Injectable()
export class planetaService{
    constructor(
       @InjectRepository(PlanetaEntity)
       private planetaRepository: Repository<PlanetaEntity>
    ){}

    async findAll(): Promise<PlanetaEntity[]> {
        return await this.planetaRepository.find()
    }

    async findById(id: number): Promise<PlanetaEntity> {
       const buscaPlaneta = await this.planetaRepository.findOne({
        where: {
            id
        }
       });
       if(!buscaPlaneta){
        throw new HttpException('Planeta não encontrado!', HttpStatus.NOT_FOUND)
       }
       return buscaPlaneta;
    }
}