import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './productos/entities/producto.entity';
import { BrandsModule } from './brands/brands.module';
import { Brand } from './brands/entities/brand.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      host: 'localhost',
      port: 5432,
      username: 'agustin',
      password: '12345',
      database: 'Tienda',
      entities: [Producto, Brand],
      synchronize: true,
    }),
    ProductosModule,
    BrandsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
