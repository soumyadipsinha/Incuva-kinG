import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/index.js';
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';

import ws from 'ws';
neonConfig.webSocketConstructor = ws;

// To work in edge environments (Cloudflare Workers, Vercel Edge, etc.), enable querying over fetch
// neonConfig.poolQueryViaFetch = true

// Type definitions
declare global {
  var prisma: PrismaClient | undefined
}

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaNeon({ connectionString });
const prismaClient = global.prisma || new PrismaClient({ adapter }) as PrismaClient;

if (process.env.NODE_ENV === 'development') global.prisma = prismaClient;

export default prismaClient;