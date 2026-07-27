import { cardioProducts } from "@/data/cardio-products";
import { products } from "@/data/products";
import { scanProducts } from "@/data/scan-products";
import type {
  CatalogProduct,
  CustomerSegment,
  EquipmentType,
  LoadType,
  Product,
  ProductCategory,
} from "@/types/product";

function searchableText(product: Product): string {
  return `${product.name} ${product.modelCode} ${product.description} ${product.series}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function identityText(product: Product): string {
  return `${product.name} ${product.modelCode} ${product.series}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getCategory(product: Product): ProductCategory {
  const text = searchableText(product);
  const identity = identityText(product);

  if (product.series === "Cardio") return "Cardio";
  if (product.series === "Scan") return "Scan";
  if (/banco|bench/.test(text)) return "Bancos";
  if (/halter|anilha|barra olimpica|kettlebell|storage|armazenamento/.test(text)) {
    return "Acessórios";
  }
  if (/rack|suporte|gaiola|smith machine|maquina smith/.test(identity)) {
    return "Racks e suportes";
  }
  if (product.series === "Coletiva" || /multiestacao|multi estacao|estacao coletiva/.test(text)) {
    return "Multiestações";
  }
  if (product.series === "Lastro") return "Peso livre";
  if (/funcional|functional|cross|trenador multifuncional/.test(text)) {
    return "Funcional";
  }
  return "Força";
}

function getSubcategory(product: Product, category: ProductCategory): string {
  const text = searchableText(product);

  if (category === "Cardio") {
    if (/esteira/.test(text)) return "Esteiras";
    if (/horizontal/.test(text)) return "Bicicletas horizontais";
    if (/bike indoor/.test(text)) return "Bikes indoor";
    if (/bicicleta/.test(text)) return "Bicicletas verticais";
    return "Elípticos";
  }
  if (category === "Scan") return "Avaliação corporal";
  if (category === "Bancos") return "Bancos profissionais";
  if (category === "Racks e suportes") return "Racks e armazenamento";
  if (category === "Multiestações") return "Estações integradas";
  if (category === "Acessórios") return "Organização e acessórios";
  if (product.muscleGroups.includes("Leg")) return "Pernas e glúteos";
  if (product.muscleGroups.includes("Back")) return "Costas";
  if (product.muscleGroups.includes("Chest")) return "Peito";
  if (product.muscleGroups.includes("Shoulder")) return "Ombros";
  if (product.muscleGroups.includes("Arm")) return "Braços";
  if (product.muscleGroups.includes("Abdominal")) return "Core";
  return "Corpo inteiro";
}

function getLoadType(product: Product, category: ProductCategory): LoadType {
  if (category === "Cardio") return "Cardio";
  if (category === "Scan") return "Scan";
  if (category === "Bancos" || category === "Racks e suportes") return "Peso corporal";
  if (category === "Acessórios") return "Acessório";
  if (product.series === "Lastro") return "Anilhas";
  return "Torre de pesos";
}

function getEquipmentType(product: Product, category: ProductCategory): EquipmentType {
  return product.series === "Coletiva" || category === "Multiestações"
    ? "Multiestação"
    : "Individual";
}

function getSegments(
  category: ProductCategory,
  equipmentType: EquipmentType
): CustomerSegment[] {
  const segments: CustomerSegment[] = ["Academias comerciais", "Clubes"];

  if (category === "Cardio" || category === "Força" || category === "Funcional") {
    segments.push("Condomínios", "Hotéis");
  }
  if (
    category === "Cardio" ||
    category === "Bancos" ||
    category === "Racks e suportes" ||
    category === "Peso livre" ||
    category === "Funcional"
  ) {
    segments.push("Studios");
  }
  if (equipmentType === "Multiestação") segments.push("Condomínios", "Hotéis");

  return Array.from(new Set(segments));
}

export function enrichProduct(product: Product): CatalogProduct {
  const category = getCategory(product);
  const equipmentType = getEquipmentType(product, category);

  return {
    ...product,
    category,
    subcategory: getSubcategory(product, category),
    loadType: getLoadType(product, category),
    equipmentType,
    recommendedSegments:
      product.recommendedSegments ?? getSegments(category, equipmentType),
  };
}

export const catalogProducts: CatalogProduct[] = [
  ...products,
  ...cardioProducts,
  ...scanProducts,
].map(enrichProduct);

export const productCategories = Array.from(
  new Set(catalogProducts.map((product) => product.category))
).sort();

export const productSeries = Array.from(
  new Set(catalogProducts.map((product) => product.series))
).sort();
