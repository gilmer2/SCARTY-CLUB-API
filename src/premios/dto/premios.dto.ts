import { ApiProperty } from '@nestjs/swagger';

export class CreateRewardDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  points: number;

  @ApiProperty()
  image: string;
  
  @ApiProperty()
  active: boolean;
}
