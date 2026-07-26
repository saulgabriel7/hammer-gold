import { create } from "zustand";

export interface PlacedEquipment {
  id: string; // ID único da instância posicionada
  productId: string; // ID no catálogo
  modelCode: string;
  name: string;
  category: string;
  series: string;
  position: [number, number, number]; // [x, y, z] em metros (y=0 é o chão)
  rotation: number; // ângulo de rotação no eixo Y em graus (0 - 360)
  dimensions: { width: number; length: number; height: number }; // metros [x, z, y]
  safetyRadius: number; // margem recomendada em metros
  image: string;
}

export type EnvironmentType = "dark_loft" | "black_studio";
export type CameraMode = "orbit" | "top" | "walkthrough";

export interface RoomSettings {
  width: number; // x axis (largura) em metros
  length: number; // z axis (comprimento) em metros
  height: number; // y axis (pé direito) em metros
  environment: EnvironmentType;
  showSafetyZones: boolean;
  gridSnap: boolean;
  wallColor: string;
  floorType: "concrete" | "rubber" | "black";
}

interface PlannerState {
  room: RoomSettings;
  items: PlacedEquipment[];
  selectedItemId: string | null;
  cameraMode: CameraMode;
  isSummaryOpen: boolean;

  // Ações da Sala
  setRoomDimensions: (dimensions: Partial<Pick<RoomSettings, "width" | "length" | "height">>) => void;
  setEnvironment: (env: EnvironmentType) => void;
  setShowSafetyZones: (show: boolean) => void;
  setGridSnap: (snap: boolean) => void;
  setCameraMode: (mode: CameraMode) => void;
  setIsSummaryOpen: (open: boolean) => void;

  // Ações de Equipamento
  addItem: (product: {
    id: string;
    modelCode: string;
    name: string;
    category: string;
    series: string;
    image: string;
  }, position?: [number, number, number]) => string;
  removeItem: (id: string) => void;
  updateItemPosition: (id: string, position: [number, number, number]) => void;
  updateItemRotation: (id: string, rotation: number) => void;
  selectItem: (id: string | null) => void;
  clearScene: () => void;
  loadPreset: (presetKey: "studio" | "condo" | "commercial") => void;
}

// Helpers para dimensões reais/estimadas baseadas na categoria
export function getProductDimensions(category: string, name: string) {
  const lower = name.toLowerCase();

  if (lower.includes("esteira")) return { width: 0.95, length: 2.15, height: 1.6, safetyRadius: 0.8 };
  if (lower.includes("bike") || lower.includes("bicicleta")) return { width: 0.65, length: 1.25, height: 1.4, safetyRadius: 0.6 };
  if (lower.includes("eliptico") || lower.includes("elíptico")) return { width: 0.75, length: 1.95, height: 1.7, safetyRadius: 0.7 };
  if (lower.includes("leg press")) return { width: 1.65, length: 2.35, height: 1.55, safetyRadius: 0.9 };
  if (lower.includes("remada") || lower.includes("puxada")) return { width: 1.2, length: 1.8, height: 2.1, safetyRadius: 0.75 };
  if (lower.includes("supino") || lower.includes("banco")) return { width: 1.2, length: 1.6, height: 1.2, safetyRadius: 0.7 };
  if (lower.includes("rack") || lower.includes("gaiola") || lower.includes("smith")) return { width: 1.8, length: 1.9, height: 2.3, safetyRadius: 1.0 };
  if (lower.includes("crossover") || lower.includes("estacao") || lower.includes("coletiva")) return { width: 3.8, length: 1.5, height: 2.35, safetyRadius: 1.2 };
  if (lower.includes("halter") || lower.includes("suporte")) return { width: 0.7, length: 2.2, height: 0.9, safetyRadius: 0.6 };

  // Padrão de aparelhos de musculação Hammer Gold
  return { width: 1.3, length: 1.6, height: 1.6, safetyRadius: 0.8 };
}

