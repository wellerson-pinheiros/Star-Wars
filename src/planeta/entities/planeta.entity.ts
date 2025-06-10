import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { StarSystemsEntity } from '../../startsystems/entities/starsystem.entity';

@Entity({ name: 'tb_planetas' })
export class PlanetaEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false, length: 200 })
  nome: string;
  @Column({ nullable: true, length: 100 })
  clima: string;
  @Column({ nullable: true, length: 150 })
  terreno: string;
  @Column({ nullable: false, type: 'decimal' })
  populacao: number;
  @ManyToOne(() => StarSystemsEntity, sistema => sistema.planetas, { onDelete: 'CASCADE' })
  sistemaSolar: StarSystemsEntity;
}
