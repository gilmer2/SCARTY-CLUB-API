import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CartShopService } from './cart-shop.service';
import { CreateCartShop } from './dto/cart-shop';
import { CartShop, CartShopProduct } from './mongo/cart-shop.schema';

@ApiTags('cart-shop')
@Controller('cart-shop')
export class CartShopController {
  constructor(private readonly cartShopService: CartShopService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new cart shop' })
  @ApiResponse({
    status: 201,
    description: 'The cart shop has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiBody({ type: CreateCartShop })
  async create(@Body() createCartShopDto: CreateCartShop): Promise<CartShop> {
    return this.cartShopService.create(createCartShopDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all cart shops' })
  @ApiResponse({ status: 200, description: 'Return all cart shops.' })
  async findAll(): Promise<CartShop[]> {
    return this.cartShopService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a cart shop by ID' })
  @ApiResponse({ status: 200, description: 'Return the cart shop.' })
  @ApiResponse({ status: 404, description: 'Cart shop not found.' })
  async findOne(@Param('id') id: string): Promise<CartShop> {
    return this.cartShopService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a cart shop by ID' })
  @ApiResponse({
    status: 200,
    description: 'The cart shop has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Cart shop not found.' })
  async delete(@Param('id') id: string): Promise<CartShop> {
    return this.cartShopService.delete(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a cart shop by ID' })
  @ApiResponse({
    status: 200,
    description: 'The cart shop has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Cart shop not found.' })
  @ApiBody({ type: CreateCartShop })
  async update(
    @Param('id') id: string,
    @Body() updateCartShopDto: CreateCartShop,
  ): Promise<CartShop> {
    return this.cartShopService.update(id, updateCartShopDto);
  }

  @Get('admin/:email')
  @ApiOperation({ summary: 'Get cart shops by admin email' })
  @ApiResponse({
    status: 200,
    description: 'Return the cart shops associated with the admin email.',
  })
  async findByAdminEmail(
    @Param('email') AdminEmail: string,
  ): Promise<CartShop[]> {
    return this.cartShopService.findByAdminEmail(AdminEmail);
  }

  @Get('client/:email')
  @ApiOperation({ summary: 'Get cart shops by client email' })
  @ApiResponse({
    status: 200,
    description: 'Return the cart shops associated with the client email.',
  })
  async findByClient(@Param('email') client: string): Promise<CartShop[]> {
    return this.cartShopService.findByClient(client);
  }

  @Put(':id/products')
  @ApiOperation({ summary: 'Update products in a cart shop' })
  @ApiResponse({
    status: 200,
    description: 'The products have been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Cart shop not found.' })
  @ApiBody({ type: [CartShopProduct] })
  async updateProducts(
    @Param('id') id: string,
    @Body() products: CartShopProduct[],
  ): Promise<CartShop> {
    return this.cartShopService.updateProducts(id, products);
  }

  @Delete(':id/products/:productId')
  @ApiOperation({ summary: 'Delete a product from a cart shop' })
  @ApiResponse({
    status: 200,
    description: 'The product has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Cart shop or product not found.' })
  async deleteProduct(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ): Promise<CartShop> {
    return this.cartShopService.deleteProduct(id, productId);
  }

  @Put(':id/products/:productId')
  @ApiOperation({ summary: 'Decrease the count of a product in a cart shop' })
  @ApiResponse({
    status: 200,
    description: 'The count of the product has been successfully decreased.',
  })
  @ApiResponse({ status: 404, description: 'Cart shop or product not found.' })
  @ApiBody({ description: 'The count to decrease', type: Number })
  async updateCountProduct(
    @Param('id') id: string,
    @Param('productId') productId: string,
    @Body('count') count: number,
  ): Promise<CartShop> {
    return this.cartShopService.updateCountProduct(id, productId, count);
  }

  @Put(':id/products/:productId/increase')
  @ApiOperation({ summary: 'Increase the count of a product in a cart shop' })
  @ApiResponse({
    status: 200,
    description: 'The count of the product has been successfully increased.',
  })
  @ApiResponse({ status: 404, description: 'Cart shop or product not found.' })
  @ApiBody({ description: 'The count to increase', type: Number })
  async increaseCountProduct(
    @Param('id') id: string,
    @Param('productId') productId: string,
    @Body('count') count: number,
  ): Promise<CartShop> {
    return await this.cartShopService.increaseCountProduct(
      id,
      productId,
      count,
    );
  }
}
