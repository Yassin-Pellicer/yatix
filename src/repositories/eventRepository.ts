import prisma from "../db/prismaClient";

export const eventRepository = {
  create: async (data: {
    title: string;
    location: string;
    date: Date;
    capacity: number;
    promoter_id: string;
  }) => {
    return prisma.event.create({ data });
  },

  findById: async (id: string) => {
    return prisma.event.findUnique({ where: { id } });
  },

  findAll: async () => {
    return prisma.event.findMany({ include: { promoter: true } });
  },

  deleteById: async (id: string) => {
    return prisma.event.delete({ where: { id } });
  },
};
