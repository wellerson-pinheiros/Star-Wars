import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { PersonagensEntity } from "../entities/personagens.entity";
import { PersonagenService } from "../services/personagens.service";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('Personagens')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("/personagens")
export class PersonagemController{
constructor(private readonly personagemService: PersonagenService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<PersonagensEntity[]> {
    return this.personagemService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<PersonagensEntity> {
    return this.personagemService.findById(id);
  }

  @Get('/personagem/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<PersonagensEntity[]> {
    return this.personagemService.findByName(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  creat(@Body() personagem: PersonagensEntity): Promise<PersonagensEntity> {
    return this.personagemService.creat(personagem);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() personagem: PersonagensEntity): Promise<PersonagensEntity> {
    return this.personagemService.update(personagem);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.personagemService.delete(id);
  }
}