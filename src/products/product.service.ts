import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product: Product =
      this.productsRepository.create(createProductDto);
    return this.productsRepository.save(product);
  }

  findAll() {
    return this.productsRepository.find({ relations: ['brand'] });
  }

  async findOne(id: number) {
    const aux = await this.productsRepository.findOne({ where:{id},relations: ['brand'] });
    if (aux == null) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return aux;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    this.productsRepository.update(id, updateProductDto);
    return this.productsRepository.findOne({ where:{id},relations: ['brand'] });
  }

  async remove(id: number) {
    const product = await this.productsRepository.findOneBy({ id });
    if (product == null) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    } else {
      return this.productsRepository.delete({ id });
    }
  }
}
