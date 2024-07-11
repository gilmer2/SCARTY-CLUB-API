import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProduct } from './dto/product.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('product')
@ApiTags('Product')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) {}

    @Post()
    create(@Body() product: CreateProduct) {
        return this.productService.create(product);
    }

    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() product: CreateProduct) {
        return this.productService.update(id, product);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productService.remove(id);
    }
}
