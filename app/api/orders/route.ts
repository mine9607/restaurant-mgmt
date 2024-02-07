import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";
import { PrismaClient } from "@prisma/client";
// TESTING FETCH ALL ORDERS

const prisma = new PrismaClient();

// FETCH ALL PRODUCTS
export const GET = async () => {
  try {
    const orders = await prisma.order.findMany();
    return new NextResponse(JSON.stringify(orders), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
};

// FETCH ALL ORDERS
// export const GET = async (req: NextRequest) => {
//   const session = await getAuthSession();
//   console.log("Session Object");
//   console.log(session); // Add this line to log the session object

//   if (session) {
//     try {
//       if (session.user.isAdmin) {
//         const orders = await prisma.order.findMany();
//         return new NextResponse(JSON.stringify(orders), { status: 200 });
//       }
//       const orders = await prisma.order.findMany({
//         where: { userId: session.user.id },
//       });

//       return new NextResponse(JSON.stringify(orders), { status: 200 });
//     } catch (error) {
//       console.log(error);
//       return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
//     }
//   } else {
//     return new NextResponse(JSON.stringify({ message: "User not authenticated" }), { status: 401 });
//   }
// };

// export const POST = () => {
//   return new NextResponse("Hello", { status: 200 });
// };
