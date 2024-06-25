import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Beneficio } from './mongo/beneficios.schema';
import { CreateBeneficioDto } from './dto/beneficios.dto';

@Injectable()
export class BeneficiosService {
  constructor(
    @InjectModel(Beneficio.name) private beneficioModel: Model<Beneficio>,
  ) {}

  async create(createBeneficioDto: CreateBeneficioDto): Promise<Beneficio> {
    const createdBeneficio = new this.beneficioModel(createBeneficioDto);
    return createdBeneficio.save();
  }

  async findAll(): Promise<Beneficio[]> {
    return this.beneficioModel.find().exec();
  }
}
