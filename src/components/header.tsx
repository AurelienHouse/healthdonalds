"use client";

import { Button } from "@/components/ui/button";
import { useUserStore } from "@/lib/store/use-user-store";
import { ShoppingBasket, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center gap-2 border-b px-4 py-2 shadow-md">
      <Link href="/" className="inline-flex items-center gap-2">
        <Image
          src="/healthdonalds.png"
          alt="HealthDonalds"
          width={40}
          height={40}
        />
        <p className="text-sm font-bold">Healthdonalds</p>
      </Link>
      <div className=" ml-auto flex items-center gap-2">
        <UserNameHeader />
        <Button
          size="sm"
          variant="outline"
          className="inline-flex items-center gap-2"
        >
          <ShoppingBasket size={16} />
          <span className="rounded-full bg-red-500 px-1 py-0.5 text-xs text-white">
            0
          </span>
        </Button>
      </div>
    </header>
  );
};
const UserNameHeader = () => {
  const userName = useUserStore((s) => s.userName);
  const logout = useUserStore((s) => s.logout);
  if (!userName) {
    return null;
  }
  return (
    <button onClick={() => logout()} className="flex items-center gap-2">
      <User size={12} />
      <p className="text-sm font-bold">{userName}</p>
    </button>
  );
};
