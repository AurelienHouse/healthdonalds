"use client";

import { Button } from "@/components/ui/button";
import { useCartQuantity } from "@/lib/store/use-cart-store";
import { useUserStore } from "@/lib/store/use-user-store";
import { ShoppingBasket, User } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import BurgerLogo from "./ui/BurgerLogo";

export const Header = () => {
  const letters = "Veggie House".split("");

  return (
    <header className="relative flex items-center gap-2 border-b px-4 py-2 shadow-md">
      <div 
        className="absolute inset-0 z-0 bg-repeat"
        style={{
          backgroundImage: `url('/bg-food.jpg')`,
          backgroundSize: '100px',
        }}
      />
      <div className="relative z-10 flex w-full items-center">
        <Link href="/" className="inline-flex items-center gap-2">
          <BurgerLogo />
          <h1 className="text-2xl">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <UserNameHeader />
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
};

const ShoppingCart = () => {
  const cartQuantity = useCartQuantity();
  return (
    <Button
      size="sm"
      variant="outline"
      className="inline-flex items-center gap-2"
    >
      {cartQuantity}
      <ShoppingBasket size={16} />
    </Button>
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
