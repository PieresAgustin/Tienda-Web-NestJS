import { Brand } from 'src/brands/entities/brand.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  waist: string;

  @Column()
  color: string;

  @Column()
  stock: number

  @Column()
  price: number;

  @ManyToOne(() => Brand, (brand) => brand.productos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'marcaID' })
  brand: Brand;
}
