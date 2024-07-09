import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Client extends Document {
  @Prop({ required: true })
  mobilePhone: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  city: string;

  @Prop({ default: 0 })
  points: number;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  role: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
