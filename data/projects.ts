export type DrawingDetail = {
  title: string;
  description: string;
};

export type CaseStudy = {
  semester: string;
  location: string;
  conceptTitle: string;
  conceptDescription: string;
  problemBrief: string;
  researchSiteAnalysis: string[];
  designDevelopment: string[];
  technicalDrawings: DrawingDetail[];
  materialsFinishes: string[];
  finalOutcome: string;
  learningOutcomes: string[];
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
    year: "7th Semester, 2026",
    image: "/images/worker-module.webp",
    imageAlt:
      "Worker’s Module architectural site analysis drawing illustrating climatic conditions, solar orientation, summer winds, setbacks, and module zoning on a 7-acre site in Bagru",
    summary:
      "A temporary modular structure designed for construction workers to rest, eat, sleep and use essential facilities during work.",
    detail:
      "The proposal responds to a 7-acre construction site in Bagru and its access, climatic, and movement conditions. The design explores repeatable modular components, shaded seating, drinking water, resting space, storage and open areas that support workers and accompanying families.",
    focus: [
      "Construction worker requirements",
      "7-acre site analysis",
      "Access and circulation",
      "Climatic conditions & sun-wind analysis",
      "Shaded resting spaces",
      "Drinking water & eating areas",
      "Modular layout exploration"
    ],
    caseStudy: {
      semester: "7th Semester, 2026",
      location: "Bagru, Rajasthan",
      conceptTitle: "Design for Workers on a Construction Site",
      conceptDescription:
        "A temporary modular structure designed for construction workers to rest, eat, sleep and use essential facilities during work on active building sites.",
      problemBrief:
        "Construction workers on large infrastructure and commercial sites in Bagru face intense Rajasthani heat, dry dust, long shifts, and a lack of organized shelter. The brief called for a practical, low-cost, repeatable modular system addressing hydration, meal breaks, restorative sleep, tool/personal storage, and dignity for worker families.",
      researchSiteAnalysis: [
        "7-acre site analysis evaluating major vehicular delivery routes and pedestrian worker footpaths",
        "Climatic study of hot-dry desert conditions with midday temperatures frequently exceeding 42°C",
        "Sun-path and seasonal wind analysis prioritizing prevailing summer wind channels for cross-ventilation",
        "Assessment of daily worker routines: shift handovers, lunch gathering circles, and resting intervals",
        "Safety evaluation separating active construction hazards from domestic rest and crèche zones"
      ],
      designDevelopment: [
        "Initial zoning matrix segregating noisy access roads from peaceful sleeping quarters",
        "Exploration of lightweight scaffolding-based modular frames allowing rapid on-site assembly and reconfiguration",
        "Development of shaded communal seating surrounding central water points (matkas/pots)",
        "Dedicated secure lockers and raised storage to protect workers’ personal belongings and bedding from dust and moisture",
        "Integration of deep overhanging thatch eaves to minimize direct solar radiant heat gain"
      ],
      technicalDrawings: [
        {
          title: "Master Site Layout & Circulation Plan",
          description:
            "Zoning of the 7-acre parcel showing buffer zones between heavy machinery routes, material staging, and worker residential modules."
        },
        {
          title: "Modular Unit Floor Plans & Elevations",
          description:
            "Dimensioned architectural plans detailing sleeping modules, communal dining pavilions, wash zones, and child daycare areas."
        },
        {
          title: "Passive Cooling Longitudinal Section",
          description:
            "Sectional analysis displaying double-roof air gap ventilation, clerestory heat exhaust, and shaded airflow pathways."
        }
      ],
      materialsFinishes: [
        "Corrugated galvanized iron (CGI) double-roof with convective ventilation cavity",
        "Locally woven bamboo thatch screens for glare reduction and breeze filtration",
        "Compressed stabilized earth blocks (CSEB) for thermal mass and site boundary enclosures",
        "Unglazed terracotta water containers providing natural evaporative cooling"
      ],
      finalOutcome:
        "A complete architectural presentation board featuring site master planning, modular unit layouts, environmental sections, and human-centred communal spaces tailored for worker welfare.",
      learningOutcomes: [
        "Understanding large-scale construction site logistics, worker anthropometrics, and ergonomic rest needs",
        "Translating extreme climatic constraints into effective passive cooling and ventilation strategies",
        "Designing modular systems capable of fast assembly, relocation, and reuse across multiple project phases"
      ],
      keyHighlights: [
        "Modular repeatable units adaptable to varying site topologies",
        "Clear zoning between active work routes and sheltered family zones",
        "Zero-waste demountable structure with reusable building components"
      ]
    }
  },
  {
    number: "02",
    title: "Centre Table",
    category: "Furniture",
    type: "Furniture Design",
    place: "Furniture Design Studio",
    year: "7th Semester, 2026",
    image: "/images/centre-table.webp",
    imageAlt:
      "Modern centre table with slatted wooden top, tubular metal cantilever base, and pull-out nesting stools in an outdoor garden setting",
    summary:
      "A centre table designed with four nesting stools that can be stored below the table and used as additional seating when required.",
    detail:
      "The design combines a slatted wooden top with a tubular metal frame. The four stools tuck neatly beneath the table when not in use, making the piece economical in space and material while providing extra seating on demand.",
    focus: [
      "Space-saving nesting mechanism",
      "Initial sketches & form exploration",
      "Wooden slatted top",
      "Metal tube/rod structure",
      "Exploded view & joinery",
      "Technical drawings",
      "Material board & 3D renders"
    ],
    caseStudy: {
      semester: "7th Semester, 2026",
      location: "Furniture Design Studio",
      conceptTitle: "Space-Saving Furniture",
      conceptDescription:
        "A centre table designed with four nesting stools that can be stored below the table and used as additional seating when required.",
      problemBrief:
        "Compact modern living rooms require adaptable furniture that does not permanently clutter floor area. The challenge was to design a multifunctional coffee table providing comfortable seating for up to four extra guests while retaining an uncluttered, elegant presence.",
      researchSiteAnalysis: [
        "Ergonomic analysis of average living room coffee table heights (420–460mm) and seated reach distances",
        "Anthropometric clearance studies for knees, feet, and comfortable dining/casual stool heights (380–400mm)",
        "Investigation of nesting tolerances to ensure effortless slide-in/slide-out movement without jamming",
        "Analysis of structural strength required for metal tubes and slatted timber surfaces under dynamic load"
      ],
      designDevelopment: [
        "Initial concept sketches exploring circular, rectangular, and square nested configurations",
        "Form exploration balancing minimalist geometric lines with rounded human-safe corners",
        "Development of tubular metal guide rails allowing stools to nest flush beneath the table apron",
        "Selection of spaced wooden slats on the table top to introduce visual lightness and air circulation",
        "Iterative 1:5 scale card and wire prototypes to test clearance and structural rigidity"
      ],
      technicalDrawings: [
        {
          title: "Orthographic Projections (Plan, Front & Side Elevations)",
          description:
            "Dimensioned technical views showing table overall envelope (900 × 900 × 450 mm) and stool envelopes."
        },
        {
          title: "Exploded View & Joinery Assembly",
          description:
            "Technical exploded diagram detailing countersunk screw placements, tubular welding junctions, and slat fixings."
        },
        {
          title: "Stool Nesting & Clearance Detail",
          description:
            "Sectional drawing illustrating the sliding clearance and recessed alignment mechanism underneath the table top."
        }
      ],
      materialsFinishes: [
        "Natural grain solid wood slats finished with protective clear matte sealer",
        "Hollow circular mild steel tubing with powder-coated matte textured finish",
        "High-density cushioned upholstery on stools for ergonomic seated comfort",
        "Nylon floor glide inserts to prevent scratching during movement"
      ],
      finalOutcome:
        "A resolved furniture design presentation showcasing freehand ideation sketches, 3D orthographic views, an exploded assembly diagram, a material board, and realistic 3D renderings.",
      learningOutcomes: [
        "Mastering space-saving mechanical tolerances and nesting kinematics in furniture design",
        "Preparing standard orthographic, sectional, and exploded technical drawings suitable for fabrication",
        "Balancing the visual pairing of warm timber slats with industrial tubular metal frames"
      ],
      keyHighlights: [
        "Accommodates 4 additional guests with zero permanent floor footprint expansion",
        "Sturdy bent tubular steel construction providing high torsional rigidity",
        "Clean slatted aesthetic complementing both contemporary and minimalist interiors"
      ]
    }
  },
  {
    number: "03",
    title: "Tide & Terra",
    category: "Spatial",
    type: "Hospitality / Rooftop Café",
    place: "Kothrud, Pune",
    year: "6th Semester, 2026",
    image: "/images/tide-terra.webp",
    imageAlt:
      "Tide & Terra rooftop hospitality design 3D visualization featuring sunken ocean-blue lounge seating, travertine columns, timber decks, and panoramic sunset city horizon in Kothrud, Pune",
    summary:
      "A rooftop dining experience inspired by the meeting of ocean and earth, exploring a cave-like environment, privacy, fluid movement and an open, calm rooftop experience.",
    detail:
      "The hospitality concept uses the meeting of ocean and earth as its design inspiration. It explores privacy, fluid movement, curved forms, open-air dining and a calm, luxurious rooftop atmosphere, supported by site study, moodboards, layouts and 3D views.",
    focus: [
      "Blend of cave and sky concept",
      "Site study in Kothrud, Pune",
      "Concept development & moodboard",
      "Colour palette & material board",
      "Spatial planning & seating zones",
      "Form exploration & fluid circulation",
      "Floor plans, sections & 3D visualisations"
    ],
    caseStudy: {
      semester: "6th Semester, 2026",
      location: "Kothrud, Pune",
      conceptTitle: "Blend of Cave and Sky",
      conceptDescription:
        "A rooftop dining experience inspired by the meeting of ocean and earth. The concept explores a cave-like environment, privacy, fluid movement and an open, calm rooftop experience.",
      problemBrief:
        "The project required designing an experiential rooftop café in suburban Kothrud, Pune. The site demanded protection from intense sun and seasonal winds while celebrating elevated open-sky views, creating distinct sensory zones for private intimate conversations as well as social gathering.",
      researchSiteAnalysis: [
        "Site study of Kothrud rooftop context: panoramic views, surrounding building heights, and urban noise sources",
        "Wind and weather patterns during Pune’s monsoon and dry summer seasons",
        "Hospitality circulation mapping: customer arrival paths, kitchen service routes, and bar accessibility",
        "User sensory research on acoustic privacy, comfortable seating ergonomics, and atmospheric lighting"
      ],
      designDevelopment: [
        "Concept development combining the protective mass of subterranean caves (terra) with the buoyant openness of tides and sky",
        "Curvilinear spatial planning establishing organic fluid seating alcoves without rigid partition walls",
        "Curated moodboard and earthy color palette: warm sand tones, deep terracotta, muted sage, and aged brass",
        "Zoning exploration dividing the rooftop into an enclosed atmospheric cave lounge, an open sky deck, and a central cocktail bar",
        "Lighting studies using indirect cove lighting and soft pendant fixtures to enhance the sculptural cave contours"
      ],
      technicalDrawings: [
        {
          title: "Comprehensive Rooftop Floor Plan",
          description:
            "Dimensioned architectural plan illustrating entrance vestibule, cave booths, sky deck tables, bar counter, and service back-of-house."
        },
        {
          title: "Longitudinal & Transverse Sections",
          description:
            "Sectional views highlighting the ceiling height variation from intimate sculpted cave arches to lofty open-air pergolas."
        },
        {
          title: "Architectural Elevations & Wall Details",
          description:
            "Front and lateral elevations displaying textured plaster wall finishes, planter integration, and railing designs."
        }
      ],
      materialsFinishes: [
        "Textured earth-toned lime plaster (chuna) finish forming sculptural cave walls",
        "Weatherproof treated timber decking for open-air sky terrace seating",
        "Brushed brass accents on lighting fixtures, footrails, and joinery details",
        "Outdoor woven natural rattan and linen upholstery in ocean and clay tones"
      ],
      finalOutcome:
        "A complete hospitality portfolio case study comprising contextual site analysis, concept moodboards, dimensioned plans and sections, material swatches, and immersive 3D renderings.",
      learningOutcomes: [
        "Translating poetic conceptual metaphors into functional commercial hospitality layouts",
        "Developing fluid, organic spatial boundaries that ensure operational efficiency for service staff",
        "Balancing daylight, acoustic buffers, and evening ambient lighting in rooftop environments"
      ],
      keyHighlights: [
        "Dual ambiance: cocooned cave alcoves contrasting with open panoramic sky decks",
        "Biophilic planter integration acting as acoustic and privacy screens",
        "Sculptural curvilinear architecture creating high visual appeal and memorable user experiences"
      ]
    }
  },
  {
    number: "04",
    title: "Universal Toilet",
    category: "Spatial",
    type: "Institutional Design",
    place: "Banasthali Vidyapith, Jaipur, Rajasthan",
    year: "6th Semester, 2026",
    image: "/images/universal-toilet.webp",
    imageAlt: "Universal Toilet institutional design drawing and technical presentation board",
    summary:
      "An accessible toilet-design project responding to an existing institutional facility, making everyday use clearer and more comfortable.",
    detail:
      "The project studies an existing campus facility at Banasthali Vidyapith and develops a more considered, accessible toilet layout. The presentation includes existing-site references, a material board, and dimensioned technical design drawings.",
    focus: [
      "Design for existing site response",
      "User accessibility requirements",
      "Fixture positioning & ergonomics",
      "Space planning & turning radiuses",
      "Circulation & barrier-free access",
      "Material selection & hygiene",
      "Technical drawings & layouts"
    ],
    caseStudy: {
      semester: "6th Semester, 2026",
      location: "Banasthali Vidyapith, Jaipur, Rajasthan",
      conceptTitle: "Design for Existing Site",
      conceptDescription:
        "An accessible toilet-design project responding to an existing institutional facility.",
      problemBrief:
        "The project addressed an existing campus restroom facility that suffered from tight clearances, awkward door swings, non-standard fixture heights, slippery surfaces, and lack of accommodation for individuals with mobility challenges. The brief was to reconfigure the facility within its existing structural boundary for maximum accessibility, hygiene, and ease of maintenance.",
      researchSiteAnalysis: [
        "Photographic documentation and physical measurement of the existing campus toilet facility",
        "Identification of user accessibility pain points: door thresholds, narrow passageways, and lack of grab rails",
        "Clearance analysis for wheelchair turning circles, walking frame users, and assisted transfers",
        "Examination of natural lighting, ventilation, drainage slopes, and plumbing risers in the existing structure"
      ],
      designDevelopment: [
        "Reorganization of interior fixtures into intuitive wet and dry zones",
        "Removal of threshold obstacles to create a flush, continuous zero-barrier floor level",
        "Ergonomic positioning of dual-height washbasins, grab bars, lever faucets, and accessible dispensers",
        "Space planning accommodating a 1500mm continuous turning circle inside the accessible cubicle",
        "Selection of non-porous, slip-resistant, easily washable floor and wall materials"
      ],
      technicalDrawings: [
        {
          title: "Existing vs Proposed Comparative Floor Plan",
          description:
            "Side-by-side architectural plan showing existing layout deficiencies and the optimized accessible configuration."
        },
        {
          title: "Detailed Dimensioned Layout Plan",
          description:
            "Complete dimensioned plan with clearance radiuses, door swing directions, and plumbing fixture locations."
        },
        {
          title: "Internal Wall Elevations & Mounting Heights",
          description:
            "Dimensioned elevations indicating exact installation heights for support grab bars, mirrors, and dispensers."
        }
      ],
      materialsFinishes: [
        "Anti-slip matte ceramic floor tiles with high wet-traction rating",
        "Glazed wall tiles facilitating rapid daily institutional sanitization",
        "Corrosion-resistant stainless steel (Grade 304) grab rails with textured knurled grip",
        "Durable phenolic laminate partition doors with emergency release latch hardware"
      ],
      finalOutcome:
        "A rigorous institutional redesign proposal documented through site photographs, existing vs proposed comparisons, detailed architectural technical drawings, and a clean material board.",
      learningOutcomes: [
        "Applying universal design principles directly to institutional sanitation spaces",
        "Designing functional retrofits within strict existing architectural and structural footprints",
        "Specifying appropriate durable, slip-resistant, and low-maintenance institutional materials"
      ],
      keyHighlights: [
        "Zero-threshold floor transition facilitating smooth barrier-free entry",
        "Ergonomic continuous support bars for independent and dignified user assistance",
        "Intuitive circulation separating handwashing zones from toilet cubicles"
      ]
    }
  },
  {
    number: "05",
    title: "Shulabh",
    category: "Spatial",
    type: "Residential Design",
    place: "Ahmedabad, Gujarat",
    year: "5th Semester, 2025",
    image: "/images/shulabh.webp",
    imageAlt: "Shulabh residential design plan and interior presentation board",
    summary:
      "A residential concept built around simplicity, thermal comfort and thoughtful everyday living.",
    detail:
      "The project explores passive cooling, thermal comfort, sustainability, spatial efficiency and human well-being in Ahmedabad’s hot climate. The portfolio presents furniture and floor layouts, elevations, interior details and a warm material direction.",
    focus: [
      "The Art of Simple Living concept",
      "Passive cooling strategies",
      "Thermal comfort & ventilation",
      "Sustainable living & simplicity",
      "Spatial efficiency & human well-being",
      "Moodboard & material palette",
      "Furniture layout, plans & elevations"
    ],
    caseStudy: {
      semester: "5th Semester, 2025",
      location: "Ahmedabad, Gujarat",
      conceptTitle: "The Art of Simple Living",
      conceptDescription:
        "A residential concept built around simplicity, thermal comfort and thoughtful everyday living.",
      problemBrief:
        "Residential design in Ahmedabad’s hot-arid climate often relies heavily on artificial mechanical cooling, leading to high energy use and disconnected indoor environments. The brief was to design a functional, calm family home prioritizing natural thermal comfort, passive airflow, spatial efficiency, and timeless simplicity.",
      researchSiteAnalysis: [
        "Climatic analysis of Ahmedabad: intense dry summer heat, moderate winters, and directional seasonal winds",
        "Study of traditional Gujarati architectural elements: courtyards, jali screens, and thick masonry walls",
        "Analysis of domestic daily rhythms: family gathering, quiet rest, cooking, and natural light requirements",
        "Evaluation of indoor air circulation paths to minimize solar heat buildup during daytime peak hours"
      ],
      designDevelopment: [
        "Central layout organization channeling air currents across living spaces toward shaded courtyards",
        "Deep fenestration overhangs and louvers to prevent direct sun from hitting glass window surfaces",
        "Space-efficient furniture layouts emphasizing open sightlines, uncluttered pathways, and flexible floor living",
        "Curated material board highlighting vernacular, natural, and thermally responsive materials",
        "Bespoke built-in wooden storage and seating to maximize usable floor area and maintain clean lines"
      ],
      technicalDrawings: [
        {
          title: "Comprehensive Residential Floor Plan",
          description:
            "Dimensioned layout detailing living room, courtyard, kitchen, dining area, bedrooms, and service zones."
        },
        {
          title: "Architectural Building Section",
          description:
            "Sectional drawing illustrating stack effect ventilation, high clerestory windows, and shaded patio transitions."
        },
        {
          title: "Interior Wall Elevations & Joinery Details",
          description:
            "Elevations displaying custom living room wooden millwork, integrated window seating, and shelving."
        }
      ],
      materialsFinishes: [
        "Polished Kota stone flooring providing a cool natural surface underfoot",
        "Natural lime-wash wall finish that breathes and reflects indirect daylight",
        "Solid reclaimed teak wood for custom interior furniture and window louvers",
        "Woven cotton khadi and linen fabrics in natural earthy tones for upholstery"
      ],
      finalOutcome:
        "A holistic residential design presentation featuring architectural floor plans, cross-sections, interior elevations, custom furniture drawings, moodboards, and warm interior visualisations.",
      learningOutcomes: [
        "Integrating vernacular passive cooling principles into contemporary residential space planning",
        "Developing space-efficient furniture layouts tailored to daily domestic routines and well-being",
        "Selecting thermally responsive regional materials that age gracefully with minimal maintenance"
      ],
      keyHighlights: [
        "Passive thermal comfort strategies significantly reducing reliance on artificial cooling",
        "Calm, clutter-free spatial planning enhancing visual harmony and everyday well-being",
        "Rich tactile material palette honoring sustainable and local craft traditions"
      ]
    }
  },
  {
    number: "06",
    title: "Dining Chair",
    category: "Furniture",
    type: "Furniture Design",
    place: "Furniture Design Studio",
    year: "5th Semester, 2025",
    image: "/images/dining-chair.webp",
    imageAlt:
      "Sculptural wooden dining chair prototype with curved solid wood frame, woven cord detailing, and textured neutral upholstery",
    summary:
      "A dining-chair exploration where organic curves express both support and openness, balancing ergonomic comfort with a sculptural presence.",
    detail:
      "The concept, “Protection & Openness”, is developed through initial sketches, ergonomic and posture exploration, form studies, prototypes, joinery exploration and technical drawings.",
    focus: [
      "Protection & Openness concept",
      "Initial sketches & form exploration",
      "Ergonomic & posture studies",
      "3D model & prototype development",
      "Joinery & construction studies",
      "Material exploration (wood & upholstery)",
      "Technical drawings & final visualisation"
    ],
    caseStudy: {
      semester: "5th Semester, 2025",
      location: "Furniture Design Studio",
      conceptTitle: "Protection & Openness",
      conceptDescription:
        "A dining-chair exploration where organic curves express both support and openness.",
      problemBrief:
        "Dining chairs often present a trade-off: rigid, formal chairs provide structure but feel unwelcoming, while deep lounge chairs are unsuited for dining postures. The challenge was to sculpt a chair whose backrest curves around the user to provide reassuring ergonomic support (protection) while remaining visually light and inviting (openness).",
      researchSiteAnalysis: [
        "Anthropometric analysis of dining ergonomics: optimal seat height (440–460mm), seat depth (420–450mm), and back angle (98°–102°)",
        "Spinal posture exploration evaluating thoracic support during active dining vs relaxed post-meal conversation",
        "Visual lightness study in open dining areas to prevent bulky silhouettes from dominating table horizons",
        "Investigation of timber joinery techniques capable of handling multidirectional cantilever stresses"
      ],
      designDevelopment: [
        "Ideation sketches exploring organic curvilinear contours inspired by embracing forms and human gestures",
        "Rapid form-finding using 1:5 scale clay and wire models to refine the three-dimensional backrest curve",
        "Construction of a full-scale 1:1 physical prototype to test ergonomic comfort, stability, and thigh clearance",
        "Joinery development detailing mortise-and-tenon connections between the curved back rail and rear legs",
        "Refinement of digital 3D models and rendering of material finishes"
      ],
      technicalDrawings: [
        {
          title: "Dimensioned Orthographic Projections",
          description:
            "Plan, front, side, and rear elevations specifying radius curvature, leg splay angles, and seat dimensions."
        },
        {
          title: "Joinery & Structural Assembly Detail",
          description:
            "Detailed drawing showing mortise-and-tenon joints, corner bracing blocks, and seat frame fixings."
        },
        {
          title: "Upholstery Sub-Assembly Section",
          description:
            "Cross-section showing foam density layering, plywood substrate base, and fabric stretching detail."
        }
      ],
      materialsFinishes: [
        "Solid natural hardwood (Ash/Teak) sculpted with smooth organic transitions",
        "Protective hand-rubbed matte clear oil finish highlighting natural wood grain",
        "High-resilience foam core seat cushion engineered for enduring comfort",
        "Textured woven upholstery fabric in warm neutral tones for breathability"
      ],
      finalOutcome:
        "A comprehensive furniture portfolio presentation detailing initial sketches, ergonomic studies, 1:1 prototype testing, joinery construction diagrams, and photorealistic 3D visualisations.",
      learningOutcomes: [
        "Translating anthropometric human body data into comfortable, sculpted furniture geometry",
        "Hands-on full-scale prototyping to validate design assumptions and structural stability",
        "Detailing woodworking joinery and upholstery assemblies for practical manufacturing"
      ],
      keyHighlights: [
        "Organic continuous curved backrest delivering optimal lumbar and thoracic support",
        "Balanced visual presence offering generous comfort without physical or visual bulk",
        "Validated through physical 1:1 scale prototyping and rigorous joinery study"
      ]
    }
  }
];

export const PROJECT_FILTERS = ["All", "Spatial", "Furniture"] as const;
export type ProjectFilter = (typeof PROJECT_FILTERS)[number];
