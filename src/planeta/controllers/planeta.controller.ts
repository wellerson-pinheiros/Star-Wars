import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
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


}