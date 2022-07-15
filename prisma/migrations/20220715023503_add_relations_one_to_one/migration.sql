/*
  Warnings:

  - A unique constraint covering the columns `[fk_teachersId]` on the table `courses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fk_teachersId` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "fk_teachersId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "courses_fk_teachersId_key" ON "courses"("fk_teachersId");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk_teachersId_fkey" FOREIGN KEY ("fk_teachersId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
