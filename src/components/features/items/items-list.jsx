import { Loader } from "lucide-react";
import useSWR from "swr";
import { getItems } from "../../../lib/items/get-items";
import { Item } from "./Item";

export const ItemsList = () => {
  const { data, isLoading } = useSWR("/items", async () => {
    return getItems();
  });
  if (isLoading) {
    return <Loader className="size-10 animate-spin" />;
  }

  return (
    <div className="grid max-h-full grid-cols-2 gap-4 overflow-x-auto pb-16">
      
      {data?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
