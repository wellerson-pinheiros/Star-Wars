import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_naves' })
export class NavesEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ nullable: false, length: 255 })
  @ApiProperty()
  nome: string;

  @Column({ nullable: false, length: 300 })
  @ApiProperty()
  modelo: string;

  @Column({ nullable: false, length: 300 })
  @ApiProperty()
  fabricante: string;

  @ApiProperty()
  @Column({ nullable: false })
  capassidadePassageiros: number;
}
