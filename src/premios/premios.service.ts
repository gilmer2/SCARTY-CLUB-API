import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Reward } from './mongo/premios.shema';
import { CreateRewardDto } from './dto/premios.dto';

@Injectable()
export class PremiosService {
  constructor(
    @InjectModel(Reward.name) private premioModel: Model<Reward>,
  ) {}

  async create(createPremioDto: CreateRewardDto): Promise<Reward> {
    const createdPremio = new this.premioModel(createPremioDto);
    return createdPremio.save();
  }

  async findAll(): Promise<Reward[]> {
    return this.premioModel.find().exec();
  }
}
