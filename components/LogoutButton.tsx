"use client";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <button className="border border-slate-300 p-4 text-lg rounded-lg" onClick={() => signOut}>
      Logout
    </button>
  );
};

export default LogoutButton;
