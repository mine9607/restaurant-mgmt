"use client";
import SignInCard from "@/components/SignInCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return <SignInCard />;
};

export default LoginPage;
