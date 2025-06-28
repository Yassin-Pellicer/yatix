import prisma from "../db/prismaClient";

export const userRepository = {
  create: async (data: {
    email: string;
    password: string;
    name: string;
    phone: number;
  }) => {
    return prisma.user.create({ data });
  },

  findByEmail: async (email: string) => {
    return prisma.user.findUnique({ where: { email } });
  },

  findAll: async () => {
    return prisma.user.findMany();
  },

  deleteById: async (id: string) => {
    return prisma.user.delete({ where: { id } });
  },
};
