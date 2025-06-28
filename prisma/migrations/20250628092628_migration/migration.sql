-- CreateTable
CREATE TABLE "USER" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,

    CONSTRAINT "USER_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PROMOTER" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,

    CONSTRAINT "PROMOTER_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EVENT" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "capacity" INTEGER NOT NULL,
    "promoter_id" INTEGER NOT NULL,

    CONSTRAINT "EVENT_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "USER_email_key" ON "USER"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PROMOTER_email_key" ON "PROMOTER"("email");

-- AddForeignKey
ALTER TABLE "EVENT" ADD CONSTRAINT "EVENT_promoter_id_fkey" FOREIGN KEY ("promoter_id") REFERENCES "PROMOTER"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
