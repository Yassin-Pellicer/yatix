/*
  Warnings:

  - You are about to drop the column `manager` on the `EVENT` table. All the data in the column will be lost.
  - Added the required column `promoter_id` to the `EVENT` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EVENT" DROP CONSTRAINT "EVENT_manager_fkey";

-- AlterTable
ALTER TABLE "EVENT" DROP COLUMN "manager",
ADD COLUMN     "promoter_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "EVENT" ADD CONSTRAINT "EVENT_promoter_id_fkey" FOREIGN KEY ("promoter_id") REFERENCES "PROMOTER"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
