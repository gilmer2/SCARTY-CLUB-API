import { Module } from '@nestjs/common';
import { CartShopService } from './cart-shop.service';
import { CartShopController } from './cart-shop.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CartShop, CartShopSchema } from './mongo/cart-shop.schema';
import { Client, ClientSchema } from 'src/clientes/mongo/clientes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CartShop.name, schema: CartShopSchema },
    ]),
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
  ],
  providers: [CartShopService],
  controllers: [CartShopController],
})
export class CartShopModule {}
