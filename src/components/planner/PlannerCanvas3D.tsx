"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { usePlannerStore } from "@/store/usePlannerStore";
import { createEquipment3DMesh } from "./Equipment3DModels";

export function PlannerCanvas3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    room,
    items,
    selectedItemId,
    cameraMode,
    selectItem,
    updateItemPosition,
  } = usePlannerStore();

  const [hoveredItemName, setHoveredItemName] = useState<string | null>(null);

  // Referências mutáveis do Three.js
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const equipmentMeshesRef = useRef<Map<string, THREE.Group>>(new Map());
  const safetyRingsRef = useRef<Map<string, THREE.Mesh>>(new Map());
  const gridHelperRef = useRef<THREE.GridHelper | null>(null);
  const floorMeshRef = useRef<THREE.Mesh | null>(null);
  const roomBorderRef = useRef<THREE.LineSegments | null>(null);

  // Estado de Drag & Drop no Canvas 3D
  const draggingIdRef = useRef<string | null>(null);
  const dragPlaneRef = useRef<THREE.Plane>(
    new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
  );
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());

  // 1. Inicialização do Canvas Three.js
  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Cena
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Câmera (Posicionada mais próxima para visualização em alta definição)
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(
      room.width * 0.45,
      room.height * 0.75,
      room.length * 0.6,
    );
    cameraRef.current = camera;

    // Renderer de Alta Fidelidade Visual
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controles de Órbita
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.01; // Não afundar no chão
    controls.minDistance = 1.5;
    controls.maxDistance = 35;
    controls.target.set(0, 0.5, 0);
    controlsRef.current = controls;

    // Listener de Redimensionamento
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current)
        return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Loop de Animação
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (controlsRef.current) controlsRef.current.update();
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.domElement.remove();
      }
    };
    // A instância Three.js é criada apenas uma vez; tamanho e iluminação são atualizados nos efeitos abaixo.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2. Iluminação neutra de estúdio, com calor discreto nos contornos
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Limpar luzes antigas
    const existingLights = scene.children.filter(
      (child) =>
        child instanceof THREE.Light || child instanceof THREE.HemisphereLight,
    );
    existingLights.forEach((light) => scene.remove(light));

    if (room.environment === "black_studio") {
      // Cenário A: fundo preto para leitura técnica do equipamento.
      scene.background = new THREE.Color(0x000000);

      // Luz de Hemisfério Quente (Céu Branco / Chão Escuro)
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x171717, 1.25);
      scene.add(hemiLight);

      // Key Light Frontal/Lateral Brilhante
      const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
      keyLight.position.set(8, 12, 8);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.width = 2048;
      keyLight.shadow.mapSize.height = 2048;
      scene.add(keyLight);

      // Leve luz quente: referência à marca sem lavar a cena em dourado.
      const rimLight = new THREE.DirectionalLight(0xc5a15a, 0.65);
      rimLight.position.set(-8, 10, -8);
      scene.add(rimLight);

      // Ambient Light para clarear áreas sombreadas
      const ambientLight = new THREE.AmbientLight(0x27272a, 0.7);
      scene.add(ambientLight);
    } else {
      // Cenário B: loft industrial sóbrio, favorecendo contraste e proporção.
      scene.background = new THREE.Color(0x101010);

      // Iluminação de Estúdio Comercial Profissional
      const hemiLight = new THREE.HemisphereLight(0xf7f7f5, 0x202020, 1.35);
      scene.add(hemiLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 2.65);
      keyLight.position.set(
        room.width * 0.5,
        room.height * 1.5,
        room.length * 0.5,
      );
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.width = 2048;
      keyLight.shadow.mapSize.height = 2048;
      keyLight.shadow.bias = -0.0001;
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0xd9d9d9, 0.85);
      fillLight.position.set(
        -room.width * 0.5,
        room.height,
        -room.length * 0.5,
      );
      scene.add(fillLight);

      const warmLight = new THREE.SpotLight(
        0xc5a15a,
        0.75,
        36,
        Math.PI / 3,
        0.65,
      );
      warmLight.position.set(0, room.height * 1.2, 0);
      scene.add(warmLight);

      const ambientLight = new THREE.AmbientLight(0x3f3f46, 0.75);
      scene.add(ambientLight);
    }
  }, [room.environment, room.width, room.length, room.height]);

  // 3. Chão, limites da sala e grid técnico
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (floorMeshRef.current) scene.remove(floorMeshRef.current);
    if (gridHelperRef.current) scene.remove(gridHelperRef.current);
    if (roomBorderRef.current) scene.remove(roomBorderRef.current);

    // Chão com acabamento grafite fosco.
    const floorGeo = new THREE.PlaneGeometry(room.width, room.length);
    const floorMat = new THREE.MeshStandardMaterial({
      color: room.environment === "black_studio" ? 0x090909 : 0x161616,
      roughness: 0.65,
      metalness: 0.05,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);
    floorMeshRef.current = floor;

    // Limite discreto do ambiente, visível sem disputar atenção com os produtos.
    const borderGeo = new THREE.EdgesGeometry(
      new THREE.BoxGeometry(room.width, 0.02, room.length),
    );
    const borderMat = new THREE.LineBasicMaterial({
      color: 0x6b6252,
      linewidth: 2,
    });
    const borderLines = new THREE.LineSegments(borderGeo, borderMat);
    borderLines.position.y = 0.01;
    scene.add(borderLines);
    roomBorderRef.current = borderLines;

    // Grid de trabalho neutro.
    const maxDim = Math.max(room.width, room.length);
    const grid = new THREE.GridHelper(
      maxDim,
      maxDim * 2,
      new THREE.Color(0x4a4a4a),
      new THREE.Color(0x272727),
    );
    grid.position.y = 0.008;
    scene.add(grid);
    gridHelperRef.current = grid;
  }, [room.width, room.length, room.environment]);

  // 4. Sincronização dos Equipamentos 3D na Cena
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const currentMeshes = equipmentMeshesRef.current;
    const currentRings = safetyRingsRef.current;
    const itemIds = new Set(items.map((it) => it.id));

    // Remover malhas deletadas
    currentMeshes.forEach((mesh, id) => {
      if (!itemIds.has(id)) {
        scene.remove(mesh);
        currentMeshes.delete(id);
      }
    });

    currentRings.forEach((ring, id) => {
      if (!itemIds.has(id)) {
        scene.remove(ring);
        currentRings.delete(id);
      }
    });

    // Adicionar / Atualizar equipamentos
    items.forEach((item) => {
      let meshGroup = currentMeshes.get(item.id);

      if (!meshGroup) {
        meshGroup = createEquipment3DMesh(
          item.category,
          item.name,
          item.dimensions,
        );
        meshGroup.userData = { id: item.id, name: item.name };
        scene.add(meshGroup);
        currentMeshes.set(item.id, meshGroup);
      }

      meshGroup.position.set(
        item.position[0],
        item.position[1],
        item.position[2],
      );
      meshGroup.rotation.y = (item.rotation * Math.PI) / 180;

      const isSelected = item.id === selectedItemId;

      // Anel de Circulação / Segurança
      let ringMesh = currentRings.get(item.id);
      if (room.showSafetyZones || isSelected) {
        if (!ringMesh) {
          const ringGeo = new THREE.RingGeometry(
            item.safetyRadius * 0.92,
            item.safetyRadius,
            32,
          );
          const ringMat = new THREE.MeshBasicMaterial({
            color: isSelected ? 0xc5a15a : 0x52525b,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: isSelected ? 0.85 : 0.4,
          });
          ringMesh = new THREE.Mesh(ringGeo, ringMat);
          ringMesh.rotation.x = -Math.PI / 2;
          scene.add(ringMesh);
          currentRings.set(item.id, ringMesh);
        }
        ringMesh.position.set(item.position[0], 0.015, item.position[2]);
        (ringMesh.material as THREE.MeshBasicMaterial).color.setHex(
          isSelected ? 0xc5a15a : 0x52525b,
        );
        (ringMesh.material as THREE.MeshBasicMaterial).opacity = isSelected
          ? 0.85
          : 0.4;
        ringMesh.visible = true;
      } else if (ringMesh) {
        ringMesh.visible = false;
      }
    });
  }, [items, selectedItemId, room.showSafetyZones]);

  // 5. Posicionamento de Câmera de Acordo com o Modo
  useEffect(() => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;

    if (cameraMode === "top") {
      // Planta Baixa Vista de Cima (Bem próxima e limpa)
      camera.position.set(0, Math.max(room.width, room.length) * 0.85, 0.001);
      controls.target.set(0, 0, 0);
      controls.maxPolarAngle = 0.01;
    } else if (cameraMode === "walkthrough") {
      // Visão em Primeira Pessoa
      camera.position.set(0, 1.65, room.length * 0.25);
      controls.target.set(0, 1.4, 0);
      controls.maxPolarAngle = Math.PI / 2 + 0.05;
    } else {
      // Visão Órbita 3D Próxima
      camera.position.set(
        room.width * 0.45,
        room.height * 0.75,
        room.length * 0.6,
      );
      controls.target.set(0, 0.5, 0);
      controls.maxPolarAngle = Math.PI / 2 - 0.01;
    }
    controls.update();
  }, [cameraMode, room.width, room.length, room.height]);

  // 6. Arrastar e Soltar no Plano XZ
  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current || !cameraRef.current || !sceneRef.current)
      return;

    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);

    const meshesArray = Array.from(equipmentMeshesRef.current.values());
    const intersects = raycasterRef.current.intersectObjects(meshesArray, true);

    if (intersects.length > 0) {
      let parent: THREE.Object3D | null = intersects[0].object;
      while (parent && !parent.userData?.id) {
        parent = parent.parent;
      }

      if (parent && parent.userData?.id) {
        const itemId = parent.userData.id;
        selectItem(itemId);
        draggingIdRef.current = itemId;
        if (controlsRef.current) controlsRef.current.enabled = false;
      }
    } else {
      selectItem(null);
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current || !cameraRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);

    if (draggingIdRef.current) {
      const intersectionPoint = new THREE.Vector3();
      raycasterRef.current.ray.intersectPlane(
        dragPlaneRef.current,
        intersectionPoint,
      );

      if (intersectionPoint) {
        let newX = intersectionPoint.x;
        let newZ = intersectionPoint.z;

        const halfW = room.width / 2 - 0.5;
        const halfL = room.length / 2 - 0.5;
        newX = Math.max(-halfW, Math.min(halfW, newX));
        newZ = Math.max(-halfL, Math.min(halfL, newZ));

        if (room.gridSnap) {
          newX = Math.round(newX * 4) / 4;
          newZ = Math.round(newZ * 4) / 4;
        }

        updateItemPosition(draggingIdRef.current, [newX, 0, newZ]);
      }
    } else {
      const meshesArray = Array.from(equipmentMeshesRef.current.values());
      const intersects = raycasterRef.current.intersectObjects(
        meshesArray,
        true,
      );

      if (intersects.length > 0) {
        let parent: THREE.Object3D | null = intersects[0].object;
        while (parent && !parent.userData?.name) {
          parent = parent.parent;
        }
        if (parent && parent.userData?.name) {
          setHoveredItemName(parent.userData.name);
          return;
        }
      }
      setHoveredItemName(null);
    }
  };

  const handlePointerUp = () => {
    draggingIdRef.current = null;
    if (controlsRef.current) controlsRef.current.enabled = true;
  };

  // Funções de Zoom na Tela
  const zoomIn = () => {
    if (!controlsRef.current) return;
    controlsRef.current.dollyIn(1.2);
    controlsRef.current.update();
  };

  const zoomOut = () => {
    if (!controlsRef.current) return;
    controlsRef.current.dollyOut(1.2);
    controlsRef.current.update();
  };

  const resetCamera = () => {
    if (!cameraRef.current || !controlsRef.current) return;
    cameraRef.current.position.set(
      room.width * 0.45,
      room.height * 0.75,
      room.length * 0.6,
    );
    controlsRef.current.target.set(0, 0.5, 0);
    controlsRef.current.update();
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full cursor-grab overflow-hidden bg-planner-canvas select-none active:cursor-grabbing"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* Tooltip de Hover */}
      {hoveredItemName && !selectedItemId && (
        <div className="pointer-events-none absolute top-20 left-1/2 z-10 -translate-x-1/2 rounded-md border border-white/10 bg-planner-panel/95 px-3.5 py-1.5 text-xs font-semibold text-zinc-100 shadow-xl backdrop-blur-md">
          {hoveredItemName}
        </div>
      )}

      {/* Botões de Controle de Zoom Flutuantes no Canvas */}
      <div className="absolute top-20 right-4 z-10 flex flex-col gap-1.5 rounded-lg border border-white/10 bg-planner-panel/95 p-1.5 shadow-xl backdrop-blur-xl">
        <button
          type="button"
          onClick={zoomIn}
          className="flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/4 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Aproximar zoom"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={zoomOut}
          className="flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/4 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Afastar zoom"
        >
          <ZoomOut className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={resetCamera}
          className="flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/4 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Centralizar câmera"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      {/* Dica do Rodapé com Instruções Claras */}
      <div className="pointer-events-none absolute bottom-4 left-6 z-10 flex items-center gap-2 rounded-lg border border-white/10 bg-planner-panel/95 px-3.5 py-2 text-caption text-zinc-300 shadow-xl backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-brand-gold-muted" />
        <span>
          <strong>Clique e arraste</strong> o equipamento para mover •{" "}
          <strong>Botão direito</strong> para rotacionar a câmera
        </span>
      </div>
    </div>
  );
}
