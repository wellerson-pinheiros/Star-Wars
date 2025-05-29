import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PlanetaEntity } from "../entities/planeta.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

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

    async findByName(nome: string): Promise<PlanetaEntity[]> {
        const buscaPlanetaName = await this.planetaRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            }
        })
        if(buscaPlanetaName.length === 0) {
            throw new HttpException('Planeta não encontrado!', HttpStatus.NOT_FOUND)
        }
        return buscaPlanetaName;
    }


    async creat (planeta : PlanetaEntity): Promise<PlanetaEntity> {
        return await this.planetaRepository.save(planeta)
    }

    async update (planeta : PlanetaEntity): Promise <PlanetaEntity>  {
        this.findById(planeta.id)
        return this.planetaRepository.save(planeta)
    }

    async delete (id : number) : Promise<DeleteResult> {
        this.findById(id)
        return this.planetaRepository.delete(id)
    }
}