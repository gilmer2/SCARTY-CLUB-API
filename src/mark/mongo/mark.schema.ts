import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Mark {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop()
    image: string;

    @Prop()
    status: boolean;
}

export const MarkSchema = SchemaFactory.createForClass(Mark);