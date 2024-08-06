import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CartShop, CartShopProduct } from './mongo/cart-shop.schema';
import { Model } from 'mongoose';
import { Client } from 'src/clientes/mongo/clientes.schema';
import { CreateCartShop } from './dto/cart-shop';

@Injectable()
export class CartShopService {
  constructor(
    @InjectModel('CartShop') private readonly cartShopModel: Model<CartShop>,
    @InjectModel(Client.name) private clienteModel: Model<Client>,
  ) {}

  async create(cartShop: CreateCartShop): Promise<CartShop> {
    if (!cartShop.AdminEmail) {
      throw new Error('AdminEmail is required');
    }

    if (!cartShop.client) {
      throw new Error('client is required');
    }
    const adminExists = await this.clienteModel.exists({
      email: cartShop.AdminEmail,
    });
    if (!adminExists) {
      throw new Error('AdminEmail does not exist');
    }
    const clientExists = await this.clienteModel.exists({
      email: cartShop.client,
    });
    if (!clientExists) {
      throw new Error('client does not exist');
    }

    const cartShopExists = await this.cartShopModel.exists({
      AdminEmail: cartShop.AdminEmail,
      client: cartShop.client,
    });
    if (cartShopExists) {
      throw new Error('CartShop already exists');
    }

    const createdCartShop = new this.cartShopModel(cartShop);
    return createdCartShop.save();
  }

  async findAll(): Promise<CartShop[]> {
    return this.cartShopModel.find().exec();
  }

  async findOne(id: string): Promise<CartShop> {
    return this.cartShopModel.findById(id).exec();
  }

  async delete(id: string): Promise<CartShop> {
    return this.cartShopModel.findByIdAndDelete(id);
  }

  async update(id: string, cartShop: CreateCartShop): Promise<CartShop> {
    return this.cartShopModel.findByIdAndUpdate(id, cartShop, { new: true });
  }

  async findByAdminEmail(AdminEmail: string): Promise<CartShop[]> {
    return this.cartShopModel.find({ AdminEmail }).exec();
  }

  async findByClient(client: string): Promise<CartShop[]> {
    return this.cartShopModel.find({ client }).exec();
  }

  async updateProducts(
    id: string,
    products: CartShopProduct[],
  ): Promise<CartShop> {
    const cartShop = await this.cartShopModel.findById(id);
    if (!cartShop) {
      throw new Error('CartShop does not exist');
    }

    products.forEach((product) => {
      const productIndex = cartShop.ProductId.findIndex(
        (p) => p.id === product.id,
      );
      if (productIndex === -1) {
        cartShop.ProductId.push(product);
      } else {
        cartShop.ProductId[productIndex].count += product.count;
      }
    });

    return cartShop.save();
  }

  async deleteProduct(id: string, productId: string): Promise<CartShop> {
    const cartShop = await this.cartShopModel.findById(id);
    if (!cartShop) {
      throw new Error('CartShop does not exist');
    }

    const productIndex = cartShop.ProductId.findIndex(
      (p) => p.id === productId,
    );
    if (productIndex === -1) {
      throw new Error('Product does not exist');
    }

    cartShop.ProductId.splice(productIndex, 1);
    return cartShop.save();
  }

  async updateCountProduct(
    id: string,
    productId: string,
    count: number,
  ): Promise<CartShop> {
    const cartShop = await this.cartShopModel.findById(id);
    if (!cartShop) {
      throw new Error('CartShop does not exist');
    }

    const product = cartShop.ProductId.find((p) => p.id === productId);
    if (!product) {
      throw new Error('Product does not exist');
    }

    product.count -= count;
    if (product.count <= 0) {
      const productIndex = cartShop.ProductId.findIndex(
        (p) => p.id === productId,
      );
      cartShop.ProductId.splice(productIndex, 1);
    }

    const updateCartCount = this.cartShopModel.findByIdAndUpdate(id, cartShop, {
      new: true,
    });

    return updateCartCount;
  }

  async increaseCountProduct(
    id: string,
    productId: string,
    count: number,
  ): Promise<CartShop> {
    const cartShop = await this.cartShopModel.findById(id);
    if (!cartShop) {
      throw new Error('CartShop does not exist');
    }

    const product = cartShop.ProductId.find((p) => p.id === productId);
    if (!product) {
      throw new Error('Product does not exist');
    }

    product.count += count;

    const updateCartCount = this.cartShopModel.findByIdAndUpdate(id, cartShop, {
      new: true,
    });

    return updateCartCount;
  }
}
