"use client";

import { FooterCart } from "@/components/features/footer-cart/FooterCart";
import { ItemsList } from "@/components/features/items/items-list";
import { useUserStore } from "@/lib/store/use-user-store";
import LoginPage from "./login/page";
export default function Home() {
  const userName = useUserStore((s) => s.userName);
  if (!userName) {
    return <LoginPage />;
  }
  return (
    <div className="flex max-h-full flex-col">
      <ItemsList />
      <FooterCart />
    </div>
  );
}
