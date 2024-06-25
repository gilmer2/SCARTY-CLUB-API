import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PremiosService } from './premios.service';
import { PremiosController } from './premios.controller';
import { Reward, RewardSchema } from './mongo/premios.shema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Reward.name, schema: RewardSchema }])],
  controllers: [PremiosController],
  providers: [PremiosService],
})
export class PremiosModule {}
