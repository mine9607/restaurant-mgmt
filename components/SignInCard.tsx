import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link";

const SignInCard = () => (
  <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
    <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
      <div className="relative h-1/3 w-full md:h-2/3 md:w-1/2">
        <Image src="/burger-falafel.jpg" alt="" fill className="object-cover rounded-3xl" />
      </div>
      <div className="p-10 flex flex-col gap-8 md:w-1/2">
        <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
        <p>Log into your account or create a new one using social buttons</p>
        <button
          className="hover:bg-slate-600 font-bold text-lg p-4 ring-1 ring-slate-400 rounded-md"
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </button>
        <button
          className="hover:bg-slate-800 font-bold text-lg p-4 ring-1 ring-slate-400 rounded-md"
          onClick={() => signIn("github")}
        >
          Sign in with GitHub
        </button>
        <Link
          href="/"
          className="hover:bg-slate-400 font-bold text-lg text-center p-4 ring-1 bg-stone-600 text-white ring-slate-400 rounded-md"
        >
          Home
        </Link>
      </div>
    </div>
  </div>
);

export default SignInCard;
