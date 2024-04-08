import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Proveedor } from '../models/proveedor';

const prisma = new PrismaClient();

export async function createProveedor(req: Request, res: Response) {
    console.log(req.body)
    const prove: Proveedor = req.body;
    try {
        const create = await prisma.proveedor.create({
            data: {
                nom_ape: prove.nom_ape,
                direc: prove.direc,
                tel: prove.tel,
                email: prove.email,
                tip_ident: prove.tip_ident,
                num_doc: prove.num_doc
            }
        });
        await prisma.$disconnect();
        return res.status(200).json({ response: "Proveedor registrado correctamente" });
    } catch (error) {
        return res.status(500).json({ response: error });
    }
}