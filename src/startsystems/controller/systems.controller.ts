import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { StarSystemsService } from "../services/starsystem.service";
import { StarSystemsEntity } from "../entities/starsystem.entity";

@Controller('/systems')
export class StarSystemController{
constructor (private readonly starSystemsService: StarSystemsService){}


@Get()
@HttpCode(HttpStatus.OK)
findAll(): Promise<StarSystemsEntity[]> {
    return this.starSystemsService.findAll()
}

@Get('/:id')
@HttpCode(HttpStatus.OK)
findById(@Param('id', ParseIntPipe) id: number): Promise<StarSystemsEntity> {
    return this.starSystemsService.findById(id)
}

@Get('/systems/:nome')
@HttpCode(HttpStatus.OK)
findByNome(@Param('nome') nome: string): Promise <StarSystemsEntity[]> {
    return this.starSystemsService.findByName(nome)
}

@Post()
@HttpCode(HttpStatus.CREATED)
creat (@Body()system : StarSystemsEntity) : Promise <StarSystemsEntity> {
    return this.starSystemsService.creat(system)
}

@Put()
@HttpCode(HttpStatus.OK)
update (@Body() system : StarSystemsEntity) : Promise <StarSystemsEntity> {
    return this.starSystemsService.update(system)
}

@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
delete (@Param('id', ParseIntPipe) id: number) {
    return this.starSystemsService.delete(id)
}
}
