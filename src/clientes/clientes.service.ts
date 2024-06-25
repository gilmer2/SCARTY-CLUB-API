import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from './mongo/clientes.schema';
import { CreateClientDto } from './dto/clientes.dto';

@Injectable()
export class ClientesService {
  constructor(@InjectModel(Client.name) private clienteModel: Model<Client>) {}

  async create(createClienteDto: CreateClientDto): Promise<Client> {
    const createdCliente = new this.clienteModel(createClienteDto);
    return createdCliente.save();
  }

  async findAll(): Promise<Client[]> {
    return this.clienteModel.find().exec();
  }

  async findOne(id: string): Promise<Client> {
    return this.clienteModel.findById(id).exec();
  }

  async update(id: string, updateClienteDto: CreateClientDto): Promise<Client> {
    return this.clienteModel.findByIdAndUpdate(id, updateClienteDto, { new: true });
  }

  async delete(id: string): Promise<Client> {
    return this.clienteModel.findByIdAndDelete(id);
  }


  async findByEmail(email: string): Promise<Client> {
    return this.clienteModel.findOne({ email });
  }
}
