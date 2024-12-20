/*
  Warnings:

  - You are about to drop the column `prict` on the `productoncart` table. All the data in the column will be lost.
  - Added the required column `price` to the `productOnCart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `productoncart` DROP COLUMN `prict`,
    ADD COLUMN `price` DOUBLE NOT NULL;
