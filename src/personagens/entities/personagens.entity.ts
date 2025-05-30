import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';
import { Afiliação } from '../enums/afiliação';

@Entity({ name: 'tb_personagens' })
export class PersonagensEntity {
    @PrimaryGeneratedColumn()
  id: number;
  @Column({nullable: false, length: 255})
  nome: string;
  @Column({length: 255, nullable: false})
  raca: string;
  @Column({length: 255, nullable: false})
  planetaNatal: string;

  @Column({ type: 'enum', enum: Afiliação, nullable: false })
  afiliacao: Afiliação;
}
