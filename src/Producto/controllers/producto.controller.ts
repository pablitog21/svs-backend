import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';
import { Producto } from '../models/producto';

const prisma = new PrismaClient();

export async function createProducto (req: Request, res: Response) {
   console.log(req.body)
    const prod: Producto = req.body;
    try {
        const create = await prisma.producto.create({
            data: {
                id_prove: prod.id_prod,
                nom_prod: prod.nom_prod,
                descrip: prod.descrip,
                vr: prod.vr,
            }
        });
        await prisma.$disconnect();
        return res.status(200).json({response: "Usuario creado correctamente"});
    } catch (error) {
        return res.status(500).json({response: error});
    } 
}