import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Body, Put, Delete, UseGuards } from "@nestjs/common";
import { NavesEntity } from "../entities/naves.entity";
import { NavesService } from "../services/naves.service";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller("/naves")
export class NavesController{
constructor(private readonly navesService: NavesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<NavesEntity[]> {
    return this.navesService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<NavesEntity> {
    return this.navesService.findById(id);
  }

  @Get('/naves/:nave')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nave') nave: string): Promise<NavesEntity[]> {
    return this.navesService.findByName(nave);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  creat(@Body() nave: NavesEntity): Promise<NavesEntity> {
    return this.navesService.creat(nave);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() nave: NavesEntity): Promise<NavesEntity> {
    return this.navesService.update(nave);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.navesService.delete(id);
  }
}