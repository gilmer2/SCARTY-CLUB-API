import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './mongo/product.schema';
import { CreateProduct } from './dto/product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<Product>,
    ) {}

    async create(product: CreateProduct): Promise<Product> {
        const newProduct = new this.productModel(product);
        return newProduct.save();
    }

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async findOne(id: string): Promise<Product> {
        return this.productModel.findById(id);
    }


    async update(id: string, product: CreateProduct): Promise<Product> {
        return this.productModel.findByIdAndUpdate(id, product, { new: true });
    }

    async remove(id: string) {
        return this.productModel.findByIdAndDelete(id);
    }
}
