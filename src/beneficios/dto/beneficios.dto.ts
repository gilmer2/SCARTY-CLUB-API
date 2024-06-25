import { ApiProperty } from '@nestjs/swagger';

export class CreateBeneficioDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}
