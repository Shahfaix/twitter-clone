import { PrismaClient } from '@prisma/client'
declare global {
    var prisma: PrismaClient
}

export const db = globalThis.prisma || new PrismaClient();

//for development only
if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = db;
}