import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { StarSystemsEntity } from '../../startsystems/entities/starsystem.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_planetas' })
export class PlanetaEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;
  @ApiProperty()
  @Column({ nullable: false, length: 200 })
  nome: string;
  @ApiProperty()
  @Column({ nullable: true, length: 100 })
  clima: string;
  @ApiProperty()
  @Column({ nullable: true, length: 150 })
  terreno: string;
  @ApiProperty()
  @Column({ nullable: false, type: 'decimal' })
  populacao: number;
  @ApiProperty()
  @ManyToOne(() => StarSystemsEntity, (sistema) => sistema.planetas, {
    onDelete: 'CASCADE',
  })
  sistemaSolar: StarSystemsEntity;
}
