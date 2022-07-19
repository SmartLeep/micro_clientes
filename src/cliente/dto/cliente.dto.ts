import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  isNumber,
  IsString,
  isString,
} from 'class-validator';

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
  @IsEmail()
  readonly Email: string;
  @IsNotEmpty()
  @IsString()
  readonly Password: string;
}
