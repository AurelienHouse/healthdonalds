/* eslint-disable no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Minus, Plus } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { formatPrice } from "../../../lib/format-price";
import { useCartStore } from "../../../lib/store/use-cart-store";
import { cn } from "../../../lib/utils";
export const Item = ({ item }) => {
  return (
    <div className={cn("relative rounded-md border p-3 shadow-inner")}>
      <p className="absolute right-2 top-2 font-mono">
        {formatPrice(item.price)}
      </p>
      <img
        src={item.image}
        alt={item.name}
        width={50}
        height={50}
        className="aspect-square w-full rounded-md object-contain"
      />
      <p className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{item.name}</span>
      </p>
      <div className="flex items-end justify-end">
        <CartButton item={item} />
      </div>
    </div>
  );
};

const CartButton = ({ item }) => {
  const quantity = useCartStore((state) => state.items[item.id]?.quantity ?? 0);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);

  if (quantity === 0) {
    return (
      <Button size="sm" onClick={() => addItem(item)}>
        
        Add to cart
      </Button>
    );
  }
  return (
    <div className="flex items-center gap-1">
      <Button size="sm" variant="outline" onClick={() => removeItem(item)}>
        <Minus size={12} />
      </Button>
      <span>{quantity}</span>
      <Button size="sm" variant="outline" onClick={() => addItem(item)}>
        <Plus size={12} />
      </Button>
    </div>
  );
};
