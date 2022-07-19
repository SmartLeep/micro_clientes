import * as moogoose from 'mongoose';
export const ClienteSchema = new moogoose.Schema(
  {
    Identificacion: { type: Number, required: true },
    Nombres: { type: String, required: true },
    Apellidos: { type: String, required: true },
    Direccion: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
  },
  { timestamps: true },
);
ClienteSchema.index({ Email: 1 }, { unique: true });
