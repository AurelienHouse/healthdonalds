/* eslint-disable no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Button } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";


export const Item = ({ item }) => {
  return (
    <div className={cn("relative rounded-md border p-3 shadow-inner")}>
      <p className="absolute right-2 top-2 font-mono">{formatPrice(item.price)}</p>
      // eslint-disable-next-line @next/next/no-img-element
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
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};
