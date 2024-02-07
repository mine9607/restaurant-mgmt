"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import React from "react";

const LogoutButton = () => {
  const { status } = useSession();
  const router = useRouter();

  return (
    <div>
      {status === "authenticated" ? (
        <button className="border border-slate-300 p-4 text-lg rounded-lg" onClick={() => signOut()}>
          Logout
        </button>
      ) : (
        router.push("/")
      )}
    </div>
  );
};

export default LogoutButton;
