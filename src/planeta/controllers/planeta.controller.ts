import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
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
}