import { ApiProperty } from '@nestjs/swagger';

export class CreateBeneficioDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  mark: string;
}
