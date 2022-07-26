import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CLIENTE } from 'src/common/models/models';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { ClienteSchema } from './schema/cliente.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: CLIENTE.name,
        useFactory: () => ClienteSchema,
      },
    ]),
  ],
  controllers: [ClienteController],
  providers: [ClienteService],
  exports: [ClienteService],
})
export class ClienteModule {}
