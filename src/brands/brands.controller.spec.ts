import { Test, TestingModule } from '@nestjs/testing';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';

describe('BrandsController', () => {
  let controller: BrandsController;

  const brandsMock = {
    brands: [
      {
        name: 'Nike',
        brand_id: 1,
      },
      {
        brand_id: 2,
        marca: 'Adidas',
      },
    ],
    findAll() {
      return this.brands;
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrandsController],
      providers: [BrandsService],
    })
      .overrideProvider(BrandsService)
      .useValue(brandsMock)
      .compile();

    controller = module.get<BrandsController>(BrandsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should show me an array of brands', async () => {
    const result = await controller.findAll();
    expect(result).toEqual(brandsMock.brands);
  });
});
