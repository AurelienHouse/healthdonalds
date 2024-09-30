/* eslint-disable no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useAdminStore } from "@/lib/store/use-admin-store";
import { Edit, Minus, Plus, Trash } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "../../../components/ui/button";
import { formatPrice } from "../../../lib/format-price";
import { useCartStore } from "../../../lib/store/use-cart-store";
import { cn } from "../../../lib/utils";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { mutate } from "swr";
import { toast } from "sonner";


export const Item = ({ item, className }) => {
  const adminEnabled = useAdminStore((s) => s.adminEnabled);
  return (
    <div
      className={cn(
        "relative rounded-md border p-3 shadow-inner h-fit group",
        className
      )}
    >
      {adminEnabled ? (
        <div className="absolute left-2 top-2 flex items-center gap-2 opacity-0 transition group-hover:opacity-100">
          <Link
            className={buttonVariants({ size: "sm", variant: "outline" })}
            href={`/items/${item.id}`}
          >
            <Edit size={12} />
          </Link>
          <DeleteButton item={item} />
        </div>
      ) : null}{" "}
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
      <div className="flex ">
        <CartButton item={item} />
      </div>
    </div>
  );
};

const DeleteButton = ({ item }) => {
  const onDelete = async () => {
    await deleteItem(item);
    toast.success("Item was deleted");
    mutate((key) => typeof key === "string" && key.startsWith("/items"));
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant="outline">
          <Trash size={12} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure to delete the item with id {item.id}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action is irreversible !
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
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
