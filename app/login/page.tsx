"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { OAuthLogin } from "@/components/oauth-login";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return <OAuthLogin />;
};

export default LoginPage;