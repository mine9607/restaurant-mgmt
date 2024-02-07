import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Brian's Burgers!!!</h1>
      <p>Medellin's Best Burger Joint</p>
      <Image src="/burgerlogo-min.png" alt="RMS - Brian's Burgers" width={500} height={500} />
      <Link href="/login">Login</Link>
    </div>
  );
}
