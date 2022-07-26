import { IsNotEmpty, IsString } from 'class-validator';

export class ClienteDTO {
  @IsNotEmpty()
  @IsString()
  readonly Identificacion: string;
  @IsNotEmpty()
  @IsString()
  readonly Nombres: string;
  @IsNotEmpty()
  @IsString()
  readonly Apellidos: string;
  @IsNotEmpty()
  @IsString()
  readonly Direccion: string;
  @IsNotEmpty()
  @IsString()
  readonly Email: string;
  @IsNotEmpty()
  @IsString()
  readonly username: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
