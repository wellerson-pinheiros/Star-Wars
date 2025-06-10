import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlanetaEntity } from '../../planeta/entities/planeta.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_star_system' })
export class StarSystemsEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 200, nullable: false })
  nome: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  descrição: string;

  @ApiProperty()
  @OneToMany(() => PlanetaEntity, planeta => planeta.sistemaSolar)
  planetas: PlanetaEntity[];
  // fazer relacionamento com planeta para listar todos os planetas relacionados ao Sistemas Estelares
}
