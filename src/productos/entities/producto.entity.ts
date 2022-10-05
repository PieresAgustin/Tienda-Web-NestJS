import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  tipo: string;
  @Column()
  talle: string;
  @Column()
  color: string;
  @Column()
  precio: number;
}
