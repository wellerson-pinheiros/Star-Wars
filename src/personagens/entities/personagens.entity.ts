import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';
import { Afiliação } from '../enums/afiliação';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_personagens' })
export class PersonagensEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;
  @ApiProperty()
  @Column({ nullable: false, length: 255 })
  nome: string;
  @ApiProperty()
  @Column({ length: 255, nullable: false })
  raca: string;
  @ApiProperty()
  @Column({ length: 255, nullable: false })
  planetaNatal: string;

  @ApiProperty()
  @Column({ type: 'enum', enum: Afiliação, nullable: false })
  afiliacao: Afiliação;
}
