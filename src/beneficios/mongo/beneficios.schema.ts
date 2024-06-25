import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Beneficio extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const BeneficioSchema = SchemaFactory.createForClass(Beneficio);
