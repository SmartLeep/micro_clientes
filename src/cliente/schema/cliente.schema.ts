import * as moogoose from 'mongoose';
export const ClienteSchema = new moogoose.Schema(
  {
    Identificacion: { type: String, required: true },
    Nombres: { type: String, required: true },
    Apellidos: { type: String, required: true },
    Direccion: { type: String, required: true },
    Email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);
ClienteSchema.index({ username: 1 }, { unique: true });
