import Image from "next/image";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const OrdersPage = async () => {
  const products = await getData();

  return (
    <div>
      <title>Products</title>
      <h1 className="text-2xl font-semibold m-4 text-center">Products</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product: Product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <Image className="h-10 w-10 rounded-full" src="" alt="" />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-black">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-black">{product.category}</td>
              <td className="px-6 py-4 whitespace-nowrap text-black">${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
//   return (
//     <div className="p-4 lg:px-20 xl:px-40">
//       <table className="w-full border-separate border-spacing-3">
//         <thead>
//           <tr className="text-left">
//             <th className="hidden md:block">Order ID</th>
//             <th>Date</th>
//             <th>Price</th>
//             <th className="hidden md:block">Products</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="text-sm md:text-base text-black bg-red-50">
//             <td className="hidden md:block py-6 px-1">1237861238721</td>
//             <td className="py-6 px-1">19.07.2023</td>
//             <td className="py-6 px-1">89.90</td>
//             <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
//             <td className="py-6 px-1">On the way (approx. 10min)...</td>
//           </tr>
//           <tr className="text-sm md:text-base odd:bg-gray-100">
//             <td className="hidden md:block py-6 px-1">1237861238721</td>
//             <td className="py-6 px-1">19.07.2023</td>
//             <td className="py-6 px-1">89.90</td>
//             <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
//             <td className="py-6 px-1">On the way (approx. 10min)...</td>
//           </tr>
//           <tr className="text-sm md:text-base text-black odd:bg-gray-100">
//             <td className="hidden md:block py-6 px-1">1237861238721</td>
//             <td className="py-6 px-1">19.07.2023</td>
//             <td className="py-6 px-1">89.90</td>
//             <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
//             <td className="py-6 px-1">On the way (approx. 10min)...</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );

export default OrdersPage;
