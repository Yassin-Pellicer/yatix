import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 5; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: faker.internet.password(),
        name: faker.person.fullName(),
        phone: faker.number.int({ min: 600000000, max: 699999999 }),
      },
    });
  }

  for (let i = 0; i < 3; i++) {
    const promoter = await prisma.promoter.create({
      data: {
        email: faker.internet.email(),
        password: faker.internet.password(),
        name: faker.person.fullName(),
        phone: faker.number.int({ min: 600000000, max: 699999999 }),
      },
    });

    for (let j = 0; j < 2; j++) {
      await prisma.event.create({
        data: {
          title: faker.lorem.words(3),
          location: faker.location.city(),
          date: faker.date.future(),
          capacity: faker.number.int({ min: 50, max: 500 }),
          promoter: {
            connect: { id: promoter.id },
          },
        },
      });
    }
  }

  console.log('✅ Dummy data seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
