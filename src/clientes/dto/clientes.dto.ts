import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty()
  mobilePhone: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  photo: string;

  @ApiProperty()
  state: boolean;

  @ApiProperty()
  city: string;

  @ApiProperty()
  points: number;

  @ApiProperty()
  password: string;

  @ApiProperty()
  role: string;
}
