export interface ICliente extends Document {
  Identificacion: number;
  Nombres: string;
  Apellidos: string;
  Direccion: string;
  Email: string;
  username: string;
  password: string;
}
