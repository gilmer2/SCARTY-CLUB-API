import { ApiProperty } from "@nestjs/swagger";

export class CreateMark {
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    status: boolean;
}