import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
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

  update(brand_id: number, updateBrandDto: UpdateBrandDto) {
    this.brandRepository.update(brand_id, updateBrandDto);
    return this.brandRepository.findOneBy({ brand_id });
  }

  async remove(brand_id: number) {
    const producto = await this.brandRepository.findOneBy({ brand_id });
    if (producto == null) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    } else {
      return this.brandRepository.delete({ brand_id });
    }
  }
}
