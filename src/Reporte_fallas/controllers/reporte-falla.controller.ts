import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Reporte_fallas } from '../models/reporte-falla';

const prisma = new PrismaClient();

export async function createReporte(req: Request, res: Response) {
    console.log(req.body)
    const report: Reporte_fallas = req.body;
    try {
        const create = await prisma.reporte_fallas.create({
            data: {
                fech_report: new Date(),
                cuenrepo: report.cuenrepo,
                password: report.password,
                dat_falla: report.dat_falla
            }
           
        });
await prisma.$disconnect();
return res.status(200).json({ response: "Reporte creado correctamente" });
} catch (error) {
    return res.status(500).json({ response: error });
} 
}