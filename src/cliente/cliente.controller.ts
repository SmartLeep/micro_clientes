import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteDTO } from './dto/cliente.dto';

@Controller('api/cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  create(@Body() clienteDTO: ClienteDTO) {
    return this.clienteService.create(clienteDTO);
  }
  @Get()
  findAll() {
    return this.clienteService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(id);
  }
}
