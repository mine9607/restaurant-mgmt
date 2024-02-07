import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/dbconnect";

// FETCH ALL PRODUCTS
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("category");

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(cat ? { category: cat } : { category: "Seasonal" }),
      },
    });
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
};

// export const GET = () => {
//   return new NextResponse("Hello", { status: 200 });
// };
export const POST = () => {
  return new NextResponse("Hello", { status: 200 });
};
