import { CATEGORIES } from "@/lib/category-data";
import { create } from "zustand";

export const useCategoryStore = create((set) => ({
  category: CATEGORIES[0].id,
  setCategory: (newCategory) => {
    set({ category: newCategory });
  },
}));
