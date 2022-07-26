import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClienteService } from 'src/cliente/cliente.service';
import { ClienteDTO } from 'src/cliente/dto/cliente.dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly clienteService: ClienteService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string): Promise<any> {
    const cliente = await this.clienteService.findByUsername(username);
    const isValidPassword = await this.clienteService.checkPassword(
      password,
      cliente.password,
    );
    if (cliente && isValidPassword) return cliente;
    return null;
  }
  async signIn(user: any) {
    const payload = {
      username: user.username,
      sub: user._id,
    };
    return { access_token: this.jwtService.sign(payload) };
  }
  async signUp(clienteDTO: ClienteDTO) {
    return this.clienteService.create(clienteDTO);
  }
}
