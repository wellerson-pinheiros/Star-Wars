import { Module } from "@nestjs/common";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Afiliação } from "../../personagens/enums/afiliação";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'tb_usuarios'})
export class UsuarioEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: false, length: 255})
    nome: string;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    @Column({nullable:false})
    usuario: string; //email para login
    
    @ApiProperty()
    @MinLength(8)
    @IsNotEmpty()
    @Column({nullable: false})
    senha: string;

    @ApiProperty()
    @Column({ type: 'enum', enum: Afiliação, nullable: false })
    afiliação: string;
}