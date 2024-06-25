import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Transaccion } from './mongo/transacciones.schema';
import { CreateTransaccionDto } from './dto/transacciones.dto';

@Injectable()
export class TransaccionesService {
  constructor(
    @InjectModel(Transaccion.name) private transaccionModel: Model<Transaccion>,
  ) {}

  async create(createTransaccionDto: CreateTransaccionDto): Promise<Transaccion> {
    const createdTransaccion = new this.transaccionModel(createTransaccionDto);
    return createdTransaccion.save();
  }

  async findAll(): Promise<Transaccion[]> {
    return this.transaccionModel.find().exec();
  }
}
