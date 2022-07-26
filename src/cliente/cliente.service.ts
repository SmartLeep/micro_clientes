import { ConsoleLogger, Injectable } from '@nestjs/common';
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

  async checkPassword(password: string, passwordDB: string): Promise<boolean> {
    return await bcrypt.compare(password, passwordDB);
  }

  async findByUsername(username: string) {
    return await this.model.findOne({ username });
  }

  async hashPasssword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async create(clienteDTO: ClienteDTO): Promise<ICliente> {
    const hash = await this.hashPasssword(clienteDTO.password);
    const newCliente = new this.model({ ...clienteDTO, password: hash });
    return await newCliente.save();
  }
  async findAll(): Promise<ICliente[]> {
    return await this.model.find();
  }
  async findOne(id: string): Promise<ICliente> {
    return await this.model.findById(id);
  }
}
