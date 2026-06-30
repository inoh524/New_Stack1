/*
  Warnings:

  - You are about to alter the column `first_name` on the `UserAccount` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `last_name` on the `UserAccount` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `middle_name` on the `UserAccount` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `contact_num` on the `UserAccount` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(11)`.

*/
-- AlterTable
ALTER TABLE "UserAccount" ALTER COLUMN "first_name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "last_name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "middle_name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "contact_num" SET DATA TYPE VARCHAR(11);