export const usePlannerStore = create<PlannerState>((set, get) => ({
  room: {
    width: 12,
    length: 12,
    height: 3.5,
    environment: "dark_loft",
    showSafetyZones: true,
    gridSnap: true,
    wallColor: "#18181b",
    floorType: "concrete",
  },
  items: [
    {
      id: "demo-legpress",
      productId: "legpress-45",
      modelCode: "61A22-45",
      name: "Leg Press 45° Forja",
      category: "Força",
      series: "Forja",
      position: [-2.5, 0, -2],
      rotation: 45,
      dimensions: { width: 1.65, length: 2.35, height: 1.55 },
      safetyRadius: 0.9,
      image: "/images/produtos/1/1.avif",
    },
    {
      id: "demo-crossover",
      productId: "crossover-pro",
      modelCode: "61A50",
      name: "Crossover Angular Pro",
      category: "Força",
      series: "Forja",
      position: [0, 0, -4.5],
      rotation: 0,
      dimensions: { width: 3.8, length: 1.5, height: 2.35 },
      safetyRadius: 1.2,
      image: "/images/produtos/1/1.avif",
    },
    {
      id: "demo-treadmill",
      productId: "cardio-esteira",
      modelCode: "HG-CARDIO-01",
      name: "Esteira Hammer Run Pro",
      category: "Cardio",
      series: "Cardio",
      position: [3, 0, 1],
      rotation: 180,
      dimensions: { width: 0.95, length: 2.15, height: 1.6 },
      safetyRadius: 0.8,
      image: "/images/produtos/1/1.avif",
    },
    {
      id: "demo-bench",
      productId: "banco-regulavel",
      modelCode: "HG-BENCH-01",
      name: "Banco Regulável Multiajustável",
      category: "Bancos",
      series: "Forja",
      position: [-1, 0, 1.5],
      rotation: 90,
      dimensions: { width: 1.2, length: 1.6, height: 1.2 },
      safetyRadius: 0.7,
      image: "/images/produtos/1/1.avif",
    },
  ],
  selectedItemId: "demo-legpress",
  cameraMode: "orbit",
  isSummaryOpen: false,

  setRoomDimensions: (dimensions) =>
    set((state) => ({
      room: { ...state.room, ...dimensions },
    })),

  setEnvironment: (environment) =>
    set((state) => ({
      room: { ...state.room, environment },
    })),

  setShowSafetyZones: (showSafetyZones) =>
    set((state) => ({
      room: { ...state.room, showSafetyZones },
    })),

  setGridSnap: (gridSnap) =>
    set((state) => ({
      room: { ...state.room, gridSnap },
    })),

  setCameraMode: (cameraMode) => set({ cameraMode }),

  setIsSummaryOpen: (isSummaryOpen) => set({ isSummaryOpen }),

  addItem: (product, posOverride) => {
    const { items } = get();
    const id = `item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    const { width, length, height, safetyRadius } = getProductDimensions(product.category, product.name);

    const count = items.length;
    const defaultX = posOverride ? posOverride[0] : ((count % 3) - 1) * 2.5;
    const defaultZ = posOverride ? posOverride[2] : Math.floor(count / 3) * 2.5 - 1;
    const position: [number, number, number] = [defaultX, 0, defaultZ];

    const newItem: PlacedEquipment = {
      id,
      productId: product.id,
      modelCode: product.modelCode,
      name: product.name,
      category: product.category,
      series: product.series,
      position,
      rotation: 0,
      dimensions: { width, length, height },
      safetyRadius,
      image: product.image,
    };

    set({
      items: [...items, newItem],
      selectedItemId: id,
    });

    return id;
  },

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
      selectedItemId: state.selectedItemId === id ? null : state.selectedItemId,
    })),

  updateItemPosition: (id, position) =>
    set((state) => ({
      items: state.items.map((item) => (item.id === id ? { ...item, position } : item)),
    })),

  updateItemRotation: (id, rotation) =>
    set((state) => ({
      items: state.items.map((item) => (item.id === id ? { ...item, rotation: (rotation + 360) % 360 } : item)),
    })),

  selectItem: (id) => set({ selectedItemId: id }),

  clearScene: () => set({ items: [], selectedItemId: null }),

  loadPreset: (presetKey) => {
    if (presetKey === "studio") {
      set({
        room: {
          width: 8,
          length: 8,
          height: 3.2,
          environment: "dark_loft",
          showSafetyZones: true,
          gridSnap: true,
          wallColor: "#18181b",
          floorType: "rubber",
        },
        items: [
          {
            id: "p1-cross",
            productId: "crossover-compact",
            modelCode: "61A50-S",
            name: "Crossover Angular Compact",
            category: "Força",
            series: "Forja",
            position: [0, 0, -2.8],
            rotation: 0,
            dimensions: { width: 2.8, length: 1.4, height: 2.2 },
            safetyRadius: 1.0,
            image: "/images/produtos/1/1.avif",
          },
          {
            id: "p1-bench",
            productId: "banco-ajustavel",
            modelCode: "HG-B01",
            name: "Banco Ajustável Premium",
            category: "Bancos",
            series: "Forja",
            position: [0, 0, -0.5],
            rotation: 0,
            dimensions: { width: 1.1, length: 1.5, height: 1.1 },
            safetyRadius: 0.7,
            image: "/images/produtos/1/1.avif",
          },
          {
            id: "p1-rack",
            productId: "rack-halteres",
            modelCode: "HG-RACK-2T",
            name: "Rack de Halteres 2 Torres",
            category: "Acessórios",
            series: "Forja",
            position: [-2.5, 0, 2],
            rotation: 90,
            dimensions: { width: 0.7, length: 2.0, height: 0.9 },
            safetyRadius: 0.6,
            image: "/images/produtos/1/1.avif",
          },
          {
            id: "p1-bike",
            productId: "bike-indoor",
            modelCode: "HG-BIKE-PRO",
            name: "Spinning Indoor Pro",
            category: "Cardio",
            series: "Cardio",
            position: [2.2, 0, 1.8],
            rotation: 210,
            dimensions: { width: 0.65, length: 1.25, height: 1.4 },
            safetyRadius: 0.6,
            image: "/images/produtos/1/1.avif",
          },
        ],
        selectedItemId: null,
      });
    } else if (presetKey === "condo") {
      set({
        room: {
          width: 10,
          length: 12,
          height: 3.5,
          environment: "dark_loft",
          showSafetyZones: true,
          gridSnap: true,
          wallColor: "#18181b",
          floorType: "concrete",
        },
        items: [
          {
            id: "p2-treadmill-1",
            productId: "esteira-1",
            modelCode: "HG-CARDIO-01",
            name: "Esteira Hammer Run Pro 1",
            category: "Cardio",
            series: "Cardio",
            position: [-3.2, 0, -3.8],
            rotation: 180,
            dimensions: { width: 0.95, length: 2.15, height: 1.6 },
            safetyRadius: 0.8,
            image: "/images/produtos/1/1.avif",
          },
          {
            id: "p2-treadmill-2",
            productId: "esteira-2",
            modelCode: "HG-CARDIO-01",
            name: "Esteira Hammer Run Pro 2",
            category: "Cardio",
            series: "Cardio",
            position: [-1.8, 0, -3.8],
            rotation: 180,
            dimensions: { width: 0.95, length: 2.15, height: 1.6 },
            safetyRadius: 0.8,
            image: "/images/produtos/1/1.avif",
          },
          {
            id: "p2-multi",
            productId: "estacao-4-w",
            modelCode: "HG-MULTI-4",
            name: "Multiestação 4 Vias Hammer Gold",
            category: "Multiestações",
            series: "Coletiva",
            position: [2.5, 0, -2.5],
            rotation: 0,
            dimensions: { width: 3.2, length: 2.8, height: 2.35 },
            safetyRadius: 1.2,
            image: "/images/produtos/1/1.avif",
          },
          {
            id: "p2-legpress",
            productId: "legpress-45",
            modelCode: "61A22",
            name: "Leg Press 45° Articulado",
            category: "Força",
            series: "Forja",
            position: [-2.8, 0, 1.5],
            rotation: 45,
            dimensions: { width: 1.65, length: 2.35, height: 1.55 },
            safetyRadius: 0.9,
            image: "/images/produtos/1/1.avif",
          },
          {
            id: "p2-bench",
            productId: "banco-reclinavel",
            modelCode: "HG-B02",
            name: "Banco Reclinável Pro",
            category: "Bancos",
            series: "Forja",
            position: [0.5, 0, 2],
            rotation: 0,
            dimensions: { width: 1.2, length: 1.6, height: 1.2 },
            safetyRadius: 0.7,
            image: "/images/produtos/1/1.avif",
          },
          {
            id: "p2-rack",
            productId: "rack-halteres",
            modelCode: "HG-RACK-3T",
            name: "Rack de Halteres Pro",
            category: "Acessórios",
            series: "Forja",
            position: [3.5, 0, 3],
            rotation: 270,
            dimensions: { width: 0.7, length: 2.4, height: 0.9 },
            safetyRadius: 0.6,
            image: "/images/produtos/1/1.avif",
          },
        ],
        selectedItemId: null,
      });
    } else if (presetKey === "commercial") {
      set({
        room: {
          width: 16,
          length: 16,
          height: 4.0,
          environment: "dark_loft",
          showSafetyZones: true,
          gridSnap: true,
          wallColor: "#18181b",
          floorType: "concrete",
        },
        items: [
          {
            id: "p3-cross",
            productId: "crossover-giant",
            modelCode: "61A55-MAX",
            name: "Crossover Angular Dual Stack",
            category: "Força",
            series: "Forja",
            position: [0, 0, -6],
            rotation: 0,
            dimensions: { width: 4.2, length: 1.6, height: 2.4 },
            safetyRadius: 1.2,
            image: "/images/produtos/1/1.avif",
          },
          {
            id: "p3-legpress-1",
            productId: "leg-45-heavy",
            modelCode: "61A22-HD",
            name: "Leg Press 45° Heavy Duty",
            category: "Força",
            series: "Forja",
            position: [-5, 0, -2],
            rotation: 45,
            dimensions: { width: 1.7, length: 2.4, height: 1.6 },
            safetyRadius: 0.9,
            image: "/images/produtos/1/1.avif",
          },
          {
            id: "p3-hack-squat",
            productId: "hack-squat",
            modelCode: "61A23",
            name: "Hack Squat Articulado",
            category: "Força",
            series: "Forja",
            position: [-5, 0, 2],
            rotation: 45,
            dimensions: { width: 1.6, length: 2.2, height: 1.65 },
            safetyRadius: 0.9,
            image: "/images/produtos/1/1.avif",
          },
          {
            id: "p3-lat-pulldown",
            productId: "puxada-alta",
            modelCode: "61A14",
            name: "Puxada Alta Articulada",
            category: "Força",
            series: "Forja",
            position: [5, 0, -2],
            rotation: 315,
            dimensions: { width: 1.3, length: 1.8, height: 2.2 },
            safetyRadius: 0.8,
            image: "/images/produtos/1/1.avif",
          },
          {
            id: "p3-low-row",
            productId: "remada-baixa",
            modelCode: "61A13A-1",
            name: "Remada Baixa Guiada",
            category: "Força",
            series: "Forja",
            position: [5, 0, 2],
            rotation: 315,
            dimensions: { width: 1.2, length: 1.8, height: 1.7 },
            safetyRadius: 0.8,
            image: "/images/produtos/1/1.avif",
          },
          {
            id: "p3-smith",
            productId: "smith-machine",
            modelCode: "61A30",
            name: "Smith Machine 3D Balancê",
            category: "Racks e suportes",
            series: "Forja",
            position: [0, 0, 1],
            rotation: 0,
            dimensions: { width: 2.1, length: 1.9, height: 2.35 },
            safetyRadius: 1.0,
            image: "/images/produtos/1/1.avif",
          },
          {
            id: "p3-bench-press",
            productId: "supino-reto",
            modelCode: "HG-B10",
            name: "Supino Reto Olímpico",
            category: "Bancos",
            series: "Forja",
            position: [-2, 0, 5],
            rotation: 180,
            dimensions: { width: 1.6, length: 1.8, height: 1.3 },
            safetyRadius: 0.8,
            image: "/images/produtos/1/1.avif",
          },
          {
            id: "p3-bench-incline",
            productId: "supino-inclinado",
            modelCode: "HG-B11",
            name: "Supino Inclinado Olímpico",
            category: "Bancos",
            series: "Forja",
            position: [2, 0, 5],
            rotation: 180,
            dimensions: { width: 1.6, length: 1.8, height: 1.45 },
            safetyRadius: 0.8,
            image: "/images/produtos/1/1.avif",
          },
        ],
        selectedItemId: null,
      });
    }
  },
}));
