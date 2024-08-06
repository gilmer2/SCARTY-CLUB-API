import { ApiProperty } from '@nestjs/swagger';

export class CartShopProduct {
  id: string;
  count: number;
}

export class CreateCartShop {
  @ApiProperty()
  AdminEmail: string;

  @ApiProperty()
  ProductId: CartShopProduct[];

  @ApiProperty()
  client: string;

  @ApiProperty()
  state: boolean;
}
