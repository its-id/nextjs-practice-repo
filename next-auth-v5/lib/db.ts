import { PrismaClient } from '@prisma/client';

//only for development, cause of the nextjs hot reload
//what it does is it will initialize a new PrismaClient every time, giving warning about too many prisma clients
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

//we store the db variable inside of globalThis.prisma
//so, next time it reloads, it will check if globalThis.prisma exists, if it does, it will use it (line no. 9)
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;

//the reason globalThis <- because its not affecetd by hot reload.
