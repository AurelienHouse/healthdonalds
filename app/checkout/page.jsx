"use client";

import { ItemsCart } from "@/components/features/cart/items-cart";
import { buttonVariants } from "@/components/ui/button";
import { useUserStore } from "@/lib/store/use-user-store";
import Link from "next/link";
import LoginPage from "../login/page";

export default function Home() {
  const userName = useUserStore((s) => s.userName);
  if (!userName) {
    return <LoginPage />;
  }
  return (
    <div className="flex max-h-full flex-col gap-8">
      <ItemsCart />
      <Link
        href="/checkout/success"
        className={buttonVariants({ size: "sm", className: "w-full" })}
      >
        Complete Checkout
      </Link>
    </div>
  );
}
