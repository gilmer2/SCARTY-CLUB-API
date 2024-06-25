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

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/ScaryClub'),
    ClientesModule,
    UsersModule,
    PremiosModule,
    BeneficiosModule,
    TransaccionesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
