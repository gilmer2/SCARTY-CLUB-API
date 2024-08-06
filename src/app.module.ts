import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { UsersModule } from './users/users.module';
import { PremiosModule } from './premios/premios.module';
import { BeneficiosModule } from './beneficios/beneficios.module';
import { TransaccionesModule } from './transacciones/transacciones.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { ProductModule } from './product/product.module';
import { MarkModule } from './mark/mark.module';
import { UploadModule } from './upload/upload.module';
import { CartShopModule } from './cart-shop/cart-shop.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    MongooseModule.forRoot('mongodb://127.0.0.1/ScaryClub'),
    ClientesModule,
    UsersModule,
    PremiosModule,
    BeneficiosModule,
    TransaccionesModule,
    AuthModule,
    ProductModule,
    MarkModule,
    UploadModule,
    CartShopModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
