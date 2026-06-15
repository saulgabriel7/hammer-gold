import { useAppStore } from "@/store/useAppStore";
import type { MuscleGroup } from "@/types/product";

export function useMuscleFilter() {
  const muscleFilter = useAppStore((s) => s.muscleFilter);
  const setMuscleFilter = useAppStore((s) => s.setMuscleFilter);

  return {
    activeFilter: muscleFilter,
    setFilter: (group: MuscleGroup) => setMuscleFilter(group),
    clearFilter: () => setMuscleFilter(null),
  };
}
