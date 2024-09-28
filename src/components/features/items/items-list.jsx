import { useCategoryStore } from "@/lib/store/use-category-store";
import { Loader } from "lucide-react";
import useSWR from "swr";
import { getItems } from "../../../lib/items/get-items";
import { Item } from "./Item";

export const ItemsList = () => {
  const category = useCategoryStore((c) => c.category);
  const { data, isLoading } = useSWR(`/items/${category}`, async () => {
    return getItems(category);
  });
  if (isLoading) {
    return <Loader className="size-10 animate-spin" />;
  }

  return (
    <div className="grid max-h-full grid-cols-2 gap-3 overflow-x-auto pb-16">
      {data?.map((d) => (
        <Item key={d.id} item={d} />
      ))}
    </div>
  );
};
