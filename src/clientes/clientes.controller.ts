import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClientesService } from './clientes.service';
import { CreateClientDto } from './dto/clientes.dto';
import { Client } from './mongo/clientes.schema';

@ApiTags('clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  async create(@Body() createClienteDto: CreateClientDto): Promise<Client> {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  async findAll(): Promise<Client[]> {
    return this.clientesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Client> {
    return this.clientesService.findOne(id);
  }


  @Put(':id')
  async update(@Body() updateClienteDto: CreateClientDto,@Param('id') id: string): Promise<Client> {
    return this.clientesService.update(id, updateClienteDto);
  }


  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Client> {
    return this.clientesService.delete(id);
  }

  @Get('email/:email')
  async findByEmail(@Param('email') email: string): Promise<Client> {
    return this.clientesService.findByEmail(email);
  }
}
