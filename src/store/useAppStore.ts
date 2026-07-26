import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MuscleGroup } from "@/types/product";

export interface QuoteItem {
  productId: string;
  quantity: number;
}

interface AppState {
  muscleFilter: MuscleGroup | null;
  quoteItems: QuoteItem[];
  setMuscleFilter: (group: MuscleGroup | null) => void;
  addToQuote: (productId: string) => void;
  removeFromQuote: (productId: string) => void;
  updateQuoteQuantity: (productId: string, quantity: number) => void;
  clearQuote: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      muscleFilter: null,
      quoteItems: [],
      setMuscleFilter: (group) =>
        set((state) => ({
          muscleFilter: state.muscleFilter === group ? null : group,
        })),
      addToQuote: (productId) =>
        set((state) => {
          const exists = state.quoteItems.some((item) => item.productId === productId);
          return exists
            ? state
            : { quoteItems: [...state.quoteItems, { productId, quantity: 1 }] };
        }),
      removeFromQuote: (productId) =>
        set((state) => ({
          quoteItems: state.quoteItems.filter((item) => item.productId !== productId),
        })),
      updateQuoteQuantity: (productId, quantity) =>
        set((state) => ({
          quoteItems: state.quoteItems.map((item) =>
            item.productId === productId
              ? { ...item, quantity: Math.max(1, Math.min(99, quantity)) }
              : item
          ),
        })),
      clearQuote: () => set({ quoteItems: [] }),
    }),
    {
      name: "hammer-gold-selection",
      partialize: (state) => ({
        quoteItems: state.quoteItems,
      }),
    }
  )
);
