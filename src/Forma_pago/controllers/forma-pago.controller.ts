import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Forma_pago } from '../models/forma-pago';

const prisma = new PrismaClient();

export async function createFormaPago(req: Request, res: Response) {
    console.log(req.body)
    const formp: Forma_pago = req.body;
    try {
        const create = await prisma.forma_pago.create({
            data: {
                for_pago: formp.for_pago
            }
        });
        await prisma.$disconnect();
        return res.status(200).json({ response: "Creado correctamente" });
    } catch (error) {
        return res.status(500).json({ response: error });
    }
}