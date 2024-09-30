"use client";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex items-center gap-2 border-t px-4 py-2 ">
      <Link href="/" className="inline-flex items-center gap-2">
        <Image
          src="/Logo-burger-house-green.png"
          alt="Veggie house"
          width={40}
          height={40}
        />
      </Link>
      <div className=" ml-auto">
        <p className="text-xs">© {new Date().getFullYear()} Veggie House</p>
      </div>
    </footer>
  );
};
