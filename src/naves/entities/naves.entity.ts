import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_naves'})
export class NavesEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 255})
    nome: string;

    @Column({nullable:false, length: 300})
    modelo: string;

    @Column({nullable:false, length: 300})
    fabricante: string;
    
    @Column({nullable:false,})
    capassidadePassageiros: number;
}