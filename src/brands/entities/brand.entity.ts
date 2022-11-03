import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  brand_id: number;

  @Column()
  marca: string;

  @OneToMany(() => Product, (producto) => producto.brand)
  productos: Product[];
}
