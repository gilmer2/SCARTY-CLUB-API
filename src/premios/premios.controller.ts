import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PremiosService } from './premios.service';
import { Reward } from './mongo/premios.shema';
import { CreateRewardDto } from './dto/premios.dto';

@ApiTags('premios')
@Controller('premios')
export class PremiosController {
  constructor(private readonly premiosService: PremiosService) {}

  @Post()
  async create(@Body() createPremioDto: CreateRewardDto): Promise<Reward> {
    return this.premiosService.create(createPremioDto);
  }

  @Get()
  async findAll(): Promise<Reward[]> {
    return this.premiosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Reward> {
    return this.premiosService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Reward> {
    return this.premiosService.remove(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePremioDto: CreateRewardDto): Promise<Reward> {
    return this.premiosService.update(id, updatePremioDto);
  }
}
