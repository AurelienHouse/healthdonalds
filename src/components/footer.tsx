"use client";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex items-center gap-2 border-t px-4 py-2 ">
      <Link href="/" className="inline-flex items-center gap-2">
        <Image
          src="/healthdonalds.png"
          alt="HealthDonalds"
          width={40}
          height={40}
        />
      </Link>
      <div className=" ml-auto">
        <p className="text-xs">© {new Date().getFullYear()} Healthdonalds</p>
      </div>
    </footer>
  );
};
