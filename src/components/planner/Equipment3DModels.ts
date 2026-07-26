import * as THREE from "three";

// Cores e Materiais Oficiais da Hammer Gold (Otimizados para Alta Visibilidade 3D)
export const HAMMER_MATERIALS = {
  // Aço Grafite / Escuro Eletrostático para a estrutura principal (alta visibilidade no fundo escuro)
  frame: new THREE.MeshStandardMaterial({
    color: 0x2c2c32,
    metalness: 0.75,
    roughness: 0.35,
  }),
  // Ouro Vibrante Hammer Gold (#F5C138) para destaques reluzentes
  gold: new THREE.MeshStandardMaterial({
    color: 0xf5c138,
    metalness: 0.95,
    roughness: 0.15,
    emissive: 0x3d2e05,
  }),
  // Estofamento em Couro Sintético Grafite Macio
  leather: new THREE.MeshStandardMaterial({
    color: 0x35353c,
    metalness: 0.1,
    roughness: 0.6,
  }),
  // Manípulos e pinos de regulagem em Vermelho Vibrante (#E11D48)
  redKnob: new THREE.MeshStandardMaterial({
    color: 0xe11d48,
    metalness: 0.5,
    roughness: 0.2,
    emissive: 0x4c0519,
  }),
  // Cromo/Inox Brilhante para hastes e barras olímpicas
  chrome: new THREE.MeshStandardMaterial({
    color: 0xf1f5f9,
    metalness: 0.98,
    roughness: 0.08,
  }),
  // Borracha preta para apoios de pé e anilhas
  rubber: new THREE.MeshStandardMaterial({
    color: 0x18181b,
    metalness: 0.1,
    roughness: 0.8,
  }),
  // Tela/Console LED para aparelhos de Cardio
  screen: new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    emissive: 0x38bdf8,
    emissiveIntensity: 0.4,
    metalness: 0.5,
    roughness: 0.2,
  }),
};

/**
 * Cria a malha 3D detalhada de um equipamento com base na sua categoria e modelo
 */
export function createEquipment3DMesh(
  category: string,
  name: string,
  dimensions: { width: number; length: number; height: number }
): THREE.Group {
  const group = new THREE.Group();
  const lowerName = name.toLowerCase();

  if (lowerName.includes("esteira")) {
    buildTreadmillMesh(group, dimensions);
  } else if (lowerName.includes("bike") || lowerName.includes("bicicleta") || lowerName.includes("spinning")) {
    buildBikeMesh(group, dimensions);
  } else if (lowerName.includes("leg press")) {
    buildLegPressMesh(group, dimensions);
  } else if (lowerName.includes("crossover") || lowerName.includes("estacao") || lowerName.includes("coletiva")) {
    buildCrossoverMesh(group, dimensions);
  } else if (lowerName.includes("rack") || lowerName.includes("gaiola") || lowerName.includes("smith")) {
    buildRackMesh(group, dimensions);
  } else if (category === "Bancos" || lowerName.includes("banco") || lowerName.includes("supino")) {
    buildBenchMesh(group, dimensions);
  } else {
    buildGenericMachineMesh(group, dimensions);
  }

  // Habilitar sombras para todos os sub-elementos da máquina
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return group;
}

