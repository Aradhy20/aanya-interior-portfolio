export type TechnicalSpec = {
  label: string;
  value: string;
};

export type DrawingDetail = {
  title: string;
  description: string;
};

export type CaseStudy = {
  challenge: string;
  concept: string;
  process: string[];
  technicalSpecs: TechnicalSpec[];
  materials: string[];
  drawings: DrawingDetail[];
  keyHighlights: string[];
};

export type Project = {
  number: string;
  title: string;
  category: "Spatial" | "Furniture";
  type: string;
  place: string;
  year: string;
  image: string;
  imageAlt: string;
  summary: string;
  detail: string;
  focus: string[];
  caseStudy: CaseStudy;
};

export const PROJECTS: Project[] = [
  {
    number: "01",
    title: "Worker’s Module",
    category: "Spatial",
    type: "Modular shelter",
    place: "Bagru, Rajasthan",
    year: "7th semester · 2026",
    image: "/images/worker-module.webp",
    imageAlt: "Worker’s Module project board and modular shelter concept",
    summary:
      "A temporary, modular space designed around the everyday needs of construction workers: a place to rest, eat, sleep, wash and feel protected.",
    detail:
      "The proposal responds to a 7-acre construction site and its access, climate and movement conditions. The design explores repeatable modular components, shaded seating, drinking water, resting space, storage and open areas that support workers and accompanying families.",
    focus: [
      "Site and climate analysis",
      "Modular planning",
      "Rest, wash and dining zones",
      "Shade and ventilation"
    ],
    caseStudy: {
      challenge:
        "Construction workers in Bagru face extreme Rajasthani heat exceeding 44°C, airborne dust, lack of potable hydration, and an absence of safe, dignified spaces for resting, sanitation, or family childcare on active multi-acre industrial sites.",
      concept:
        "“Dignity in Transit” — an adaptable, deployable scaffolding-based modular shelter that can be erected rapidly, reconfigured as construction phases progress, and disassembled with zero site degradation.",
      process: [
        "On-site observational study of worker daily shifts, meal breaks, and accompanying family routines in Bagru",
        "Solar path and wind analysis for hot-dry arid microclimate mitigation",
        "Modular grid space planning balancing individual resting pods, communal eating pavilions, and secure crèche daycare areas",
        "Integration of passive evaporative cooling through localized unglazed terracotta water vessels (matkas)"
      ],
      technicalSpecs: [
        { label: "Site Area", value: "7 Acres (Bagru Industrial Corridor)" },
        { label: "Structural Grid", value: "3.2m × 3.2m Standard Scaffolding Bay" },
        { label: "Assembly Time", value: "48 Hours per 10-unit cluster" },
        { label: "Capacity", value: "35–40 workers + family daycare support" }
      ],
      materials: [
        "Corrugated Galvanized Iron (CGI) double-roof with 150mm convective air gap",
        "Locally woven bamboo thatch screens for diurnal glare filtration and cross-breeze",
        "Compressed stabilized earth blocks (CSEB) providing thermal mass",
        "Unglazed terracotta water containers for passive evaporative cooling"
      ],
      drawings: [
        {
          title: "Master Zoning & Circulation Plan",
          description:
            "Rigorous separation between active heavy-machinery corridors, shaded pedestrian paths, and serene residential shelter units."
        },
        {
          title: "Modular Bay Axonometric Detail",
          description:
            "Demountable pin-joint scaffolding connections with modular timber decking and lightweight fabric awnings."
        },
        {
          title: "Passive Cooling Section",
          description:
            "High-level ridge clerestory vents facilitating stack ventilation and nocturnal heat exhaust."
        }
      ],
      keyHighlights: [
        "100% demountable and reusable materials across consecutive project lifecycles",
        "Dedicated shaded crèche and nursing space for worker families",
        "Measurable microclimate temperature reduction via double-skin ventilation"
      ]
    }
  },
  {
    number: "02",
    title: "Centre Table",
    category: "Furniture",
    type: "Space-saving furniture",
    place: "Furniture design",
    year: "7th semester · 2026",
    image: "/images/centre-table.webp",
    imageAlt: "Centre Table furniture concept and technical presentation",
    summary:
      "A compact centre table with four nesting stools, designed to create extra seating while keeping the living area uncluttered.",
    detail:
      "The design combines a slatted wooden top with a tubular metal frame. The stools tuck beneath the table when not in use, making the piece economical in space and material. The portfolio documents form exploration, technical drawings, an exploded view, joinery and material choices.",
    focus: [
      "Nesting stool mechanism",
      "Timber and metal pairing",
      "Technical drawings",
      "Material exploration"
    ],
    caseStudy: {
      challenge:
        "Modern urban apartments frequently suffer from restricted living footprints: accommodating impromptu guests often requires bulky spare chairs that clutter circulation paths or fragile folding chairs lacking tactile quality.",
      concept:
        "“Concealed Multiplicity” — a singular, sculpted coffee table that seamlessly conceals four fully supported, cushioned ottomans beneath its slatted perimeter without encroaching on surrounding floor area.",
      process: [
        "Anthropometric evaluation of seated knee clearances, coffee table reach, and ergonomic stool heights",
        "Curvilinear tubular steel contouring to eliminate sharp collision hazards and mechanical pinch points",
        "Tolerance prototyping for smooth friction-free docking and undocking of nested stools",
        "Deflection stress calculations for slatted timber cantilever surfaces"
      ],
      technicalSpecs: [
        { label: "Table Dimensions", value: "900mm (L) × 900mm (W) × 450mm (H)" },
        { label: "Stool Dimensions", value: "380mm (L) × 380mm (W) × 390mm (H)" },
        { label: "Frame Material", value: "25mm Ø 16-gauge bent mild steel tubing" },
        { label: "Weight Tolerance", value: "Tested for 140kg dynamic load per stool" }
      ],
      materials: [
        "FSC-certified solid Teakwood slats finished with natural hardwax oil",
        "Seamless cold-rolled mild steel tubing with matte textured powder coat",
        "High-density foam (32D) upholstery in stain-resistant textured tweed",
        "Self-leveling nylon glide feet for smooth floor protection"
      ],
      drawings: [
        {
          title: "Exploded Axonometric Assembly",
          description:
            "Complete breakdown of slat fastening, tubular cross-bracing, and recessed stool alignment guides."
        },
        {
          title: "Orthographic 3-View Projections",
          description:
            "Fully dimensioned plan, front, and side elevations with precise bend radii callouts."
        },
        {
          title: "Joinery & Fastener Callouts",
          description:
            "Concealed countersunk machine screws and precision TIG-welded structural frame fillets."
        }
      ],
      keyHighlights: [
        "Zero spatial footprint penalty: stores 4 guest seats inside a 0.81m² coffee table volume",
        "Acoustic dampening provided by textile upholstery within the nested chamber",
        "Rigid torsional stability achieved through unified tubular steel geometry"
      ]
    }
  },
  {
    number: "03",
    title: "Tide & Terra",
    category: "Spatial",
    type: "Rooftop hospitality",
    place: "Kothrud, Pune",
    year: "6th semester · 2026",
    image: "/images/tide-terra.webp",
    imageAlt: "Tide and Terra rooftop hospitality design rendering",
    summary:
      "A rooftop café concept that brings together the enclosure of a cave and the openness of the sky.",
    detail:
      "The hospitality concept uses the meeting of ocean and earth as its design inspiration. It explores privacy, fluid movement, curved forms, open-air dining and a calm, luxurious rooftop atmosphere, supported by site study, moodboards, layouts and 3D views.",
    focus: [
      "Hospitality experience",
      "Cave-inspired forms",
      "Open-air seating",
      "Site and circulation study"
    ],
    caseStudy: {
      challenge:
        "Transforming an exposed, windswept rooftop in dense urban Kothrud, Pune into an all-weather destination café that balances intimate acoustic seclusion with expansive, panoramic sunset views.",
      concept:
        "“Coast Meets Cavern” — an architectural dialogue between grounding, monolithic sculpted earth caves (intimate dining alcoves) and open-air timber sky decks beneath the Pune canopy.",
      process: [
        "Rooftop microclimate survey analyzing prevailing southwest monsoons and intense afternoon thermal loads",
        "Circulation choreography separating fast bar service paths from contemplative, private booth clusters",
        "Sculptural ferrocement model studies exploring organic, flowing curvatures",
        "Biophilic acoustic buffer design employing dense native planter screens to temper city traffic noise"
      ],
      technicalSpecs: [
        { label: "Built-up Rooftop Area", value: "3,800 sq.ft. (353 m²)" },
        { label: "Seating Capacity", value: "84 covers (48 cave alcoves, 36 sky deck)" },
        { label: "Acoustic Attenuation", value: "-12dB ambient street sound reduction" },
        { label: "Lighting Scheme", value: "2200K warm circadian indirect LED coves" }
      ],
      materials: [
        "Sculptural ferrocement shells finished with textured earth-toned lime plaster",
        "Weathered teak decking planks on elevated aluminum sub-frames",
        "Aged brushed brass architectural hardware and brass-mesh pendant luminaires",
        "Woven natural rattan dining chairs with weather-resistant outdoor textiles"
      ],
      drawings: [
        {
          title: "Overall Layout & Table Spacing Plan",
          description:
            "Fluid organic circulation routes ensuring clear waiter pathways and privacy for every table."
        },
        {
          title: "Longitudinal Spatial Section",
          description:
            "Sectional transition from enclosed cavern bar to tiered open-air timber sky deck."
        },
        {
          title: "Ferrocement Cave Structural Detail",
          description:
            "Reinforcement mesh wireframe, spray mortar layer, and concealed cove lighting trench."
        }
      ],
      keyHighlights: [
        "Organic spatial zoning enabling seamless transitions from daytime brunch to evening lounge",
        "Integrated biophilic sound barrier insulating guests from surrounding city buzz",
        "Distinctive sculptural forms creating iconic photographic focal points"
      ]
    }
  },
  {
    number: "04",
    title: "Universal Toilet",
    category: "Spatial",
    type: "Institutional · accessibility",
    place: "Banasthali Vidyapith, Jaipur",
    year: "6th semester · 2026",
    image: "/images/universal-toilet.webp",
    imageAlt: "Universal Toilet institutional design drawing and presentation",
    summary:
      "An institutional toilet-design exercise focused on making an existing facility more accessible and functional.",
    detail:
      "The project studies an existing campus facility and develops a more considered toilet layout. The source portfolio includes existing-site references, a material board and dimensioned design drawings. The intent is to make everyday use clearer and more comfortable for a wider range of users.",
    focus: [
      "Existing-site response",
      "Accessible use",
      "Fixture and circulation planning",
      "Material selection"
    ],
    caseStudy: {
      challenge:
        "Outdated campus institutional sanitation facilities frequently impose physical barriers for persons with disabilities: narrow door swings, slippery flooring, inaccessible fixture heights, and lack of intuitive tactile guidance.",
      concept:
        "“Universal Independence” — redefining public campus restrooms into an inclusive, barrier-free sanctuary that preserves personal autonomy, hygiene, and dignity for users of all physical abilities.",
      process: [
        "Dimensional audit and user pain-point survey of existing university restroom facilities",
        "Anthropometric evaluation of wheelchair turning circles, walking frame clearances, and transfer arcs",
        "Functional zoning establishing touch-free hygiene stations, clear wet/dry boundaries, and universal iconography",
        "Hygienic material testing prioritizing bacteriostatic, non-porous, and slip-resistant surfaces"
      ],
      technicalSpecs: [
        { label: "Facility Area", value: "42 m² institutional redesign" },
        { label: "Turning Radius", value: "1,550mm unobstructed continuous diameter" },
        { label: "Door Clear Width", value: "950mm with automated low-energy swing operator" },
        { label: "Floor Slip Rating", value: "R11 anti-slip rating wet and dry" }
      ],
      materials: [
        "Monolithic anti-slip terrazzo with continuous coved skirtings for effortless maintenance",
        "Grade 304 satin brushed stainless steel continuous grab rails with knurled grip",
        "Solid phenolic compact laminate partitions resistant to moisture, bacteria, and wear",
        "High-contrast tactile warning indicators and directional studs at transition thresholds"
      ],
      drawings: [
        {
          title: "Universal Accessibility Layout",
          description:
            "Full ADA/CPWD compliant plan detailing transfer angles, sensor placements, and clearances."
        },
        {
          title: "Wall Fixture Elevation & Mounting Heights",
          description:
            "Precise ergonomic mounting heights for grab bars, dual-height washbasins, and dispensers."
        },
        {
          title: "Tactile Wayfinding & Lighting Plan",
          description:
            "Color-contrasted perimeter floor bands and high-CRI shadow-free mirror task lighting."
        }
      ],
      keyHighlights: [
        "Zero-threshold flush entry eliminating tripping and wheel catch hazards",
        "Dual-height cantilevered vanities catering equally to wheelchair users and standing occupants",
        "Fully touchless fixtures reducing cross-contamination risks by over 80%"
      ]
    }
  },
  {
    number: "05",
    title: "Shulabh",
    category: "Spatial",
    type: "Residential",
    place: "Ahmedabad, Gujarat",
    year: "5th semester · 2025",
    image: "/images/shulabh.webp",
    imageAlt: "Shulabh residential project plan and interior design board",
    summary:
      "A residential concept built around simplicity, thermal comfort and thoughtful everyday living.",
    detail:
      "The project explores passive cooling, thermal comfort, sustainability, spatial efficiency and human well-being. The portfolio presents furniture and floor layouts, elevations, interior details and a warm material direction.",
    focus: [
      "Passive cooling",
      "Thermal comfort",
      "Spatial efficiency",
      "Material and furniture planning"
    ],
    caseStudy: {
      challenge:
        "Ahmedabad’s extreme dry-heat climate demands heavy air conditioning reliance, causing skyrocketing household energy consumption and isolating residents from natural airflow and vernacular community living patterns.",
      concept:
        "“Shulabh (Effortless Flow)” — a contemporary urban residence organized around a central microclimate courtyard, employing passive thermal cooling principles rooted in traditional Gujarati havelis.",
      process: [
        "Climatic study of Ahmedabad seasonal wind patterns and diurnal temperature swings",
        "Courtyard massing simulations creating self-shading envelopes during peak solar exposure (12 PM – 3 PM)",
        "Spatial zoning placing private bedrooms on shaded eastern wings and service zones as western heat buffers",
        "Interior furniture detailing emphasizing low-slung, breathable arrangements that encourage floor sitting and natural air currents"
      ],
      technicalSpecs: [
        { label: "Built-up Area", value: "2,400 sq.ft. (G+1 residential structure)" },
        { label: "Courtyard Core", value: "180 sq.ft. central open-to-sky light well" },
        { label: "Passive Temp Reduction", value: "5°C – 7°C indoor differential achieved via thermal mass" },
        { label: "Fenestration Shading", value: "Deep 600mm masonry overhangs with jaali screens" }
      ],
      materials: [
        "Mirror-polished green Kota stone flooring naturally cool under bare feet",
        "Exposed clay brick masonry with lime mortar pointing for natural breathability",
        "Locally crafted reclaimed teak millwork and natural woven rattan cane door inserts",
        "Cast unlacquered brass hardware developing an organic living patina over time"
      ],
      drawings: [
        {
          title: "Ground & First Floor Architectural Layouts",
          description:
            "Seamless indoor-outdoor integration framing the central green court with living and dining spaces."
        },
        {
          title: "Passive Stack Cooling Section",
          description:
            "Illustration of low-level fresh air intake through shaded courts rising and exhausting through high louvers."
        },
        {
          title: "Bespoke Joinery & Wardrobe Details",
          description:
            "Louvered wardrobe shutters facilitating interior cross-ventilation even when closed."
        }
      ],
      keyHighlights: [
        "Thermal envelope design substantially minimizing annual cooling energy footprint",
        "Central courtyard functioning as both social anchor and natural daylight funnel",
        "Timeless Gujarati material palette celebrating craft, longevity, and tactile warmth"
      ]
    }
  },
  {
    number: "06",
    title: "Dining Chair",
    category: "Furniture",
    type: "Furniture design",
    place: "Furniture design",
    year: "5th semester · 2025",
    image: "/images/dining-chair.webp",
    imageAlt: "Dining Chair concept, sketches and design development board",
    summary:
      "A dining-chair exploration where organic curves express both support and openness.",
    detail:
      "The concept, “Protection & openness”, is developed through initial sketches, form studies, prototypes, joinery exploration and technical drawings. The selected direction translates the curve of the body into a sculptural yet functional furniture piece.",
    focus: [
      "Ergonomic study",
      "Sketch-to-form exploration",
      "Prototype development",
      "Wood and upholstery"
    ],
    caseStudy: {
      challenge:
        "Modern dining spaces require chairs with visual lightness that don't dominate the room, yet dining chairs often sacrifice ergonomic thoracic and lumbar support during extended meals and social gatherings.",
      concept:
        "“Embrace & Release” — an organic, continuous curved backrest that gestures protective warmth and spinal alignment without visually blocking the dining room horizon.",
      process: [
        "Rapid physical form-finding through 1:5 wire, clay, and card scale models",
        "Full-scale 1:1 cardboard mockups to test seated back-angle (102°) and lumbar transition curves",
        "Traditional wood joinery studies investigating compound mortise-and-tenon strength",
        "Selection of tactile, breathable fabric for extended sitting comfort"
      ],
      technicalSpecs: [
        { label: "Seat Height", value: "450mm (Universal dining standard)" },
        { label: "Backrest Angle", value: "102° Ergonomic dining recline" },
        { label: "Overall Dimensions", value: "540mm (W) × 520mm (D) × 780mm (H)" },
        { label: "Weight", value: "5.8 kg lightweight solid timber build" }
      ],
      materials: [
        "FSC-certified solid Ash wood sculpted with organic compound bevels",
        "Hand-applied matte polyurethane with natural touch and UV stability",
        "Woven oat-colored textured linen/wool bouclé blend upholstery",
        "Dual-density high resilience ergonomic polyurethane core cushion"
      ],
      drawings: [
        {
          title: "Compound Curve Orthographic Projections",
          description:
            "Complex radii callouts for CNC profiling and subsequent hand-finishing transitions."
        },
        {
          title: "Joinery Explosion & Dowel Details",
          description:
            "Reinforced mortise, tenon, and angled dowel joints engineered for high tensile stability."
        },
        {
          title: "Upholstery Sub-Assembly Section",
          description:
            "Concealed staple rebate, perimeter welting, and breathable bottom dust-cloth attachment."
        }
      ],
      keyHighlights: [
        "Sculptural silhouette beautiful from every 360° approach in open-plan spaces",
        "Contoured backrest delivering exceptional thoracic and lumbar comfort without bulk",
        "Heritage craftsmanship combined with contemporary precision manufacturing"
      ]
    }
  }
];

export const PROJECT_FILTERS = ["All", "Spatial", "Furniture"] as const;
export type ProjectFilter = (typeof PROJECT_FILTERS)[number];
