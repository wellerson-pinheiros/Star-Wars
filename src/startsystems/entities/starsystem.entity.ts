import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tb_star_system'} )
export class StarSystemsEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @IsNotEmpty()
    @Column({length: 200, nullable: false})
    nome: string;
    @Column({type: 'text', nullable: true})
    descrição: string;

    // fazer relacionamento com planeta para listar todos os planetas relacionados ao Sistemas Estelares
}