// 1. Leg Press 45°
function buildLegPressMesh(group: THREE.Group, dim: { width: number; length: number; height: number }) {
  const { frame, gold, leather, redKnob, chrome } = HAMMER_MATERIALS;

  // Base Principal da Estrutura
  const baseTube = new THREE.Mesh(new THREE.BoxGeometry(dim.width * 0.8, 0.12, dim.length * 0.9), frame);
  baseTube.position.set(0, 0.06, 0);
  group.add(baseTube);

  // Trilho Angular 45°
  const railGroup = new THREE.Group();
  railGroup.rotation.x = -Math.PI / 4;
  railGroup.position.set(0, 0.45, -dim.length * 0.1);

  const leftRail = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, dim.length * 0.9, 16), chrome);
  leftRail.position.set(-dim.width * 0.3, 0, 0);
  const rightRail = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, dim.length * 0.9, 16), chrome);
  rightRail.position.set(dim.width * 0.3, 0, 0);
  railGroup.add(leftRail, rightRail);

  // Carrinho Deslizante (Sled)
  const sled = new THREE.Mesh(new THREE.BoxGeometry(dim.width * 0.65, 0.16, 0.75), frame);
  sled.position.set(0, 0.1, 0);

  // Placa de Apoio dos Pés (Com Ouro Hammer Gold)
  const footPlate = new THREE.Mesh(new THREE.BoxGeometry(dim.width * 0.6, 0.04, 0.55), gold);
  footPlate.rotation.x = Math.PI / 8;
  footPlate.position.set(0, 0.18, -0.35);
  sled.add(footPlate);

  // Horns de Anilhas no Carrinho (Cromo)
  const hornLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.55), chrome);
  hornLeft.rotation.z = Math.PI / 2;
  hornLeft.position.set(-dim.width * 0.4, 0.1, 0);

  const hornRight = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.55), chrome);
  hornRight.rotation.z = Math.PI / 2;
  hornRight.position.set(dim.width * 0.4, 0.1, 0);

  sled.add(hornLeft, hornRight);
  railGroup.add(sled);
  group.add(railGroup);

  // Assento Padrão Ergonômico
  const seatBack = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.09, 0.75), leather);
  seatBack.rotation.x = -Math.PI / 6;
  seatBack.position.set(0, 0.55, dim.length * 0.25);

  const seatBottom = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.09, 0.38), leather);
  seatBottom.position.set(0, 0.32, dim.length * 0.35);
  group.add(seatBack, seatBottom);

  // Manípulo de Trava Vermelho
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.045, 16, 16), redKnob);
  knob.position.set(dim.width * 0.32, 0.38, dim.length * 0.25);
  group.add(knob);
}

// 2. Crossover / Estação Integrada
function buildCrossoverMesh(group: THREE.Group, dim: { width: number; length: number; height: number }) {
  const { frame, gold, chrome, redKnob } = HAMMER_MATERIALS;

  const towerWidth = 0.65;
  const towerDepth = 0.65;

  [-dim.width * 0.42, dim.width * 0.42].forEach((xPos) => {
    const tower = new THREE.Mesh(new THREE.BoxGeometry(towerWidth, dim.height, towerDepth), frame);
    tower.position.set(xPos, dim.height / 2, 0);

    const weightStack = new THREE.Mesh(new THREE.BoxGeometry(towerWidth * 0.7, dim.height * 0.7, towerDepth * 0.5), frame);
    weightStack.position.set(xPos, dim.height * 0.45, 0);

    const goldCap = new THREE.Mesh(new THREE.BoxGeometry(towerWidth * 1.1, 0.1, towerDepth * 1.1), gold);
    goldCap.position.set(xPos, dim.height - 0.05, 0);

    const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, dim.height * 0.85, 16), chrome);
    rail.position.set(xPos > 0 ? xPos - 0.25 : xPos + 0.25, dim.height * 0.45, 0);

    const trolley = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.22, 0.14), gold);
    trolley.position.set(xPos > 0 ? xPos - 0.25 : xPos + 0.25, dim.height * 0.5, 0);

    const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.12), redKnob);
    pin.rotation.z = Math.PI / 2;
    pin.position.set(xPos > 0 ? xPos - 0.14 : xPos + 0.14, dim.height * 0.5, 0);

    group.add(tower, weightStack, goldCap, rail, trolley, pin);
  });

  const topCrossbar = new THREE.Mesh(new THREE.BoxGeometry(dim.width * 0.84, 0.12, 0.12), frame);
  topCrossbar.position.set(0, dim.height - 0.12, 0);

  const pullUpBar = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.3, 16), chrome);
  pullUpBar.rotation.z = Math.PI / 2;
  pullUpBar.position.set(0, dim.height - 0.22, 0.18);

  group.add(topCrossbar, pullUpBar);
}

