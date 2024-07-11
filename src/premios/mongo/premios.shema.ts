import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Reward extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  points: number;

  @Prop()
  image: string;
}

export const RewardSchema = SchemaFactory.createForClass(Reward);
