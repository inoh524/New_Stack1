/*
  Warnings:

  - Added the required column `address` to the `test_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "test_users" ADD COLUMN     "address" TEXT NOT NULL;
