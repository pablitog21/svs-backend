import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';
import { Cliente } from '../models/cliente';

const prisma = new PrismaClient();

export async function createCliente (req: Request, res: Response) {
    console.log(req.body)
     const cliente: Cliente = req.body;
     try {
         const create = await prisma.cliente.create({
             data: {
                nom_ape: cliente.nom_ape,
                direc: cliente.direc,
                tel: cliente.tel,
                email: cliente.email,
                tip_ident: cliente.tip_ident,
                num_ident: cliente.num_ident
             }
         });
         await prisma.$disconnect();
         return res.status(200).json({response: "Cliente registrado correctamente"});
     } catch (error) {
         return res.status(500).json({response: error});
     } 
 }

