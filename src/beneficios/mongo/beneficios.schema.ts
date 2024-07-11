import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Beneficio extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  status: boolean;

  @Prop()
  mark: string;
}

export const BeneficioSchema = SchemaFactory.createForClass(Beneficio);
