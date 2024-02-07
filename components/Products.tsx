import React from "react";

const ProductsTable = () => {
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

export default ProductsTable;
