import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Client } from 'src/clientes/mongo/clientes.schema';
import { User } from 'src/users/mongo/users.schema';
import { LoginDto, RegisterClientDto, RegisterUserDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<Client>,
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async registerClient(registerClientDto: RegisterClientDto): Promise<any> {
    const { email, password, ...rest } = registerClientDto;
    const clientExists = await this.clientModel.exists({ email });
    if (clientExists) {
      throw new ConflictException('Email already exists');
    }
    const userExists = await this.userModel.exists({ email });
    if (userExists) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdClient = new this.clientModel({
      ...rest,
      email,
      password: hashedPassword,
    });
    await createdClient.save();
    return this.generateToken(createdClient);
  }

  async registerUser(registerUserDto: RegisterUserDto): Promise<any> {
    const { email, password, username } = registerUserDto;
    const userExists = await this.userModel.exists({ email });
    if (userExists) {
      throw new UnauthorizedException({
				success: false,
				error: 403,
				title: 'Usuario bloqueado',
				message: 'La contraseña del usuario no es correcta',
				data: []
			});
    }
    const clientExists = await this.clientModel.exists({ email });
    if (clientExists) {
      throw new UnauthorizedException({
				success: false,
				error: 403,
				title: 'Usuario bloqueado',
				message: 'La contraseña del usuario no es correcta',
				data: []
			});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new this.userModel({
      username,
      email,
      password: hashedPassword,
    });
    await createdUser.save();
    return this.generateToken(createdUser);
  }

  async login(loginDto: LoginDto): Promise<any> {
    const { email, password } = loginDto;
    const client = await this.clientModel.findOne({ email });
    if (client && (await bcrypt.compare(password, client.password))) {
      const token = this.generateToken(client);
      return {
        success: true,
        error: 0,
        title: 'Acción realizada exitosamente',
        message: 'Registros recuperados correctamente',
        data: token
      };
    }

    const user = await this.userModel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = this.generateToken(user)
      return {
        success: true,
        error: 0,
        title: 'Acción realizada exitosamente',
        message: 'Registros recuperados correctamente',
        data: token
      };
    }

    throw new UnauthorizedException({
      success: false,
      error: 403,
      title: 'Usuario bloqueado',
      message: 'La contraseña del usuario no es correcta',
      data: []
    });
  }

  private generateToken(user: any) {
    const payload = { email: user.email, sub: user._id };
    return this.jwtService.sign(payload)
  }
}
