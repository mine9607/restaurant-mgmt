import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/dbconnect";
import { NextRequest, NextResponse } from "next/server";

// IF ADMIN, CREATE SINGLE ITEM

//IF ADMIN, DELETE SINGLE ITEM
export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;

  const session = await getAuthSession();

  if (session?.user.isAdmin) {
    try {
      const item = await prisma.item.delete({
        where: {
          id: id,
        },
      });

      return new NextResponse(JSON.stringify({ message: "Product has been deleted" }), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), {
        status: 500,
      });
    }
  }
  return new NextResponse(JSON.stringify({ message: "You are not authorized to delete this product!" }), {
    status: 401,
  });
};

// IF ADMIN, UPDATE SINGLE ITEM

//GET SINGLE ITEM
// export const GET = async (req: NextRequest, { params }: { params: { id: number } }) => {
//   const { id } = params;

//   try {
//     const item = await prisma.item.findUnique({
//       where: {
//         id: id,
//       },
//     });
//     return new NextResponse(JSON.stringify(item), { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
//   }
// };
