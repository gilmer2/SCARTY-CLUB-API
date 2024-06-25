import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Transaccion extends Document {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Client', required: true })
  clientId: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Reward', required: true })
  rewardId: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  points: number;
}

export const TransaccionSchema = SchemaFactory.createForClass(Transaccion);
