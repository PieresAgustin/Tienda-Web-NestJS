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
  
  @Column()
  image: string;
  
  @Column({default: 0})
  quantity: number;

  @Column()
  clearance:boolean;

  @ManyToOne(() => Brand, (brand) => brand.productos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'marcaID' })
  brand: Brand;

  constructor(id:number, name:string, type:string, waist:string, color:string, stock:number, price:number, image:string, quantity:number, clearance:boolean){
    this.id = id;
    this.name = name;
    this.type = type;
    this.waist = waist;
    this.color = color;
    this.stock = stock;
    this.price = price;
    this.image = image;
    this.quantity = quantity;
    this.clearance = clearance;
  }
}
