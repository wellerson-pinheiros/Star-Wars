import { Module } from "@nestjs/common";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Afiliação } from "../../personagens/enums/afiliação";

@Entity({name: 'tb_usuarios'})
export class UsuarioEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: false, length: 255})
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    @Column({nullable:false})
    usuario: string; //email para login
    
    @MinLength(8)
    @IsNotEmpty()
    @Column({nullable: false})
    senha: string;

    @Column({ type: 'enum', enum: Afiliação, nullable: false })
    afiliação: string;
}