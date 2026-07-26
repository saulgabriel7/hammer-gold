import { useMemo, useState } from "react";
import { catalogProducts, productCategories } from "@/data/catalog-products";
import { TRANSLATED_MUSCLE_GROUPS } from "@/lib/constants";
import type { CustomerSegment, LoadType, MuscleGroup, ProductCategory } from "@/types/product";

export function normalizeSearchTerm(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export interface UseProductCatalogFiltersProps {
  initialSeries?: string;
  initialSegment?: CustomerSegment;
  initialMuscleGroup?: MuscleGroup;
}

const muscleGroupsList = Object.keys(TRANSLATED_MUSCLE_GROUPS) as MuscleGroup[];
const loadTypesList: LoadType[] = [
  "Torre de pesos",
  "Anilhas",
  "Peso corporal",
  "Cardio",
  "Scan",
  "Acessório",
];
const segmentsList: CustomerSegment[] = [
  "Academias comerciais",
  "Condomínios",
  "Hotéis",
  "Clubes",
  "Studios",
  "Clínicas de estética",
  "Estúdios de Pilates",
  "Spas",
];

export function useProductCatalogFilters(props?: UseProductCatalogFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all");
  const [selectedSeries, setSelectedSeries] = useState(props?.initialSeries || "all");
  const [selectedMuscle, setSelectedMuscle] = useState<MuscleGroup | "all">(props?.initialMuscleGroup || "all");
  const [selectedSegment, setSelectedSegment] = useState<CustomerSegment | "all">(props?.initialSegment || "all");
  const [selectedLoadType, setSelectedLoadType] = useState<LoadType | "all">("all");
  const [sortBy, setSortBy] = useState("modelCode-asc");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const categories = useMemo<(ProductCategory | "all")[]>(
    () => ["all", ...productCategories],
    []
  );

  const seriesList = useMemo<string[]>(() => {
    const set = new Set(catalogProducts.map((p) => p.series));
    return ["all", ...Array.from(set)];
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...catalogProducts];

    if (searchQuery) {
      const norm = normalizeSearchTerm(searchQuery);
      result = result.filter((p) => {
        const nameNorm = normalizeSearchTerm(p.name);
        const codeNorm = normalizeSearchTerm(p.modelCode);
        const seriesNorm = normalizeSearchTerm(p.series);
        const descNorm = normalizeSearchTerm(p.description);
        return (
          nameNorm.includes(norm) ||
          codeNorm.includes(norm) ||
          seriesNorm.includes(norm) ||
          descNorm.includes(norm)
        );
      });
    }

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedSeries !== "all") {
      result = result.filter((p) => p.series === selectedSeries);
    }

    if (selectedMuscle !== "all") {
      result = result.filter((p) => p.muscleGroups?.includes(selectedMuscle));
    }

    if (selectedSegment !== "all") {
      result = result.filter((p) => p.recommendedSegments?.includes(selectedSegment));
    }

    if (selectedLoadType !== "all") {
      result = result.filter((p) => p.loadType === selectedLoadType);
    }

    result.sort((a, b) => {
      if (sortBy === "modelCode-asc") {
        return a.modelCode.localeCompare(b.modelCode, undefined, { numeric: true });
      }
      if (sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "series-asc") {
        return a.series.localeCompare(b.series);
      }
      return 0;
    });

    return result;
  }, [searchQuery, selectedCategory, selectedSeries, selectedMuscle, selectedSegment, selectedLoadType, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedSeries("all");
    setSelectedMuscle("all");
    setSelectedSegment("all");
    setSelectedLoadType("all");
    setSortBy("modelCode-asc");
    setCurrentPage(1);
  };

  const updateSearchQuery = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const updateSelectedCategory = (
    value: ProductCategory | "all"
  ) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  const updateSelectedSeries = (value: string) => {
    setSelectedSeries(value);
    setCurrentPage(1);
  };

  const updateSelectedMuscle = (value: MuscleGroup | "all") => {
    setSelectedMuscle(value);
    setCurrentPage(1);
  };

  const updateSelectedSegment = (value: CustomerSegment | "all") => {
    setSelectedSegment(value);
    setCurrentPage(1);
  };

  const updateSelectedLoadType = (value: LoadType | "all") => {
    setSelectedLoadType(value);
    setCurrentPage(1);
  };

  const updateSortBy = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return {
    searchQuery,
    setSearchQuery: updateSearchQuery,
    selectedCategory,
    setSelectedCategory: updateSelectedCategory,
    selectedSeries,
    setSelectedSeries: updateSelectedSeries,
    selectedMuscle,
    setSelectedMuscle: updateSelectedMuscle,
    selectedSegment,
    setSelectedSegment: updateSelectedSegment,
    selectedLoadType,
    setSelectedLoadType: updateSelectedLoadType,
    sortBy,
    setSortBy: updateSortBy,
    currentPage,
    setCurrentPage,
    filteredProducts,
    paginatedProducts,
    totalPages,
    itemsPerPage,
    categories,
    seriesList,
    muscleGroups: muscleGroupsList,
    segments: segmentsList,
    loadTypes: loadTypesList,
    clearFilters,
  };
}
