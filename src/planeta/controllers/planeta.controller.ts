import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { planetaService } from "../service/planeta.service";
import { PlanetaEntity } from "../entities/planeta.entity";

@Controller("/planetas")
export class PlanetaController{
constructor (private readonly planetaService: planetaService){}


@Get()
@HttpCode(HttpStatus.OK)
findAll(): Promise<PlanetaEntity[]> {
    return this.planetaService.findAll()
}

@Get('/:id')
@HttpCode(HttpStatus.OK)
findById(@Param('id', ParseIntPipe) id: number): Promise<PlanetaEntity> {
    return this.planetaService.findById(id)
}

@Get('/nome/:nome')
@HttpCode(HttpStatus.OK)
findByNome(@Param('nome') nome: string): Promise <PlanetaEntity[]> {
    return this.planetaService.findByName(nome)
}

@Post()
@HttpCode(HttpStatus.CREATED)
creat (@Body()planeta : PlanetaEntity) : Promise <PlanetaEntity> {
    return this.planetaService.creat(planeta)
}

@Put()
@HttpCode(HttpStatus.OK)
update (@Body() planeta : PlanetaEntity) : Promise <PlanetaEntity> {
    return this.planetaService.update(planeta)
}

@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
delete (@Param('id', ParseIntPipe) id: number) {
    return this.planetaService.delete(id)
}
}