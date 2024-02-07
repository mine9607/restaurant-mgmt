import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/dbconnect";
import { NextRequest, NextResponse } from "next/server";

// IF ADMIN, CREATE SINGLE ITEM

// IF ADMIN, DELETE SINGLE ITEM

// IF ADMIN, UPDATE SINGLE ITEM

//GET SINGLE ITEM
export const GET = async (req: NextRequest, { params }: { params: { id: number } }) => {
  const { id } = params;

  try {
    const item = await prisma.item.findUnique({
      where: {
        id: id,
      },
    });
    return new NextResponse(JSON.stringify(item), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
};
