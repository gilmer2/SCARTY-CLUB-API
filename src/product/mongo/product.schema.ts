import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Product extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    price: number;

    @Prop()
    description: string;

    @Prop()
    image: string;

    @Prop()
    category: string;

    @Prop()
    stock: number;

    @Prop()
    status: boolean;

    @Prop()
    market: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);