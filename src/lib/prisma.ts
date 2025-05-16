// lib/prisma.ts
import { PrismaClient } from "@/generated/prisma"; // Prisma 6.6.0 pulls PrismaClient from generated folder

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;