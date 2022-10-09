import { Brand } from 'src/brands/entities/brand.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

  @Column()
  name: string;

  @Column()
  talle: string;

  @Column()
  color: string;

  @Column()
  precio: number;

  @ManyToOne(() => Brand, (brand) => brand.productos)
  @JoinColumn({ name:'marcaID'})
  brand: Brand;
}
