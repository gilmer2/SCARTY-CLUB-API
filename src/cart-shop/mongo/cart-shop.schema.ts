import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export class CartShopProduct {
  id: string;
  count: number;
}


@Schema()
export class CartShop extends Document {
  @Prop({ required: true })
  AdminEmail: string;

  @Prop()
  ProductId: CartShopProduct[];

  @Prop()
  client: string;

  @Prop()
  state: boolean;
}

export const CartShopSchema = SchemaFactory.createForClass(CartShop);
