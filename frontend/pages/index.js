import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   router.push("/register");
  // });

  const onCLickMe = () => {
    router.push("/register");
  };
  return (
    <main>
      <div>
        <h1>
          <Link href="/profile">this page!</Link>
        </h1>

        <button onClick={onCLickMe}>CLICK ME!</button>
      </div>
    </main>
  );
}
