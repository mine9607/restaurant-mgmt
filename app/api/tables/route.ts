import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// FETCH ALL TABLES
export const GET = async () => {
  try {
    const tables = await prisma.table.findMany();
    return new NextResponse(JSON.stringify(tables), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
};
