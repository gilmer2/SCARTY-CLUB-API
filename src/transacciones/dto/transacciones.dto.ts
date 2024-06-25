import { ApiProperty } from '@nestjs/swagger';

export class CreateTransaccionDto {
  @ApiProperty()
  clientId: string;

  @ApiProperty()
  rewardId: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  points: number;
}
