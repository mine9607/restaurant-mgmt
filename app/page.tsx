"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

// note - conditionally render this page based on the session status
// if the user is logged in, render the dashboard
// if the user is not logged in, render a div with a login button
// if the user is loading, render a loading spinner

export default function Home() {
  const { data: session, status } = useSession();
  if (!session) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-7xl">Brian's Burger Co.</h1>
          <Image className="m-8 rounded-3xl" src="/burgerlogo-min.png" width={500} height={500} alt="Company Logo" />
        </div>
        <Link href="/login">Login</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>I'm the dashboard</h1>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
