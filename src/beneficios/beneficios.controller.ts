import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BeneficiosService } from './beneficios.service';
import { Beneficio } from './mongo/beneficios.schema';
import { CreateBeneficioDto } from './dto/beneficios.dto';

@ApiTags('beneficios')
@Controller('beneficios')
export class BeneficiosController {
  constructor(private readonly beneficiosService: BeneficiosService) {}

  @Post()
  async create(@Body() createBeneficioDto: CreateBeneficioDto): Promise<Beneficio> {
    return this.beneficiosService.create(createBeneficioDto);
  }

  @Get()
  async findAll(): Promise<Beneficio[]> {
    return this.beneficiosService.findAll();
  }
}
