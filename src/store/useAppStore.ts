import { create } from "zustand";
import type { MuscleGroup } from "@/types/product";

interface AppState {
  muscleFilter: MuscleGroup | null;
  setMuscleFilter: (group: MuscleGroup | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  muscleFilter: null,
  setMuscleFilter: (group) =>
    set((state) => ({
      muscleFilter: state.muscleFilter === group ? null : group,
    })),
}));
