"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/users");
  }, [router]);

  return (
    <div>
      <p>Loading...</p>
    </div>
  );
}
