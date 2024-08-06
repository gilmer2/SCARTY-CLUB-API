import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BeneficiosService } from './beneficios.service';
import { Beneficio } from './mongo/beneficios.schema';
import { CreateBeneficioDto } from './dto/beneficios.dto';

@ApiTags('beneficios')
@Controller('beneficios')
export class BeneficiosController {
  constructor(private readonly beneficiosService: BeneficiosService) {}

  @Post()
  async create(
    @Body() createBeneficioDto: CreateBeneficioDto,
  ): Promise<Beneficio> {
    return this.beneficiosService.create(createBeneficioDto);
  }

  @Get()
  async findAll(): Promise<Beneficio[]> {
    return this.beneficiosService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBeneficioDto: CreateBeneficioDto,
  ): Promise<Beneficio> {
    return this.beneficiosService.update(id, updateBeneficioDto);
  }

  @Get(':id')
  async findOne(id: string): Promise<Beneficio> {
    return this.beneficiosService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Beneficio> {
    return this.beneficiosService.delete(id);
  }
}
