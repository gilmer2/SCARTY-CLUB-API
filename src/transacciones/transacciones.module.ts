import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransaccionesService } from './transacciones.service';
import { TransaccionesController } from './transacciones.controller';
import { Transaccion, TransaccionSchema } from './mongo/transacciones.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Transaccion.name, schema: TransaccionSchema }])],
  controllers: [TransaccionesController],
  providers: [TransaccionesService],
})
export class TransaccionesModule {}
