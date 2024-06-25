import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BeneficiosService } from './beneficios.service';
import { BeneficiosController } from './beneficios.controller';
import { Beneficio, BeneficioSchema } from './mongo/beneficios.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Beneficio.name, schema: BeneficioSchema }])],
  controllers: [BeneficiosController],
  providers: [BeneficiosService],
})
export class BeneficiosModule {}
