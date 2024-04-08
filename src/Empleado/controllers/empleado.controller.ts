import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';
import { Empleado } from '../models/empleado';

const prisma = new PrismaClient();

export async function createEmpleado (req: Request, res: Response) {
   console.log(req.body)
    const empl: Empleado = req.body;
    try {
        const create = await prisma.empleado.create({
            data: {
                nom_ape: empl.nom_ape,
                direc: empl.direc,
                email: empl.email,
                tel: empl.tel,
                est: empl.est,
                cargo: empl.cargo
             }
        });
        await prisma.$disconnect();
        return res.status(200).json({response: "Usuario creado correctamente"});
    } catch (error) {
        return res.status(500).json({response: error});
    } 
}
