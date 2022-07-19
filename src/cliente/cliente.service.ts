import { Injectable } from '@nestjs/common';
import { ICliente } from 'src/common/interfaces/cliente.interface';
import { ClienteDTO } from './dto/cliente.dto';
import { InjectModel } from '@nestjs/mongoose';
import { CLIENTE } from 'src/common/models/models';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClienteService {
  constructor(
    @InjectModel(CLIENTE.name) private readonly model: Model<ICliente>,
  ) {}
  async hashPasssword(Password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(Password, salt);
  }

  async create(clienteDTO: ClienteDTO): Promise<ICliente> {
    const hash = await this.hashPasssword(clienteDTO.Password);
    const newCliente = new this.model({ ...clienteDTO, Password: hash });
    return await newCliente.save();
  }
  async findAll(): Promise<ICliente[]> {
    return await this.model.find();
  }
}
