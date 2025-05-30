import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
