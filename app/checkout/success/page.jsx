"use client";

import { useCartStore } from "@/lib/store/use-cart-store";
import { Check } from "lucide-react";

export default function SuccessPage() {
  useCartStore.setState({ items: {} });
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-14 py-10">
      <Check className="size-10 text-primary" />
      <h1 className="text-2xl font-bold">Success</h1>
      <p>Yeah ! your order has been confirmed</p>
    </div>
  );
}
