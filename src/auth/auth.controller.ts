import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export async function login(req: Request, res: Response) {
    const data = req.body;
    const user = data.user;
    const password = data.password;
    const QueryUser = await prisma.user.findFirst({
        where: {
            AND: [
                {
                    correo: user,
                }, {
                    password: password
                }
            ],
        },
        select: {
            id: true,
            nom: true,
            ape: true
        }
    });
    if(QueryUser){
        return res.status(200).json(QueryUser);
        } else {
         return res.status(400).json({resp: "Usuario no existe, favor validar la información"});
        }
    
}
