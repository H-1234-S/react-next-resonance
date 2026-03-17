import { PrismaClient } from "@/generated/prisma/client";
// 导入适配器
import { PrismaPg } from "@prisma/adapter-pg";

// 初始化适配器
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

// 单例模式
const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

// 开发环境
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export { prisma };


/**
 * 
 *  目的：初始化一个prisma实例，用来让程序连接数据库
 * 
 *  因为nextjs的 热重载/热更新    ->    单例模式
 * 
 *  因为全局变量不会被重新加载     ->    将prisma实例挂载到global全局对象上
 * 
 */