import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ClienteDTO {
  @IsNotEmpty()
  @IsNumber()
  readonly Identificacion: number;
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
