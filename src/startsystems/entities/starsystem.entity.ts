import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlanetaEntity } from '../../planeta/entities/planeta.entity';

@Entity({ name: 'tb_star_system' })
export class StarSystemsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @IsNotEmpty()
  @Column({ length: 200, nullable: false })
  nome: string;
  @Column({ type: 'text', nullable: true })
  descrição: string;

  @OneToMany(() => PlanetaEntity, planeta => planeta.sistemaSolar)
  planetas: PlanetaEntity[];
  // fazer relacionamento com planeta para listar todos os planetas relacionados ao Sistemas Estelares
}
