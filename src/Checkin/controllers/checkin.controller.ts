import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { Checkin } from '../models/checkin';

const prisma = new PrismaClient();

export async function createCheckin(req: Request, res: Response) {
  console.log(req.body);
  const user: Checkin = req.body;
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10); // Encriptar la contraseña con un factor de coste de 10

    const create = await prisma.user.create({
      data: {
        id: user.id,
        nom: user.nom,
        ape: user.ape,
        correo: user.correo,
        // password: hashedPassword, // Guardar la contraseña encriptada
        // confcont: hashedPassword,
        password: user.password, // Guardar la contraseña encriptada
        confcont: user.confcont,
        telefono: user.telefono,
        fechnacim: new Date(),
        sexo: user.sexo
      }
    });

    await prisma.$disconnect();
    return res.status(200).json({ response: "Usuario creado correctamente" });
  } catch (error) {
    return res.status(500).json({ response: error });
  }
}

