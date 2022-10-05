import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  create(createProductoDto: CreateProductoDto) {
    const producto: Producto =
      this.productoRepository.create(createProductoDto);
    return this.productoRepository.save(producto);
  }

  findAll() {
    return this.productoRepository.find();
  }

  findOne(id: number) {
    return this.productoRepository.findOneBy({ id });
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
