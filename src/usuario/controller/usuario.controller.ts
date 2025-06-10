import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Body, Put, Delete } from "@nestjs/common";
import { UsuarioEntity } from "../entities/usuario.entity";
import { UsuarioService } from "../service/usuario.service";




@Controller('/usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<UsuarioEntity[]> {
    return this.usuarioService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<UsuarioEntity> {
    return this.usuarioService.findById(id);
  }

  @Get('/usuario/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<UsuarioEntity[]> {
    return this.usuarioService.findByName(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  creat(@Body() usuario: UsuarioEntity): Promise<UsuarioEntity> {
    return this.usuarioService.create(usuario);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() usuario: UsuarioEntity): Promise<UsuarioEntity> {
    return this.usuarioService.update(usuario);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.delete(id);
  }
}
