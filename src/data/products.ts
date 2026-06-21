import type { Product } from "@/types/product";

/**
 * Catálogo mestre de produtos.
 *
 * Convenção de imagens: `/assets/products/{id}.avif` (ou .webp).
 * Ao adicionar um novo produto, coloque o arquivo de imagem em `public/assets/products/`
 * e defina `image` com o caminho correspondente. Use `placeholder.svg` como fallback.
 *
 * O campo `slug` é derivado automaticamente de modelCode + name para rotas amigáveis.
 */

interface RawProduct extends Omit<Product, "slug"> {
  slug?: string;
}

const rawProducts: RawProduct[] = [
  {
    "id": "1",
    "modelCode": "61A13A-1",
    "name": "Low Row",
    "slug": "61a13a-1-low-row",
    "description": "YR Fitness 61A13A Low Row is designed for effective back muscle training with a straight handle grip for natural pulling.",
    "detailSections": [
      {
        "title": "Strength Training with Control and Comfort",
        "bullets": [
          "Straight Handle Configuration: Encourages proper pulling mechanics and a centered grip",
          "Track-Style Cushioned Seat: Ensures the best positioning of the user for maximum muscle activation",
          "Load-Bearing Design: Suitable for both beginners and experienced lifters",
          "Foam Pad Ergonomics: Targeted contact leads to greater performance-oriented training"
        ]
      },
      {
        "title": "Heavy-Duty Frame and Structural Integrity",
        "bullets": [
          "Main Frame: 50 × 100 × 3mm oval tube, 50 × 120 × 3mm flat oval tube",
          "Foot Tube: Anti-Friction Bearing 6203 2RS 4 pieces, Bearing 6003 ZZ 4 pieces",
          "Anti-Fatigue Mat: Thick Rubber construction, custom colored",
          "Materials: Q235 mild steel with chrome-plated connectors for durability"
        ]
      },
      {
        "title": "Comfort and Safety Features",
        "bullets": [
          "Upholstery: High-density foam with machine-press PU surface",
          "Guided Sleeve: Weight Sleeve (50.8mm) with pin loader mechanism, stainless and machine integrity",
          "Cable Coating: Nylon inner casing keeps the cable so natural feel and maintenance"
        ]
      },
      {
        "title": "Reliable Operation and Long-Lasting Performance",
        "bullets": [
          "Pulley System: CNC-machined 90mm with high-quality bearings",
          "Cable Specifications: 6.35 wire diameter, polyethylene-coated, rated 900kg breaking load capacity (1,950 lbs)",
          "Aircraft Full-Form ABS-reinforced plastic shells over Shield Corners and more parts"
        ]
      }
    ],
    "image": "/assets/products/1/1.avif",
    "series": "61A Racing",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "146 kg"
      },
      {
        "label": "G.W.",
        "value": "171 kg"
      },
      {
        "label": "Packing Size",
        "value": "1180 × 610 × 1450 mm"
      },
      {
        "label": "Weight Stack",
        "value": "80 kg / 176 lbs"
      }
    ]
  },
  {
    "id": "2",
    "modelCode": "G2K28",
    "name": "45-Degree Leg Press Machine with Linear Bearings",
    "slug": "g2k28-45-degree-leg-press-machine-with-linear-bearings",
    "description": "The YR Fitness G2K28 45-Degree Leg Press Machine is designed to strengthen your legs with unmatched smoothness and stability.",
    "detailSections": [
      {
        "title": "Precision Linear Bearing System",
        "bullets": [
          "Industrial-grade linear bearings for ultra-smooth carriage travel",
          "45-degree angled platform reduces spinal compression",
          "Heavy-duty sled rated for 500kg+ working loads",
          "Dual safety catches with quick-release mechanism"
        ]
      },
      {
        "title": "Ergonomic Platform Design",
        "bullets": [
          "Extra-wide foot platform with anti-slip diamond tread surface",
          "Multiple foot position zones for quad, glute, and hamstring targeting",
          "12mm thick steel platform for maximum rigidity under load",
          "Adjustable back rest with lumbar support padding"
        ]
      }
    ],
    "image": "/assets/products/1/2.avif",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "285 kg"
      },
      {
        "label": "G.W.",
        "value": "320 kg"
      },
      {
        "label": "Packing Size",
        "value": "2200 × 1100 × 1750 mm"
      },
      {
        "label": "Max Load",
        "value": "500 kg"
      }
    ]
  },
  {
    "id": "3",
    "modelCode": "G2J28",
    "name": "45° Linear Motion Hack Squat",
    "slug": "g2j28-45-linear-motion-hack-squat",
    "description": "The YR Fitness G2J28 45° Linear Motion Hack Squat is designed to strengthen your lower body with maximum efficiency.",
    "detailSections": [
      {
        "title": "Linear Motion Hack Squat Mechanics",
        "bullets": [
          "45-degree fixed path ensures consistent squat mechanics",
          "Linear bearings eliminate friction for smooth repetitions",
          "Shoulder pads with thick foam cushioning for comfort under load",
          "Rotating foot platform for calf raise functionality"
        ]
      },
      {
        "title": "Safety and Build Quality",
        "bullets": [
          "Dual safety lockout bars at multiple height settings",
          "50 × 100 × 3mm heavy-gauge steel construction",
          "Weight storage horns for convenient plate organization",
          "Anti-slip foot surface with raised edge guards"
        ]
      }
    ],
    "image": "/assets/products/1/3.avif",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "260 kg"
      },
      {
        "label": "G.W.",
        "value": "290 kg"
      },
      {
        "label": "Packing Size",
        "value": "2100 × 1050 × 1650 mm"
      },
      {
        "label": "Max Load",
        "value": "450 kg"
      }
    ]
  },
  {
    "id": "4",
    "modelCode": "G2060",
    "name": "Power Smith System Seated Pull Back",
    "slug": "g2060-power-smith-system-seated-pull-back",
    "description": "The YR Fitness G2060 Power Smith System Seated Pull Back is designed to strengthen your mid-back with exceptional stability and controlled movement.",
    "detailSections": [
      {
        "title": "Smith System Guided Pull Back",
        "bullets": [
          "Guided bar path ensures precise vertical movement",
          "Counter-balanced starting weight for beginners",
          "Multi-grip handle options for varied back targeting",
          "Integrated plate storage for convenience"
        ]
      }
    ],
    "image": "/assets/products/1/4.avif",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "310 kg"
      },
      {
        "label": "G.W.",
        "value": "350 kg"
      },
      {
        "label": "Packing Size",
        "value": "2200 × 1500 × 2250 mm"
      },
      {
        "label": "Max Load",
        "value": "300 kg"
      }
    ]
  },
  {
    "id": "5",
    "modelCode": "G2061",
    "name": "Power Smith System Bent-Over Row",
    "slug": "g2061-power-smith-system-bent-over-row",
    "description": "The YR Fitness G2061 Power Smith System Bent-Over Row is designed to strengthen your back with precision and control.",
    "detailSections": [
      {
        "title": "Bent-Over Row on Smith Rails",
        "bullets": [
          "Fixed bar path reduces stabilizer demand for heavier loading",
          "Angled foot plate for optimal bent-over position",
          "Safety hooks at multiple heights",
          "Compatible with Olympic plates"
        ]
      }
    ],
    "image": "/assets/products/1/5.avif",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "305 kg"
      },
      {
        "label": "G.W.",
        "value": "345 kg"
      },
      {
        "label": "Packing Size",
        "value": "2200 × 1500 × 2250 mm"
      },
      {
        "label": "Max Load",
        "value": "300 kg"
      }
    ]
  },
  {
    "id": "6",
    "modelCode": "G2A13",
    "name": "Power Smith Flat/Decline Bench Press",
    "slug": "g2a13-power-smith-flat-decline-bench-press",
    "description": "The YR Fitness G2A13 Power Smith Flat/Decline Bench Press is designed to strengthen your chest with precision and stability.",
    "detailSections": [
      {
        "title": "Multi-Angle Press Station",
        "bullets": [
          "Quick adjustment between flat and decline positions",
          "Smith rail guides for consistent bar path",
          "Wide bench pad for shoulder blade retraction",
          "Adjustable safety stops at multiple heights"
        ]
      }
    ],
    "image": "/assets/products/1/6.avif",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "280 kg"
      },
      {
        "label": "G.W.",
        "value": "315 kg"
      },
      {
        "label": "Packing Size",
        "value": "2100 × 1400 × 2100 mm"
      },
      {
        "label": "Max Load",
        "value": "250 kg"
      }
    ]
  },
  {
    "id": "7",
    "modelCode": "C1A33",
    "name": "Smith Machine",
    "slug": "c1a33-smith-machine",
    "description": "The YR Fitness C1A33 Smith Machine is designed to deliver a safe and controlled weightlifting experience. Featuring a guided barbell track.",
    "detailSections": [
      {
        "title": "Guided Barbell System",
        "bullets": [
          "Precision linear bearings on steel guide rods",
          "Counter-balanced barbell for reduced starting weight",
          "Rotating safety hooks with quick-lock mechanism",
          "Band pegs for accommodating resistance"
        ]
      }
    ],
    "image": "/assets/products/1/7.avif",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "320 kg"
      },
      {
        "label": "G.W.",
        "value": "360 kg"
      },
      {
        "label": "Packing Size",
        "value": "2200 × 1600 × 2350 mm"
      },
      {
        "label": "Max Load",
        "value": "400 kg"
      }
    ]
  },
  {
    "id": "8",
    "modelCode": "G2048",
    "name": "Squat Rack",
    "slug": "g2048-squat-rack",
    "description": "The YR Fitness G2048 Squat Rack is designed to support heavy lifting with maximum stability and safety. Its 8mm thick steel frame and robust base ensure premium performance.",
    "detailSections": [
      {
        "title": "Heavy-Duty Squat Station",
        "bullets": [
          "8mm thick steel uprights for maximum rigidity",
          "J-hooks with UHMW plastic lining to protect barbell knurling",
          "Adjustable safety spotter arms with positive lock pins",
          "Pull-up bar and band pegs included"
        ]
      }
    ],
    "image": "/assets/products/1/8.avif",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Back",
      "Full Body"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "195 kg"
      },
      {
        "label": "G.W.",
        "value": "220 kg"
      },
      {
        "label": "Packing Size",
        "value": "1600 × 1400 × 2300 mm"
      },
      {
        "label": "Max Load",
        "value": "500 kg"
      }
    ]
  },
  {
    "id": "9",
    "modelCode": "G2D32",
    "name": "3D Hip Thruster",
    "slug": "g2d32-3d-hip-thruster",
    "description": "Highly adjustable hip thrust mechanics for tailored glute and hamstring training.",
    "detailSections": [
      {
        "title": "3D Adjustable Hip Thrust",
        "bullets": [
          "Multi-angle adjustment for targeted glute activation",
          "Padded hip belt for comfortable heavy loading",
          "Foot platform with anti-slip surface",
          "Band pegs for accommodating resistance training"
        ]
      }
    ],
    "image": "/assets/products/1/9.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Hip",
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "118 kg"
      },
      {
        "label": "G.W.",
        "value": "140 kg"
      },
      {
        "label": "Packing Size",
        "value": "1750 × 850 × 1200 mm"
      },
      {
        "label": "Max Load",
        "value": "300 kg"
      }
    ]
  },
  {
    "id": "10",
    "modelCode": "G2039",
    "name": "Pull Over",
    "description": "YR Fitness G2039 delivers effective lat and upper back training through a stable, ergonomic pull-over design—ideal for improving strength, posture, and upper-body conditioning.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness G2039 delivers effective lat and upper back training through a stable, ergonomic pull-over design—ideal for improving strength, posture, and upper-body conditioning."
        ]
      }
    ],
    "image": "/assets/products/2/1.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "130kg"
      },
      {
        "label": "G.W",
        "value": "169kg"
      },
      {
        "label": "Installation Size",
        "value": "1220*1160*1500mm"
      }
    ]
  },
  {
    "id": "11",
    "modelCode": "G2A38",
    "name": "Plated Loaded Check and Shoulder Combo",
    "description": "YR Fitness G2A38 is a versatile chest and shoulder training solution that offers ergonomic support, dual-position flexibility, and customizable resistance for well-rounded upper body development.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness G2A38 is a versatile chest and shoulder training solution that offers ergonomic support, dual-position flexibility, and customizable resistance for well-rounded upper body development."
        ]
      }
    ],
    "image": "/assets/products/2/2.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Shoulder",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "138kg"
      },
      {
        "label": "G.W",
        "value": "185kg"
      },
      {
        "label": "Installation Size",
        "value": "1920*808*1750mm"
      }
    ]
  },
  {
    "id": "12",
    "modelCode": "82B20",
    "name": "Standing Belt-Style Squat Trainer",
    "description": "YR Fitness 82B20 delivers an effective and safer squat experience through its belt-driven resistance and ergonomic standing design—perfect for building lower body strength with reduced joint stress.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82B20 delivers an effective and safer squat experience through its belt-driven resistance and ergonomic standing design—perfect for building lower body strength with reduced joint stress."
        ]
      }
    ],
    "image": "/assets/products/2/3.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "168kg"
      },
      {
        "label": "G.W",
        "value": "222kg"
      },
      {
        "label": "Installation Size",
        "value": "2150*1170*1500mm"
      }
    ]
  },
  {
    "id": "13",
    "modelCode": "82037G",
    "name": "Pull Up Multifunctional Trainer",
    "description": "YR Fitness 82037G offers a strong, adaptable platform for building upper body strength through a range of essential functional movements—ideal for all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82037G offers a strong, adaptable platform for building upper body strength through a range of essential functional movements—ideal for all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/2/4.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Back"
    ]
  },
  {
    "id": "14",
    "modelCode": "82032A",
    "name": "Hip Thrust Machine",
    "description": "YR Fitness 82032A delivers consistent, glute-focused hip thrusts with ergonomic design and adjustable comfort—ideal for strength, shaping, and performance training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82032A delivers consistent, glute-focused hip thrusts with ergonomic design and adjustable comfort—ideal for strength, shaping, and performance training."
        ]
      }
    ],
    "image": "/assets/products/2/5.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Hip"
    ]
  },
  {
    "id": "15",
    "modelCode": "82A20",
    "name": "Standing Squat Trainer",
    "description": "YR Fitness 82A20 provides a stable and effective squatting platform for developing lower-body strength, making it a reliable choice for functional and strength-focused training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82A20 provides a stable and effective squatting platform for developing lower-body strength, making it a reliable choice for functional and strength-focused training."
        ]
      }
    ],
    "image": "/assets/products/2/6.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "194kgs"
      },
      {
        "label": "G.W",
        "value": "244kgs"
      },
      {
        "label": "Installation Size",
        "value": ": 1700*1100*620mm"
      }
    ]
  },
  {
    "id": "16",
    "modelCode": "F2001",
    "name": "4 Station Multi Jungle",
    "description": "YR Fitness 4 Station Multi Jungle F2001 is a powerful training system that lets up to four people work out at once. With flexible cable movements and a strong build, it supports a wide range of strength exercises for group or individual training in any gym setting.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 4 Station Multi Jungle F2001 is a powerful training system that lets up to four people work out at once. With flexible cable movements and a strong build, it supports a wide range of strength exercises for group or individual training in any gym setting."
        ]
      }
    ],
    "image": "/assets/products/2/7.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "17",
    "modelCode": "G2050",
    "name": "Power Rack",
    "description": "YR Fitness Power Rack G2050 is a heavy-duty training station designed for safe and effective strength workouts. Perfect for squats, presses, and other barbell exercises, it offers strong construction, adjustable features, and plenty of space to support serious lifters and professional gyms.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Power Rack G2050 is a heavy-duty training station designed for safe and effective strength workouts. Perfect for squats, presses, and other barbell exercises, it offers strong construction, adjustable features, and plenty of space to support serious lifters and professional gyms."
        ]
      }
    ],
    "image": "/assets/products/2/8.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "18",
    "modelCode": "F2M01",
    "name": "4 Station Multi Jungle",
    "description": "YR Fitness 4 Station Multi Jungle F2M01 is a space-saving machine that lets up to four people train at once. With smooth motion, strong construction, and multiple workout options, it’s perfect for full-body training in busy gyms and fitness facilities.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 4 Station Multi Jungle F2M01 is a space-saving machine that lets up to four people train at once. With smooth motion, strong construction, and multiple workout options, it’s perfect for full-body training in busy gyms and fitness facilities."
        ]
      }
    ],
    "image": "/assets/products/2/9.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "19",
    "modelCode": "F2004",
    "name": "14 Station Multi Jungle",
    "description": "YR Fitness 14 Station Multi Jungle F2004 is a powerful group training system that supports a wide range of strength exercises. With customizable stations, smooth cable motion, and strong construction, it’s ideal for busy gyms looking to offer variety and efficiency in one setup.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 14 Station Multi Jungle F2004 is a powerful group training system that supports a wide range of strength exercises. With customizable stations, smooth cable motion, and strong construction, it’s ideal for busy gyms looking to offer variety and efficiency in one setup."
        ]
      }
    ],
    "image": "/assets/products/3/1.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "20",
    "modelCode": "F2003",
    "name": "9 Station Multi Jungle",
    "description": "YR Fitness 9 Station Multi Jungle F2003 is a powerful group training machine that supports up to four users at once. With customizable stations and smooth cable motion, it offers endless strength training options for building balance, power, and total-body fitness in busy gym environments.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 9 Station Multi Jungle F2003 is a powerful group training machine that supports up to four users at once. With customizable stations and smooth cable motion, it offers endless strength training options for building balance, power, and total-body fitness in busy gym environments."
        ]
      }
    ],
    "image": "/assets/products/3/2.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "21",
    "modelCode": "G2049",
    "name": "Power Rack",
    "description": "YR Fitness Power Rack G2049 is a strong, stable training station built for heavy lifting. Made with high-quality steel and secure bolt connections, it’s perfect for squats, bench presses, and more—ideal for serious strength training in professional gyms.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Power Rack G2049 is a strong, stable training station built for heavy lifting. Made with high-quality steel and secure bolt connections, it’s perfect for squats, bench presses, and more—ideal for serious strength training in professional gyms."
        ]
      }
    ],
    "image": "/assets/products/3/3.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "22",
    "modelCode": "F2002",
    "name": "6 Station Multi Jungle",
    "description": "YR Fitness 6 Station Multi Jungle F2002 is a versatile training system designed for group workouts. It supports up to four users at once and offers endless exercise options with smooth cable motion, helping build strength, balance, and coordination through customizable movement paths.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 6 Station Multi Jungle F2002 is a versatile training system designed for group workouts. It supports up to four users at once and offers endless exercise options with smooth cable motion, helping build strength, balance, and coordination through customizable movement paths."
        ]
      }
    ],
    "image": "/assets/products/3/4.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "23",
    "modelCode": "61A13A",
    "name": "Low Row",
    "description": "YR Fitness 61A13A Low Row is designed for effective back muscle training with a straight handle grip for natural pulling motion. Its smooth operation and stable build make it a must-have for strength development and safe, controlled workouts.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A13A Low Row is designed for effective back muscle training with a straight handle grip for natural pulling motion. Its smooth operation and stable build make it a must-have for strength development and safe, controlled workouts."
        ]
      }
    ],
    "image": "/assets/products/3/5.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "209kg"
      },
      {
        "label": "G.W",
        "value": "218kg"
      },
      {
        "label": "Installation Size",
        "value": "1180*1380*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "24",
    "modelCode": "C4063",
    "name": "Wrist Trainer",
    "description": "YR Fitness C4063 Wrist Trainer is a uniquely designed machine for wrist rotation, flexion, and grip training. It targets wrist flexors and forearm muscles, helping users build strength, control, and stability with safe, adjustable, and efficient movement.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C4063 Wrist Trainer is a uniquely designed machine for wrist rotation, flexion, and grip training. It targets wrist flexors and forearm muscles, helping users build strength, control, and stability with safe, adjustable, and efficient movement."
        ]
      }
    ],
    "image": "/assets/products/3/6.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": ": 144.5kgs"
      },
      {
        "label": "G.W",
        "value": ": 220kgs"
      },
      {
        "label": "Installation Size",
        "value": ": 1550*850*1722mm"
      },
      {
        "label": "Weight Stacks",
        "value": ": 60kg-12pcs"
      }
    ]
  },
  {
    "id": "25",
    "modelCode": "C4A10",
    "name": "Converging Independent Biceps",
    "description": "YR Fitness C4A10 Converging Independent Biceps delivers smooth, controlled curls with independent arms, dual-grip handles, and adaptive elbow and arm support. Its ergonomic design ensures balanced, comfortable biceps training for users of all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C4A10 Converging Independent Biceps delivers smooth, controlled curls with independent arms, dual-grip handles, and adaptive elbow and arm support. Its ergonomic design ensures balanced, comfortable biceps training for users of all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/3/7.avif",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": ": 150.5kgs"
      },
      {
        "label": "G.W",
        "value": ": 235kgs"
      },
      {
        "label": "Installation Size",
        "value": ": 1200*1590*1640mm"
      },
      {
        "label": "Weight Stacks",
        "value": ": 70kg-14pcs"
      }
    ]
  },
  {
    "id": "26",
    "modelCode": "C4A15",
    "name": "Converging Independent Lat Pull Down",
    "description": "YR Fitness C4A15 Converging Independent Lat Pull Down features single-arm movement, a natural pull path, and rotating handles for multi-angle training. It enhances muscle balance, lat activation, and joint-friendly motion in a fully adjustable, high-performance design.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C4A15 Converging Independent Lat Pull Down features single-arm movement, a natural pull path, and rotating handles for multi-angle training. It enhances muscle balance, lat activation, and joint-friendly motion in a fully adjustable, high-performance design."
        ]
      }
    ],
    "image": "/assets/products/3/8.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm",
      "Back"
    ]
  },
  {
    "id": "27",
    "modelCode": "C4A01",
    "name": "Converging Independent Shoulder Press",
    "description": "YR Fitness C4A01 Converging Independent Shoulder Press features a natural arm path and independent motion for balanced training. With an adjustable seat and backrest, it supports both single-arm and dual-arm workouts in total comfort and control.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C4A01 Converging Independent Shoulder Press features a natural arm path and independent motion for balanced training. With an adjustable seat and backrest, it supports both single-arm and dual-arm workouts in total comfort and control."
        ]
      }
    ],
    "image": "/assets/products/3/9.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Shoulder"
    ]
  },
  {
    "id": "28",
    "modelCode": "C4A05",
    "name": "Converging Independent Chest Press",
    "description": "YR Fitness C4A05 Converging Independent Chest Press supports balanced chest development with independently moving arms and a converging motion path. Its adjustable backrest ensures proper fit and posture, delivering a safe, joint-friendly workout for all users.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C4A05 Converging Independent Chest Press supports balanced chest development with independently moving arms and a converging motion path. Its adjustable backrest ensures proper fit and posture, delivering a safe, joint-friendly workout for all users."
        ]
      }
    ],
    "image": "/assets/products/4/1.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Chest"
    ]
  },
  {
    "id": "29",
    "modelCode": "C4A14",
    "name": "Diverging Mid Row",
    "description": "YR Fitness C4A14 Diverging Mid Row features dual independent arms for natural movement and balanced back training. It targets the lats, mid-back, and rear shoulders with smooth resistance, offering ergonomic comfort and stability for all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C4A14 Diverging Mid Row features dual independent arms for natural movement and balanced back training. It targets the lats, mid-back, and rear shoulders with smooth resistance, offering ergonomic comfort and stability for all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/4/2.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": ": 210kgs"
      },
      {
        "label": "G.W",
        "value": ": 221kgs"
      },
      {
        "label": "Installation Size",
        "value": ": 720*1900*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": ": 80kg-14pcs"
      }
    ]
  },
  {
    "id": "30",
    "modelCode": "C4A11",
    "name": "Diverging Tricep Extension",
    "description": "YR Fitness C4A11 Diverging Tricep Extension features independent arms and a rotating elbow pad for smooth, joint-friendly movement. With adjustable support and durable design, it delivers precise and balanced tricep training for users of all levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C4A11 Diverging Tricep Extension features independent arms and a rotating elbow pad for smooth, joint-friendly movement. With adjustable support and durable design, it delivers precise and balanced tricep training for users of all levels."
        ]
      }
    ],
    "image": "/assets/products/4/3.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": ": 173kgs"
      },
      {
        "label": "G.W",
        "value": ": 253kgs"
      },
      {
        "label": "Installation Size",
        "value": ": 1560*1480*1640mm"
      },
      {
        "label": "Weight Stacks",
        "value": ": 70kg-14pcs"
      }
    ]
  },
  {
    "id": "31",
    "modelCode": "C4F32D",
    "name": "Single Functional Trainer",
    "description": "YR Fitness C4F32D Single Functional Trainer offers a compact design with extended height for greater movement range. It&#8217;s ideal for small spaces, providing smooth adjustments and versatile workouts for strength, rehab, and total body training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C4F32D Single Functional Trainer offers a compact design with extended height for greater movement range. It&#8217;s ideal for small spaces, providing smooth adjustments and versatile workouts for strength, rehab, and total body training."
        ]
      }
    ],
    "image": "/assets/products/4/4.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": ": 190kgs"
      },
      {
        "label": "G.W",
        "value": ": 240kgs"
      },
      {
        "label": "Installation Size",
        "value": ": 360*729*2415mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kgs-14pcs"
      }
    ]
  },
  {
    "id": "32",
    "modelCode": "C432B",
    "name": "Functional Trainer",
    "description": "YR Fitness C432B Functional Trainer offers 60+ exercises in one machine with smooth adjustments and a wide range of motion. Its dual pulley design and 2:1 ratio provide versatile, performance-driven training for total body strength and conditioning.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C432B Functional Trainer offers 60+ exercises in one machine with smooth adjustments and a wide range of motion. Its dual pulley design and 2:1 ratio provide versatile, performance-driven training for total body strength and conditioning."
        ]
      }
    ],
    "image": "/assets/products/4/5.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Shoulder",
      "Full Body"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": ": 333kgs"
      },
      {
        "label": "G.W",
        "value": ": 384kgs"
      },
      {
        "label": "Installation Size",
        "value": ": 1680*940*2280mm"
      },
      {
        "label": "Weight Stacks",
        "value": ": 70kg-14pcs"
      }
    ]
  },
  {
    "id": "33",
    "modelCode": "C432",
    "name": "Adjustable Crossover",
    "description": "YR Fitness C432 Adjustable Crossover features a smooth aluminum slide bar and elevated frame for greater range and flexibility. Its extended cable length and easy adjustments make it ideal for a wide variety of upper and lower body exercises.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C432 Adjustable Crossover features a smooth aluminum slide bar and elevated frame for greater range and flexibility. Its extended cable length and easy adjustments make it ideal for a wide variety of upper and lower body exercises."
        ]
      }
    ],
    "image": "/assets/products/4/6.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": ": 385kgs"
      },
      {
        "label": "G.W",
        "value": ": 433kgs"
      },
      {
        "label": "Installation Size",
        "value": ": 3940*720*2415mm"
      },
      {
        "label": "Weight Stacks",
        "value": ": 70kg-14pcs"
      }
    ]
  },
  {
    "id": "34",
    "modelCode": "C425",
    "name": "Seated Leg Curl",
    "description": "YR Fitness C425 Seated Leg Curl is designed to strengthen hamstrings with comfort and control. It features adjustable settings, a supportive thigh pad, and smooth movement, making it ideal for users of all levels to train safely and effectively.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C425 Seated Leg Curl is designed to strengthen hamstrings with comfort and control. It features adjustable settings, a supportive thigh pad, and smooth movement, making it ideal for users of all levels to train safely and effectively."
        ]
      }
    ],
    "image": "/assets/products/4/7.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": ": 232kgs"
      },
      {
        "label": "G.W",
        "value": ": 252kgs"
      },
      {
        "label": "Installation Size",
        "value": ": 1350*1200*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": ": 80kg-16pcs"
      }
    ]
  },
  {
    "id": "35",
    "modelCode": "61A53AH",
    "name": "15 Pairs Dumbbell Rack",
    "description": "YR Fitness 15 Pairs Dumbbell Rack 61A53AH is a strong three-tier rack designed to hold up to 15 pairs of hex dumbbells. Built with durable steel, it keeps your gym organized and makes it easy to access weights during workouts.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 15 Pairs Dumbbell Rack 61A53AH is a strong three-tier rack designed to hold up to 15 pairs of hex dumbbells. Built with durable steel, it keeps your gym organized and makes it easy to access weights during workouts."
        ]
      }
    ],
    "image": "/assets/products/4/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "36",
    "modelCode": "61A53H",
    "name": "10 Pairs Dumbbell Rack",
    "description": "YR Fitness 10 Pairs Dumbbell Rack 61A53H is a strong, two-tier rack designed to hold up to 10 pairs of hex dumbbells. Built with durable steel, it keeps your weights organized and accessible—perfect for any gym looking to save space and stay tidy.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 10 Pairs Dumbbell Rack 61A53H is a strong, two-tier rack designed to hold up to 10 pairs of hex dumbbells. Built with durable steel, it keeps your weights organized and accessible—perfect for any gym looking to save space and stay tidy."
        ]
      }
    ],
    "image": "/assets/products/4/9.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "37",
    "modelCode": "61A63",
    "name": "Wrist Grip Trainer",
    "description": "YR Fitness 61A63 Wrist Grip Trainer delivers focused wrist and forearm strengthening through wrist rotation, flexion, and grip exercises. Its pin-loaded design and ergonomic structure make it ideal for athletes and users seeking improved wrist stability and control.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A63 Wrist Grip Trainer delivers focused wrist and forearm strengthening through wrist rotation, flexion, and grip exercises. Its pin-loaded design and ergonomic structure make it ideal for athletes and users seeking improved wrist stability and control."
        ]
      }
    ],
    "image": "/assets/products/5/1.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "162kgs"
      },
      {
        "label": "G.W",
        "value": "175kgs"
      },
      {
        "label": "Installation Size",
        "value": "1550*850*1722mm"
      },
      {
        "label": "Weight Stacks",
        "value": "60kg-20pcs"
      }
    ]
  },
  {
    "id": "38",
    "modelCode": "61A58",
    "name": "Hip Thruster",
    "description": "YR Fitness 61A58 Hip Thruster delivers effective glute workouts with a dynamic backrest, adjustable roller, and foot pedals. Its ergonomic design ensures user comfort, stability, and adaptability for all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A58 Hip Thruster delivers effective glute workouts with a dynamic backrest, adjustable roller, and foot pedals. Its ergonomic design ensures user comfort, stability, and adaptability for all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/5/2.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "205kgs"
      },
      {
        "label": "G.W",
        "value": "215kgs"
      },
      {
        "label": "Installation Size",
        "value": "1670*1129*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "60kg-12pcs"
      }
    ]
  },
  {
    "id": "39",
    "modelCode": "61A28A",
    "name": "Seated Leg Press",
    "description": "YR Fitness 61A28A Seated Leg Press features an inclined adjustable seat, fixed footplate, and sliding motion to promote safe and effective lower-body workouts. Its ergonomic design ensures user comfort and supports all levels of leg training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A28A Seated Leg Press features an inclined adjustable seat, fixed footplate, and sliding motion to promote safe and effective lower-body workouts. Its ergonomic design ensures user comfort and supports all levels of leg training."
        ]
      }
    ],
    "image": "/assets/products/5/3.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "278kgs"
      },
      {
        "label": "G.W",
        "value": "290kgs"
      },
      {
        "label": "Installation Size",
        "value": "1625*1040*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "100kg-20pcs"
      }
    ]
  },
  {
    "id": "40",
    "modelCode": "82047",
    "name": "Pro Biceps Curl",
    "description": "YR Fitness 82047 delivers customizable biceps training with a dual-pad, adjustable design—perfect for isolating the arms through multiple movement variations.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82047 delivers customizable biceps training with a dual-pad, adjustable design—perfect for isolating the arms through multiple movement variations."
        ]
      }
    ],
    "image": "/assets/products/5/4.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "Net Weight",
        "value": ": 60kg"
      },
      {
        "label": "Gross Weight",
        "value": ": 90kg"
      }
    ]
  },
  {
    "id": "41",
    "modelCode": "82043",
    "name": "Pendulum Squat",
    "description": "YR Fitness 82043 provides a smooth and effective squat alternative with enhanced safety and ergonomic control—ideal for building lower-body strength with reduced joint impact.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82043 provides a smooth and effective squat alternative with enhanced safety and ergonomic control—ideal for building lower-body strength with reduced joint impact."
        ]
      }
    ],
    "image": "/assets/products/5/5.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "239kg"
      },
      {
        "label": "G.W",
        "value": "301kg"
      },
      {
        "label": "Installation Size",
        "value": "2760*1400*1620mm"
      }
    ]
  },
  {
    "id": "42",
    "modelCode": "82042",
    "name": "90 Degree Leg Press",
    "description": "YR Fitness 82042 provides safe, high-impact leg training with vertical mechanics that promote lower-body growth while reducing back stress—perfect for both beginners and advanced athletes.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82042 provides safe, high-impact leg training with vertical mechanics that promote lower-body growth while reducing back stress—perfect for both beginners and advanced athletes."
        ]
      }
    ],
    "image": "/assets/products/5/6.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "238kg"
      },
      {
        "label": "G.W",
        "value": "295kg"
      },
      {
        "label": "Installation Size",
        "value": "1817*1838*1910mm"
      }
    ]
  },
  {
    "id": "43",
    "modelCode": "82041",
    "name": "Pull Back Machine",
    "description": "YR Fitness 82041 offers multi-angle back training in a stable, plate-loaded format—perfect for users aiming to build upper body strength and enhance postural control.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82041 offers multi-angle back training in a stable, plate-loaded format—perfect for users aiming to build upper body strength and enhance postural control."
        ]
      }
    ],
    "image": "/assets/products/5/7.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "116kg"
      },
      {
        "label": "G.W",
        "value": "164kg"
      },
      {
        "label": "Installation Size",
        "value": "1823*1394*1330mm"
      }
    ]
  },
  {
    "id": "44",
    "modelCode": "82039",
    "name": "Triceps Machine",
    "description": "YR Fitness 82039 delivers focused triceps training with ergonomic support and adjustable resistance—perfect for building arm strength with safe, effective form.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82039 delivers focused triceps training with ergonomic support and adjustable resistance—perfect for building arm strength with safe, effective form."
        ]
      }
    ],
    "image": "/assets/products/5/8.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "113kg"
      },
      {
        "label": "G.W",
        "value": "153kg"
      },
      {
        "label": "Installation Size",
        "value": "1750*1165*1122mm"
      }
    ]
  },
  {
    "id": "45",
    "modelCode": "82038",
    "name": "Middle Chest Flight Machine",
    "description": "YR Fitness 82038 provides effective mid-chest isolation with smooth flye mechanics and adjustable resistance—ideal for sculpting a balanced and defined upper body.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82038 provides effective mid-chest isolation with smooth flye mechanics and adjustable resistance—ideal for sculpting a balanced and defined upper body."
        ]
      }
    ],
    "image": "/assets/products/5/9.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "75kg"
      },
      {
        "label": "G.W",
        "value": "119kg"
      },
      {
        "label": "Installation Size",
        "value": "1350*1617*1086mm"
      }
    ]
  },
  {
    "id": "46",
    "modelCode": "82037",
    "name": "Lat Pull-Down Circular",
    "description": "YR Fitness 82037 offers a joint-friendly, circular lat pull-down movement with customizable resistance—ideal for building a strong, well-defined back with reduced strain.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82037 offers a joint-friendly, circular lat pull-down movement with customizable resistance—ideal for building a strong, well-defined back with reduced strain."
        ]
      }
    ],
    "image": "/assets/products/6/1.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "123kg"
      },
      {
        "label": "G.W",
        "value": "174kg"
      },
      {
        "label": "Installation Size",
        "value": "1234*1608*1960mm"
      }
    ]
  },
  {
    "id": "47",
    "modelCode": "82036",
    "name": "Ab Trainer",
    "description": "YR Fitness 82036 delivers safe, efficient, and effective core training with adjustable resistance and ergonomic support—ideal for users focused on strengthening and sculpting their abs.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82036 delivers safe, efficient, and effective core training with adjustable resistance and ergonomic support—ideal for users focused on strengthening and sculpting their abs."
        ]
      }
    ],
    "image": "/assets/products/6/2.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "108kg"
      },
      {
        "label": "G.W",
        "value": "158kg"
      },
      {
        "label": "Installation Size",
        "value": "1650*1410*900mm"
      }
    ]
  },
  {
    "id": "48",
    "modelCode": "82035A",
    "name": "35 Degree Hack Squat",
    "description": "YR Fitness 82035A offers a refined angle and added resistance options for advanced leg development—ideal for strength athletes and functional fitness routines alike.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82035A offers a refined angle and added resistance options for advanced leg development—ideal for strength athletes and functional fitness routines alike."
        ]
      }
    ],
    "image": "/assets/products/6/3.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "220kg"
      },
      {
        "label": "G.W",
        "value": "282kg"
      },
      {
        "label": "Installation Size",
        "value": "2580*1705*1346mm"
      }
    ]
  },
  {
    "id": "49",
    "modelCode": "82035",
    "name": "45 Degree Hack Squat",
    "description": "YR Fitness 82035 combines a traditional 45-degree squat path with modern resistance options to deliver advanced lower-body training with customizable challenge and ergonomic control.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82035 combines a traditional 45-degree squat path with modern resistance options to deliver advanced lower-body training with customizable challenge and ergonomic control."
        ]
      }
    ],
    "image": "/assets/products/6/4.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "228kg"
      },
      {
        "label": "G.W",
        "value": "276kg"
      },
      {
        "label": "Installation Size",
        "value": "2450*1200*1450mm"
      }
    ]
  },
  {
    "id": "50",
    "modelCode": "82034",
    "name": "Hack Squat & Leg Press",
    "description": "YR Fitness 82034 offers versatility, space efficiency, and total lower-body training with its combined hack squat and leg press functionality—making it a must-have for strength-focused leg workouts.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82034 offers versatility, space efficiency, and total lower-body training with its combined hack squat and leg press functionality—making it a must-have for strength-focused leg workouts."
        ]
      }
    ],
    "image": "/assets/products/6/5.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "85kg"
      },
      {
        "label": "G.W",
        "value": "122kg"
      },
      {
        "label": "Installation Size",
        "value": "2450*1700*1450mm"
      }
    ]
  },
  {
    "id": "51",
    "modelCode": "C4D06",
    "name": "Lat pull down/Low row",
    "description": "YR Fitness Lat Pull Down/Low Row C4D06 is a two-in-one machine that targets upper back and arm muscles through lat pull down and low row exercises. Built with strong materials and smooth motion, it offers comfort, safety, and versatility for effective strength training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Lat Pull Down/Low Row C4D06 is a two-in-one machine that targets upper back and arm muscles through lat pull down and low row exercises. Built with strong materials and smooth motion, it offers comfort, safety, and versatility for effective strength training."
        ]
      }
    ],
    "image": "/assets/products/6/6.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Arm",
      "Back"
    ]
  },
  {
    "id": "52",
    "modelCode": "C4D05",
    "name": "Biceps/Triceps",
    "description": "YR Fitness Standing Biceps and Triceps Trainer C4D05 is built to strengthen and shape your arms through smooth, standing cable exercises. With adjustable pulleys and a strong frame, it offers safe, comfortable workouts for users of all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Standing Biceps and Triceps Trainer C4D05 is built to strengthen and shape your arms through smooth, standing cable exercises. With adjustable pulleys and a strong frame, it offers safe, comfortable workouts for users of all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/6/7.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Arm"
    ]
  },
  {
    "id": "53",
    "modelCode": "C4D04",
    "name": "Biceps/Triceps",
    "description": "YR Fitness Biceps/Triceps Machine C4D04 is a dual-function trainer designed to build upper arm strength by targeting both biceps and triceps. With durable steel construction, smooth motion, and comfortable padding, it’s perfect for safe and effective arm workouts in any professional gym.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Biceps/Triceps Machine C4D04 is a dual-function trainer designed to build upper arm strength by targeting both biceps and triceps. With durable steel construction, smooth motion, and comfortable padding, it’s perfect for safe and effective arm workouts in any professional gym."
        ]
      }
    ],
    "image": "/assets/products/6/8.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Arm"
    ]
  },
  {
    "id": "54",
    "modelCode": "C4D03",
    "name": "Pectoral Fly / Rear Delt",
    "description": "YR Fitness Pectoral Fly/Rear Deltoid C4D03 is a dual-function machine that strengthens the chest and rear shoulder muscles. With rotating grips, smooth motion, and durable design, it offers a safe and comfortable workout for users of all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Pectoral Fly/Rear Deltoid C4D03 is a dual-function machine that strengthens the chest and rear shoulder muscles. With rotating grips, smooth motion, and durable design, it offers a safe and comfortable workout for users of all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/6/9.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Shoulder",
      "Chest",
      "Back"
    ]
  },
  {
    "id": "55",
    "modelCode": "C4D12",
    "name": "Leg Extension/Leg Curl",
    "description": "YR Fitness Leg Extension/Leg Curl C4D12 is a two-in-one machine that targets the front and back of the thighs. Built for comfort and strength, it offers smooth, safe movement for effective lower body workouts, ideal for professional gyms focused on complete leg training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Leg Extension/Leg Curl C4D12 is a two-in-one machine that targets the front and back of the thighs. Built for comfort and strength, it offers smooth, safe movement for effective lower body workouts, ideal for professional gyms focused on complete leg training."
        ]
      }
    ],
    "image": "/assets/products/7/1.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Leg"
    ]
  },
  {
    "id": "56",
    "modelCode": "C4D11",
    "name": "Leg Press/Seated Calf",
    "description": "YR Fitness Leg Press/Seated Calf Machine C4D11 combines two key lower body exercises in one compact design. It targets your legs and calves to build strength and definition, using smooth motion and durable materials for a safe, effective workout experience.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Leg Press/Seated Calf Machine C4D11 combines two key lower body exercises in one compact design. It targets your legs and calves to build strength and definition, using smooth motion and durable materials for a safe, effective workout experience."
        ]
      }
    ],
    "image": "/assets/products/7/2.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Leg"
    ]
  },
  {
    "id": "57",
    "modelCode": "C4D01",
    "name": "Shoulder / Chest Press",
    "description": "YR Fitness Shoulder/Chest Press Combo is a two-in-one machine designed to build upper body strength safely and effectively. With its user-friendly design and durable construction, it&#8217;s perfect for beginners and pros looking to train chest and shoulders in one smooth workout.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Shoulder/Chest Press Combo is a two-in-one machine designed to build upper body strength safely and effectively. With its user-friendly design and durable construction, it&#8217;s perfect for beginners and pros looking to train chest and shoulders in one smooth workout."
        ]
      }
    ],
    "image": "/assets/products/7/3.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Shoulder",
      "Chest"
    ]
  },
  {
    "id": "58",
    "modelCode": "C4D10",
    "name": "Adductor/Abductor",
    "description": "YR Fitness Adductor/Abductor C4D10 is a two-in-one machine that targets inner and outer thigh muscles. With smooth motion, easy adjustments, and durable construction, it offers a comfortable and efficient way to strengthen the lower body in any professional fitness setting.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Adductor/Abductor C4D10 is a two-in-one machine that targets inner and outer thigh muscles. With smooth motion, easy adjustments, and durable construction, it offers a comfortable and efficient way to strengthen the lower body in any professional fitness setting."
        ]
      }
    ],
    "image": "/assets/products/7/4.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Leg",
      "Hip"
    ]
  },
  {
    "id": "59",
    "modelCode": "C4D09",
    "name": "Leg Extension/Lying Leg Curl",
    "description": "YR Fitness Leg Extension and Lying Leg Curl Machine C4D09 helps strengthen and shape your lower body with two key exercises in one machine. It isolates muscles for better results, supports recovery, and offers smooth, comfortable movement for users of all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Leg Extension and Lying Leg Curl Machine C4D09 helps strengthen and shape your lower body with two key exercises in one machine. It isolates muscles for better results, supports recovery, and offers smooth, comfortable movement for users of all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/7/5.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Leg"
    ]
  },
  {
    "id": "60",
    "modelCode": "C4D08",
    "name": "Ab Crunch/Back Extension",
    "description": "YR Fitness Ab Crunch/Back Extension C4D08 is a compact two-in-one machine that targets both abdominal and lower back muscles. Built with strong materials and smooth movement, it’s ideal for effective core training and balanced strength development in any gym or fitness space.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Ab Crunch/Back Extension C4D08 is a compact two-in-one machine that targets both abdominal and lower back muscles. Built with strong materials and smooth movement, it’s ideal for effective core training and balanced strength development in any gym or fitness space."
        ]
      }
    ],
    "image": "/assets/products/7/6.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Abdominal",
      "Back"
    ]
  },
  {
    "id": "61",
    "modelCode": "C4D02",
    "name": "Shoulder / Chest Press",
    "description": "YR Fitness Shoulder/Chest Press C4D02 is a dual-function strength machine designed to build chest, shoulder, and triceps muscles. It features adjustable settings, durable steel construction, and smooth motion ideal for safe, comfortable workouts in any professional gym.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Shoulder/Chest Press C4D02 is a dual-function strength machine designed to build chest, shoulder, and triceps muscles. It features adjustable settings, durable steel construction, and smooth motion ideal for safe, comfortable workouts in any professional gym."
        ]
      }
    ],
    "image": "/assets/products/7/7.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Shoulder",
      "Chest"
    ]
  },
  {
    "id": "62",
    "modelCode": "C4D07",
    "name": "Standing Assisted Chin/Dip",
    "description": "YR Fitness Standing Assisted Dip/Chin-Up Machine C4D07 helps you build upper body strength by supporting your weight during dips and chin-ups. Ideal for beginners, it offers smooth movement, strong construction, and comfortable design to make training safer and easier as you build confidence and strength.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Standing Assisted Dip/Chin-Up Machine C4D07 helps you build upper body strength by supporting your weight during dips and chin-ups. Ideal for beginners, it offers smooth movement, strong construction, and comfortable design to make training safer and easier as you build confidence and strength."
        ]
      }
    ],
    "image": "/assets/products/7/8.webp",
    "series": "C4D Dual Function",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Back"
    ]
  },
  {
    "id": "63",
    "modelCode": "61A11",
    "name": "Triceps Dip",
    "description": "YR Fitness 61A11 Triceps Dip features rotating EZ handles for versatile triceps training. Built for comfort, durability, and performance, it allows multiple grip options and smooth pressing motion for users of all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A11 Triceps Dip features rotating EZ handles for versatile triceps training. Built for comfort, durability, and performance, it allows multiple grip options and smooth pressing motion for users of all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/7/9.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "211kgs"
      },
      {
        "label": "G.W",
        "value": "222kgs"
      },
      {
        "label": "Installation Size",
        "value": "1020*1260*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "64",
    "modelCode": "61A14",
    "name": "Mid Row",
    "description": "YR Fitness 61A14 Mid Row provides smooth, ergonomic back training with rotating handles for natural movement. Ideal for all fitness levels, it supports varied pulling exercises while enhancing muscle engagement and maintaining joint-friendly motion.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A14 Mid Row provides smooth, ergonomic back training with rotating handles for natural movement. Ideal for all fitness levels, it supports varied pulling exercises while enhancing muscle engagement and maintaining joint-friendly motion."
        ]
      }
    ],
    "image": "/assets/products/8/1.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "191kgs"
      },
      {
        "label": "G.W",
        "value": "202kgs"
      },
      {
        "label": "Installation Size",
        "value": "720*1900*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pc"
      }
    ]
  },
  {
    "id": "65",
    "modelCode": "61A15",
    "name": "Lat Pull Down",
    "description": "YR Fitness 61A15 Lat Pull Down is essential for building upper back strength. With adjustable thigh pads and an angled straight bar, it offers a stable and ergonomic pulling experience for safe and effective lat development.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A15 Lat Pull Down is essential for building upper back strength. With adjustable thigh pads and an angled straight bar, it offers a stable and ergonomic pulling experience for safe and effective lat development."
        ]
      }
    ],
    "image": "/assets/products/8/2.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "183kgs"
      },
      {
        "label": "G.W",
        "value": "192kgs"
      },
      {
        "label": "Installation Size",
        "value": "1220*1100*2180mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "66",
    "modelCode": "61A24",
    "name": "Leg Extension",
    "description": "YR Fitness 61A24 Leg Extension strengthens the quadriceps with adjustable start points, a customizable foam roller, and a dual-axis backrest. Its ergonomic, space-optimized design ensures smooth, effective, and user-friendly leg training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A24 Leg Extension strengthens the quadriceps with adjustable start points, a customizable foam roller, and a dual-axis backrest. Its ergonomic, space-optimized design ensures smooth, effective, and user-friendly leg training."
        ]
      }
    ],
    "image": "/assets/products/8/3.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "216kgs"
      },
      {
        "label": "G.W",
        "value": "226kgs"
      },
      {
        "label": "Installation Size",
        "value": "1350*1200*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "67",
    "modelCode": "82017",
    "name": "ISO Lateral Leg Press",
    "description": "YR Fitness 82017 provides independent leg pressing motion for balanced muscle activation, comfort, and joint safety—ideal for improving lower-body performance and correcting asymmetries.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82017 provides independent leg pressing motion for balanced muscle activation, comfort, and joint safety—ideal for improving lower-body performance and correcting asymmetries."
        ]
      }
    ],
    "image": "/assets/products/8/4.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "215kgs"
      },
      {
        "label": "G.W",
        "value": "264kgs"
      },
      {
        "label": "Installation Size",
        "value": "1835*1660*1530mm"
      }
    ]
  },
  {
    "id": "68",
    "modelCode": "82020",
    "name": "Plate Loaded V Squat",
    "description": "YR Fitness 82020 offers a safer and more ergonomic approach to heavy squats with plate-loaded flexibility and lower-body focus, making it a staple for effective leg training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82020 offers a safer and more ergonomic approach to heavy squats with plate-loaded flexibility and lower-body focus, making it a staple for effective leg training."
        ]
      }
    ],
    "image": "/assets/products/8/5.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "193kgs"
      },
      {
        "label": "G.W",
        "value": "258kgs"
      },
      {
        "label": "Installation Size",
        "value": "2470*1130*1650mm"
      }
    ]
  },
  {
    "id": "69",
    "modelCode": "82022",
    "name": "Leg Press",
    "description": "YR Fitness 82022 combines a biomechanically sound pressing path with heavy-duty construction, making it an essential piece for safe and effective leg training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82022 combines a biomechanically sound pressing path with heavy-duty construction, making it an essential piece for safe and effective leg training."
        ]
      }
    ],
    "image": "/assets/products/8/6.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "163kgs"
      },
      {
        "label": "G.W",
        "value": "221kgs"
      },
      {
        "label": "Installation Size",
        "value": "2194*1166*1293mm"
      }
    ]
  },
  {
    "id": "70",
    "modelCode": "6280",
    "name": "4 Station Multi Jungle",
    "description": "YR Fitness 4 Station Multi Jungle F2M01 is a space-saving machine that lets up to 4 people train at once. With smooth motion, strong construction, and multiple workout options, it’s perfect for full-body training in busy gym facilities.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 4 Station Multi Jungle F2M01 is a space-saving machine that lets up to 4 people train at once. With smooth motion, strong construction, and multiple workout options, it’s perfect for full-body training in busy gym facilities."
        ]
      }
    ],
    "image": "/assets/products/8/7.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "71",
    "modelCode": "6280A",
    "name": "6 Station Multi Jungle",
    "description": "YR Fitness 6 Station Multi Jungle 6280A is a versatile machine designed for group training and full-body workouts. It supports up to four users at once and offers countless strength training options with smooth cable motion, durable construction, and comfortable, long-lasting materials.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 6 Station Multi Jungle 6280A is a versatile machine designed for group training and full-body workouts. It supports up to four users at once and offers countless strength training options with smooth cable motion, durable construction, and comfortable, long-lasting materials."
        ]
      }
    ],
    "image": "/assets/products/8/8.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "72",
    "modelCode": "5348",
    "name": "4 Station 8 Function Trainer",
    "description": "YR Fitness 4 Station 8 Function Trainer 5348 is a space-saving, full-body training machine designed for up to four users at once. It includes eight key workout functions, ergonomic design, smooth movement, and durable construction, perfect for commercial gyms focused on efficient, all-in-one strength training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 4 Station 8 Function Trainer 5348 is a space-saving, full-body training machine designed for up to four users at once. It includes eight key workout functions, ergonomic design, smooth movement, and durable construction, perfect for commercial gyms focused on efficient, all-in-one strength training."
        ]
      }
    ],
    "image": "/assets/products/8/9.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "73",
    "modelCode": "82032",
    "name": "Hip Trainer",
    "description": "YR Fitness 82032 delivers powerful and targeted lower-body training with ergonomic adjustability and resistance flexibility—perfect for users focused on glute and hamstring development.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82032 delivers powerful and targeted lower-body training with ergonomic adjustability and resistance flexibility—perfect for users focused on glute and hamstring development."
        ]
      }
    ],
    "image": "/assets/products/9/1.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Hip"
    ]
  },
  {
    "id": "74",
    "modelCode": "7329",
    "name": "45° Leg Press",
    "description": "YR Fitness 7329 45° Leg Press delivers intense lower body training with a durable alloy steel slide bar for smooth, controlled motion. Built for performance, it supports safe and effective strength progression for all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7329 45° Leg Press delivers intense lower body training with a durable alloy steel slide bar for smooth, controlled motion. Built for performance, it supports safe and effective strength progression for all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/9/2.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "260kgs"
      },
      {
        "label": "G.W",
        "value": "360kgs"
      },
      {
        "label": "Installation Size",
        "value": "2800*1360*1580mm"
      }
    ]
  },
  {
    "id": "75",
    "modelCode": "7328",
    "name": "Seated Leg Press",
    "description": "YR Fitness 7328 Seated Leg Press offers a smooth, independent leg movement for natural motion and powerful lower-body training. Ideal for users aiming to build strength with safety and ergonomic design.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7328 Seated Leg Press offers a smooth, independent leg movement for natural motion and powerful lower-body training. Ideal for users aiming to build strength with safety and ergonomic design."
        ]
      }
    ],
    "image": "/assets/products/9/3.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "310kgs"
      },
      {
        "label": "G.W",
        "value": "410kgs"
      },
      {
        "label": "Installation Size",
        "value": "2120*1100*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "76",
    "modelCode": "7310",
    "name": "Biceps Curl",
    "description": "YR Fitness 7310 Biceps Curl features independent arms and pivoting handles to fit all users naturally. It delivers smooth, isolated bicep training with ergonomic comfort and commercial-grade durability.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7310 Biceps Curl features independent arms and pivoting handles to fit all users naturally. It delivers smooth, isolated bicep training with ergonomic comfort and commercial-grade durability."
        ]
      }
    ],
    "image": "/assets/products/9/4.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "228kgs"
      },
      {
        "label": "G.W",
        "value": "328kgs"
      },
      {
        "label": "Installation Size",
        "value": "1560*930*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "77",
    "modelCode": "55F02",
    "name": "Shoulder / Chest Press",
    "description": "Shoulder / Chest Press is a premium quality machine with immense support and stability. This model is safe and attractive addition to any gym. It comes from a company and a brand that has been trusted by many companies.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "Shoulder / Chest Press is a premium quality machine with immense support and stability. This model is safe and attractive addition to any gym. It comes from a company and a brand that has been trusted by many companies."
        ]
      }
    ],
    "image": "/assets/products/9/5.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "78",
    "modelCode": "61A46",
    "name": "Multifunction Adjustable Bench",
    "description": "YR Fitness Multifunction Adjustable Bench 61A46 is designed for strength training with a strong steel frame, high-density foam, and premium PU leather. It includes wheels and a handle for easy movement, making it perfect for both home and commercial gym use.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Multifunction Adjustable Bench 61A46 is designed for strength training with a strong steel frame, high-density foam, and premium PU leather. It includes wheels and a handle for easy movement, making it perfect for both home and commercial gym use."
        ]
      }
    ],
    "image": "/assets/products/9/6.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal"
    ]
  },
  {
    "id": "79",
    "modelCode": "61A32B",
    "name": "Functional Trainer",
    "description": "YR Fitness 61A32B Functional Trainer delivers smooth, customizable resistance with over 60 exercise options. Its elevated frame, 2:1 pulley ratio, and quick-adjust design support versatile, full-body strength and functional workouts.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A32B Functional Trainer delivers smooth, customizable resistance with over 60 exercise options. Its elevated frame, 2:1 pulley ratio, and quick-adjust design support versatile, full-body strength and functional workouts."
        ]
      }
    ],
    "image": "/assets/products/9/7.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "333kgs"
      },
      {
        "label": "G.W",
        "value": "384kgs"
      },
      {
        "label": "Installation Size",
        "value": "1680*940*2280mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "80",
    "modelCode": "61A28",
    "name": "Seated Leg Press",
    "description": "YR Fitness 61A28 Seated Leg Press provides joint-safe, effective leg training with a pendulum-style footplate and adjustable seating. Designed for comfort and accessibility, it’s perfect for users of all fitness levels aiming for lower body strength.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A28 Seated Leg Press provides joint-safe, effective leg training with a pendulum-style footplate and adjustable seating. Designed for comfort and accessibility, it’s perfect for users of all fitness levels aiming for lower body strength."
        ]
      }
    ],
    "image": "/assets/products/9/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "255kgs"
      },
      {
        "label": "G.W",
        "value": "267kgs"
      },
      {
        "label": "Installation Size",
        "value": "1205*1117*1660mm"
      },
      {
        "label": "Weight Stacks",
        "value": "100kg-20pcs"
      }
    ]
  },
  {
    "id": "81",
    "modelCode": "55A12",
    "name": "Leg Extension / Leg Curl",
    "description": "YR Fitness 55A12 Leg Extension / Leg Curl targets both the quadriceps and hamstrings in one seated machine. With smooth mechanics, easy adjustments, and durable build, it’s ideal for strengthening and isolating key lower body muscles.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 55A12 Leg Extension / Leg Curl targets both the quadriceps and hamstrings in one seated machine. With smooth mechanics, easy adjustments, and durable build, it’s ideal for strengthening and isolating key lower body muscles."
        ]
      }
    ],
    "image": "/assets/products/9/9.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "240kgs"
      },
      {
        "label": "G.W",
        "value": "277kgs"
      },
      {
        "label": "Installation Size",
        "value": ": 1340*1160*1625mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "82",
    "modelCode": "55A11",
    "name": "Leg Press / Calf",
    "description": "YR Fitness 55A11 Leg Press / Calf combines two essential leg workouts in one machine. Designed to strengthen quads, hamstrings, glutes, and calves, it offers smooth movement, ergonomic support, and commercial-grade durability.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 55A11 Leg Press / Calf combines two essential leg workouts in one machine. Designed to strengthen quads, hamstrings, glutes, and calves, it offers smooth movement, ergonomic support, and commercial-grade durability."
        ]
      }
    ],
    "image": "/assets/products/10/1.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "278kgs"
      },
      {
        "label": "G.W",
        "value": "322kgs"
      },
      {
        "label": "Installation Size",
        "value": "1610*990*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "100kg-20pcs"
      }
    ]
  },
  {
    "id": "83",
    "modelCode": "55A10",
    "name": "Adductor / Abductor",
    "description": "YR Fitness 55A10 Adductor / Abductor combines inner and outer thigh training in one machine. With adjustable positions, large leg pads, and smooth motion, it’s perfect for strengthening hip stability and improving lower body control.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 55A10 Adductor / Abductor combines inner and outer thigh training in one machine. With adjustable positions, large leg pads, and smooth motion, it’s perfect for strengthening hip stability and improving lower body control."
        ]
      }
    ],
    "image": "/assets/products/10/2.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "205kgs"
      },
      {
        "label": "G.W",
        "value": "217kgs"
      },
      {
        "label": "Installation Size",
        "value": "1620*716*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "84",
    "modelCode": "55A09",
    "name": "Leg Extension / Lying Leg Curl",
    "description": "YR Fitness 55A09 Leg Extension / Lying Leg Curl offers two essential leg workouts in one machine. It isolates quads and hamstrings effectively, making it perfect for strength training, toning, and rehabilitation in any gym or clinic.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 55A09 Leg Extension / Lying Leg Curl offers two essential leg workouts in one machine. It isolates quads and hamstrings effectively, making it perfect for strength training, toning, and rehabilitation in any gym or clinic."
        ]
      }
    ],
    "image": "/assets/products/10/3.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "221kgs"
      },
      {
        "label": "G.W",
        "value": "230kgs"
      },
      {
        "label": "Installation Size",
        "value": "1690*950*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "85",
    "modelCode": "55A08",
    "name": "Ab Crunch / Back extension",
    "description": "YR Fitness 55A08 Ab Crunch / Back Extension combines two essential core exercises in one machine. Ideal for strengthening abs and lower back, it offers efficient, safe, and space-saving training for users of all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 55A08 Ab Crunch / Back Extension combines two essential core exercises in one machine. Ideal for strengthening abs and lower back, it offers efficient, safe, and space-saving training for users of all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/10/4.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "198kgs"
      },
      {
        "label": "G.W",
        "value": "208kgs"
      },
      {
        "label": "Installation Size",
        "value": "1130*1039*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "86",
    "modelCode": "55A07",
    "name": "Assisted Dip / Chin Up",
    "description": "YR Fitness 55A07 Assisted Dip / Chin Up makes upper body training accessible with its weight-assisted dip and chin-up functions. Ideal for building strength progressively, it offers stability, comfort, and durability for all users.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 55A07 Assisted Dip / Chin Up makes upper body training accessible with its weight-assisted dip and chin-up functions. Ideal for building strength progressively, it offers stability, comfort, and durability for all users."
        ]
      }
    ],
    "image": "/assets/products/10/5.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "250kgs"
      },
      {
        "label": "G.W",
        "value": "264kgs"
      },
      {
        "label": "Installation Size",
        "value": "1000*1200*2250mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "87",
    "modelCode": "55A06",
    "name": "Lat Pull Down / Low Row",
    "description": "YR Fitness 55A06 Lat Pull Down / Low Row offers two essential back exercises in one unit. With an adjustable leg pad and sturdy construction, it delivers effective upper body training with comfort and efficiency.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 55A06 Lat Pull Down / Low Row offers two essential back exercises in one unit. With an adjustable leg pad and sturdy construction, it delivers effective upper body training with comfort and efficiency."
        ]
      }
    ],
    "image": "/assets/products/10/6.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Arm",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "222kgs"
      },
      {
        "label": "G.W",
        "value": "233kgs"
      },
      {
        "label": "Installation Size",
        "value": "1787*1213*2227mm"
      },
      {
        "label": "Weight Stacks",
        "value": "100kg-20pcs"
      }
    ]
  },
  {
    "id": "88",
    "modelCode": "55A05",
    "name": "Standing Biceps / Triceps",
    "description": "YR Fitness 55A05 Standing Biceps / Triceps supports a range of cable-based arm exercises using adjustable pulleys and V-bar attachments. Built for safe, targeted training, it’s ideal for improving upper arm strength and definition in any gym setup.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 55A05 Standing Biceps / Triceps supports a range of cable-based arm exercises using adjustable pulleys and V-bar attachments. Built for safe, targeted training, it’s ideal for improving upper arm strength and definition in any gym setup."
        ]
      }
    ],
    "image": "/assets/products/10/7.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "233kgs"
      },
      {
        "label": "G.W",
        "value": "255kgs"
      },
      {
        "label": "Installation Size",
        "value": "1407*804*2227mm"
      },
      {
        "label": "Weight Stacks",
        "value": "100kg-20pcs"
      }
    ]
  },
  {
    "id": "89",
    "modelCode": "55A04",
    "name": "Biceps / Triceps",
    "description": "YR Fitness 55A04 Biceps / Triceps targets both upper arm muscle groups in one machine. With ergonomic support and durable construction, it delivers balanced, effective strength training for the biceps and triceps.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 55A04 Biceps / Triceps targets both upper arm muscle groups in one machine. With ergonomic support and durable construction, it delivers balanced, effective strength training for the biceps and triceps."
        ]
      }
    ],
    "image": "/assets/products/10/8.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "203kgs"
      },
      {
        "label": "G.W",
        "value": "213kgs"
      },
      {
        "label": "Installation Size",
        "value": "1120*1260*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "90",
    "modelCode": "55A03",
    "name": "Pec Deck / Rear Delt",
    "description": "YR Fitness 55A03 Pec Deck / Rear Delt combines two essential upper body exercises in one machine. With rotating grips for wrist protection and smooth, controlled motion, it&#8217;s ideal for balanced chest and shoulder training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 55A03 Pec Deck / Rear Delt combines two essential upper body exercises in one machine. With rotating grips for wrist protection and smooth, controlled motion, it&#8217;s ideal for balanced chest and shoulder training."
        ]
      }
    ],
    "image": "/assets/products/10/9.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Shoulder",
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "218kgs"
      },
      {
        "label": "G.W",
        "value": "228kgs"
      },
      {
        "label": "Installation Size",
        "value": "1450*1250*2000mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "91",
    "modelCode": "55A02",
    "name": "Shoulder / Chest Press",
    "description": "YR Fitness 55A02 Shoulder/Chest Press combines comfort and customization with dual upper body training. With adjustable footplate, multi-grip handles, and easy-access weight selector, it ensures a safe, effective, and user-friendly workout.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 55A02 Shoulder/Chest Press combines comfort and customization with dual upper body training. With adjustable footplate, multi-grip handles, and easy-access weight selector, it ensures a safe, effective, and user-friendly workout."
        ]
      }
    ],
    "image": "/assets/products/11/1.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Shoulder",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "223kgs"
      },
      {
        "label": "G.W",
        "value": "235kgs"
      },
      {
        "label": "Installation Size",
        "value": "1473*716*2340mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "92",
    "modelCode": "55A01",
    "name": "Shoulder / Chest Press",
    "description": "YR Fitness 55A01 Shoulder/Chest Press combines two upper body exercises in one compact, adjustable machine. Built for comfort and control, it supports safe and effective training for users at any level.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 55A01 Shoulder/Chest Press combines two upper body exercises in one compact, adjustable machine. Built for comfort and control, it supports safe and effective training for users at any level."
        ]
      }
    ],
    "image": "/assets/products/11/2.webp",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Shoulder",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "249kgs"
      },
      {
        "label": "G.W",
        "value": "261kgs"
      },
      {
        "label": "Installation Size",
        "value": "1638*1360*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "93",
    "modelCode": "C409",
    "name": "Pectoral Fly/Rear Deltoid",
    "description": "YR Fitness C409 Pectoral Fly/Rear Deltoid is a versatile two-in-one machine that targets both chest and rear shoulder muscles. With rotating grips for wrist protection and smooth motion design, it ensures a safe, comfortable, and effective workout for strength and stability.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C409 Pectoral Fly/Rear Deltoid is a versatile two-in-one machine that targets both chest and rear shoulder muscles. With rotating grips for wrist protection and smooth motion design, it ensures a safe, comfortable, and effective workout for strength and stability."
        ]
      }
    ],
    "image": "/assets/products/11/3.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "218kgs"
      },
      {
        "label": "G.W.",
        "value": "228kgs"
      },
      {
        "label": "Installation size",
        "value": "1450*1250*2000mm"
      },
      {
        "label": "Weight stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "94",
    "modelCode": "C460",
    "name": "Adductor and Abductor",
    "description": "YR Fitness C460 Adductor and Abductor combines two key thigh exercises in one machine. With adjustable settings, large leg pads, and smooth operation, it offers a comfortable and efficient lower body workout for users of all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C460 Adductor and Abductor combines two key thigh exercises in one machine. With adjustable settings, large leg pads, and smooth operation, it offers a comfortable and efficient lower body workout for users of all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/11/4.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "212kgs"
      },
      {
        "label": "G.W.",
        "value": "221kgs"
      },
      {
        "label": "Installation size",
        "value": "720*1630*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "95",
    "modelCode": "C458",
    "name": "Hip Thruster",
    "description": "YR Fitness C458 Hip Thruster is designed for effective and comfortable glute training. With a dynamic backrest, adjustable foam roller, and customizable foot pedals, it fits all users and supports a smooth, joint-friendly workout experience.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C458 Hip Thruster is designed for effective and comfortable glute training. With a dynamic backrest, adjustable foam roller, and customizable foot pedals, it fits all users and supports a smooth, joint-friendly workout experience."
        ]
      }
    ],
    "image": "/assets/products/11/5.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Hip"
    ]
  },
  {
    "id": "96",
    "modelCode": "C431",
    "name": "Standing Calf",
    "description": "YR Fitness C431 Standing Calf is built to strengthen calf muscles with comfort and safety. It features adjustable pad height and non-slip footplates for a full range of motion, making it ideal for users of all sizes to train effectively and confidently.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C431 Standing Calf is built to strengthen calf muscles with comfort and safety. It features adjustable pad height and non-slip footplates for a full range of motion, making it ideal for users of all sizes to train effectively and confidently."
        ]
      }
    ],
    "image": "/assets/products/11/6.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "214kgs"
      },
      {
        "label": "G.W.",
        "value": "222kgs"
      },
      {
        "label": "Installation size",
        "value": "1280*720*1640mm"
      },
      {
        "label": "Weight stacks",
        "value": "100kg-20pcs"
      }
    ]
  },
  {
    "id": "97",
    "modelCode": "C430",
    "name": "Seated Calf",
    "description": "YR Fitness C430 Seated Calf is designed to strengthen calf muscles with comfort and control. It features an easy-to-use pin-loaded system, ergonomic seating, and a stable base, making it perfect for users of all levels to train safely and effectively.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C430 Seated Calf is designed to strengthen calf muscles with comfort and control. It features an easy-to-use pin-loaded system, ergonomic seating, and a stable base, making it perfect for users of all levels to train safely and effectively."
        ]
      }
    ],
    "image": "/assets/products/11/7.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "184kgs"
      },
      {
        "label": "G.W.",
        "value": "194kgs"
      },
      {
        "label": "Installation size",
        "value": "1583*720*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "98",
    "modelCode": "C428A",
    "name": "Seated Leg Press",
    "description": "YR Fitness C428A Seated Leg Press is built for comfort, safety, and smooth performance. Its inclined seat and stable footplate support proper posture and natural movement, making it ideal for effective leg workouts with reduced joint strain for users of all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C428A Seated Leg Press is built for comfort, safety, and smooth performance. Its inclined seat and stable footplate support proper posture and natural movement, making it ideal for effective leg workouts with reduced joint strain for users of all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/11/8.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "278kgs"
      },
      {
        "label": "G.W.",
        "value": "290kgs"
      },
      {
        "label": "Installation size",
        "value": "1625*1040*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "100kg-20pcs"
      }
    ]
  },
  {
    "id": "99",
    "modelCode": "C428",
    "name": "Seated Leg Press",
    "description": "YR Fitness C428 Seated Leg Press offers a smooth, joint-friendly leg workout with its natural movement design and adjustable seat. It’s built for comfort, stability, and ease of use, making it suitable for users of all sizes and fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C428 Seated Leg Press offers a smooth, joint-friendly leg workout with its natural movement design and adjustable seat. It’s built for comfort, stability, and ease of use, making it suitable for users of all sizes and fitness levels."
        ]
      }
    ],
    "image": "/assets/products/11/9.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "255kgs"
      },
      {
        "label": "G.W.",
        "value": "267kgs"
      },
      {
        "label": "Installation size",
        "value": "1410*1080*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "100kg-20pcs"
      }
    ]
  },
  {
    "id": "100",
    "modelCode": "C426",
    "name": "Prone Leg Curl",
    "description": "YR Fitness C426 Prone Leg Curl is designed to isolate and strengthen hamstrings safely and effectively. With five start positions and angled support pads, it reduces lower-back stress while offering a smooth, comfortable workout for users of all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C426 Prone Leg Curl is designed to isolate and strengthen hamstrings safely and effectively. With five start positions and angled support pads, it reduces lower-back stress while offering a smooth, comfortable workout for users of all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/12/1.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "194kgs"
      },
      {
        "label": "G.W.",
        "value": "205kgs"
      },
      {
        "label": "Installation size",
        "value": "1580*1120*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "101",
    "modelCode": "C425A",
    "name": "Seated Leg Curl",
    "description": "YR Fitness C425A Seated Leg Curl offers a customizable and comfortable way to train hamstrings. With adjustable foam rollers, oversized pads, and multiple grip options, it ensures a secure and effective workout experience for users of all sizes and fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C425A Seated Leg Curl offers a customizable and comfortable way to train hamstrings. With adjustable foam rollers, oversized pads, and multiple grip options, it ensures a secure and effective workout experience for users of all sizes and fitness levels."
        ]
      }
    ],
    "image": "/assets/products/12/2.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "235kgs"
      },
      {
        "label": "G.W.",
        "value": "248kgs"
      },
      {
        "label": "Installation size",
        "value": "1310*1135*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "102",
    "modelCode": "C424",
    "name": "Leg Extension",
    "description": "YR Fitness C424 Leg Extension is designed to build strong quadriceps with comfort and precision. It features multiple starting positions, an adjustable foam roller, and a spacious design for smooth movement, making it ideal for safe and effective lower body training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C424 Leg Extension is designed to build strong quadriceps with comfort and precision. It features multiple starting positions, an adjustable foam roller, and a spacious design for smooth movement, making it ideal for safe and effective lower body training."
        ]
      }
    ],
    "image": "/assets/products/12/3.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "216kgs"
      },
      {
        "label": "G.W.",
        "value": "226kgs"
      },
      {
        "label": "Installation size",
        "value": "1350*1200*1620mm"
      },
      {
        "label": "Weight stack",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "103",
    "modelCode": "C423",
    "name": "Outer Thigh Abductor",
    "description": "YR Fitness C423 Outer Thigh Adductor is built for effective outer thigh and hip workouts. With adjustable settings, larger leg pads, and a privacy-friendly design, it offers a smooth, comfortable, and user-friendly training experience suitable for all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C423 Outer Thigh Adductor is built for effective outer thigh and hip workouts. With adjustable settings, larger leg pads, and a privacy-friendly design, it offers a smooth, comfortable, and user-friendly training experience suitable for all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/12/4.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "200kgs"
      },
      {
        "label": "G.W.",
        "value": "208kgs"
      },
      {
        "label": "Installation size",
        "value": "720*1600*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "104",
    "modelCode": "C422",
    "name": "Inner Thigh Adductor",
    "description": "YR Fitness C422 Inner Thigh Adductor is designed for effective inner thigh workouts with comfort and control. It features adjustable settings, large padded supports, and a front-mounted stack, making it ideal for smooth, safe, and customizable training for users of all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C422 Inner Thigh Adductor is designed for effective inner thigh workouts with comfort and control. It features adjustable settings, large padded supports, and a front-mounted stack, making it ideal for smooth, safe, and customizable training for users of all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/12/5.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "200kgs"
      },
      {
        "label": "G.W.",
        "value": "2o8kgs"
      },
      {
        "label": "Installation size",
        "value": "720*1600*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "105",
    "modelCode": "C421A",
    "name": "Gluteus Maximus Trainer",
    "description": "YR Fitness C421A Gluteus Maximus Trainer offers a safer, more natural motion for targeted glute training. With adjustable resistance and ergonomic support, it provides better stability and comfort, making it ideal for users of all fitness levels focused on lower body strength.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C421A Gluteus Maximus Trainer offers a safer, more natural motion for targeted glute training. With adjustable resistance and ergonomic support, it provides better stability and comfort, making it ideal for users of all fitness levels focused on lower body strength."
        ]
      }
    ],
    "image": "/assets/products/12/6.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "198kgs"
      },
      {
        "label": "G.W.",
        "value": "210kgs"
      },
      {
        "label": "Installation size",
        "value": "1216*820*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "106",
    "modelCode": "C421",
    "name": "Gluteus Maximus Trainer",
    "description": "YR Fitness C421 Gluteus Maximus Trainer is designed to effectively target and strengthen the glute muscles. Its back leg extension movement and rotating foot plate offer exercise variety, making it a great choice for users aiming to build and shape their lower body.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C421 Gluteus Maximus Trainer is designed to effectively target and strengthen the glute muscles. Its back leg extension movement and rotating foot plate offer exercise variety, making it a great choice for users aiming to build and shape their lower body."
        ]
      }
    ],
    "image": "/assets/products/12/7.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "196kgs"
      },
      {
        "label": "G.W.",
        "value": "206kgs"
      },
      {
        "label": "Installation size",
        "value": "1216*820*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "107",
    "modelCode": "C420",
    "name": "Multi Hip",
    "description": "YR Fitness C420 Multi Hip is a versatile machine designed to train various hip and leg muscles. With adjustable settings and a smooth bidirectional motion, it supports users of all sizes and fitness levels, making it ideal for lower body strength and mobility training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C420 Multi Hip is a versatile machine designed to train various hip and leg muscles. With adjustable settings and a smooth bidirectional motion, it supports users of all sizes and fitness levels, making it ideal for lower body strength and mobility training."
        ]
      }
    ],
    "image": "/assets/products/12/8.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "223kgs"
      },
      {
        "label": "G.W.",
        "value": "233kgs"
      },
      {
        "label": "Installation size",
        "value": "1065*1508*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "108",
    "modelCode": "C419",
    "name": "Rotary Torso",
    "description": "YR Fitness C419 Rotary Torso is designed to improve core strength and mobility with smooth 360-degree rotation. It features three grip positions and a reverse grip option, allowing users to customize their workout and effectively target obliques and other core muscles.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C419 Rotary Torso is designed to improve core strength and mobility with smooth 360-degree rotation. It features three grip positions and a reverse grip option, allowing users to customize their workout and effectively target obliques and other core muscles."
        ]
      }
    ],
    "image": "/assets/products/12/9.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "179kgs"
      },
      {
        "label": "G.W.",
        "value": "187kgs"
      },
      {
        "label": "Installation size",
        "value": "720*1458*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "109",
    "modelCode": "C418A",
    "name": "Lower Abdominal Trainer",
    "description": "YR Fitness C418A Lower Abdominal Trainer is designed with a comfortable lying position to target lower abs safely and effectively. Its easy-to-use weight system allows smooth resistance adjustments, making it ideal for users of all fitness levels focused on core strength.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C418A Lower Abdominal Trainer is designed with a comfortable lying position to target lower abs safely and effectively. Its easy-to-use weight system allows smooth resistance adjustments, making it ideal for users of all fitness levels focused on core strength."
        ]
      }
    ],
    "image": "/assets/products/13/1.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": ": 193kgs"
      },
      {
        "label": "G.W",
        "value": ": 202kgs"
      },
      {
        "label": "Installation Size",
        "value": ": 1435*1146*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": ": 70kg-14pcs"
      }
    ]
  },
  {
    "id": "110",
    "modelCode": "C418",
    "name": "Upper/Mid Abdominal Trainer",
    "description": "YR Fitness C418 Upper/Mid Abdominal Trainer is designed to strengthen your core with safe and controlled crunch movements. It features adjustable ankle pads for added comfort and stability, helping users maintain proper form while effectively targeting upper and mid abdominal muscles.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C418 Upper/Mid Abdominal Trainer is designed to strengthen your core with safe and controlled crunch movements. It features adjustable ankle pads for added comfort and stability, helping users maintain proper form while effectively targeting upper and mid abdominal muscles."
        ]
      }
    ],
    "image": "/assets/products/13/2.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "181kgs"
      },
      {
        "label": "G.W.",
        "value": "190kgs"
      },
      {
        "label": "Installation size",
        "value": "1130*1030*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "111",
    "modelCode": "C417",
    "name": "Back Extension",
    "description": "YR Fitness C417 Back Extension is designed to strengthen the lower back with safe and controlled movement. It features adjustable start positions, a supportive lumbar pad, and secure foot placement, making it ideal for users looking to train with proper form and comfort.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C417 Back Extension is designed to strengthen the lower back with safe and controlled movement. It features adjustable start positions, a supportive lumbar pad, and secure foot placement, making it ideal for users looking to train with proper form and comfort."
        ]
      }
    ],
    "image": "/assets/products/13/3.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "184kgs"
      },
      {
        "label": "G.W.",
        "value": "194kgs"
      },
      {
        "label": "Installation size",
        "value": "1160*1130*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "112",
    "modelCode": "C416A",
    "name": "Knee-on Assisted Chin/Dip",
    "description": "YR Fitness C416a Knee-on Assisted Chin/Dip is designed to support users in building upper body strength through assisted chin-ups and dips. With an optional knee pad for added support, it offers a safe, adjustable workout for users of all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C416a Knee-on Assisted Chin/Dip is designed to support users in building upper body strength through assisted chin-ups and dips. With an optional knee pad for added support, it offers a safe, adjustable workout for users of all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/13/4.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "223kgs"
      },
      {
        "label": "G.W.",
        "value": "235kgs"
      },
      {
        "label": "Installation size",
        "value": "1000*1200*2250mm"
      },
      {
        "label": "Weight stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "113",
    "modelCode": "C415A",
    "name": "Lat Pull Down Diverging",
    "description": "YR Fitness C415A Lat Pull Down Diverging offers a smooth and natural pulling motion with rotating handles and diverging arms. Its adjustable thigh pads ensure comfort and support, making it ideal for users looking to strengthen their upper back with proper form and flexibility.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C415A Lat Pull Down Diverging offers a smooth and natural pulling motion with rotating handles and diverging arms. Its adjustable thigh pads ensure comfort and support, making it ideal for users looking to strengthen their upper back with proper form and flexibility."
        ]
      }
    ],
    "image": "/assets/products/13/5.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm",
      "Back"
    ]
  },
  {
    "id": "114",
    "modelCode": "C415",
    "name": "Lat Pull Down",
    "description": "YR Fitness C415 Lat Pull Down is designed to build upper back strength with proper form and comfort. It features adjustable thigh pads and an angled bar to support safe, effective movement, making it ideal for users of all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C415 Lat Pull Down is designed to build upper back strength with proper form and comfort. It features adjustable thigh pads and an angled bar to support safe, effective movement, making it ideal for users of all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/13/6.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "183kgs"
      },
      {
        "label": "G.W.",
        "value": "192kgs"
      },
      {
        "label": "Installation size",
        "value": "1200*1100*2190mm"
      },
      {
        "label": "Weight stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "115",
    "modelCode": "C414",
    "name": "Mid Row",
    "description": "YR Fitness C414 Mid Row is built to strengthen back muscles with smooth, natural movement. Its rotating handles support multiple exercise options and proper form, making it a versatile and user-friendly choice for all fitness levels looking to improve upper body strength.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C414 Mid Row is built to strengthen back muscles with smooth, natural movement. Its rotating handles support multiple exercise options and proper form, making it a versatile and user-friendly choice for all fitness levels looking to improve upper body strength."
        ]
      }
    ],
    "image": "/assets/products/13/7.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm",
      "Back"
    ]
  },
  {
    "id": "116",
    "modelCode": "C413",
    "name": "Low Row",
    "description": "YR Fitness C413 Low Row is designed to strengthen back muscles with smooth and natural movement. Its rotating handles allow for varied grip positions, enhancing muscle activation and workout comfort. Ideal for users looking to improve upper body strength with better form and control.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C413 Low Row is designed to strengthen back muscles with smooth and natural movement. Its rotating handles allow for varied grip positions, enhancing muscle activation and workout comfort. Ideal for users looking to improve upper body strength with better form and control."
        ]
      }
    ],
    "image": "/assets/products/13/8.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "178kgs"
      },
      {
        "label": "G.W.",
        "value": "187kgs"
      },
      {
        "label": "Installation size",
        "value": "720*2200*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "117",
    "modelCode": "C412",
    "name": "Triceps Extension",
    "description": "YR Fitness C412 Triceps Extension is built to strengthen the triceps with proper form and comfort. It features supportive pads and pivoting handles that adjust to different users, making each workout smooth, stable, and effective for all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C412 Triceps Extension is built to strengthen the triceps with proper form and comfort. It features supportive pads and pivoting handles that adjust to different users, making each workout smooth, stable, and effective for all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/13/9.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "189kgs"
      },
      {
        "label": "G.W.",
        "value": "198kgs"
      },
      {
        "label": "Installation size",
        "value": "1150*1270*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "60kg-12pcs"
      }
    ]
  },
  {
    "id": "118",
    "modelCode": "C411",
    "name": "Tricep Dip",
    "description": "YR Fitness C411 Tricep Dip is designed to strengthen your triceps with comfort and control. Its rotating EZ handles offer multiple grip options for varied workouts, while the ergonomic design ensures smooth movement and a safe, effective training experience for all users.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C411 Tricep Dip is designed to strengthen your triceps with comfort and control. Its rotating EZ handles offer multiple grip options for varied workouts, while the ergonomic design ensures smooth movement and a safe, effective training experience for all users."
        ]
      }
    ],
    "image": "/assets/products/14/1.avif",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "211kgs"
      },
      {
        "label": "G.W.",
        "value": "222kgs"
      },
      {
        "label": "Installation size",
        "value": "1020*1260*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "119",
    "modelCode": "C410",
    "name": "Biceps Curl",
    "description": "YR Fitness C410 Biceps Curl is designed to help users build arm strength with comfort and precision. Its self-aligning handles fit different arm lengths, while the smooth motion and ergonomic seat provide a safe, effective, and user-friendly workout experience.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C410 Biceps Curl is designed to help users build arm strength with comfort and precision. Its self-aligning handles fit different arm lengths, while the smooth motion and ergonomic seat provide a safe, effective, and user-friendly workout experience."
        ]
      }
    ],
    "image": "/assets/products/14/2.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "173kgs"
      },
      {
        "label": "G.W.",
        "value": "182kgs"
      },
      {
        "label": "Installation size：",
        "value": "1200*1270*1620mm"
      },
      {
        "label": "Weight stacks：",
        "value": "60kg-12pcs"
      }
    ]
  },
  {
    "id": "120",
    "modelCode": "C407",
    "name": "Pectoral Butterfly",
    "description": "YR Fitness C407 Pectoral Butterfly is designed to target the inner chest muscles with precision, while reducing shoulder strain. Trusted by professionals, it offers a smooth and focused workout, making it ideal for users looking to strengthen their chest safely and effectively.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C407 Pectoral Butterfly is designed to target the inner chest muscles with precision, while reducing shoulder strain. Trusted by professionals, it offers a smooth and focused workout, making it ideal for users looking to strengthen their chest safely and effectively."
        ]
      }
    ],
    "image": "/assets/products/14/3.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Shoulder",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "209kgs"
      },
      {
        "label": "G.W.",
        "value": "220kgs"
      },
      {
        "label": "Installation size",
        "value": "1220*1300*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "121",
    "modelCode": "C404A",
    "name": "Chest Press Converging",
    "description": "YR Fitness C404A Chest Press Converging is designed to help users build chest strength with a natural, ergonomic motion. It offers adjustable seating and multiple grip options for a safe and comfortable workout, making it ideal for users of all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C404A Chest Press Converging is designed to help users build chest strength with a natural, ergonomic motion. It offers adjustable seating and multiple grip options for a safe and comfortable workout, making it ideal for users of all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/14/4.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "218kgs"
      },
      {
        "label": "G.W.",
        "value": "228kgs"
      },
      {
        "label": "Installation size",
        "value": "1150*1500*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "122",
    "modelCode": "C404",
    "name": "Seated Chest Press",
    "description": "YR Fitness C404 Seated Chest Press is designed to build chest strength safely and effectively. With a smooth motion and user-friendly design, it’s ideal for all fitness levels. The machine offers a comfortable and stable workout experience, making chest training more accessible and efficient.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C404 Seated Chest Press is designed to build chest strength safely and effectively. With a smooth motion and user-friendly design, it’s ideal for all fitness levels. The machine offers a comfortable and stable workout experience, making chest training more accessible and efficient."
        ]
      }
    ],
    "image": "/assets/products/14/5.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Chest"
    ]
  },
  {
    "id": "123",
    "modelCode": "C403",
    "name": "Seated Lateral Raise",
    "description": "YR Fitness C403 Seated Lateral Raise Machine is designed to follow the body’s natural shoulder movement, making workouts smooth and effective. With self-aligning handles and a user-friendly design, it provides a safe and comfortable way to strengthen shoulder muscles for users of all levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C403 Seated Lateral Raise Machine is designed to follow the body’s natural shoulder movement, making workouts smooth and effective. With self-aligning handles and a user-friendly design, it provides a safe and comfortable way to strengthen shoulder muscles for users of all levels."
        ]
      }
    ],
    "image": "/assets/products/14/6.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Shoulder"
    ]
  },
  {
    "id": "124",
    "modelCode": "C402",
    "name": "Pull Up Shoulder",
    "description": "YR Fitness C402 Pull Up Shoulder Machine is designed for users with shoulder pain or limited mobility, offering a safer way to train shoulders without strain. Its compact motion and ergonomic design support effective workouts while protecting sensitive joints and ensuring user comfort.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C402 Pull Up Shoulder Machine is designed for users with shoulder pain or limited mobility, offering a safer way to train shoulders without strain. Its compact motion and ergonomic design support effective workouts while protecting sensitive joints and ensuring user comfort."
        ]
      }
    ],
    "image": "/assets/products/14/7.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Shoulder"
    ]
  },
  {
    "id": "125",
    "modelCode": "C401A",
    "name": "Seated Shoulder Press Converging",
    "description": "YR Fitness C401A Seated Shoulder Press Converging is built for effective shoulder training with a natural converging motion. It offers smooth movement, adjustable seating, and multiple grip choices, making it ideal for safe, comfortable, and efficient strength workouts.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C401A Seated Shoulder Press Converging is built for effective shoulder training with a natural converging motion. It offers smooth movement, adjustable seating, and multiple grip choices, making it ideal for safe, comfortable, and efficient strength workouts."
        ]
      }
    ],
    "image": "/assets/products/14/8.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Shoulder"
    ]
  },
  {
    "id": "126",
    "modelCode": "C401",
    "name": "Seated Shoulder Press",
    "description": "YR Fitness C401 is a strong and comfortable shoulder press machine. It has an adjustable seat, two handle positions, and soft padding. Made with high-quality steel and parts, it’s built to last. Great for safe, everyday shoulder workouts at any gym.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness C401 is a strong and comfortable shoulder press machine. It has an adjustable seat, two handle positions, and soft padding. Made with high-quality steel and parts, it’s built to last. Great for safe, everyday shoulder workouts at any gym."
        ]
      }
    ],
    "image": "/assets/products/14/9.webp",
    "series": "C4 Revival Series",
    "muscleGroups": [
      "Shoulder"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "208kgs"
      },
      {
        "label": "G.W.",
        "value": "218kgs"
      },
      {
        "label": "Installation size",
        "value": "1480*1310*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "127",
    "modelCode": "8509",
    "name": "Smith & Functional Trainer and Power Rack Combo",
    "description": "YR Fitness Smith &amp; Functional Trainer and Power Rack Combo 8509 is a heavy-duty all-in-one machine for serious strength training. It combines multiple functions in one stable frame, built with strong steel and high-quality parts for safe, effective workouts in any gym setting.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Smith &amp; Functional Trainer and Power Rack Combo 8509 is a heavy-duty all-in-one machine for serious strength training. It combines multiple functions in one stable frame, built with strong steel and high-quality parts for safe, effective workouts in any gym setting."
        ]
      }
    ],
    "image": "/assets/products/15/1.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "128",
    "modelCode": "82021",
    "name": "Ground Base Jammer",
    "description": "YR Fitness 82021 delivers powerful, functional training through ground-based pressing mechanics. It’s a go-to choice for building explosive upper-body strength and total-body athleticism.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82021 delivers powerful, functional training through ground-based pressing mechanics. It’s a go-to choice for building explosive upper-body strength and total-body athleticism."
        ]
      }
    ],
    "image": "/assets/products/15/2.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Shoulder",
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "134kgs"
      },
      {
        "label": "G.W",
        "value": "205kgs"
      },
      {
        "label": "Installation Size",
        "value": "1660*1915*2030mm"
      }
    ]
  },
  {
    "id": "129",
    "modelCode": "7306",
    "name": "Incline Chest Press",
    "description": "YR Fitness 7306 Incline Chest Press targets the upper chest with independent, converging arms that mimic natural pressing motion. Built with durable materials and ergonomic features, it offers smooth, comfortable, and effective strength training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7306 Incline Chest Press targets the upper chest with independent, converging arms that mimic natural pressing motion. Built with durable materials and ergonomic features, it offers smooth, comfortable, and effective strength training."
        ]
      }
    ],
    "image": "/assets/products/15/3.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "260kgs"
      },
      {
        "label": "G.W",
        "value": "360kgs"
      },
      {
        "label": "Installation Size",
        "value": "1680*950*1815mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "130",
    "modelCode": "61A10",
    "name": "Biceps Curl",
    "description": "YR Fitness 61A10 Biceps Curl offers smooth, isolated arm training with self-aligning handles for natural motion. Built for comfort and precision, it supports a wide range of users and delivers consistent results for biceps development.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A10 Biceps Curl offers smooth, isolated arm training with self-aligning handles for natural motion. Built for comfort and precision, it supports a wide range of users and delivers consistent results for biceps development."
        ]
      }
    ],
    "image": "/assets/products/15/4.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "173kgs"
      },
      {
        "label": "G.W",
        "value": "183kgs"
      },
      {
        "label": "Installation Size",
        "value": "120081270*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "60kg-12pcs"
      }
    ]
  },
  {
    "id": "131",
    "modelCode": "61A12",
    "name": "Triceps Extension",
    "description": "YR Fitness 61A12 Triceps Extension delivers smooth, joint-friendly arm training with auto-adjusting handles and padded support. It’s ideal for isolating triceps muscles while ensuring comfort, alignment, and strength progression for all users.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A12 Triceps Extension delivers smooth, joint-friendly arm training with auto-adjusting handles and padded support. It’s ideal for isolating triceps muscles while ensuring comfort, alignment, and strength progression for all users."
        ]
      }
    ],
    "image": "/assets/products/15/5.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "189kgs"
      },
      {
        "label": "G.W",
        "value": "198kgs"
      },
      {
        "label": "Installation Size",
        "value": "1150*1270*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "60kg-12pcs"
      }
    ]
  },
  {
    "id": "132",
    "modelCode": "61A13",
    "name": "Low Row",
    "description": "YR Fitness 61A13 Low Row targets back muscles with rotating ergonomic handles that adapt to your natural pulling motion. Built for smooth, joint-friendly training, it delivers versatile and effective back workouts for all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A13 Low Row targets back muscles with rotating ergonomic handles that adapt to your natural pulling motion. Built for smooth, joint-friendly training, it delivers versatile and effective back workouts for all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/15/6.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "178kgs"
      },
      {
        "label": "G.W",
        "value": "187kgs"
      },
      {
        "label": "Installation Size",
        "value": "720*2200*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "133",
    "modelCode": "61A15A",
    "name": "Lat Pull Down Diverging",
    "description": "YR Fitness 61A15A Lat Pull Down Diverging features rotating handles and a natural diverging pull path for smooth, joint-friendly motion. With adjustable thigh pads and ergonomic design, it offers versatile and effective back training for all users.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A15A Lat Pull Down Diverging features rotating handles and a natural diverging pull path for smooth, joint-friendly motion. With adjustable thigh pads and ergonomic design, it offers versatile and effective back training for all users."
        ]
      }
    ],
    "image": "/assets/products/15/7.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "246kgs"
      },
      {
        "label": "G.W",
        "value": "259kgs"
      },
      {
        "label": "Installation Size",
        "value": "1600*1100*2000mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "134",
    "modelCode": "61A16",
    "name": "Standing Assisted Chin/Dip",
    "description": "YR Fitness 61A16 Standing Assisted Chin/Dip offers stable, beginner-friendly support for bodyweight training. With a standing footplate and multi-grip handles, it’s perfect for safely building strength in chin-up and dip exercises across all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A16 Standing Assisted Chin/Dip offers stable, beginner-friendly support for bodyweight training. With a standing footplate and multi-grip handles, it’s perfect for safely building strength in chin-up and dip exercises across all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/15/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "250kgs"
      },
      {
        "label": "G.W",
        "value": "270kgs"
      },
      {
        "label": "Installation Size",
        "value": "1000*1200*2250mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "135",
    "modelCode": "61A18",
    "name": "Upper/Mid Abdominal Trainer",
    "description": "YR Fitness 61A18 Upper/Mid Abdominal Trainer delivers effective abdominal training with controlled crunch motion and adjustable ankle pads. Built for comfort and precision, it helps users of all levels strengthen their core safely and efficiently.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A18 Upper/Mid Abdominal Trainer delivers effective abdominal training with controlled crunch motion and adjustable ankle pads. Built for comfort and precision, it helps users of all levels strengthen their core safely and efficiently."
        ]
      }
    ],
    "image": "/assets/products/15/9.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "181kgs"
      },
      {
        "label": "G.W",
        "value": "190kgs"
      },
      {
        "label": "Installation Size",
        "value": "1130*1030*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "136",
    "modelCode": "61A17",
    "name": "Back Extension",
    "description": "YR Fitness 61A17 Back Extension ensures safe, biomechanically correct back training with lumbar support, non-slip footpads, and adjustable start positions. It’s ideal for strengthening the lower back across beginner to advanced fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A17 Back Extension ensures safe, biomechanically correct back training with lumbar support, non-slip footpads, and adjustable start positions. It’s ideal for strengthening the lower back across beginner to advanced fitness levels."
        ]
      }
    ],
    "image": "/assets/products/16/1.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "184kgs"
      },
      {
        "label": "G.W",
        "value": "194kgs"
      },
      {
        "label": "Installation Size",
        "value": "1061*1016*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "137",
    "modelCode": "61A18A",
    "name": "Lower Abdominal Trainer",
    "description": "YR Fitness 61A18A Lower Abdominal Trainer uses a supine position and selectorized resistance to isolate lower abs comfortably and safely. Ideal for all fitness levels, it ensures smooth, effective core training with high-end build quality.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A18A Lower Abdominal Trainer uses a supine position and selectorized resistance to isolate lower abs comfortably and safely. Ideal for all fitness levels, it ensures smooth, effective core training with high-end build quality."
        ]
      }
    ],
    "image": "/assets/products/16/2.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "193kgs"
      },
      {
        "label": "G.W",
        "value": "202kgs"
      },
      {
        "label": "Installation Size",
        "value": "1435*1146*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "138",
    "modelCode": "61A19",
    "name": "Rotary Torso",
    "description": "YR Fitness 61A19 Rotary Torso provides full 360° rotational training to strengthen obliques and improve mobility. With multiple grip options and smooth pin-loaded resistance, it delivers effective, customizable core workouts for all user levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A19 Rotary Torso provides full 360° rotational training to strengthen obliques and improve mobility. With multiple grip options and smooth pin-loaded resistance, it delivers effective, customizable core workouts for all user levels."
        ]
      }
    ],
    "image": "/assets/products/16/3.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "179kgs"
      },
      {
        "label": "G.W",
        "value": "187kgs"
      },
      {
        "label": "Installation Size",
        "value": "720*1458*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "139",
    "modelCode": "61A20",
    "name": "Multi Hip",
    "description": "YR Fitness 61A20 Multi Hip is a versatile lower-body machine designed to train glutes, hips, and legs with smooth bidirectional motion. Its adjustable platform fits all users, making it ideal for rehab, strength, and functional training routines.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A20 Multi Hip is a versatile lower-body machine designed to train glutes, hips, and legs with smooth bidirectional motion. Its adjustable platform fits all users, making it ideal for rehab, strength, and functional training routines."
        ]
      }
    ],
    "image": "/assets/products/16/4.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "223kgs"
      },
      {
        "label": "G.W",
        "value": "233kgs"
      },
      {
        "label": "Installation Size",
        "value": "1065*1508*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "140",
    "modelCode": "61A21",
    "name": "Gluteus Maximus Trainer",
    "description": "YR Fitness 61A21 Gluteus Maximus Trainer delivers powerful glute-focused workouts with a back leg extension motion and rotating footplate. Designed for precision and comfort, it enhances strength, tone, and versatility for all users.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A21 Gluteus Maximus Trainer delivers powerful glute-focused workouts with a back leg extension motion and rotating footplate. Designed for precision and comfort, it enhances strength, tone, and versatility for all users."
        ]
      }
    ],
    "image": "/assets/products/16/5.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "196kgs"
      },
      {
        "label": "G.W",
        "value": "206kgs"
      },
      {
        "label": "Installation Size",
        "value": "1216*820*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "141",
    "modelCode": "61A22",
    "name": "Inner Thigh Adductor",
    "description": "YR Fitness 61A22 Inner Thigh Adductor offers smooth, controlled inner thigh training with adjustable positioning and ergonomic leg pads. Its stable build and easy-access weight stack make it ideal for effective and comfortable lower-body workouts.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A22 Inner Thigh Adductor offers smooth, controlled inner thigh training with adjustable positioning and ergonomic leg pads. Its stable build and easy-access weight stack make it ideal for effective and comfortable lower-body workouts."
        ]
      }
    ],
    "image": "/assets/products/16/6.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "200kgs"
      },
      {
        "label": "G.W",
        "value": "208kgs"
      },
      {
        "label": "Installation Size",
        "value": "720*1600*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "142",
    "modelCode": "61A23",
    "name": "Outer Thigh Abductor",
    "description": "YR Fitness 61A23 Outer Thigh Abductor provides smooth, privacy-conscious outer thigh workouts with large leg pads and adjustable positioning. Designed for comfort, control, and consistent performance, it&#8217;s ideal for all users looking to strengthen hip abductors.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A23 Outer Thigh Abductor provides smooth, privacy-conscious outer thigh workouts with large leg pads and adjustable positioning. Designed for comfort, control, and consistent performance, it&#8217;s ideal for all users looking to strengthen hip abductors."
        ]
      }
    ],
    "image": "/assets/products/16/7.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "200kgs"
      },
      {
        "label": "G.W",
        "value": "208kgs"
      },
      {
        "label": "Installation Size",
        "value": "720*1600*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "143",
    "modelCode": "61A25",
    "name": "Seated Leg Curl",
    "description": "YR Fitness 61A25 Seated Leg Curl provides safe and effective hamstring training with a five-position start system, adjustable foam roller, and dual-axis backrest. Its ergonomic design ensures smooth, comfortable motion for all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A25 Seated Leg Curl provides safe and effective hamstring training with a five-position start system, adjustable foam roller, and dual-axis backrest. Its ergonomic design ensures smooth, comfortable motion for all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/16/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W.",
        "value": "232kgs"
      },
      {
        "label": "G.W.",
        "value": "252kgs"
      },
      {
        "label": "Installation size",
        "value": "1350*1200*1620mm"
      },
      {
        "label": "Weight stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "144",
    "modelCode": "61A25A",
    "name": "Standing Leg Curl",
    "description": "YR Fitness 61A25A Standing Leg Curl offers customizable hamstring training with adjustable rollers, grip options, and platform. Built for comfort and control, it ensures safe, effective movement for users of all sizes and skill levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A25A Standing Leg Curl offers customizable hamstring training with adjustable rollers, grip options, and platform. Built for comfort and control, it ensures safe, effective movement for users of all sizes and skill levels."
        ]
      }
    ],
    "image": "/assets/products/16/9.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "235kgs"
      },
      {
        "label": "G.W",
        "value": "248kgs"
      },
      {
        "label": "Installation Size",
        "value": ": 1310*1135*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "100kg-20pcs"
      }
    ]
  },
  {
    "id": "145",
    "modelCode": "61A26",
    "name": "Prone Leg Curl",
    "description": "YR Fitness 61A26 Prone Leg Curl isolates hamstrings in a safe lying position with a five-point adjustable start and angled support to reduce lower back strain. It’s perfect for smooth, effective leg training in any fitness setting.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A26 Prone Leg Curl isolates hamstrings in a safe lying position with a five-point adjustable start and angled support to reduce lower back strain. It’s perfect for smooth, effective leg training in any fitness setting."
        ]
      }
    ],
    "image": "/assets/products/17/1.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "194kgs"
      },
      {
        "label": "G.W",
        "value": "205kgs"
      },
      {
        "label": "Installation Size",
        "value": "1580*1120*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "146",
    "modelCode": "82018",
    "name": "Plate Loaded Seated Calf",
    "description": "YR Fitness 82018 delivers efficient and isolated calf training through a simple, stable, and durable seated platform. It’s a must-have for completing any lower-body strength program.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82018 delivers efficient and isolated calf training through a simple, stable, and durable seated platform. It’s a must-have for completing any lower-body strength program."
        ]
      }
    ],
    "image": "/assets/products/17/2.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "86kgs"
      },
      {
        "label": "G.W",
        "value": "135kgs"
      },
      {
        "label": "Installation Size",
        "value": "1670*690*1136mm"
      }
    ]
  },
  {
    "id": "147",
    "modelCode": "82019",
    "name": "Standing Calf Machine",
    "description": "YR Fitness 82019 delivers standing calf raises with adjustable resistance and balance-focused benefits, ideal for building powerful lower legs with functional control.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82019 delivers standing calf raises with adjustable resistance and balance-focused benefits, ideal for building powerful lower legs with functional control."
        ]
      }
    ],
    "image": "/assets/products/17/3.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "123kgs"
      },
      {
        "label": "G.W",
        "value": "186kgs"
      },
      {
        "label": "Installation Size",
        "value": "1517*1060*1571mm"
      }
    ]
  },
  {
    "id": "148",
    "modelCode": "82023",
    "name": "ISO Lateral Leg Extension",
    "description": "YR Fitness 82023 delivers safe, isolated quad work with ergonomic support and customizable resistance—ideal for balanced lower-body strength development.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82023 delivers safe, isolated quad work with ergonomic support and customizable resistance—ideal for balanced lower-body strength development."
        ]
      }
    ],
    "image": "/assets/products/17/4.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "130kgs"
      },
      {
        "label": "G.W",
        "value": "164kgs"
      },
      {
        "label": "Installation Size",
        "value": "1500*1500*1000mm"
      }
    ]
  },
  {
    "id": "149",
    "modelCode": "82024",
    "name": "ISO Lateral Leg Curl",
    "description": "YR Fitness 82024 supports balanced hamstring training with independent leg action and ergonomic comfort—ideal for strength building and injury prevention in any leg program.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82024 supports balanced hamstring training with independent leg action and ergonomic comfort—ideal for strength building and injury prevention in any leg program."
        ]
      }
    ],
    "image": "/assets/products/17/5.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "110kgs"
      },
      {
        "label": "G.W",
        "value": "143kgs"
      },
      {
        "label": "Installation Size",
        "value": "1700*1550*950mm"
      }
    ]
  },
  {
    "id": "150",
    "modelCode": "82025",
    "name": "Hip Trainer",
    "description": "YR Fitness 82025 enables dynamic hip and thigh training through its multi-functional design and adjustable resistance—perfect for developing strength, balance, and symmetry in the lower body.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82025 enables dynamic hip and thigh training through its multi-functional design and adjustable resistance—perfect for developing strength, balance, and symmetry in the lower body."
        ]
      }
    ],
    "image": "/assets/products/17/6.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "120kgs"
      },
      {
        "label": "G.W",
        "value": "160kgs"
      },
      {
        "label": "Installation Size",
        "value": "1282*1160*1730mm"
      }
    ]
  },
  {
    "id": "151",
    "modelCode": "82026",
    "name": "Combo Decline",
    "description": "YR Fitness 82026 delivers a unique standing decline training experience that supports functional strength and lower chest development with customizable resistance and ergonomic design.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82026 delivers a unique standing decline training experience that supports functional strength and lower chest development with customizable resistance and ergonomic design."
        ]
      }
    ],
    "image": "/assets/products/17/7.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "170kgs"
      },
      {
        "label": "G.W",
        "value": "220kgs"
      },
      {
        "label": "Installation Size",
        "value": "1580*1753*2160mm"
      }
    ]
  },
  {
    "id": "152",
    "modelCode": "82027",
    "name": "Seated Shrug",
    "description": "YR Fitness 82027 offers a secure and effective solution for upper back training with controlled shrug mechanics, ergonomic support, and customizable resistance.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82027 offers a secure and effective solution for upper back training with controlled shrug mechanics, ergonomic support, and customizable resistance."
        ]
      }
    ],
    "image": "/assets/products/17/8.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "105kgs"
      },
      {
        "label": "G.W",
        "value": "112kgs"
      },
      {
        "label": "Installation Size",
        "value": "1365*1620*1045mm"
      }
    ]
  },
  {
    "id": "153",
    "modelCode": "82028",
    "name": "Linear Leg Press",
    "description": "YR Fitness 82028 delivers powerful lower-body training with a biomechanically sound 45-degree angle and smooth linear motion—ideal for users seeking strength, stability, and muscle growth.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82028 delivers powerful lower-body training with a biomechanically sound 45-degree angle and smooth linear motion—ideal for users seeking strength, stability, and muscle growth."
        ]
      }
    ],
    "image": "/assets/products/17/9.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "196kgs"
      },
      {
        "label": "G.W",
        "value": "234kgs"
      },
      {
        "label": "Installation Size",
        "value": "2450*1200*1450mm"
      }
    ]
  },
  {
    "id": "154",
    "modelCode": "82029",
    "name": "Ground Base Squat Lunge",
    "description": "YR Fitness 82029 delivers versatile, functional lower-body training by combining squats and lunges in one ground-based unit—ideal for enhancing strength, power, and coordination.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82029 delivers versatile, functional lower-body training by combining squats and lunges in one ground-based unit—ideal for enhancing strength, power, and coordination."
        ]
      }
    ],
    "image": "/assets/products/18/1.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "77kgs"
      },
      {
        "label": "G.W",
        "value": "116kgs"
      },
      {
        "label": "Installation Size",
        "value": "1500*1325*800mm"
      }
    ]
  },
  {
    "id": "155",
    "modelCode": "82030",
    "name": "Plate Loaded Glute",
    "description": "YR Fitness 82030 is a dedicated glute training machine that supports strength, symmetry, and performance with safe, targeted movement and adjustable resistance.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82030 is a dedicated glute training machine that supports strength, symmetry, and performance with safe, targeted movement and adjustable resistance."
        ]
      }
    ],
    "image": "/assets/products/18/2.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "82kgs"
      },
      {
        "label": "G.W",
        "value": "133kgs"
      },
      {
        "label": "Installation Size",
        "value": "1170*925*1420mm"
      }
    ]
  },
  {
    "id": "156",
    "modelCode": "6280B",
    "name": "9 Station Multi Jungle",
    "description": "YR Fitness 9 Station Multi Jungle 6280B is a versatile training system designed for group workouts and multiple strength exercises. It supports up to four users at once and features customizable setups, smooth cable motion, and durable construction, ideal for gyms focused on variety and performance.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 9 Station Multi Jungle 6280B is a versatile training system designed for group workouts and multiple strength exercises. It supports up to four users at once and features customizable setups, smooth cable motion, and durable construction, ideal for gyms focused on variety and performance."
        ]
      }
    ],
    "image": "/assets/products/18/3.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "157",
    "modelCode": "6280C",
    "name": "14 Station Multi Jungle",
    "description": "YR Fitness 14 Station Multi Jungle 6280C is a powerful, space-saving solution for group training. It supports up to four users at once with endless cable exercise options, helping build strength, balance, and stability through smooth, customizable movements in a durable and high-quality design.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 14 Station Multi Jungle 6280C is a powerful, space-saving solution for group training. It supports up to four users at once with endless cable exercise options, helping build strength, balance, and stability through smooth, customizable movements in a durable and high-quality design."
        ]
      }
    ],
    "image": "/assets/products/18/4.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "158",
    "modelCode": "61A57",
    "name": "Sissy Squat Combo Trainer",
    "description": "YR Fitness Sissy Squat Combo Trainer 61A57 is a compact, durable machine designed to build lower body strength. Made with strong steel, high-density foam, and easy-roll wheels, it offers a stable and comfortable workout for both home and commercial gyms.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Sissy Squat Combo Trainer 61A57 is a compact, durable machine designed to build lower body strength. Made with strong steel, high-density foam, and easy-roll wheels, it offers a stable and comfortable workout for both home and commercial gyms."
        ]
      }
    ],
    "image": "/assets/products/18/5.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg",
      "Hip"
    ]
  },
  {
    "id": "159",
    "modelCode": "61A21A",
    "name": "Gluteus Maximus Trainer",
    "description": "YR Fitness 61A21A Gluteus Maximus Trainer provides a safer, more effective glute workout than traditional machines. Its ergonomic, pin-loaded design ensures better muscle targeting, adjustable resistance, and smooth motion for all training levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A21A Gluteus Maximus Trainer provides a safer, more effective glute workout than traditional machines. Its ergonomic, pin-loaded design ensures better muscle targeting, adjustable resistance, and smooth motion for all training levels."
        ]
      }
    ],
    "image": "/assets/products/18/6.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "198kgs"
      },
      {
        "label": "G.W",
        "value": "210kgs"
      },
      {
        "label": "Installation Size",
        "value": "1216*820*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "160",
    "modelCode": "61A16A",
    "name": "Knee-on Assisted Chin/Dip",
    "description": "YR Fitness 61A16A Knee-on Assisted Chin/Dip offers safe and adjustable support for bodyweight exercises. With or without the knee pad, it helps users of all levels build upper body strength through controlled chin-up and dip training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A16A Knee-on Assisted Chin/Dip offers safe and adjustable support for bodyweight exercises. With or without the knee pad, it helps users of all levels build upper body strength through controlled chin-up and dip training."
        ]
      }
    ],
    "image": "/assets/products/18/7.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "223kgs"
      },
      {
        "label": "G.W",
        "value": "235kgs"
      },
      {
        "label": "Installation Size",
        "value": "1000*1200*2250mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "161",
    "modelCode": "TB01",
    "name": "Triceps Weight Bar",
    "description": "YR Fitness TB01 Triceps Weight Bar is perfect for targeting your triceps and upper body. With multiple grip options and a compact, durable design, it helps you train with control and comfort. Great for adding variety to your workout in any gym setup. &nbsp; &nbsp; &nbsp;",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness TB01 Triceps Weight Bar is perfect for targeting your triceps and upper body. With multiple grip options and a compact, durable design, it helps you train with control and comfort. Great for adding variety to your workout in any gym setup. &nbsp; &nbsp; &nbsp;"
        ]
      }
    ],
    "image": "/assets/products/18/8.avif",
    "series": "Strength Equipment",
    "muscleGroups": [
      "Arm"
    ]
  },
  {
    "id": "162",
    "modelCode": "82031",
    "name": "Prone Leg Trainer",
    "description": "YR Fitness 82031 supports complete and isolated hamstring training with ergonomic support and resistance versatility—ideal for balanced leg development and performance enhancement.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82031 supports complete and isolated hamstring training with ergonomic support and resistance versatility—ideal for balanced leg development and performance enhancement."
        ]
      }
    ],
    "image": "/assets/products/18/9.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "206kgs"
      },
      {
        "label": "Installation Size",
        "value": "2317*1402*1404mm / 77*43*54in"
      },
      {
        "label": "Muscle",
        "value": "Hip, Leg"
      }
    ]
  },
  {
    "id": "163",
    "modelCode": "7357",
    "name": "Squat Plate",
    "description": "YR Fitness 7357 Squat Plate supports deep squat and sit-up training with adjustable seating for user comfort. Ideal for targeting lower body and core muscles in a compact, multi-use design.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7357 Squat Plate supports deep squat and sit-up training with adjustable seating for user comfort. Ideal for targeting lower body and core muscles in a compact, multi-use design."
        ]
      }
    ],
    "image": "/assets/products/19/1.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "45kgs"
      },
      {
        "label": "G.W",
        "value": "55kgs"
      },
      {
        "label": "Installation Size",
        "value": "980*650*480mm"
      }
    ]
  },
  {
    "id": "164",
    "modelCode": "7355",
    "name": "Utility Bench",
    "description": "YR Fitness 7355 Utility Bench provides firm 90° back support for focused upper body workouts. Built with quality materials for lasting comfort and performance.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7355 Utility Bench provides firm 90° back support for focused upper body workouts. Built with quality materials for lasting comfort and performance."
        ]
      }
    ],
    "image": "/assets/products/19/2.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "20kgs"
      },
      {
        "label": "G.W",
        "value": "30kgs"
      },
      {
        "label": "Installation Size",
        "value": "680*600*860mm"
      }
    ]
  },
  {
    "id": "165",
    "modelCode": "7354",
    "name": "Barbell Rack",
    "description": "YR Fitness 7354 Barbell Rack holds 9 barbells securely with thick stainless steel holders. Built for durability and safety, it helps keep training areas clean and well-organized.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7354 Barbell Rack holds 9 barbells securely with thick stainless steel holders. Built for durability and safety, it helps keep training areas clean and well-organized."
        ]
      }
    ],
    "image": "/assets/products/19/3.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "80kgs"
      },
      {
        "label": "G.W",
        "value": "120kgs"
      },
      {
        "label": "Installation Size",
        "value": "560*850*1300mm"
      }
    ]
  },
  {
    "id": "166",
    "modelCode": "7351",
    "name": "Plate Rack",
    "description": "YR Fitness 7351 Plate Rack is a heavy-duty storage solution with four strong, stainless steel sleeves. Built to last, it keeps plates organized and easily accessible in any fitness space.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7351 Plate Rack is a heavy-duty storage solution with four strong, stainless steel sleeves. Built to last, it keeps plates organized and easily accessible in any fitness space."
        ]
      }
    ],
    "image": "/assets/products/19/4.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "51kgs"
      },
      {
        "label": "G.W",
        "value": "101kgs"
      },
      {
        "label": "Installation Size",
        "value": "610*525*915mm"
      }
    ]
  },
  {
    "id": "167",
    "modelCode": "7350",
    "name": "Incline Bench 60°",
    "description": "YR Fitness 7350 Incline Bench 60° offers a steeper incline for targeted upper body training. Built for comfort and durability, it ensures proper support and posture during demanding chest and shoulder exercises.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7350 Incline Bench 60° offers a steeper incline for targeted upper body training. Built for comfort and durability, it ensures proper support and posture during demanding chest and shoulder exercises."
        ]
      }
    ],
    "image": "/assets/products/19/5.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "27kgs"
      },
      {
        "label": "G.W",
        "value": "77kgs"
      },
      {
        "label": "Installation Size",
        "value": "1032*525*1087mm"
      }
    ]
  },
  {
    "id": "168",
    "modelCode": "7349",
    "name": "Incline Bench 45°",
    "description": "YR Fitness 7349 Incline Bench 45° provides a secure 45-degree incline for targeted upper chest training. Built with strong materials and cushioned support for lasting comfort and performance.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7349 Incline Bench 45° provides a secure 45-degree incline for targeted upper chest training. Built with strong materials and cushioned support for lasting comfort and performance."
        ]
      }
    ],
    "image": "/assets/products/19/6.avif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "27kgs"
      },
      {
        "label": "G.W",
        "value": "37kgs"
      },
      {
        "label": "Installation Size",
        "value": "1032*525*1087mm"
      }
    ]
  },
  {
    "id": "169",
    "modelCode": "7348",
    "name": "Incline Bench 30°",
    "description": "YR Fitness 7348 Incline Bench 30° delivers a stable 30-degree angle for focused upper chest workouts. Built with durable materials and quality padding for comfort and performance.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7348 Incline Bench 30° delivers a stable 30-degree angle for focused upper chest workouts. Built with durable materials and quality padding for comfort and performance."
        ]
      }
    ],
    "image": "/assets/products/19/7.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "27kgs"
      },
      {
        "label": "G.W",
        "value": "77kgs"
      },
      {
        "label": "Installation Size",
        "value": "1032*525*1087mm"
      }
    ]
  },
  {
    "id": "170",
    "modelCode": "7347",
    "name": "Multifunctional Flat Bench",
    "description": "YR Fitness 7347 Multifunctional Flat Bench offers strong, reliable support for full-body workouts, from chest presses to core exercises. Built for durability and comfort in any gym setting.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7347 Multifunctional Flat Bench offers strong, reliable support for full-body workouts, from chest presses to core exercises. Built for durability and comfort in any gym setting."
        ]
      }
    ],
    "image": "/assets/products/19/8.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "22kgs"
      },
      {
        "label": "G.W",
        "value": "72kgs"
      },
      {
        "label": "Installation Size",
        "value": "1153*536*485mm"
      }
    ]
  },
  {
    "id": "171",
    "modelCode": "7346",
    "name": "Multifunction Adjustable Bench",
    "description": "YR Fitness 7346 Multifunction Adjustable Bench offers ergonomic support with automatic seat adjustment and a slim back pad, making it ideal for versatile and unrestricted upper body workouts.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7346 Multifunction Adjustable Bench offers ergonomic support with automatic seat adjustment and a slim back pad, making it ideal for versatile and unrestricted upper body workouts."
        ]
      }
    ],
    "image": "/assets/products/19/9.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "29kgs"
      },
      {
        "label": "G.W",
        "value": "79kgs"
      },
      {
        "label": "Installation Size",
        "value": "1265*526*1095mm"
      }
    ]
  },
  {
    "id": "172",
    "modelCode": "7345",
    "name": "Knees Up/Dip",
    "description": "YR Fitness 7345 Knees Up/Dip provides stable and comfortable support for core and upper body training. Ideal for users targeting abs, chest, and arms in a compact, durable design.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7345 Knees Up/Dip provides stable and comfortable support for core and upper body training. Ideal for users targeting abs, chest, and arms in a compact, durable design."
        ]
      }
    ],
    "image": "/assets/products/20/1.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "59kgs"
      },
      {
        "label": "G.W",
        "value": "109kgs"
      },
      {
        "label": "Installation Size",
        "value": "1077*783*1643mm"
      }
    ]
  },
  {
    "id": "173",
    "modelCode": "7343",
    "name": "Adjustable Roman Bench",
    "description": "YR Fitness 7343 Adjustable Roman Bench offers strong support for back and core workouts with a 45° incline and customizable footplate. Designed for effective training across various fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7343 Adjustable Roman Bench offers strong support for back and core workouts with a 45° incline and customizable footplate. Designed for effective training across various fitness levels."
        ]
      }
    ],
    "image": "/assets/products/20/2.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "43kgs"
      },
      {
        "label": "G.W",
        "value": "93kgs"
      },
      {
        "label": "Installation Size",
        "value": "1282*862*933mm"
      }
    ]
  },
  {
    "id": "174",
    "modelCode": "7342",
    "name": "Angled Ab Board",
    "description": "YR Fitness 7342 Angled Ab Board provides stable and comfortable support for core exercises, helping users build abdominal strength with proper form. Durable construction ensures safe long-term use.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7342 Angled Ab Board provides stable and comfortable support for core exercises, helping users build abdominal strength with proper form. Durable construction ensures safe long-term use."
        ]
      }
    ],
    "image": "/assets/products/20/3.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "41kgs"
      },
      {
        "label": "G.W",
        "value": "51kgs"
      },
      {
        "label": "Installation Size",
        "value": "1525*665*950mm"
      }
    ]
  },
  {
    "id": "175",
    "modelCode": "7341",
    "name": "Adjustable Ab Board",
    "description": "YR Fitness 7341 Adjustable Ab Board offers a stable and adjustable platform for core training. Ideal for performing a wide range of abdominal exercises with proper support and flexibility.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7341 Adjustable Ab Board offers a stable and adjustable platform for core training. Ideal for performing a wide range of abdominal exercises with proper support and flexibility."
        ]
      }
    ],
    "image": "/assets/products/20/4.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "71kgs"
      },
      {
        "label": "G.W",
        "value": "121kgs"
      },
      {
        "label": "Installation Size",
        "value": "1720*725*1340mm"
      }
    ]
  },
  {
    "id": "176",
    "modelCode": "7340",
    "name": "Olympic Decline Bench",
    "description": "YR Fitness 7340 Olympic Decline Bench delivers reliable support for decline pressing exercises. With a strong frame and comfort-focused design, it’s perfect for safe and effective strength training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7340 Olympic Decline Bench delivers reliable support for decline pressing exercises. With a strong frame and comfort-focused design, it’s perfect for safe and effective strength training."
        ]
      }
    ],
    "image": "/assets/products/20/5.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "100kgs"
      },
      {
        "label": "G.W",
        "value": "150kgs"
      },
      {
        "label": "Installation Size",
        "value": "1835*1785*1125mm"
      }
    ]
  },
  {
    "id": "177",
    "modelCode": "7339",
    "name": "Olympic Flat Bench",
    "description": "YR Fitness 7339 Olympic Flat Bench offers a sturdy platform for flat bench pressing. Designed for comfort and long-term use, it&#8217;s a reliable addition to any gym or strength training setup.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7339 Olympic Flat Bench offers a sturdy platform for flat bench pressing. Designed for comfort and long-term use, it&#8217;s a reliable addition to any gym or strength training setup."
        ]
      }
    ],
    "image": "/assets/products/20/6.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "100kgs"
      },
      {
        "label": "G.W",
        "value": "150kgs"
      },
      {
        "label": "Installation Size",
        "value": "1835*1485*1125mm"
      }
    ]
  },
  {
    "id": "178",
    "modelCode": "7338",
    "name": "Olympic Incline Bench",
    "description": "YR Fitness 7338 Olympic Incline Bench provides secure and comfortable support for incline presses. With a heavy-duty frame and padded seating, it&#8217;s ideal for focused upper chest development in any training facility.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7338 Olympic Incline Bench provides secure and comfortable support for incline presses. With a heavy-duty frame and padded seating, it&#8217;s ideal for focused upper chest development in any training facility."
        ]
      }
    ],
    "image": "/assets/products/20/7.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "102kgs"
      },
      {
        "label": "G.W",
        "value": "152kgs"
      },
      {
        "label": "Installation Size",
        "value": "1835*1740*1340mm"
      }
    ]
  },
  {
    "id": "179",
    "modelCode": "7337",
    "name": "Biceps Curl Rack",
    "description": "YR Fitness 7337 Biceps Curl Rack is designed for safe and stable arm training. With durable materials, ergonomic support, and reinforced safety features, it&#8217;s ideal for building stronger, well-defined biceps.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7337 Biceps Curl Rack is designed for safe and stable arm training. With durable materials, ergonomic support, and reinforced safety features, it&#8217;s ideal for building stronger, well-defined biceps."
        ]
      }
    ],
    "image": "/assets/products/20/8.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm"
    ]
  },
  {
    "id": "180",
    "modelCode": "7336",
    "name": "T Bar",
    "description": "YR Fitness 7336 T Bar is a compact and sturdy solution for effective back training. With a durable steel frame and sleek aluminum end caps, it supports powerful T-bar row workouts in any gym setting.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7336 T Bar is a compact and sturdy solution for effective back training. With a durable steel frame and sleek aluminum end caps, it supports powerful T-bar row workouts in any gym setting."
        ]
      }
    ],
    "image": "/assets/products/20/9.avif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "62kgs"
      },
      {
        "label": "G.W",
        "value": "112kgs"
      },
      {
        "label": "Installation Size",
        "value": "1570*830*500mm"
      }
    ]
  },
  {
    "id": "181",
    "modelCode": "7334",
    "name": "Power Cage",
    "description": "YR Fitness 7334 Power Cage provides a stable, reinforced frame for free weight training. With durable construction and integrated bar storage, it supports a wide range of strength exercises with safety and reliability.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7334 Power Cage provides a stable, reinforced frame for free weight training. With durable construction and integrated bar storage, it supports a wide range of strength exercises with safety and reliability."
        ]
      }
    ],
    "image": "/assets/products/21/1.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "182",
    "modelCode": "7333",
    "name": "Smith Machine",
    "description": "YR Fitness 7333 Smith Machine features a patented hook system and counterbalanced design for safe, smooth training. With high-strength materials and a 2000 lb capacity bar, it supports serious lifting in a secure, user-friendly setup.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7333 Smith Machine features a patented hook system and counterbalanced design for safe, smooth training. With high-strength materials and a 2000 lb capacity bar, it supports serious lifting in a secure, user-friendly setup."
        ]
      }
    ],
    "image": "/assets/products/21/2.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "228kgs"
      },
      {
        "label": "G.W",
        "value": "278kgs"
      },
      {
        "label": "Installation Size",
        "value": ": 2502*1150*2310mm"
      }
    ]
  },
  {
    "id": "183",
    "modelCode": "7332A",
    "name": "Functional Trainer",
    "description": "YR Fitness 7332A Functional Trainer delivers smooth cable movement and over 60 exercises for a full-body workout. Ideal for gym, it combines strength, flexibility, and space-saving design.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7332A Functional Trainer delivers smooth cable movement and over 60 exercises for a full-body workout. Ideal for gym, it combines strength, flexibility, and space-saving design."
        ]
      }
    ],
    "image": "/assets/products/21/3.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Shoulder",
      "Arm",
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "360kgs"
      },
      {
        "label": "G.W",
        "value": "410kgs"
      },
      {
        "label": "Installation Size",
        "value": "1765*1060*2220mm"
      },
      {
        "label": "Weight Stacks",
        "value": "140kg-28pcs"
      }
    ]
  },
  {
    "id": "184",
    "modelCode": "7332",
    "name": "Adjustable Crossover",
    "description": "YR Fitness 7332 Adjustable Crossover delivers smooth and easy adjustments for diverse cable exercises. Built for stability, comfort, and wide usability, it supports full-body functional training with precision and control.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7332 Adjustable Crossover delivers smooth and easy adjustments for diverse cable exercises. Built for stability, comfort, and wide usability, it supports full-body functional training with precision and control."
        ]
      }
    ],
    "image": "/assets/products/21/4.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "377kgs"
      },
      {
        "label": "G.W",
        "value": "427kgs"
      },
      {
        "label": "Installation Size",
        "value": "3850*700*2295mm"
      },
      {
        "label": "Weight Stacks",
        "value": "140kg-28pcs"
      }
    ]
  },
  {
    "id": "185",
    "modelCode": "7331",
    "name": "Standing Calf",
    "description": "YR Fitness 7331 Standing Calf is designed for safe and effective calf muscle training with adjustable pads and full ankle movement. Ideal for users of all sizes seeking better strength and definition in their lower legs.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7331 Standing Calf is designed for safe and effective calf muscle training with adjustable pads and full ankle movement. Ideal for users of all sizes seeking better strength and definition in their lower legs."
        ]
      }
    ],
    "image": "/assets/products/21/5.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "268kgs"
      },
      {
        "label": "G.W",
        "value": "368kgs"
      },
      {
        "label": "Installation Size",
        "value": "1315*1100*1672mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "186",
    "modelCode": "7330",
    "name": "Seated Calf",
    "description": "YR Fitness 7330 Seated Calf offers smooth and effective calf training with a unique pin-loaded design. It’s perfect for users seeking a safer and more convenient alternative to traditional plate-loaded machines.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7330 Seated Calf offers smooth and effective calf training with a unique pin-loaded design. It’s perfect for users seeking a safer and more convenient alternative to traditional plate-loaded machines."
        ]
      }
    ],
    "image": "/assets/products/21/6.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "244kgs"
      },
      {
        "label": "G.W",
        "value": "344kgs"
      },
      {
        "label": "Installation Size",
        "value": "1660*950*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "100kg-20pcs"
      }
    ]
  },
  {
    "id": "187",
    "modelCode": "7327",
    "name": "Power Squat",
    "description": "YR Fitness 7327 Power Squat builds explosive leg strength with proper form and safe design. Ideal for athletes and general users looking to enhance lower-body performance and stability.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7327 Power Squat builds explosive leg strength with proper form and safe design. Ideal for athletes and general users looking to enhance lower-body performance and stability."
        ]
      }
    ],
    "image": "/assets/products/21/7.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "268kgs"
      },
      {
        "label": "G.W",
        "value": "368kgs"
      },
      {
        "label": "Installation Size",
        "value": "2015*1280*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "188",
    "modelCode": "7326",
    "name": "Prone Leg Curl",
    "description": "YR Fitness 7326 Prone Leg Curl is engineered to isolate and train hamstrings with superior comfort and range-of-motion adjustability. Ideal for safe and focused lower-body development in any training environment.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7326 Prone Leg Curl is engineered to isolate and train hamstrings with superior comfort and range-of-motion adjustability. Ideal for safe and focused lower-body development in any training environment."
        ]
      }
    ],
    "image": "/assets/products/21/8.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "220kgs"
      },
      {
        "label": "G.W",
        "value": "320kgs"
      },
      {
        "label": "Installation Size",
        "value": "1680*1060*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "189",
    "modelCode": "7325",
    "name": "Seated Leg Curl",
    "description": "YR Fitness 7325 Seated Leg Curl helps build strong, defined hamstrings with adjustable positioning for comfort and proper form. Ideal for precise lower-body isolation and long-term training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7325 Seated Leg Curl helps build strong, defined hamstrings with adjustable positioning for comfort and proper form. Ideal for precise lower-body isolation and long-term training."
        ]
      }
    ],
    "image": "/assets/products/21/9.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "219kgs"
      },
      {
        "label": "G.W",
        "value": "319kgs"
      },
      {
        "label": "Installation Size",
        "value": "1650*1070*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "190",
    "modelCode": "7324",
    "name": "Leg Extension",
    "description": "YR Fitness 7324 Leg Extension is designed to isolate and build quadriceps strength with easy seat-side adjustments, smooth movement, and solid construction—ideal for focused lower-body training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7324 Leg Extension is designed to isolate and build quadriceps strength with easy seat-side adjustments, smooth movement, and solid construction—ideal for focused lower-body training."
        ]
      }
    ],
    "image": "/assets/products/22/1.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "210kgs"
      },
      {
        "label": "G.W",
        "value": "310kgs"
      },
      {
        "label": "Installation Size",
        "value": "1600*1050*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "191",
    "modelCode": "7360",
    "name": "Adduction/Abduction",
    "description": "YR Fitness 7360 Adduction/Abduction offers two essential thigh workouts in one machine. With ergonomic adjustments and premium materials, it ensures safe, private, and effective lower body training for all users.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7360 Adduction/Abduction offers two essential thigh workouts in one machine. With ergonomic adjustments and premium materials, it ensures safe, private, and effective lower body training for all users."
        ]
      }
    ],
    "image": "/assets/products/22/2.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "238kgs"
      },
      {
        "label": "G.W",
        "value": "338kgs"
      },
      {
        "label": "Installation Size",
        "value": ": 1360*1160*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": ": 90kg-18pcs"
      }
    ]
  },
  {
    "id": "192",
    "modelCode": "7323",
    "name": "Hip Abduction",
    "description": "YR Fitness 7323 Hip Abduction provides smooth, stable, and targeted outer thigh training with premium materials, privacy-enhancing design, and adjustable features for a safe and comfortable experience.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7323 Hip Abduction provides smooth, stable, and targeted outer thigh training with premium materials, privacy-enhancing design, and adjustable features for a safe and comfortable experience."
        ]
      }
    ],
    "image": "/assets/products/22/3.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "238kgs"
      },
      {
        "label": "G.W",
        "value": "338kgs"
      },
      {
        "label": "Installation Size",
        "value": "1360*1160*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "193",
    "modelCode": "7322",
    "name": "Hip Adduction",
    "description": "YR Fitness 7322 Hip Adduction delivers safe and efficient inner thigh training with an ergonomic design, adjustable settings, and premium materials—perfect for both beginners and experienced gym users.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7322 Hip Adduction delivers safe and efficient inner thigh training with an ergonomic design, adjustable settings, and premium materials—perfect for both beginners and experienced gym users."
        ]
      }
    ],
    "image": "/assets/products/22/4.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "238kgs"
      },
      {
        "label": "G.W",
        "value": "338kgs"
      },
      {
        "label": "Installation Size",
        "value": "1360*1160*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "194",
    "modelCode": "7321",
    "name": "Gluteus Maximus Trainer",
    "description": "YR Fitness 7321 Gluteus Maximus Trainer offers targeted glute development with a natural rear leg extension motion and a rotating footplate for added variety. Built for comfort and performance, it&#8217;s ideal for any gym setup.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7321 Gluteus Maximus Trainer offers targeted glute development with a natural rear leg extension motion and a rotating footplate for added variety. Built for comfort and performance, it&#8217;s ideal for any gym setup."
        ]
      }
    ],
    "image": "/assets/products/22/5.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "224kgs"
      },
      {
        "label": "G.W",
        "value": "324kgs"
      },
      {
        "label": "Installation Size",
        "value": "1220*890*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "195",
    "modelCode": "7320",
    "name": "Multi Hip",
    "description": "YR Fitness 7320 Multi Hip is a versatile machine for lower body development. Its adjustable platform and smooth bidirectional resistance make it ideal for targeted hip and leg workouts in any strength training program.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7320 Multi Hip is a versatile machine for lower body development. Its adjustable platform and smooth bidirectional resistance make it ideal for targeted hip and leg workouts in any strength training program."
        ]
      }
    ],
    "image": "/assets/products/22/6.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "252kgs"
      },
      {
        "label": "G.W",
        "value": "352kgs"
      },
      {
        "label": "Installation Size",
        "value": "1290*1080*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "196",
    "modelCode": "7319A",
    "name": "Side Training",
    "description": "YR Fitness 7319A Side Training is designed to focus on the externus oblique for advanced muscle isolation. Ideal for professional settings, it delivers smooth movement, secure support, and durable performance, ensuring complete and balanced core development.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7319A Side Training is designed to focus on the externus oblique for advanced muscle isolation. Ideal for professional settings, it delivers smooth movement, secure support, and durable performance, ensuring complete and balanced core development."
        ]
      }
    ],
    "image": "/assets/products/22/7.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Abdominal",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "260kgs"
      },
      {
        "label": "G.W",
        "value": "360kgs"
      },
      {
        "label": "Installation Size",
        "value": "1200*1060*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "197",
    "modelCode": "7319",
    "name": "Rotary Torso",
    "description": "YR Fitness 7319 Rotary Torso offers a safe and effective way to train your obliques and core muscles. With smooth rotational motion, excellent stabilization, and durable construction, it&#8217;s ideal for improving mobility, posture, and strength in one compact design.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7319 Rotary Torso offers a safe and effective way to train your obliques and core muscles. With smooth rotational motion, excellent stabilization, and durable construction, it&#8217;s ideal for improving mobility, posture, and strength in one compact design."
        ]
      }
    ],
    "image": "/assets/products/22/8.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "252kgs"
      },
      {
        "label": "G.W",
        "value": "352kgs"
      },
      {
        "label": "Installation Size",
        "value": "1200*1060*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "198",
    "modelCode": "7318A",
    "name": "Lower Abdominal Trainer",
    "description": "YR Fitness 7318A Lower Abdominal Trainer features a unique design that targets your lower abs with precision. Built for smooth motion and lasting durability, it offers a focused core workout ideal for strengthening and defining the lower abdominal muscles.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7318A Lower Abdominal Trainer features a unique design that targets your lower abs with precision. Built for smooth motion and lasting durability, it offers a focused core workout ideal for strengthening and defining the lower abdominal muscles."
        ]
      }
    ],
    "image": "/assets/products/22/9.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "230kgs"
      },
      {
        "label": "G.W",
        "value": "330kgs"
      },
      {
        "label": "Installation Size",
        "value": "1480*1100*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "199",
    "modelCode": "7318",
    "name": "Upper/Mid Abdominal Trainer",
    "description": "YR Fitness 7318 Upper/Mid Abdominal Trainer helps you build strong core muscles safely and comfortably. With adjustable ankle pads and smooth motion, it offers a focused workout experience suitable for all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7318 Upper/Mid Abdominal Trainer helps you build strong core muscles safely and comfortably. With adjustable ankle pads and smooth motion, it offers a focused workout experience suitable for all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/23/1.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "229kgs"
      },
      {
        "label": "G.W",
        "value": "329kgs"
      },
      {
        "label": "Installation Size",
        "value": "1200*1160*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "200",
    "modelCode": "7317",
    "name": "Back Extension",
    "description": "YR Fitness 7317 Back Extension supports safe and controlled lower back training with its five-position adjustable range. Built with high-quality materials and ergonomic design, it delivers smooth motion and reliable performance for all users.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7317 Back Extension supports safe and controlled lower back training with its five-position adjustable range. Built with high-quality materials and ergonomic design, it delivers smooth motion and reliable performance for all users."
        ]
      }
    ],
    "image": "/assets/products/23/2.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "220kgs"
      },
      {
        "label": "G.W",
        "value": "320kgs"
      },
      {
        "label": "Installation Size",
        "value": "1260*1100*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "201",
    "modelCode": "7316",
    "name": "Assisted Dip/Chinning",
    "description": "YR Fitness 7316 Assisted Dip/Chinning helps users build upper body strength with beginner-friendly support and multi-grip options. It offers safe and comfortable training for dips and chin-ups, making it perfect for all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7316 Assisted Dip/Chinning helps users build upper body strength with beginner-friendly support and multi-grip options. It offers safe and comfortable training for dips and chin-ups, making it perfect for all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/23/3.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "222kgs"
      },
      {
        "label": "G.W",
        "value": "322kgs"
      },
      {
        "label": "Installation Size",
        "value": "1250*1000*2450mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "202",
    "modelCode": "7315",
    "name": "Lat Pull Down",
    "description": "YR Fitness 7315 Lat Pull Down provides a natural, diverging pulling motion with ergonomic rotating handles. Ideal for building upper back strength, it delivers smooth performance and high comfort for effective training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7315 Lat Pull Down provides a natural, diverging pulling motion with ergonomic rotating handles. Ideal for building upper back strength, it delivers smooth performance and high comfort for effective training."
        ]
      }
    ],
    "image": "/assets/products/23/4.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "271kgs"
      },
      {
        "label": "G.W",
        "value": "371kgs"
      },
      {
        "label": "Installation Size",
        "value": "1400*1145*2126mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "203",
    "modelCode": "7314A",
    "name": "45° Upper Back Pull Down",
    "description": "YR Fitness 7314A 45° Upper Back Pull Down features independent diverging arms and rotating handles for a natural, customized upper back workout. With ergonomic design and durable construction, it’s ideal for high-performance strength training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7314A 45° Upper Back Pull Down features independent diverging arms and rotating handles for a natural, customized upper back workout. With ergonomic design and durable construction, it’s ideal for high-performance strength training."
        ]
      }
    ],
    "image": "/assets/products/23/5.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "271kgs"
      },
      {
        "label": "G.W",
        "value": "371kgs"
      },
      {
        "label": "Installation Size",
        "value": "1400*1145*2126mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "204",
    "modelCode": "7314",
    "name": "Seated Row",
    "description": "YR Fitness 7314 Seated Row delivers a natural and powerful pulling motion through independent arms and ergonomic handles. Designed for optimal back engagement and user comfort, it&#8217;s built for performance and long-term durability.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7314 Seated Row delivers a natural and powerful pulling motion through independent arms and ergonomic handles. Designed for optimal back engagement and user comfort, it&#8217;s built for performance and long-term durability."
        ]
      }
    ],
    "image": "/assets/products/23/6.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "238kgs"
      },
      {
        "label": "G.W",
        "value": "338kgs"
      },
      {
        "label": "Installation Size",
        "value": "1465*1020*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "205",
    "modelCode": "7313",
    "name": "Low Row",
    "description": "YR Fitness 7313 Low Row offers natural, independent arm movement with ergonomic rotating handles for optimal back muscle activation. Built with precision and durability, it ensures a smooth and effective strength training experience.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7313 Low Row offers natural, independent arm movement with ergonomic rotating handles for optimal back muscle activation. Built with precision and durability, it ensures a smooth and effective strength training experience."
        ]
      }
    ],
    "image": "/assets/products/23/7.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "190kgs"
      },
      {
        "label": "G.W",
        "value": "290kgs"
      },
      {
        "label": "Installation Size",
        "value": "1660*1070*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "206",
    "modelCode": "7312",
    "name": "Triceps Extension",
    "description": "YR Fitness 7312 Triceps Extension features independent arms and pivoting handles for smooth, joint-friendly motion. Engineered for precise triceps targeting, it blends ergonomic comfort with commercial-grade durability for advanced strength training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7312 Triceps Extension features independent arms and pivoting handles for smooth, joint-friendly motion. Engineered for precise triceps targeting, it blends ergonomic comfort with commercial-grade durability for advanced strength training."
        ]
      }
    ],
    "image": "/assets/products/23/8.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "227kgs"
      },
      {
        "label": "G.W",
        "value": "327kgs"
      },
      {
        "label": "Installation Size",
        "value": "1560*930*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "207",
    "modelCode": "7311",
    "name": "Tricep Dip",
    "description": "YR Fitness 7311 Tricep Dip uses independent arms and rotating EZ handles to create a smooth, joint-friendly pressing motion. Built for durability and comfort, it delivers focused triceps training with excellent ergonomic support.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7311 Tricep Dip uses independent arms and rotating EZ handles to create a smooth, joint-friendly pressing motion. Built for durability and comfort, it delivers focused triceps training with excellent ergonomic support."
        ]
      }
    ],
    "image": "/assets/products/23/9.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "230kgs"
      },
      {
        "label": "G.W",
        "value": "330kgs"
      },
      {
        "label": "Installation Size",
        "value": "1510*1225*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "208",
    "modelCode": "7309",
    "name": "Pectoral Fly / Rear Deltoid",
    "description": "YR Fitness 7309 Pectoral Fly / Rear Deltoid combines two upper body exercises in one machine. With rotating handles and ergonomic design, it ensures smooth motion and joint safety while building chest and rear shoulder strength.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7309 Pectoral Fly / Rear Deltoid combines two upper body exercises in one machine. With rotating handles and ergonomic design, it ensures smooth motion and joint safety while building chest and rear shoulder strength."
        ]
      }
    ],
    "image": "/assets/products/24/1.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Shoulder",
      "Chest",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "215kgs"
      },
      {
        "label": "G.W",
        "value": "315kgs"
      },
      {
        "label": "Installation Size",
        "value": "1290*1050*1713mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "209",
    "modelCode": "7308",
    "name": "Cross Arm Trainer",
    "description": "YR Fitness 7308 Cross Arm Trainer is a unique machine by Yanre, designed to isolate and sculpt the lateral chest muscles. With smooth mechanics and ergonomic design, it&#8217;s the ideal for advanced users focused on detailed chest developme",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7308 Cross Arm Trainer is a unique machine by Yanre, designed to isolate and sculpt the lateral chest muscles. With smooth mechanics and ergonomic design, it&#8217;s the ideal for advanced users focused on detailed chest developme"
        ]
      }
    ],
    "image": "/assets/products/24/2.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Shoulder",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "215kgs"
      },
      {
        "label": "G.W",
        "value": "315kgs"
      },
      {
        "label": "Installation Size",
        "value": "1290*1050*1713mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "210",
    "modelCode": "7307",
    "name": "Pectoral Butterfly",
    "description": "YR Fitness 7307 Pectoral Butterfly features independent converging arms for natural motion and focused chest muscle activation. Engineered for comfort, precision, and durability, it supports effective and progressive upper body training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7307 Pectoral Butterfly features independent converging arms for natural motion and focused chest muscle activation. Engineered for comfort, precision, and durability, it supports effective and progressive upper body training."
        ]
      }
    ],
    "image": "/assets/products/24/3.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Shoulder",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "285kgs"
      },
      {
        "label": "G.W",
        "value": "385kgs"
      },
      {
        "label": "Installation Size",
        "value": "1830*1650*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "211",
    "modelCode": "7305A",
    "name": "Seated Upper Chest Press",
    "description": "YR Fitness 7305A Seated Upper Chest Press is designed with independent converging arms to provide a natural pressing motion for effective upper chest activation. Built for performance and comfort, it&#8217;s ideal for strength progression in any gym setting.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7305A Seated Upper Chest Press is designed with independent converging arms to provide a natural pressing motion for effective upper chest activation. Built for performance and comfort, it&#8217;s ideal for strength progression in any gym setting."
        ]
      }
    ],
    "image": "/assets/products/24/4.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "260kgs"
      },
      {
        "label": "G.W",
        "value": "360kgs"
      },
      {
        "label": "Installation Size",
        "value": "1680*950*1815mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "212",
    "modelCode": "7305",
    "name": "Mid Chest Press",
    "description": "YR Fitness 7305 Mid Chest Press features independent converging arms for a natural, effective motion that targets the mid-chest. With premium build quality and ergonomic comfort, it&#8217;s designed to support users at all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7305 Mid Chest Press features independent converging arms for a natural, effective motion that targets the mid-chest. With premium build quality and ergonomic comfort, it&#8217;s designed to support users at all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/24/5.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "254kgs"
      },
      {
        "label": "G.W",
        "value": "354kgs"
      },
      {
        "label": "Installation Size",
        "value": "1680*950*1815mm"
      },
      {
        "label": "Weight Stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "213",
    "modelCode": "7304",
    "name": "Lower Chest Press Machine",
    "description": "YR Fitness 7304 Lower Chest Press features independent converging arms for natural, focused lower chest training. With premium construction and ergonomic design, it’s perfect for users building strength and form in their chest workouts.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7304 Lower Chest Press features independent converging arms for natural, focused lower chest training. With premium construction and ergonomic design, it’s perfect for users building strength and form in their chest workouts."
        ]
      }
    ],
    "image": "/assets/products/24/6.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "250kgs"
      },
      {
        "label": "G.W",
        "value": "350kgs"
      },
      {
        "label": "Installation size",
        "value": "1690*870*1610mm"
      },
      {
        "label": "Weight stacks",
        "value": "90kg-18pcs"
      }
    ]
  },
  {
    "id": "214",
    "modelCode": "7303",
    "name": "Seated Lateral Raise",
    "description": "YR Fitness 7303 Seated Lateral Raise uses independent arms and a smooth cam system to replicate natural shoulder movement. Ideal for isolating the middle deltoids, it provides consistent resistance and ergonomic support for efficient shoulder training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7303 Seated Lateral Raise uses independent arms and a smooth cam system to replicate natural shoulder movement. Ideal for isolating the middle deltoids, it provides consistent resistance and ergonomic support for efficient shoulder training."
        ]
      }
    ],
    "image": "/assets/products/24/7.gif",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Shoulder"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "250kgs"
      },
      {
        "label": "G.W",
        "value": "350kgs"
      },
      {
        "label": "Installation size",
        "value": "1250*890*1610mm"
      },
      {
        "label": "Weight stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "215",
    "modelCode": "7302",
    "name": "Shoulder Pull Up",
    "description": "YR Fitness 7302 Shoulder Pull Up is designed for users with shoulder limitations, offering a safer alternative to traditional presses. Its diverging arms and rotating handles ensure natural motion and comfort for effective shoulder workouts.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7302 Shoulder Pull Up is designed for users with shoulder limitations, offering a safer alternative to traditional presses. Its diverging arms and rotating handles ensure natural motion and comfort for effective shoulder workouts."
        ]
      }
    ],
    "image": "/assets/products/24/8.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Shoulder"
    ]
  },
  {
    "id": "216",
    "modelCode": "7301",
    "name": "Seated Shoulder Press",
    "description": "YR Fitness 7301 Seated Shoulder Press features independent converging arms for natural motion and dual-position handles for training variety. Built with durable materials and smooth mechanics, it offers premium shoulder strength training for all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7301 Seated Shoulder Press features independent converging arms for natural motion and dual-position handles for training variety. Built with durable materials and smooth mechanics, it offers premium shoulder strength training for all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/24/9.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Shoulder"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "247kgs"
      },
      {
        "label": "G.W",
        "value": "347kgs"
      },
      {
        "label": "Installation Size",
        "value": "1630*1400*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "217",
    "modelCode": "5336",
    "name": "3 Station 6 Function Trainer",
    "description": "YR Fitness 3 Station 6 Function Trainer 5336 offers a full-body workout in one machine. With six key functions and ergonomic design, it targets both upper and lower body muscles. Easy to use, durable, and built for high-performance training in any gym setting.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 3 Station 6 Function Trainer 5336 offers a full-body workout in one machine. With six key functions and ergonomic design, it targets both upper and lower body muscles. Easy to use, durable, and built for high-performance training in any gym setting."
        ]
      }
    ],
    "image": "/assets/products/25/1.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "218",
    "modelCode": "82016",
    "name": "Plate Loaded Leg Press",
    "description": "YR Fitness 82016 offers controlled, ergonomic leg pressing with a focus on safety and performance. Its plate-loaded design and structural support make it ideal for developing lower-body strength efficiently.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82016 offers controlled, ergonomic leg pressing with a focus on safety and performance. Its plate-loaded design and structural support make it ideal for developing lower-body strength efficiently."
        ]
      }
    ],
    "image": "/assets/products/25/2.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "199kgs"
      },
      {
        "label": "G.W",
        "value": "276kgs"
      },
      {
        "label": "Installation Size",
        "value": "1835*1660*1530mm"
      }
    ]
  },
  {
    "id": "219",
    "modelCode": "82015",
    "name": "ISO-Lateral Horizontal Bench Press",
    "description": "YR Fitness 82015 replicates the traditional bench press with added benefits of independent arm movement and joint-friendly mechanics, supporting safe and effective chest training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82015 replicates the traditional bench press with added benefits of independent arm movement and joint-friendly mechanics, supporting safe and effective chest training."
        ]
      }
    ],
    "image": "/assets/products/25/3.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Shoulder",
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "116kgs"
      },
      {
        "label": "G.W",
        "value": "156kgs"
      },
      {
        "label": "Installation Size",
        "value": "1690*1786*894mm"
      }
    ]
  },
  {
    "id": "220",
    "modelCode": "82014",
    "name": "ISO-Lateral Bench Press",
    "description": "YR Fitness 82014 delivers seated, iso-lateral bench pressing for balanced chest development and safe strength gains. Its ergonomic design and resistance versatility make it ideal for comprehensive upper-body training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82014 delivers seated, iso-lateral bench pressing for balanced chest development and safe strength gains. Its ergonomic design and resistance versatility make it ideal for comprehensive upper-body training."
        ]
      }
    ],
    "image": "/assets/products/25/4.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "146kgs"
      },
      {
        "label": "G.W",
        "value": "215kgs"
      },
      {
        "label": "Installation Size",
        "value": "1908*1068*1842mm"
      }
    ]
  },
  {
    "id": "221",
    "modelCode": "82013",
    "name": "ISO Lateral Decline Bench Press",
    "description": "YR Fitness 82013 delivers smooth, isolated decline pressing to effectively target the lower chest. Its independent arms and adjustable resistance make it a valuable asset for building balanced upper body strength.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82013 delivers smooth, isolated decline pressing to effectively target the lower chest. Its independent arms and adjustable resistance make it a valuable asset for building balanced upper body strength."
        ]
      }
    ],
    "image": "/assets/products/25/5.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Shoulder",
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "126kgs"
      },
      {
        "label": "G.W",
        "value": "171kgs"
      },
      {
        "label": "Installation Size",
        "value": "1863*1625*816mm"
      }
    ]
  },
  {
    "id": "222",
    "modelCode": "61A60",
    "name": "Adductor and Abductor",
    "description": "YR Fitness 61A60 Adductor and Abductor combines two exercises in one smooth, user-friendly machine. With adjustable settings, supportive leg pads, and durable construction, it’s perfect for effective inner and outer thigh training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A60 Adductor and Abductor combines two exercises in one smooth, user-friendly machine. With adjustable settings, supportive leg pads, and durable construction, it’s perfect for effective inner and outer thigh training."
        ]
      }
    ],
    "image": "/assets/products/25/6.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg",
      "Hip"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "212kgs"
      },
      {
        "label": "G.W",
        "value": "221kgs"
      },
      {
        "label": "Installation Size",
        "value": "720*1600*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "223",
    "modelCode": "82012",
    "name": "Incline Chest Press",
    "description": "YR Fitness 82012 offers smooth incline pressing with adjustable resistance, making it an ideal choice for building strength and definition in the upper chest, shoulders, and arms.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82012 offers smooth incline pressing with adjustable resistance, making it an ideal choice for building strength and definition in the upper chest, shoulders, and arms."
        ]
      }
    ],
    "image": "/assets/products/25/7.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Shoulder",
      "Arm",
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "142kgs / 341lbs"
      },
      {
        "label": "G.W",
        "value": "203kgs / 452lbs"
      },
      {
        "label": "Installation Size",
        "value": "2000*1782*1210mm / 79*67*59in"
      }
    ]
  },
  {
    "id": "224",
    "modelCode": "61A55",
    "name": "Utility Bench",
    "description": "YR Fitness Utility Bench 61A55 is a compact, durable bench designed for various strength exercises. Built with strong steel, high-density foam, and smooth PU leather, it also features wheels for easy movement—perfect for home gyms or professional training spaces.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Utility Bench 61A55 is a compact, durable bench designed for various strength exercises. Built with strong steel, high-density foam, and smooth PU leather, it also features wheels for easy movement—perfect for home gyms or professional training spaces."
        ]
      }
    ],
    "image": "/assets/products/25/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest"
    ]
  },
  {
    "id": "225",
    "modelCode": "82011",
    "name": "Ground Base Combo Twist (Right Pull)",
    "description": "YR Fitness 82011 delivers focused right-side core engagement with a plate-loaded, ground-based system. It’s ideal for developing rotational strength, improving stability, and supporting balanced, functional fitness.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82011 delivers focused right-side core engagement with a plate-loaded, ground-based system. It’s ideal for developing rotational strength, improving stability, and supporting balanced, functional fitness."
        ]
      }
    ],
    "image": "/assets/products/25/9.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "75kgs"
      },
      {
        "label": "G.W",
        "value": "125kgs"
      },
      {
        "label": "Installation Size",
        "value": "1300*1400*1200mm"
      }
    ]
  },
  {
    "id": "226",
    "modelCode": "61A54",
    "name": "Five Tiers Barbell Rack",
    "description": "YR Fitness Five Tiers Barbell Rack 61A54 is a strong, space-saving rack that holds up to ten straight or curved barbells. Built with durable steel and stainless-steel hooks, it offers easy access and secure storage—ideal for keeping training areas neat and efficient.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Five Tiers Barbell Rack 61A54 is a strong, space-saving rack that holds up to ten straight or curved barbells. Built with durable steel and stainless-steel hooks, it offers easy access and secure storage—ideal for keeping training areas neat and efficient."
        ]
      }
    ],
    "image": "/assets/products/26/1.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "227",
    "modelCode": "82010",
    "name": "Ground Base Combo Twist (Left Pull)",
    "description": "YR Fitness 82010 enhances core strength and rotational performance with a left-side focus. Its plate-loaded setup and stable base make it ideal for athletes and users seeking powerful, functional core training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82010 enhances core strength and rotational performance with a left-side focus. Its plate-loaded setup and stable base make it ideal for athletes and users seeking powerful, functional core training."
        ]
      }
    ],
    "image": "/assets/products/26/2.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "75kgs"
      },
      {
        "label": "G.W",
        "value": "125kgs"
      },
      {
        "label": "Installation Size",
        "value": "1300*1400*1200mm"
      }
    ]
  },
  {
    "id": "228",
    "modelCode": "61A53A",
    "name": "Dumbbell Rack",
    "description": "YR Fitness 15 Pairs Dumbbell Rack 61A53A is built to store up to 15 pairs of dumbbells safely and neatly. Its strong three-tier steel frame keeps your gym space organized, making it easy to access and manage weights during any workout.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 15 Pairs Dumbbell Rack 61A53A is built to store up to 15 pairs of dumbbells safely and neatly. Its strong three-tier steel frame keeps your gym space organized, making it easy to access and manage weights during any workout."
        ]
      }
    ],
    "image": "/assets/products/26/3.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "229",
    "modelCode": "61A51",
    "name": "Plate Rack",
    "description": "YR Fitness Plate Rack 61A51 is a strong and reliable storage solution for weight plates. Built with durable steel and four chrome-coated sleeves, it keeps plates organized and easy to access—perfect for maintaining a clean, efficient gym space.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Plate Rack 61A51 is a strong and reliable storage solution for weight plates. Built with durable steel and four chrome-coated sleeves, it keeps plates organized and easy to access—perfect for maintaining a clean, efficient gym space."
        ]
      }
    ],
    "image": "/assets/products/26/4.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "230",
    "modelCode": "61A47",
    "name": "Multifunctional Flat Bench",
    "description": "YR Fitness Multifunctional Flat Bench 61A47 is built for a variety of strength exercises with strong steel construction, multiple grip options, and safety features like anti-skid pads. It offers comfortable support with high-density foam and durable PU leather, making it great for any training setup.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Multifunctional Flat Bench 61A47 is built for a variety of strength exercises with strong steel construction, multiple grip options, and safety features like anti-skid pads. It offers comfortable support with high-density foam and durable PU leather, making it great for any training setup."
        ]
      }
    ],
    "image": "/assets/products/26/5.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest"
    ]
  },
  {
    "id": "231",
    "modelCode": "82009",
    "name": "Ground Base Combo Incline",
    "description": "YR Fitness 82009 delivers a powerful combination of incline pressing and pulling in one stable, ground-based unit. Its compact design supports total upper body development for strength, performance, and muscle growth.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82009 delivers a powerful combination of incline pressing and pulling in one stable, ground-based unit. Its compact design supports total upper body development for strength, performance, and muscle growth."
        ]
      }
    ],
    "image": "/assets/products/26/6.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "81kgs"
      },
      {
        "label": "G.W",
        "value": "115kgs"
      },
      {
        "label": "Installation Size",
        "value": "1460*1420*1170mm"
      }
    ]
  },
  {
    "id": "232",
    "modelCode": "61A45A",
    "name": "Knees Up/Dip",
    "description": "YR Fitness Knees Up/Dip 61A45A is a sturdy and compact station for bodyweight exercises like knee raises and dips. With multiple grip options, anti-slip pedals, and padded support, it offers a safe and comfortable way to train your upper body and core.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Knees Up/Dip 61A45A is a sturdy and compact station for bodyweight exercises like knee raises and dips. With multiple grip options, anti-slip pedals, and padded support, it offers a safe and comfortable way to train your upper body and core."
        ]
      }
    ],
    "image": "/assets/products/26/7.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal"
    ]
  },
  {
    "id": "233",
    "modelCode": "61A45",
    "name": "Knees Up/Dip",
    "description": "YR Fitness Knees Up/Dip 61A45 is built for core and upper body training with a strong steel frame and safe, user-friendly design. It features anti-skid pads, high-density foam padding, and durable PU leather for a secure and comfortable workout experience.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Knees Up/Dip 61A45 is built for core and upper body training with a strong steel frame and safe, user-friendly design. It features anti-skid pads, high-density foam padding, and durable PU leather for a secure and comfortable workout experience."
        ]
      }
    ],
    "image": "/assets/products/26/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal"
    ]
  },
  {
    "id": "234",
    "modelCode": "61A43",
    "name": "Adjustable Roman Bench",
    "description": "YR Fitness Adjustable Roman Bench 61A43 is designed for core and lower back training with a 45-degree angle and adjustable foot position. Built with strong steel and comfortable padding, it offers safe, stable, and effective support for various workout styles in any gym.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Adjustable Roman Bench 61A43 is designed for core and lower back training with a 45-degree angle and adjustable foot position. Built with strong steel and comfortable padding, it offers safe, stable, and effective support for various workout styles in any gym."
        ]
      }
    ],
    "image": "/assets/products/26/9.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Abdominal",
      "Back"
    ]
  },
  {
    "id": "235",
    "modelCode": "61A42",
    "name": "Angled AB Board",
    "description": "YR Fitness Angled AB Board 61A42 is designed for effective core workouts with a stable, angled surface that boosts intensity. It features a strong steel frame, high-density foam padding, and durable PU leather for comfort and support during every rep.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Angled AB Board 61A42 is designed for effective core workouts with a stable, angled surface that boosts intensity. It features a strong steel frame, high-density foam padding, and durable PU leather for comfort and support during every rep."
        ]
      }
    ],
    "image": "/assets/products/27/1.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Abdominal"
    ]
  },
  {
    "id": "236",
    "modelCode": "61A41",
    "name": "Adjustable AB Board",
    "description": "YR Fitness Adjustable AB Board 61A41 is a compact bench designed for effective core workouts. It features an adjustable foot pad, high-density padding, and built-in wheels for easy movement—ideal for gyms or home users who want comfort, stability, and convenience in one unit.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Adjustable AB Board 61A41 is a compact bench designed for effective core workouts. It features an adjustable foot pad, high-density padding, and built-in wheels for easy movement—ideal for gyms or home users who want comfort, stability, and convenience in one unit."
        ]
      }
    ],
    "image": "/assets/products/27/2.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Abdominal"
    ]
  },
  {
    "id": "237",
    "modelCode": "82008",
    "name": "Stand Pull Back",
    "description": "YR Fitness 82008 combines upper body training with core activation through standing pull-backs. Its plate-loaded design and ergonomic build promote strength, posture, and total-body stability.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82008 combines upper body training with core activation through standing pull-backs. Its plate-loaded design and ergonomic build promote strength, posture, and total-body stability."
        ]
      }
    ],
    "image": "/assets/products/27/3.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "80kgs"
      },
      {
        "label": "G.W",
        "value": "118kgs"
      },
      {
        "label": "Installation Size",
        "value": "2006*886*1291mm"
      }
    ]
  },
  {
    "id": "238",
    "modelCode": "61A40",
    "name": "Olympic Decline Bench",
    "description": "YR Fitness Olympic Decline Bench 61A40 is designed for stable and safe decline press training. Built with strong steel, high-density foam, and durable PU leather, it includes a barbell hanging rod and secure hook plate to support serious strength workouts in any gym setting.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Olympic Decline Bench 61A40 is designed for stable and safe decline press training. Built with strong steel, high-density foam, and durable PU leather, it includes a barbell hanging rod and secure hook plate to support serious strength workouts in any gym setting."
        ]
      }
    ],
    "image": "/assets/products/27/4.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest"
    ]
  },
  {
    "id": "239",
    "modelCode": "61A39",
    "name": "Olympic Flat Bench",
    "description": "YR Fitness Olympic Flat Bench 61A39 is a strong and stable bench designed for safe and effective barbell training. With high-strength steel, secure bar hooks, and comfortable padding, it’s a reliable choice for any gym focused on performance and durability.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Olympic Flat Bench 61A39 is a strong and stable bench designed for safe and effective barbell training. With high-strength steel, secure bar hooks, and comfortable padding, it’s a reliable choice for any gym focused on performance and durability."
        ]
      }
    ],
    "image": "/assets/products/27/5.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest"
    ]
  },
  {
    "id": "240",
    "modelCode": "61A38",
    "name": "Olympic Incline Bench",
    "description": "YR Fitness Olympic Incline Bench 61A38 is built for safe and effective upper body training. It features a strong steel frame, adjustable seat with torsion spring, high-density padding, and secure barbell support—ideal for gyms focused on performance and durability.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Olympic Incline Bench 61A38 is built for safe and effective upper body training. It features a strong steel frame, adjustable seat with torsion spring, high-density padding, and secure barbell support—ideal for gyms focused on performance and durability."
        ]
      }
    ],
    "image": "/assets/products/27/6.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest"
    ]
  },
  {
    "id": "241",
    "modelCode": "82007",
    "name": "ISO Lateral Row",
    "description": "YR Fitness 82007 features independent arm motion and ergonomic support to help users build upper back strength with proper alignment. Its plate-loaded system delivers both flexibility and performance for effective training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82007 features independent arm motion and ergonomic support to help users build upper back strength with proper alignment. Its plate-loaded system delivers both flexibility and performance for effective training."
        ]
      }
    ],
    "image": "/assets/products/27/7.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "148kgs"
      },
      {
        "label": "G.W",
        "value": "209kgs"
      },
      {
        "label": "Installation Size",
        "value": "1877*1069*1667mm"
      }
    ]
  },
  {
    "id": "242",
    "modelCode": "61A37",
    "name": "Biceps Curl Rack",
    "description": "YR Fitness Biceps Curl Rack 61A37 is built for focused arm training with strong steel construction and a user-friendly adjustable seat. With premium cushioning and a clean, durable finish, it offers both comfort and stability for effective biceps workouts in any training space.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Biceps Curl Rack 61A37 is built for focused arm training with strong steel construction and a user-friendly adjustable seat. With premium cushioning and a clean, durable finish, it offers both comfort and stability for effective biceps workouts in any training space."
        ]
      }
    ],
    "image": "/assets/products/27/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm"
    ]
  },
  {
    "id": "243",
    "modelCode": "82006",
    "name": "T Bar Row",
    "description": "YR Fitness 82006 is a solid, plate-loaded T Bar Row built for efficient back training. Its compact yet robust design supports heavy lifting and full engagement of upper-body pulling muscles.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82006 is a solid, plate-loaded T Bar Row built for efficient back training. Its compact yet robust design supports heavy lifting and full engagement of upper-body pulling muscles."
        ]
      }
    ],
    "image": "/assets/products/27/9.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "78kgs"
      },
      {
        "label": "G.W",
        "value": "127kgs"
      },
      {
        "label": "Installation Size",
        "value": "1920*970*1220mm"
      }
    ]
  },
  {
    "id": "244",
    "modelCode": "82005",
    "name": "Ground Base Plate Loaded Squat/High Pull",
    "description": "YR Fitness 82005 supports ground-based training with explosive squat and pull motions. Its ergonomic, plate-loaded design enhances power, stability, and functional performance across all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82005 supports ground-based training with explosive squat and pull motions. Its ergonomic, plate-loaded design enhances power, stability, and functional performance across all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/28/1.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal",
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "106kgs"
      },
      {
        "label": "G.W",
        "value": "152kgs"
      },
      {
        "label": "Installation Size",
        "value": "1850*1735*1350mm"
      }
    ]
  },
  {
    "id": "245",
    "modelCode": "82004",
    "name": "ISO-Lateral High Row",
    "description": "YR Fitness 82004 features a high row design with independent arm movement and multiple grip options to support balanced, upper-back training. Its plate-loaded setup delivers a smooth and customizable workout experience.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82004 features a high row design with independent arm movement and multiple grip options to support balanced, upper-back training. Its plate-loaded setup delivers a smooth and customizable workout experience."
        ]
      }
    ],
    "image": "/assets/products/28/2.avif",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "155kgs"
      },
      {
        "label": "G.W",
        "value": "205kgs"
      },
      {
        "label": "Installation Size",
        "value": "2000*1450*1780mm"
      }
    ]
  },
  {
    "id": "246",
    "modelCode": "61A34",
    "name": "Power Cage",
    "description": "YR Fitness Power Cage 61A34 is designed for safe and effective strength training. Built with a strong steel frame and safety features like a secure hook plate and bolt connections, it offers smooth performance and reliable support for serious lifting in any gym setting.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Power Cage 61A34 is designed for safe and effective strength training. Built with a strong steel frame and safety features like a secure hook plate and bolt connections, it offers smooth performance and reliable support for serious lifting in any gym setting."
        ]
      }
    ],
    "image": "/assets/products/28/3.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "247",
    "modelCode": "82003",
    "name": "Iso-Lateral Wide Pulldown",
    "description": "YR Fitness 82003 delivers wide-grip pulldown training with independent arm motion to target and develop a broad, balanced back. Its plate-loaded design and stable seat ensure an effective and natural training experience.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82003 delivers wide-grip pulldown training with independent arm motion to target and develop a broad, balanced back. Its plate-loaded design and stable seat ensure an effective and natural training experience."
        ]
      }
    ],
    "image": "/assets/products/28/4.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "132kgs"
      },
      {
        "label": "G.W",
        "value": "194kgs"
      },
      {
        "label": "Installation Size",
        "value": "1700*1300*2000mm"
      }
    ]
  },
  {
    "id": "248",
    "modelCode": "82002",
    "name": "Plate Loaded ISO-Lateral Shoulder Press",
    "description": "YR Fitness 82002 features a seated shoulder press with independent arm movement to support balanced development. Its plate-loaded resistance offers a natural lifting feel, making it ideal for targeted and controlled shoulder training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82002 features a seated shoulder press with independent arm movement to support balanced development. Its plate-loaded resistance offers a natural lifting feel, making it ideal for targeted and controlled shoulder training."
        ]
      }
    ],
    "image": "/assets/products/28/5.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Shoulder"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "131kgs"
      },
      {
        "label": "G.W",
        "value": "182kgs"
      },
      {
        "label": "Installation Size",
        "value": "1600*1620*1600mm"
      }
    ]
  },
  {
    "id": "249",
    "modelCode": "82001",
    "name": "ISO-Lateral Incline Shoulder Press",
    "description": "YR Fitness 82001 offers a dual-arm incline shoulder press with independent motion for balanced muscle development. Its plate-loaded design and stable seated position provide effective and versatile upper body training for all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82001 offers a dual-arm incline shoulder press with independent motion for balanced muscle development. Its plate-loaded design and stable seated position provide effective and versatile upper body training for all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/28/6.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Shoulder"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "115kgs"
      },
      {
        "label": "G.W",
        "value": "174kgs"
      },
      {
        "label": "Installation Size",
        "value": "1793*1777*975mm"
      }
    ]
  },
  {
    "id": "250",
    "modelCode": "61A33",
    "name": "Smith Machine",
    "description": "YR Fitness Smith Machine 61A33 is a safe and durable training system for guided barbell exercises. With a counterbalance design, built-in safety features, and a 2000lb capacity Olympic bar, it’s perfect for controlled, effective strength training in any gym.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Smith Machine 61A33 is a safe and durable training system for guided barbell exercises. With a counterbalance design, built-in safety features, and a 2000lb capacity Olympic bar, it’s perfect for controlled, effective strength training in any gym."
        ]
      }
    ],
    "image": "/assets/products/28/7.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "251",
    "modelCode": "61A32",
    "name": "Cable Crossover",
    "description": "YR Fitness 61A32 Cable Crossover offers smooth adjustments and a full range of motion with its elevated frame and long cables. Ideal for full-body functional training, its sleek and durable design supports a wide variety of exercises.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A32 Cable Crossover offers smooth adjustments and a full range of motion with its elevated frame and long cables. Ideal for full-body functional training, its sleek and durable design supports a wide variety of exercises."
        ]
      }
    ],
    "image": "/assets/products/28/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "385kgs"
      },
      {
        "label": "G.W",
        "value": "433kgs"
      },
      {
        "label": "Installation Size",
        "value": "3940*720*2415mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "252",
    "modelCode": "61A31",
    "name": "Standing Calf",
    "description": "YR Fitness 61A31 Standing Calf provides stable, full-range calf training with adjustable shoulder pads and contoured non-slip footplates. Designed for safety and performance, it effectively builds strength and definition in the lower legs.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A31 Standing Calf provides stable, full-range calf training with adjustable shoulder pads and contoured non-slip footplates. Designed for safety and performance, it effectively builds strength and definition in the lower legs."
        ]
      }
    ],
    "image": "/assets/products/28/9.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "214kgs"
      },
      {
        "label": "G.W",
        "value": "222kgs"
      },
      {
        "label": "Installation Size",
        "value": "1280*720*1640mm"
      },
      {
        "label": "Weight Stacks",
        "value": "100kg-20pcs"
      }
    ]
  },
  {
    "id": "253",
    "modelCode": "61A30",
    "name": "Seated Calf",
    "description": "YR Fitness 61A30 Seated Calf delivers focused calf muscle training with ergonomic support, pin-loaded resistance, and a stable base. Easy to use and built for durability, it&#8217;s perfect for both beginners and advanced users.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A30 Seated Calf delivers focused calf muscle training with ergonomic support, pin-loaded resistance, and a stable base. Easy to use and built for durability, it&#8217;s perfect for both beginners and advanced users."
        ]
      }
    ],
    "image": "/assets/products/29/1.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Leg"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "184kgs"
      },
      {
        "label": "G.W",
        "value": "194kgs"
      },
      {
        "label": "Installation Size",
        "value": "1583*720*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "254",
    "modelCode": "61A09",
    "name": "Pectoral Fly and Rear Deltoid",
    "description": "YR Fitness 61A09 Pectoral Fly and Rear Deltoid combines two exercises in one machine with wrist-friendly rotating grips. Designed for comfort and precision, it targets both chest and rear shoulder muscles with smooth, balanced motion for complete upper-body training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A09 Pectoral Fly and Rear Deltoid combines two exercises in one machine with wrist-friendly rotating grips. Designed for comfort and precision, it targets both chest and rear shoulder muscles with smooth, balanced motion for complete upper-body training."
        ]
      }
    ],
    "image": "/assets/products/29/2.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Shoulder",
      "Chest",
      "Back"
    ]
  },
  {
    "id": "255",
    "modelCode": "61A07",
    "name": "Pectoral Fly",
    "description": "YR Fitness 61A07 Pectoral Fly isolates inner chest muscles with minimal shoulder strain. Designed for comfort and precision, it offers smooth motion and focused training, trusted by professionals for its effectiveness and ergonomic advantage.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A07 Pectoral Fly isolates inner chest muscles with minimal shoulder strain. Designed for comfort and precision, it offers smooth motion and focused training, trusted by professionals for its effectiveness and ergonomic advantage."
        ]
      }
    ],
    "image": "/assets/products/29/3.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Chest"
    ]
  },
  {
    "id": "256",
    "modelCode": "61A04A",
    "name": "Chest Press Converging",
    "description": "YR Fitness 61A04A Chest Press Converging features a natural pressing motion, adjustable seat, and multiple grip options. Designed for effective chest muscle activation, it combines ergonomic comfort with strength-building efficiency for users at every level.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A04A Chest Press Converging features a natural pressing motion, adjustable seat, and multiple grip options. Designed for effective chest muscle activation, it combines ergonomic comfort with strength-building efficiency for users at every level."
        ]
      }
    ],
    "image": "/assets/products/29/4.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Chest"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": ": 218kgs"
      },
      {
        "label": "G.W",
        "value": ": 228kgs"
      },
      {
        "label": "Installation Size",
        "value": ": 1150*1500*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": "80kg-16pcs"
      }
    ]
  },
  {
    "id": "257",
    "modelCode": "61A04",
    "name": "Chest Press",
    "description": "YR Fitness 61A04 Chest Press is designed for effective chest muscle training with a sleek, approachable look. Its ergonomic seat and smooth mechanics ensure comfort and control, making it ideal for users of all fitness levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A04 Chest Press is designed for effective chest muscle training with a sleek, approachable look. Its ergonomic seat and smooth mechanics ensure comfort and control, making it ideal for users of all fitness levels."
        ]
      }
    ],
    "image": "/assets/products/29/5.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Chest"
    ]
  },
  {
    "id": "258",
    "modelCode": "61A03",
    "name": "Lateral Raise",
    "description": "YR Fitness 61A03 Lateral Raise supports natural shoulder movement with self-aligning handles and a smooth strength curve. Designed for precise deltoid isolation, it ensures comfort, stability, and proper form for users of all sizes and skill levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A03 Lateral Raise supports natural shoulder movement with self-aligning handles and a smooth strength curve. Designed for precise deltoid isolation, it ensures comfort, stability, and proper form for users of all sizes and skill levels."
        ]
      }
    ],
    "image": "/assets/products/29/6.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Shoulder"
    ]
  },
  {
    "id": "259",
    "modelCode": "61A02",
    "name": "Pull Up Shoulder",
    "description": "YR Fitness 61A02 Pull Up Shoulder is designed for users with shoulder limitations. It modifies shoulder press motion to reduce joint stress while maintaining training effectiveness. Ideal for rehabilitation or low-impact shoulder workouts with safety and support built in.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A02 Pull Up Shoulder is designed for users with shoulder limitations. It modifies shoulder press motion to reduce joint stress while maintaining training effectiveness. Ideal for rehabilitation or low-impact shoulder workouts with safety and support built in."
        ]
      }
    ],
    "image": "/assets/products/29/7.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Shoulder"
    ]
  },
  {
    "id": "260",
    "modelCode": "61A01A",
    "name": "Shoulder Press Converging",
    "description": "YR Fitness 61A01A Shoulder Press Converging features an ergonomic converging motion path for effective shoulder workouts. With adjustable seating and grip options, it offers comfort, natural movement, and targeted muscle engagement for users of all levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A01A Shoulder Press Converging features an ergonomic converging motion path for effective shoulder workouts. With adjustable seating and grip options, it offers comfort, natural movement, and targeted muscle engagement for users of all levels."
        ]
      }
    ],
    "image": "/assets/products/29/8.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Shoulder"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": ": 224kgs"
      },
      {
        "label": "G.W",
        "value": ": 233kgs"
      },
      {
        "label": "Installation Size",
        "value": ": 1480*1460*1620mm"
      },
      {
        "label": "Weight Stacks",
        "value": ": 70kg-14pcs"
      }
    ]
  },
  {
    "id": "261",
    "modelCode": "61A01",
    "name": "Shoulder Press",
    "description": "YR Fitness 61A01 Shoulder Press offers essential upper-body training with adjustable seating and dual-grip handles. Designed for comfort, safety, and smooth movement, it’s ideal for effective and reliable shoulder workouts at any fitness level.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 61A01 Shoulder Press offers essential upper-body training with adjustable seating and dual-grip handles. Designed for comfort, safety, and smooth movement, it’s ideal for effective and reliable shoulder workouts at any fitness level."
        ]
      }
    ],
    "image": "/assets/products/29/9.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Shoulder"
    ]
  },
  {
    "id": "262",
    "modelCode": "8504",
    "name": "Smith & Functional Trainer Combo",
    "description": "YR Fitness Smith &amp; Functional Trainer Combo 8504 is a space-saving machine that combines a smooth Smith system with a versatile functional trainer. Built with strong steel and high-strength parts, it’s perfect for full-body workouts in professional gyms or training studios.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Smith &amp; Functional Trainer Combo 8504 is a space-saving machine that combines a smooth Smith system with a versatile functional trainer. Built with strong steel and high-strength parts, it’s perfect for full-body workouts in professional gyms or training studios."
        ]
      }
    ],
    "image": "/assets/products/30/1.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "263",
    "modelCode": "8502",
    "name": "Smith & Functional Trainer Combo",
    "description": "YR Fitness Smith &amp; Functional Trainer Combo 8502 combines two powerful training systems in one space-saving design. Built with strong steel and secure connections, it supports a wide range of strength exercises, making it perfect for gyms focused on safety, versatility, and performance.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Smith &amp; Functional Trainer Combo 8502 combines two powerful training systems in one space-saving design. Built with strong steel and secure connections, it supports a wide range of strength exercises, making it perfect for gyms focused on safety, versatility, and performance."
        ]
      }
    ],
    "image": "/assets/products/30/2.webp",
    "series": "Multi Station",
    "muscleGroups": [
      "Full Body"
    ]
  },
  {
    "id": "264",
    "modelCode": "82007A",
    "name": "ISO Lateral Upper Back Pull Down",
    "description": "YR Fitness 82007A combines independent arm mechanics with ergonomic adjustments to support effective upper back training and balanced strength development, suitable for all user levels.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82007A combines independent arm mechanics with ergonomic adjustments to support effective upper back training and balanced strength development, suitable for all user levels."
        ]
      }
    ],
    "image": "/assets/products/30/3.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "145kg"
      },
      {
        "label": "Installation Size",
        "value": "1884*1284*1748mm"
      }
    ]
  },
  {
    "id": "265",
    "modelCode": "82004A",
    "name": "ISO-Lateral Front Lat Pull Down",
    "description": "YR Fitness 82004A provides a seated lat pulldown experience with independent arms and adjustable support pads. It promotes balanced back development and controlled movement for safe, effective training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 82004A provides a seated lat pulldown experience with independent arms and adjustable support pads. It promotes balanced back development and controlled movement for safe, effective training."
        ]
      }
    ],
    "image": "/assets/products/30/4.webp",
    "series": "82 Plate Loaded",
    "muscleGroups": [
      "Back"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "152kg"
      },
      {
        "label": "G.W",
        "value": "230kg"
      },
      {
        "label": "Installation Size",
        "value": "1750*1800*2000mm"
      }
    ]
  },
  {
    "id": "266",
    "modelCode": "7346A",
    "name": "Decline Adjustable Bench",
    "description": "YR Fitness 7346A Decline Adjustable Bench provides secure, comfortable support for decline presses and abdominal training, offering durable construction and ergonomic features for consistent performance.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7346A Decline Adjustable Bench provides secure, comfortable support for decline presses and abdominal training, offering durable construction and ergonomic features for consistent performance."
        ]
      }
    ],
    "image": "/assets/products/30/5.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Arm",
      "Chest",
      "Abdominal"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "62kgs"
      },
      {
        "label": "G.W",
        "value": "112kgs"
      },
      {
        "label": "Installation Size",
        "value": "1600*630*1340mm"
      }
    ]
  },
  {
    "id": "267",
    "modelCode": "7301A",
    "name": "Incline Shoulder Press",
    "description": "YR Fitness 7301A Incline Shoulder Press targets upper chest and shoulder muscles with independent arms for natural motion and dual handles for variety. Built for strength, comfort, and durability, it&#8217;s ideal for upper body development in any gym setting.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7301A Incline Shoulder Press targets upper chest and shoulder muscles with independent arms for natural motion and dual handles for variety. Built for strength, comfort, and durability, it&#8217;s ideal for upper body development in any gym setting."
        ]
      }
    ],
    "image": "/assets/products/30/6.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Shoulder"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "245kgs"
      },
      {
        "label": "G.W",
        "value": "3435kgs"
      },
      {
        "label": "Installation Size",
        "value": "1630*1650*1610mm"
      },
      {
        "label": "Weight Stacks",
        "value": "70kg-14pcs"
      }
    ]
  },
  {
    "id": "268",
    "modelCode": "61A46B",
    "name": "Multifunction Adjustable Bench",
    "description": "YR Fitness Multifunction Adjustable Bench 61A46B is a durable, easy-to-use bench designed for strength training. With adjustable angles, automatic seat adjustment, and built-in wheels for easy movement, it’s ideal for a variety of exercises in any gym or fitness space.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness Multifunction Adjustable Bench 61A46B is a durable, easy-to-use bench designed for strength training. With adjustable angles, automatic seat adjustment, and built-in wheels for easy movement, it’s ideal for a variety of exercises in any gym or fitness space."
        ]
      }
    ],
    "image": "/assets/products/30/7.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Arm",
      "Chest"
    ]
  },
  {
    "id": "269",
    "modelCode": "7353",
    "name": "10 Pairs Dumbell Rack",
    "description": "YR Fitness 7353 Dumbbell Rack is a strong two-tier rack designed to store 10 pairs of dumbbells. It keeps weights organized and accessible, making it ideal for commercial gyms.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7353 Dumbbell Rack is a strong two-tier rack designed to store 10 pairs of dumbbells. It keeps weights organized and accessible, making it ideal for commercial gyms."
        ]
      }
    ],
    "image": "/assets/products/30/8.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "74kgs"
      },
      {
        "label": "G.W",
        "value": "94kgs"
      },
      {
        "label": "Installation Size",
        "value": "2422*660*940mm"
      }
    ]
  },
  {
    "id": "270",
    "modelCode": "7333A",
    "name": "3D Smith Machine",
    "description": "YR Fitness 7333A 3D Smith Machine features a patented 3D motion system and secure wrist-controlled hook, offering natural movement for dynamic lifts. With heavy-duty materials and advanced safety, it’s ideal for versatile, professional-grade training.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 7333A 3D Smith Machine features a patented 3D motion system and secure wrist-controlled hook, offering natural movement for dynamic lifts. With heavy-duty materials and advanced safety, it’s ideal for versatile, professional-grade training."
        ]
      }
    ],
    "image": "/assets/products/30/9.webp",
    "series": "73 Tough Series",
    "muscleGroups": [
      "Full Body"
    ],
    "specifications": [
      {
        "label": "N.W",
        "value": "280kgs"
      },
      {
        "label": "G.W",
        "value": "330kgs"
      },
      {
        "label": "Installation Size",
        "value": "2430*1783*2440"
      }
    ]
  },
  {
    "id": "271",
    "modelCode": "61A53",
    "name": "10 Pairs Dumbbell Rack",
    "description": "YR Fitness 10 Pairs Dumbbell Rack 61A53 is built to hold up to 10 pairs of dumbbells, supporting weights up to 50 kg each. Its strong steel frame and two-tier design keep your space organized, making it perfect for any gym or training area.",
    "detailSections": [
      {
        "title": "Product Overview",
        "bullets": [
          "YR Fitness 10 Pairs Dumbbell Rack 61A53 is built to hold up to 10 pairs of dumbbells, supporting weights up to 50 kg each. Its strong steel frame and two-tier design keep your space organized, making it perfect for any gym or training area."
        ]
      }
    ],
    "image": "/assets/products/31/1.webp",
    "series": "61A Racing",
    "muscleGroups": [
      "Full Body"
    ]
  }
];

function generateSlug(modelCode: string, name: string): string {
  return `${modelCode}-${name}`
    .toLowerCase()
    .replace(/[°]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const products: Product[] = rawProducts.map((p) => ({
  ...p,
  slug: p.slug || generateSlug(p.modelCode, p.name),
}));
