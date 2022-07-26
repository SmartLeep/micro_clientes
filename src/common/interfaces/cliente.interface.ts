export interface ICliente extends Document {
  Identificacion: string;
  Nombres: string;
  Apellidos: string;
  Direccion: string;
  Email: string;
  username: string;
  password: string;
}
