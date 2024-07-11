import { ApiProperty } from "@nestjs/swagger";

export class CreateProduct {
    @ApiProperty()
    name: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    description: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    category: string;

    @ApiProperty()
    stock: number;

    @ApiProperty()
    status: boolean;

    @ApiProperty()
    market: string;
}