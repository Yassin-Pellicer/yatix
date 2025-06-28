/*
  Warnings:

  - You are about to drop the column `promoter_id` on the `EVENT` table. All the data in the column will be lost.
  - Added the required column `manager` to the `EVENT` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EVENT" DROP CONSTRAINT "EVENT_promoter_id_fkey";

-- AlterTable
ALTER TABLE "EVENT" DROP COLUMN "promoter_id",
ADD COLUMN     "manager" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "EVENT" ADD CONSTRAINT "EVENT_manager_fkey" FOREIGN KEY ("manager") REFERENCES "PROMOTER"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
