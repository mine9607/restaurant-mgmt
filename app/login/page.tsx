"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/dashboard");
  }

  return (
    <div>
      LoginPage
      <button onClick={() => signIn("google")}>SignIn</button>
    </div>
  );
};

export default LoginPage;
