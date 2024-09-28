import { CATEGORIES } from "@/lib/category-data";
import { useCategoryStore } from "@/lib/store/use-category-store";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const CategoryList = () => {
  const { category, setCategory } = useCategoryStore();
  return (
    <div className="flex flex-col gap-2">
      {CATEGORIES.map((c) => (
        <button
          onClick={() => {
            setCategory(c.id);

          }}
          className={cn(
            "relative rounded-md border p-2 flex flex-col items-center",
            {
              "bg-blue-200": category === c.id,
            }
          )}
          id={c.id}
          key={c.id}
        >
          <Image
            src={c.logo}
            alt={c.title}
            width={30}
            height={30}
            className="aspect-square w-full rounded-md object-contain"
          />
          <p className="text-xs">{c.title}</p>
        </button>
      ))}
    </div>
  );
};
