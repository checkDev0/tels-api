-- CreateTable
CREATE TABLE "Data" (
    "id" SERIAL NOT NULL,
    "userID" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);
