import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/productos/entities/producto.entity';
import { Repository } from 'typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Producto)
    private brandRepository: Repository<Brand>,
  ) {}

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = this.brandRepository.create(createBrandDto);
    return this.brandRepository.save(brand);
  }

  findAll() {
    return this.brandRepository.find();
  }

  async findOne(brand_id: number) {
    const aux = await this.brandRepository.findOneBy({ brand_id });
    if (aux == null) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return aux;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
