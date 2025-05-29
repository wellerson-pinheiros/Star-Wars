import { Injectable } from "@nestjs/common";
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
}