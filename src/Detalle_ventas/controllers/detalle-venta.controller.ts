import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Detalle_ventas } from '../models/detalle-venta';

const prisma = new PrismaClient();

export async function createDetalle_ventas(req: Request, res: Response) {
    console.log(req.body)
    const detven: Detalle_ventas = req.body;
    /*try {
        const create = await prisma.detalle_ventas.create({
            data: {
                cant: detven.cant,
                vr_pag: detven.vr_pag,
                obser: detven.obser
            }
        });
        await prisma.$disconnect();
        return res.status(200).json({ response: "Cliente registrado correctamente" });
    } catch (error) {
        return res.status(500).json({ response: error });
    }*/
}