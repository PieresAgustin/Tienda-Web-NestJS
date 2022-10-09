import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    return this.productoRepository.find({ relations: ['brand'] });
  }

  async findOne(id: number) {
    const aux = await this.productoRepository.findOneBy({ id });
    if (aux == null) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return aux;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    this.productoRepository.update(id, updateProductoDto);
    return this.productoRepository.findOneBy({ id });
  }

  async remove(id: number) {
    const producto = await this.productoRepository.findOneBy({ id });
    if (producto == null) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    } else {
      return this.productoRepository.delete({ id });
    }
  }
}
