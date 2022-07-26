import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClienteDTO } from 'src/cliente/dto/cliente.dto';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { AuthService } from './auth.service';

@ApiTags('Authentication')
@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Req() req) {
    return await this.authservice.signIn(req.user);
  }
  @Post('signup')
  async signUp(@Body() clienteDto: ClienteDTO) {
    return await this.authservice.signUp(clienteDto);
  }
}
