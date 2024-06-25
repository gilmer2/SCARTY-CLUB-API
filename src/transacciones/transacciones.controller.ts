import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransaccionesService } from './transacciones.service';
import { Transaccion } from './mongo/transacciones.schema';
import { CreateTransaccionDto } from './dto/transacciones.dto';

@ApiTags('transacciones')
@Controller('transacciones')
export class TransaccionesController {
  constructor(private readonly transaccionesService: TransaccionesService) {}

  @Post()
  async create(@Body() createTransaccionDto: CreateTransaccionDto): Promise<Transaccion> {
    return this.transaccionesService.create(createTransaccionDto);
  }

  @Get()
  async findAll(): Promise<Transaccion[]> {
    return this.transaccionesService.findAll();
  }
}
