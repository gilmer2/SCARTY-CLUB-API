import { Controller, Get, Post, Body } from '@nestjs/common';
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
}
