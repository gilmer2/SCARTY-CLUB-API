import { Module } from '@nestjs/common';
import { MarkService } from './mark.service';
import { MarkController } from './mark.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MarkSchema } from './mongo/mark.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Mark', schema: MarkSchema}
    ])
  ],
  providers: [MarkService],
  controllers: [MarkController]
})
export class MarkModule {}
