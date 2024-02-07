"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/dashboard");
  }

  return (
    <div className="p-10 flex flex-col gap-8 md:w-1/2">
      <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
      <p>Log into your account or create a new one using social buttons</p>
      <button className="p-2 border border-slate-300 rounded-lg" onClick={() => signIn("google")}>
        Sign in with Google
      </button>
      <button onClick={() => signIn("github")} className="p-2 border border-slate-300 rounded-lg" type="button">
        Sign in with GitHub
      </button>
    </div>
  );
};

export default LoginPage;
