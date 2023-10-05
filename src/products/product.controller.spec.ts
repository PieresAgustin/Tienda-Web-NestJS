import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './product.controller';
import { ProductsService } from './product.service';

describe('ProductsController', () => {
  let controller: ProductsController;

  const productsMock = {
    products: [
      {
        id: 1,
        name: 'Camiseta Nike',
        type: 'Camiseta',
        waist: 'M',
        color: 'White',
        stock: 30,
        price: 1000,
        image: '',
        quantity: 30,
        clearance: false,
        brand: {
          brand_id: 1,
          marca: 'Adidas',
        },
      },
      {
        id: 2,
        name: 'Camiseta Addidas',
        type: 'Camiseta',
        waist: 'XL',
        color: 'Blue and Yellow',
        stock: 20,
        price: 1500,
        image: '',
        quantity: 20,
        clearance: false,
        brand: {
          brand_id: 1,
          marca: 'Adidas',
        },
      },
    ],
    findOne() {
      return this.products;
    },
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
      controllers: [ProductsController],
    })
      .overrideProvider(ProductsService)
      .useValue(productsMock)
      .compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // it('Should find a product by an ID', async () => {
  //   const result = await controller.findOne('1');
  //   expect(result).toContain(productsMock.products{
  //     id:1
  //   }),
  // });
});
