import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Body, Put, Delete, UseGuards } from "@nestjs/common";
import { UsuarioEntity } from "../entities/usuario.entity";
import { UsuarioService } from "../service/usuario.service";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";




@Controller('/usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<UsuarioEntity[]> {
    return this.usuarioService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<UsuarioEntity> {
    return this.usuarioService.findById(id);
  }

//   @UseGuards(JwtAuthGuard)
//   @Get('/usuario/:nome')
//   @HttpCode(HttpStatus.OK)
//   findByNome(@Param('nome') nome: string): Promise<UsuarioEntity[]> {
//     return this.usuarioService.findByName(nome);
//   }

  @Post('/cadastrar')
  @HttpCode(HttpStatus.CREATED)
  creat(@Body() usuario: UsuarioEntity): Promise<UsuarioEntity> {
    return this.usuarioService.create(usuario);
  }
  
  @UseGuards(JwtAuthGuard)
  @Put('/atualizar')
  @HttpCode(HttpStatus.OK)
  update(@Body() usuario: UsuarioEntity): Promise<UsuarioEntity> {
    return this.usuarioService.update(usuario);
  }

//   @UseGuards(JwtAuthGuard)
//   @Delete('/:id')
//   @HttpCode(HttpStatus.NO_CONTENT)
//   delete(@Param('id', ParseIntPipe) id: number) {
//     return this.usuarioService.delete(id);
//   }
}
