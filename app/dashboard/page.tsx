import LogoutButton from "@/components/LogoutButton";
import { signOut } from "next-auth/react";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const Dashboard = async () => {
  const products: Product = await getData();
  return (
    <div>
      <div className="flex justify-between my-4">
        <h1 className="text-xl">Fetched All Products</h1>
        <LogoutButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <h3 className="font-bold">{product.category}</h3>
            <h3 className="text-xl">{product.name}</h3>
            <p className="text-gray-500">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