// 3. Esteira de Cardio
function buildTreadmillMesh(group: THREE.Group, dim: { width: number; length: number; height: number }) {
  const { frame, gold, rubber, screen, chrome } = HAMMER_MATERIALS;

  const baseDeck = new THREE.Mesh(new THREE.BoxGeometry(dim.width, 0.2, dim.length * 0.85), frame);
  baseDeck.position.set(0, 0.1, 0);

  const belt = new THREE.Mesh(new THREE.BoxGeometry(dim.width * 0.72, 0.03, dim.length * 0.78), rubber);
  belt.position.set(0, 0.21, 0);

  const trimLeft = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.16, dim.length * 0.85), gold);
  trimLeft.position.set(-dim.width / 2 + 0.02, 0.12, 0);

  const trimRight = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.16, dim.length * 0.85), gold);
  trimRight.position.set(dim.width / 2 - 0.02, 0.12, 0);

  const pillarLeft = new THREE.Mesh(new THREE.BoxGeometry(0.09, dim.height * 0.8, 0.14), frame);
  pillarLeft.rotation.x = -Math.PI / 12;
  pillarLeft.position.set(-dim.width * 0.4, dim.height * 0.45, -dim.length * 0.35);

  const pillarRight = new THREE.Mesh(new THREE.BoxGeometry(0.09, dim.height * 0.8, 0.14), frame);
  pillarRight.rotation.x = -Math.PI / 12;
  pillarRight.position.set(dim.width * 0.4, dim.height * 0.45, -dim.length * 0.35);

  const consoleBox = new THREE.Mesh(new THREE.BoxGeometry(dim.width * 0.85, 0.4, 0.18), frame);
  consoleBox.position.set(0, dim.height * 0.85, -dim.length * 0.42);

  const displayScreen = new THREE.Mesh(new THREE.BoxGeometry(dim.width * 0.65, 0.28, 0.03), screen);
  displayScreen.position.set(0, dim.height * 0.85, -dim.length * 0.42 + 0.1);

  const handrailLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.65, 16), chrome);
  handrailLeft.rotation.x = Math.PI / 2;
  handrailLeft.position.set(-dim.width * 0.4, dim.height * 0.7, -dim.length * 0.15);

  const handrailRight = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.65, 16), chrome);
  handrailRight.rotation.x = Math.PI / 2;
  handrailRight.position.set(dim.width * 0.4, dim.height * 0.7, -dim.length * 0.15);

  group.add(baseDeck, belt, trimLeft, trimRight, pillarLeft, pillarRight, consoleBox, displayScreen, handrailLeft, handrailRight);
}

// 4. Bike Indoor
function buildBikeMesh(group: THREE.Group, dim: { width: number; length: number; height: number }) {
  const { frame, gold, rubber, chrome, leather } = HAMMER_MATERIALS;

  const baseFrame = new THREE.Mesh(new THREE.BoxGeometry(dim.width, 0.1, dim.length), frame);
  baseFrame.position.set(0, 0.05, 0);

  const flywheel = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.06, 32), gold);
  flywheel.rotation.z = Math.PI / 2;
  flywheel.position.set(0, 0.38, -dim.length * 0.3);

  const seatPost = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.65, 16), chrome);
  seatPost.position.set(0, 0.52, dim.length * 0.25);

  const saddle = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.07, 0.3), leather);
  saddle.position.set(0, 0.85, dim.length * 0.25);

  const handlebarPost = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.65, 16), chrome);
  handlebarPost.position.set(0, 0.68, -dim.length * 0.25);

  const handlebar = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.025, 16, 32, Math.PI), rubber);
  handlebar.rotation.x = Math.PI / 2;
  handlebar.position.set(0, 1.0, -dim.length * 0.25);

  group.add(baseFrame, flywheel, seatPost, saddle, handlebarPost, handlebar);
}

// 5. Banco Regulável / Supino
function buildBenchMesh(group: THREE.Group, dim: { width: number; length: number; height: number }) {
  const { frame, gold, leather, redKnob } = HAMMER_MATERIALS;

  const baseTube = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, dim.length * 0.9), frame);
  baseTube.position.set(0, 0.09, 0);

  const frontFoot = new THREE.Mesh(new THREE.BoxGeometry(dim.width * 0.65, 0.09, 0.12), frame);
  frontFoot.position.set(0, 0.045, -dim.length * 0.4);

  const rearFoot = new THREE.Mesh(new THREE.BoxGeometry(dim.width * 0.65, 0.09, 0.12), frame);
  rearFoot.position.set(0, 0.045, dim.length * 0.4);

  const backrest = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.09, dim.length * 0.58), leather);
  backrest.position.set(0, 0.5, -dim.length * 0.1);

  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.09, dim.length * 0.3), leather);
  seat.position.set(0, 0.46, dim.length * 0.32);

  const logoPlate = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.05, 0.01), gold);
  logoPlate.position.set(0.065, 0.26, 0);

  const adjKnob = new THREE.Mesh(new THREE.SphereGeometry(0.03, 16, 16), redKnob);
  adjKnob.position.set(0, 0.26, -dim.length * 0.05);

  group.add(baseTube, frontFoot, rearFoot, backrest, seat, logoPlate, adjKnob);
}

// 6. Rack de Agachamento / Smith Machine
function buildRackMesh(group: THREE.Group, dim: { width: number; length: number; height: number }) {
  const { frame, gold, chrome, rubber } = HAMMER_MATERIALS;

  const colSize = 0.09;
  const positions = [
    [-dim.width * 0.45, -dim.length * 0.4],
    [dim.width * 0.45, -dim.length * 0.4],
    [-dim.width * 0.45, dim.length * 0.4],
    [dim.width * 0.45, dim.length * 0.4],
  ];

  positions.forEach(([x, z]) => {
    const col = new THREE.Mesh(new THREE.BoxGeometry(colSize, dim.height, colSize), frame);
    col.position.set(x, dim.height / 2, z);
    group.add(col);
  });

  const topCrossLeft = new THREE.Mesh(new THREE.BoxGeometry(colSize * 1.15, 0.1, dim.length * 0.85), gold);
  topCrossLeft.position.set(-dim.width * 0.45, dim.height - 0.05, 0);

  const topCrossRight = new THREE.Mesh(new THREE.BoxGeometry(colSize * 1.15, 0.1, dim.length * 0.85), gold);
  topCrossRight.position.set(dim.width * 0.45, dim.height - 0.05, 0);

  const barbell = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, dim.width * 1.15, 16), chrome);
  barbell.rotation.z = Math.PI / 2;
  barbell.position.set(0, dim.height * 0.55, 0);

  [-dim.width * 0.48, dim.width * 0.48].forEach((x) => {
    const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.07, 32), rubber);
    plate.rotation.z = Math.PI / 2;
    plate.position.set(x, dim.height * 0.55, 0);
    group.add(plate);
  });

  group.add(topCrossLeft, topCrossRight, barbell);
}

// 7. Máquina Guiada de Musculação Genérica
function buildGenericMachineMesh(group: THREE.Group, dim: { width: number; length: number; height: number }) {
  const { frame, gold, leather, chrome, redKnob } = HAMMER_MATERIALS;

  const base = new THREE.Mesh(new THREE.BoxGeometry(dim.width * 0.82, 0.1, dim.length * 0.85), frame);
  base.position.set(0, 0.05, 0);

  const stackWidth = 0.5;
  const stackHeight = dim.height * 0.85;
  const tower = new THREE.Mesh(new THREE.BoxGeometry(stackWidth, stackHeight, 0.5), frame);
  tower.position.set(-dim.width * 0.3, stackHeight / 2, -dim.length * 0.2);

  const goldTop = new THREE.Mesh(new THREE.BoxGeometry(stackWidth * 1.08, 0.08, 0.52), gold);
  goldTop.position.set(-dim.width * 0.3, stackHeight + 0.04, -dim.length * 0.2);

  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.09, 0.42), leather);
  seat.position.set(0.1, 0.45, 0.1);

  const backrest = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.09, 0.65), leather);
  backrest.rotation.x = -Math.PI / 12;
  backrest.position.set(0.1, 0.78, -0.15);

  const leverArm = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, dim.width * 0.65, 16), chrome);
  leverArm.rotation.z = Math.PI / 3;
  leverArm.position.set(0.1, 1.15, 0);

  const pin = new THREE.Mesh(new THREE.SphereGeometry(0.035, 16, 16), redKnob);
  pin.position.set(0.1, 0.38, 0.38);

  group.add(base, tower, goldTop, seat, backrest, leverArm, pin);
}
