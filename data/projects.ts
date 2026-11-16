export type DrawingDetail = {
  title: string;
  description: string;
};

export type VisualizationDetail = {
  title: string;
  description: string;
  image?: string;
};

export type CaseStudy = {
  semester: string;
  location: string;
  conceptTitle: string;
  conceptDescription: string;
  problemBrief: string;
  designBrief?: string;
  problemStatement?: string;
  researchSiteAnalysis: string[];
  designObjectives?: string[];
  designDevelopment: string[];
  moodboardInspiration?: string[];
  spacePlanningLayouts?: string[];
  materialsFinishes: string[];
  furnitureLighting?: string[];
  technicalDrawings: DrawingDetail[];
  visualizations3D?: VisualizationDetail[];
  finalOutcome: string;
  specificContribution?: string[];
  learningOutcomes: string[];
  keyHighlights: string[];
  relatedProjectSlugs?: string[];
};

export type Project = {
  number: string;
  slug: string;
  title: string;
  category: "Spatial" | "Furniture";
  type: string;
  place: string;
  year: string;
  image: string;
  seoImage: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  summary: string;
  detail: string;
  focus: string[];
  caseStudy: CaseStudy;
};

export const PROJECTS: Project[] = [
  {
    number: "01",
    slug: "workers-module-bagru",
    title: "Worker’s Module",
    category: "Spatial",
    type: "Modular shelter",
    place: "Bagru, Rajasthan",
    year: "7th Semester, 2026",
    image: "/images/worker-module.webp",
    seoImage: "/images/aanya-jain-worker-module-bagru-spatial-design.webp",
    imageAlt:
      "Worker’s Module architectural site analysis drawing illustrating climatic conditions, solar orientation, summer winds, setbacks, and module zoning on a 7-acre site in Bagru",
    metaTitle: "Worker’s Module | Sustainable Spatial Design in Bagru | Aanya Jain",
    metaDescription:
      "Explore Aanya Jain's Worker’s Module case study: a sustainable modular shelter proposal addressing climatic conditions and worker welfare in Bagru, Rajasthan.",
    keywords: [
      "Worker's Module",
      "Modular Shelter",
      "Bagru Rajasthan",
      "Sustainable Spatial Design",
      "Climatic Site Analysis",
      "Construction Worker Housing",
      "Aanya Jain Portfolio",
      "Industrial Design Student"
    ],
    summary:
      "A temporary modular structure designed for construction workers to rest, eat, sleep and use essential facilities during work.",
    detail:
      "The proposal responds to a 7-acre construction site in Bagru and its access, climatic, and movement conditions. The design explores repeatable modular components, shaded seating, drinking water, resting space, storage and open areas that support workers and accompanying families.",
    focus: [
      "Design for migrant worker welfare",
      "7-acre site study in Bagru",
      "Climatic zoning & sun/wind paths",
      "Repeatable modular construction",
      "Shaded resting & dining spaces",
      "Hygiene, water & child-safe zones",
      "Drawings, setbacks & layouts"
    ],
    caseStudy: {
      semester: "7th Semester, 2026",
      location: "Bagru, Rajasthan",
      conceptTitle: "Design for Need",
      conceptDescription:
        "A temporary modular structure designed for construction workers to rest, eat, sleep and use essential facilities during work.",
      designBrief:
        "Design a sustainable, demountable modular shelter system for construction workers and accompanying families on an active 7-acre development site in Bagru, providing dignified rest, dining, hygiene, and safe community spaces.",
      problemBrief:
        "Construction workers in Rajasthan frequently endure extreme weather without dignified amenities. On long-term sites, workers often bring their families, but lack dedicated spaces for shade, clean water, secure personal storage, or child-friendly rest zones. The challenge was to design a temporary, low-cost modular habitat using fast-assembly techniques that actively responds to harsh sun, hot winds, and local site regulations.",
      problemStatement:
        "Seasonal construction labor in arid Rajasthan frequently lacks sheltered resting amenities, facing extreme solar heat (up to 45°C), dust storms, inadequate sanitation, and lack of child-safe zones on rough job sites.",
      researchSiteAnalysis: [
        "Climatic analysis of Bagru: severe Northwest summer solar radiation and Southwest monsoon wind paths",
        "Site planning constraints: mandatory 9.0-meter setbacks along boundary walls and a 12-meter primary access road",
        "Circulation patterns: separating heavy construction vehicle routes from pedestrian worker movements",
        "User needs assessment: identifying basic requirements for thermal shade, drinking water stations, secure lockers, and sanitary blocks"
      ],
      designObjectives: [
        "Rapid demountability and reassembly across different construction phases",
        "Passive solar shading minimizing indoor heat gain without mechanical cooling",
        "Safe zoning isolating domestic living modules from heavy equipment traffic",
        "Scalable modular framework adaptable to varying crew sizes (20–100 workers)"
      ],
      designDevelopment: [
        "Zoning strategy dividing the 7-acre layout into distinct operational and welfare zones (Modules A, B, C, D, and E)",
        "Staggered orientation of shelter modules to reduce direct exposure to peak afternoon sunlight",
        "Integration of deep peripheral overhangs and permeable vegetative tree buffers along windward boundaries",
        "Incorporation of shared communal gathering courtyards buffered from vehicular ingress",
        "Designing modular systems capable of fast assembly, relocation, and reuse across multiple project phases"
      ],
      moodboardInspiration: [
        "Vernacular Rajasthani settlement clusters with protective perimeter walls and internal courtyards",
        "Earthy terracotta, natural woven bamboo screens, and breathable canvas textiles",
        "Utilitarian scaffolding steel and lightweight corrugated roofing for zero-waste relocation"
      ],
      spacePlanningLayouts: [
        "Modules A & B: Dedicated quiet resting and family residential sleeping quarters with cross-ventilation",
        "Module C: Shaded dining hall and clean potable drinking water dispensary",
        "Module D: Sanitary washrooms and sheltered infant care area buffered from site dust",
        "Module E: Secure equipment and personal belongings storage near entry checkpoint"
      ],
      materialsFinishes: [
        "Lightweight galvanized steel tubular framing for fast socket-joint assembly",
        "Local compressed earth blocks and breathable bamboo screening for thermal mass and shade",
        "Corrugated recycled composite roofing panels with reflective white top-coating",
        "Compacted stabilized soil flooring with moisture barrier membranes"
      ],
      furnitureLighting: [
        "Foldable charpai-inspired multi-tier cot units maximizing vertical sleeping clearance",
        "Wall-hung modular storage crates keeping personal items elevated off dirt floors",
        "Low-voltage solar-powered LED task lamps and motion-activated exterior perimeter lighting",
        "High clerestory louver vents promoting natural stack ventilation"
      ],
      technicalDrawings: [
        {
          title: "Climatic Conditions of Site (Drawing Sheet)",
          description:
            "Architectural site layout detailing NW summer sun angles, SW monsoon wind vectors, 9m setback guidelines, module zoning (A–E), 12m road alignment, and tree buffer screens."
        },
        {
          title: "Module Assembly & Elevation Schematic",
          description:
            "Sectional drawing illustrating standard ceiling heights, roof slope for drainage, and fast-coupling joint details."
        },
        {
          title: "Zoning & Setbacks Regulation Matrix",
          description:
            "Regulatory compliance table mapping resort/housing setback ratios (20%, 9.0m, 15.0m, 0.75 FAR) under local municipal guidelines."
        }
      ],
      visualizations3D: [
        {
          title: "Climatic Site Analysis & Zoning Masterplan",
          description:
            "Annotated master site drawing illustrating sun paths, wind directions, perimeter buffers, and module locations across the 7-acre parcel.",
          image: "/images/aanya-jain-worker-module-bagru-spatial-design.webp"
        }
      ],
      finalOutcome:
        "A resolved spatial proposal presenting site analysis, climatic responsiveness, module zoning, technical setback compliance, and flexible architectural layouts for temporary site shelters.",
      specificContribution: [
        "Comprehensive site survey and climatic wind/sun path calculations for the Bagru geographic context",
        "Space planning and master zoning dividing the 7-acre plot into sheltered residential and active service sectors",
        "Architectural drafting of site analysis plans, setback charts, and modular assembly schematics in AutoCAD and Illustrator"
      ],
      learningOutcomes: [
        "Understanding environmental design responses to intense arid microclimates",
        "Applying municipal building setback bylaws and regulatory site constraints",
        "Designing modular systems capable of fast assembly, relocation, and reuse across multiple project phases"
      ],
      keyHighlights: [
        "Modular repeatable units adaptable to varying site topologies",
        "Clear zoning between active work routes and sheltered family zones",
        "Zero-waste demountable structure with reusable building components"
      ],
      relatedProjectSlugs: [
        "universal-toilet-accessible-design",
        "shulabh-residential-interior-ahmedabad"
      ]
    }
  },
  {
    number: "02",
    slug: "centre-table-furniture-design",
    title: "Centre Table",
    category: "Furniture",
    type: "Furniture Design",
    place: "Furniture Design Studio",
    year: "7th Semester, 2026",
    image: "/images/centre-table.webp",
    seoImage: "/images/aanya-jain-centre-table-furniture-design.webp",
    imageAlt:
      "Modern centre table with slatted wooden top, tubular metal cantilever base, and pull-out nesting stools in an outdoor garden setting",
    metaTitle: "Centre Table with Nesting Stools | Ergonomic Furniture Design | Aanya Jain",
    metaDescription:
      "Discover Aanya Jain's space-saving Centre Table with four concealed nesting stools, exploring bent tubular metal frames and slatted timber surfaces.",
    keywords: [
      "Centre Table",
      "Furniture Design Portfolio",
      "Nesting Stools",
      "Space Saving Furniture",
      "Industrial Design Student",
      "AutoCAD Furniture Details",
      "Aanya Jain",
      "Banasthali Vidyapith"
    ],
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
      designBrief:
        "Create a multifunctional, space-saving living room centre table integrating four full-sized stools that conceal neatly beneath the tabletop when not in use, maximizing seating without permanent floor clutter.",
      problemBrief:
        "Compact modern living rooms require adaptable furniture that does not permanently clutter floor area. The challenge was to design a multifunctional coffee table providing comfortable seating for up to four extra guests while retaining an uncluttered, elegant presence.",
      problemStatement:
        "Modern urban apartments face significant living space constraints. Traditional additional seating options such as bulky armchairs or plastic stools either permanently congest room circulation or look visually uncoordinated.",
      researchSiteAnalysis: [
        "Ergonomic analysis of average living room coffee table heights (420–460mm) and seated reach distances",
        "Anthropometric clearance studies for knees, feet, and comfortable dining/casual stool heights (380–400mm)",
        "Investigation of nesting tolerances to ensure effortless slide-in/slide-out movement without jamming",
        "Analysis of structural strength required for metal tubes and slatted timber surfaces under dynamic load"
      ],
      designObjectives: [
        "Zero permanent floor footprint expansion while providing seating for 4 guests",
        "Effortless slide-in/slide-out stool kinematics with guided alignment",
        "High strength-to-weight ratio allowing easy moving by a single person",
        "Contemporary visual elegance combining warm timber slats and clean tubular lines"
      ],
      designDevelopment: [
        "Initial concept sketches exploring circular, rectangular, and square nested configurations",
        "Form exploration balancing minimalist geometric lines with rounded human-safe corners",
        "Development of tubular metal guide rails allowing stools to nest flush beneath the table apron",
        "Selection of spaced wooden slats on the table top to introduce visual lightness and air circulation"
      ],
      moodboardInspiration: [
        "Mid-century modern Scandinavian functionalism and Japanese joinery simplicity",
        "Bauhaus bent tubular steel cantilever chairs (Marcel Breuer, Mart Stam)",
        "Tactile contrast between warm architectural timber slats and cool industrial powder-coated metal"
      ],
      spacePlanningLayouts: [
        "Compact 900mm × 900mm square table envelope fitting effortlessly into living rooms of 120–250 sq.ft.",
        "Symmetrical four-quadrant nesting layout positioning two stools on opposite axes",
        "30mm recessed stool clearance underneath the table edge ensuring unobstructed shin and knee space"
      ],
      materialsFinishes: [
        "Natural grain solid wood slats finished with protective clear matte sealer",
        "Hollow circular mild steel tubing with powder-coated matte textured finish",
        "High-density cushioned upholstery on stools for ergonomic seated comfort",
        "Nylon floor glide inserts to prevent scratching during movement"
      ],
      furnitureLighting: [
        "Continuous bent tubular cantilever runners distributing weight evenly across floor tiles and rugs",
        "Concealed underside alignment stops preventing stool over-insertion",
        "Low-profile aesthetic allowing ambient natural daylight to penetrate through the slatted top"
      ],
      technicalDrawings: [
        {
          title: "Dimensioned Orthographic Elevations",
          description:
            "Plan, front, and side elevations showing table dimensions (850×850×440mm) and nested stool dimensions (380×380×380mm)."
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
      visualizations3D: [
        {
          title: "Patio Lifestyle 3D Visualization",
          description:
            "Photorealistic architectural rendering of the centre table with two stools pulled out on a sunny garden terrace.",
          image: "/images/aanya-jain-centre-table-furniture-design.webp"
        }
      ],
      finalOutcome:
        "A resolved furniture design presentation showcasing freehand ideation sketches, 3D orthographic views, an exploded assembly diagram, a material board, and realistic 3D renderings.",
      specificContribution: [
        "Ideation sketches and geometric form exploration testing multi-stool nesting configurations",
        "Anthropometric clearance calculations and dimensional optimization for seating comfort",
        "3D CAD modeling, joinery exploded views, and production-ready technical drawings in AutoCAD"
      ],
      learningOutcomes: [
        "Mastering space-saving mechanical tolerances and nesting kinematics in furniture design",
        "Preparing standard orthographic, sectional, and exploded technical drawings suitable for fabrication",
        "Balancing the visual pairing of warm timber slats with industrial tubular metal frames"
      ],
      keyHighlights: [
        "Accommodates 4 additional guests with zero permanent floor footprint expansion",
        "Sturdy bent tubular steel construction providing high torsional rigidity",
        "Clean slatted aesthetic complementing both contemporary and minimalist interiors"
      ],
      relatedProjectSlugs: [
        "dining-chair-furniture-design",
        "shulabh-residential-interior-ahmedabad"
      ]
    }
  },
  {
    number: "03",
    slug: "tide-and-terra-rooftop-cafe-pune",
    title: "Tide & Terra",
    category: "Spatial",
    type: "Hospitality / Rooftop Café",
    place: "Kothrud, Pune",
    year: "6th Semester, 2026",
    image: "/images/tide-terra.webp",
    seoImage: "/images/aanya-jain-tide-terra-rooftop-cafe-pune.webp",
    imageAlt:
      "Tide & Terra rooftop hospitality design 3D visualization featuring sunken ocean-blue lounge seating, travertine columns, timber decks, and panoramic sunset city horizon in Kothrud, Pune",
    metaTitle: "Tide & Terra Rooftop Café | Hospitality Spatial Design Pune | Aanya Jain",
    metaDescription:
      "Explore Tide & Terra by Aanya Jain: a rooftop hospitality concept in Kothrud, Pune, balancing subterranean cave-like alcoves with open panoramic sky decks.",
    keywords: [
      "Tide & Terra",
      "Rooftop Cafe Pune",
      "Hospitality Interior Design",
      "Kothrud Pune",
      "Spatial Design Portfolio",
      "3D Interior Visualization",
      "Aanya Jain",
      "Banasthali Vidyapith"
    ],
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
      designBrief:
        "Design an experiential, biophilic rooftop hospitality lounge in suburban Kothrud, Pune, celebrating open panoramic horizons while shielding patrons from harsh sun and seasonal monsoon winds.",
      problemBrief:
        "The project required designing an experiential rooftop café in suburban Kothrud, Pune. The site demanded protection from intense sun and seasonal winds while celebrating elevated open-sky views, creating distinct sensory zones for private intimate conversations as well as social gathering.",
      problemStatement:
        "Rooftop dining venues in Western India face intense afternoon solar heat and seasonal wind squalls, which often force operators into enclosing the entire space with glass or cheap vinyl awnings that ruin the outdoor experience.",
      researchSiteAnalysis: [
        "Site study of Kothrud rooftop context: panoramic views, surrounding building heights, and urban noise sources",
        "Wind and weather patterns during Pune’s monsoon and dry summer seasons",
        "Hospitality circulation mapping: customer arrival paths, kitchen service routes, and bar accessibility",
        "User sensory research on acoustic privacy, comfortable seating ergonomics, and atmospheric lighting"
      ],
      designObjectives: [
        "Dual ambiance: intimate cocooned alcoves (Terra) contrasting with open panoramic sky decks (Tide)",
        "Biophilic acoustic screening buffering patrons from bustling suburban Kothrud streets",
        "Fluid service circulation separating waiter transit paths from leisure dining zones",
        "Atmospheric twilight-to-night lighting emphasizing textured travertine columns"
      ],
      designDevelopment: [
        "Concept development combining the protective mass of subterranean caves (terra) with the buoyant openness of tides and sky",
        "Curvilinear spatial planning establishing organic fluid seating alcoves without rigid partition walls",
        "Curated moodboard and earthy color palette: warm sand tones, deep terracotta, muted sage, and aged brass",
        "Zoning exploration dividing the rooftop into an enclosed atmospheric cave lounge, an open sky deck, and a central cocktail bar"
      ],
      moodboardInspiration: [
        "Coastal geology: weathered rock formations, ocean tide lines, and sea salt patina",
        "Warm travertine stone, rich timber plank decking, ocean-blue woven upholstery, and natural brass candle lanterns",
        "Atmospheric dusk lighting celebrating Pune's golden hour sunsets"
      ],
      spacePlanningLayouts: [
        "Sunken ocean-blue lounge banquettes providing intimate, wind-sheltered conversation pits",
        "Elevated timber dining deck with parasol-shaded round tables for open-air lunch and dinner",
        "Perimeter travertine stone piers framing panoramic sightlines toward Pune's distant hills",
        "Central sheltered cocktail and service pavilion keeping staff routes short and efficient"
      ],
      materialsFinishes: [
        "Honed natural travertine stone blocks and columns providing mass and organic tactile texture",
        "Weather-sealed teak timber decking for warm acoustic dampening underfoot",
        "Commercial-grade water-repellent ocean-blue textured upholstery fabrics",
        "Brushed antique brass fixtures, hardware, and lantern fittings",
        "Outdoor woven natural rattan and linen upholstery in ocean and clay tones"
      ],
      furnitureLighting: [
        "Custom sunken modular tufted sofas with deep seating depth for relaxed hospitality dining",
        "Solid timber coffee tables with concealed warm under-bench LED lighting strips",
        "Freestanding patterned parasols and ambient tabletop hurricane candle lanterns",
        "Low-level 2700K floor wash fixtures preventing glare during nighttime stargazing"
      ],
      technicalDrawings: [
        {
          title: "Comprehensive Rooftop Master Layout",
          description:
            "Dimensioned architectural plan illustrating sunken lounge pits, elevated dining deck, bar layout, service kitchen, and restrooms."
        },
        {
          title: "Longitudinal Section Through Sunken Lounge & Deck",
          description:
            "Section detailing floor level changes (450mm step-down), travertine column heights, and sightline clearances over perimeter balustrades."
        },
        {
          title: "Bar Counter & Back-Bar Elevation",
          description:
            "Detailed drawing showing bartender ergonomics, under-counter refrigeration, glassware display, and ambient ceiling coves."
        }
      ],
      visualizations3D: [
        {
          title: "Sunset Golden Hour Rooftop 3D Visualization",
          description:
            "Photorealistic 3D rendering capturing sunken ocean-blue lounge seating, travertine columns, parasols, and sunset city views.",
          image: "/images/aanya-jain-tide-terra-rooftop-cafe-pune.webp"
        }
      ],
      finalOutcome:
        "A complete hospitality portfolio case study comprising contextual site analysis, concept moodboards, dimensioned plans and sections, material swatches, and immersive 3D renderings.",
      specificContribution: [
        "Formulation of the 'Blend of Cave and Sky' design narrative and aesthetic direction",
        "Site climatic analysis, solar path study, and windbreak planning for Kothrud, Pune",
        "AutoCAD architectural layout drafting, furniture schedule creation, and 3ds Max 3D rendering"
      ],
      learningOutcomes: [
        "Translating poetic conceptual metaphors into functional commercial hospitality layouts",
        "Developing fluid, organic spatial boundaries that ensure operational efficiency for service staff",
        "Balancing daylight, acoustic buffers, and evening ambient lighting in rooftop environments"
      ],
      keyHighlights: [
        "Dual ambiance: cocooned cave alcoves contrasting with open panoramic sky decks",
        "Biophilic planter integration acting as acoustic and privacy screens",
        "Sculptural curvilinear architecture creating high visual appeal and memorable user experiences"
      ],
      relatedProjectSlugs: [
        "shulabh-residential-interior-ahmedabad",
        "dining-chair-furniture-design"
      ]
    }
  },
  {
    number: "04",
    slug: "universal-toilet-accessible-design",
    title: "Universal Toilet",
    category: "Spatial",
    type: "Institutional Design",
    place: "Banasthali Vidyapith, Jaipur, Rajasthan",
    year: "6th Semester, 2026",
    image: "/images/universal-toilet.webp",
    seoImage: "/images/aanya-jain-universal-accessible-toilet-design.webp",
    imageAlt:
      "Universal Toilet / Special Ability WC architectural technical sheet featuring furniture layout with wheelchair turning radii, longitudinal and cross sections, flooring layout, and MoHUA barrier-free guidelines at Architecture Department, Banasthali Vidyapith",
    metaTitle: "Universal Toilet | Barrier-Free Accessible Design | Aanya Jain",
    metaDescription:
      "Discover Aanya Jain's Universal Toilet institutional case study: an accessible 364 sq.ft. restroom designed per MoHUA Barrier-Free Guidelines at Banasthali Vidyapith.",
    keywords: [
      "Universal Toilet",
      "Accessible Design",
      "Barrier-Free Restroom",
      "MoHUA Guidelines",
      "Special Ability WC",
      "Banasthali Vidyapith",
      "Aanya Jain",
      "Inclusive Spatial Design"
    ],
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
      designBrief:
        "Reconfigure an existing institutional sanitation facility within the Architecture Department at Banasthali Vidyapith to create an accessible, barrier-free restroom compliant with national guidelines.",
      problemBrief:
        "The project addressed an existing campus restroom facility that suffered from tight clearances, awkward door swings, non-standard fixture heights, slippery surfaces, and lack of accommodation for individuals with mobility challenges. The brief was to reconfigure the facility within its existing structural boundary for maximum accessibility, hygiene, and ease of maintenance.",
      problemStatement:
        "Existing university restroom facilities frequently lack barrier-free provisions. Inward-swinging doors, slippery floor tiles, absent support grab bars, and narrow corridors present severe obstacles to students and staff using wheelchairs or walking aids.",
      researchSiteAnalysis: [
        "Photographic documentation and physical measurement of the existing campus toilet facility",
        "Identification of user accessibility pain points: door thresholds, narrow passageways, and lack of grab rails",
        "Clearance analysis for wheelchair turning circles, walking frame users, and assisted transfers",
        "Examination of natural lighting, ventilation, drainage slopes, and plumbing risers in the existing structure"
      ],
      designObjectives: [
        "100% compliance with MoHUA Harmonised Guidelines and Space Standards for Barrier-Free Environment",
        "Continuous 1500mm wheelchair turning radius inside circulation corridors and stalls",
        "Seamless zero-threshold floor transition with anti-slip high-traction surfaces",
        "Dual washbasin heights accommodating seated wheelchair users and standing individuals"
      ],
      designDevelopment: [
        "Reorganization of interior fixtures into intuitive wet and dry zones",
        "Removal of threshold obstacles to create a flush, continuous zero-barrier floor level",
        "Ergonomic positioning of dual-height washbasins, grab bars, lever faucets, and accessible dispensers",
        "Space planning accommodating a 1500mm continuous turning circle inside the accessible cubicle",
        "Selection of non-porous, slip-resistant, easily washable floor and wall materials"
      ],
      moodboardInspiration: [
        "Clinical hygiene combined with welcoming, non-institutional warmth",
        "Neutral matte grey and white ceramics paired with warm wood laminate doors",
        "High-contrast safety visual cues for visually impaired occupants"
      ],
      spacePlanningLayouts: [
        "28' × 13' (364 sq.ft.) floor layout: wide entrance door opening outward with emergency unlatch hardware",
        "Dual counter washbasins positioned at 3'-0½\" height with 2'-2\" recessed knee clearance beneath",
        "Two side-by-side accessible WC cubicles with 1'-7\" pan height, dual grab bars, and side-transfer space",
        "Logical tile slope directing water directly toward Nahani floor drains"
      ],
      materialsFinishes: [
        "Floor Finish: Anti-skid ceramic / vitrified tiles with matte textured finish for wet traction",
        "Wall Finish: Gloss / semi-gloss ceramic wall tiles up to 2100 mm for easy cleaning and hygiene",
        "Doors: Laminated waterproof flush / PVC doors (900 mm clear opening, outward swing)",
        "Door Frames: Hardwood / powder-coated metal frame (minimum 100 mm frame thickness)",
        "Special Ability Fixtures: MoHUA compliant stainless steel grab bars, long-hand lever taps, and recessed knee-clearance basins"
      ],
      furnitureLighting: [
        "Long-handle single-lever mixer taps operable with closed fists or elbows",
        "L-shaped and horizontal Grade 304 knurled stainless steel grab rails at 2'-9\" and 3'-0\"",
        "High-illuminance glare-free ceiling LED panels (minimum 200 lux) with IP65 moisture sealing",
        "Emergency audio-visual pull cord switch linked to department administration"
      ],
      technicalDrawings: [
        {
          title: "Furniture Layout & Wheelchair Turning Radii (Plan 1/5)",
          description:
            "Architectural floor plan (28' × 13' / 364 sq.ft.) mapping wheelchair turning circles, outward-opening 900mm doors, side transfers, and dual washbasin clearance."
        },
        {
          title: "Cross Section & Washbasin Counter Details (Section 2/6)",
          description:
            "Sectional elevation detailing accessible dual washbasin counter heights (3'-0½\"), knee clearances (2'-2\"), mirrors, and side-by-side accessible WC cubicles."
        },
        {
          title: "Longitudinal Section & Grab Bar Elevations (Section 3/6)",
          description:
            "Technical section specifying standard 1'-7\" WC pan height, 2'-9\" to 3'-0\" safety grab rails, and barrier-free access door signage."
        },
        {
          title: "Flooring Layout & Tile Grid (Plan 1/6)",
          description:
            "Tile setting plan specifying slope to nahani trap and non-slip surface alignment across wet and dry zones."
        }
      ],
      visualizations3D: [
        {
          title: "Official Architectural Technical Drawing Sheet",
          description:
            "High-resolution drawing sheet showing furniture layouts, sections, elevations, specifications table, and MoHUA barrier-free guidelines compliance.",
          image: "/images/aanya-jain-universal-accessible-toilet-design.webp"
        }
      ],
      finalOutcome:
        "A rigorous institutional redesign proposal documented through site photographs, existing vs proposed comparisons, detailed architectural technical drawings, and a clean material board.",
      specificContribution: [
        "Physical site survey and dimensional auditing of the Architecture Department facility",
        "Regulatory research into MoHUA Harmonised Guidelines for Barrier-Free Built Environments",
        "Complete drafting of Plans 1/5 & 1/6, Sections 2/6 & 3/6, and material specification schedules in AutoCAD"
      ],
      learningOutcomes: [
        "Applying universal design principles directly to institutional sanitation spaces",
        "Designing functional retrofits within strict existing architectural and structural footprints",
        "Specifying appropriate durable, slip-resistant, and low-maintenance institutional materials"
      ],
      keyHighlights: [
        "Compliant with MoHUA Harmonised Guidelines and Space Standards for Barrier-Free Environment",
        "Generous 28' × 13' (364 sq.ft.) footprint accommodating independent wheelchair turning & transfers",
        "Outward-swinging 900mm doors with emergency release hardware and zero-threshold transitions"
      ],
      relatedProjectSlugs: [
        "workers-module-bagru",
        "shulabh-residential-interior-ahmedabad"
      ]
    }
  },
  {
    number: "05",
    slug: "shulabh-residential-interior-ahmedabad",
    title: "Shulabh",
    category: "Spatial",
    type: "Residential Design",
    place: "Ahmedabad, Gujarat",
    year: "5th Semester, 2025",
    image: "/images/shulabh.webp",
    seoImage: "/images/aanya-jain-shulabh-residential-interior-ahmedabad.webp",
    imageAlt:
      "Shulabh residential balcony design 3D visualization featuring terracotta jaali screen, wooden armchair with sage cushion, round coffee table, and illuminated shelves in Ahmedabad, Gujarat",
    metaTitle: "Shulabh Residential Interior | Sustainable Passive Living Ahmedabad | Aanya Jain",
    metaDescription:
      "Explore Shulabh by Aanya Jain: a residential interior concept in Ahmedabad, Gujarat, utilizing terracotta jaali screens, Kota stone, and passive cooling.",
    keywords: [
      "Shulabh",
      "Residential Interior Design",
      "Ahmedabad Gujarat",
      "Passive Cooling Architecture",
      "Terracotta Jaali",
      "Sustainable Interior Design",
      "Aanya Jain",
      "Banasthali Vidyapith"
    ],
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
      designBrief:
        "Design a sustainable, thermally comfortable family residence in Ahmedabad’s hot-arid climate, drawing on traditional Gujarati passive cooling strategies and modern uncluttered interior aesthetics.",
      problemBrief:
        "Residential design in Ahmedabad’s hot-arid climate often relies heavily on artificial mechanical cooling, leading to high energy use and disconnected indoor environments. The brief was to design a functional, calm family home prioritizing natural thermal comfort, passive airflow, spatial efficiency, and timeless simplicity.",
      problemStatement:
        "Rapid urban apartment development in Gujarat frequently ignores climate responsiveness. Large unshaded glass windows generate severe greenhouse heat, forcing residents into 24/7 air-conditioned reliance and sky-high energy footprints.",
      researchSiteAnalysis: [
        "Climatic analysis of Ahmedabad: intense dry summer heat, moderate winters, and directional seasonal winds",
        "Study of traditional Gujarati architectural elements: courtyards, jali screens, and thick masonry walls",
        "Analysis of domestic daily rhythms: family gathering, quiet rest, cooking, and natural light requirements",
        "Evaluation of indoor air circulation paths to minimize solar heat buildup during daytime peak hours"
      ],
      designObjectives: [
        "Passive thermal comfort reducing reliance on mechanical HVAC through natural ventilation",
        "Climatic shading via perforated terracotta jaali screen creating soft diffused lighting",
        "Minimalist aesthetic fostering psychological tranquility and domestic well-being",
        "Use of regional, low-carbon materials including Kota stone, reclaimed teak, and lime wash"
      ],
      designDevelopment: [
        "Central layout organization channeling air currents across living spaces toward shaded courtyards",
        "Deep fenestration overhangs and louvers to prevent direct sun from hitting glass window surfaces",
        "Space-efficient furniture layouts emphasizing open sightlines, uncluttered pathways, and flexible floor living",
        "Curated material board highlighting vernacular, natural, and thermally responsive materials",
        "Bespoke built-in wooden storage and seating to maximize usable floor area and maintain clean lines"
      ],
      moodboardInspiration: [
        "Traditional Ahmedabad Pol houses: carved timber brackets, shaded otlas, and central courtyards",
        "Earthy terracotta, natural textured lime-wash, cool green-grey Kota stone, and sage linen textiles",
        "Dappled shadows and peaceful biophilic integration with potted indoor foliage"
      ],
      spacePlanningLayouts: [
        "Transition balcony acting as a thermal buffer between external heat and interior living room",
        "Full-height sliding double-glazed glass doors allowing seamless spatial extension into the outdoor loggia",
        "Quiet seating alcove with custom armchair, fluted table, and reading shelves receiving indirect northern light"
      ],
      materialsFinishes: [
        "Terracotta brick jaali (lattice) screen filtering sunlight and promoting passive cross-ventilation",
        "Polished Kota stone flooring providing a cool natural surface underfoot",
        "Natural lime-wash wall finish that breathes and reflects indirect daylight",
        "Solid reclaimed teak wood for custom interior furniture and window louvers",
        "Woven cotton khadi and linen fabrics in natural earthy tones for upholstery"
      ],
      furnitureLighting: [
        "Solid teak lounge armchair with neutral linen upholstery and sage-green accent pillow",
        "Custom fluted round coffee table crafted from sustainably sourced local timber",
        "Floating wall display shelves with warm 2700K concealed underside LED strip lighting",
        "Directional matte black cylindrical wall sconce providing glare-free evening reading light"
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
      visualizations3D: [
        {
          title: "Terracotta Jaali Balcony Lounge 3D Visualization",
          description:
            "Photorealistic 3D rendering capturing dappled sunlight through the terracotta brick jaali screen, armchair, fluted coffee table, and lush planters.",
          image: "/images/aanya-jain-shulabh-residential-interior-ahmedabad.webp"
        }
      ],
      finalOutcome:
        "A holistic residential design presentation featuring architectural floor plans, cross-sections, interior elevations, custom furniture drawings, moodboards, and warm interior visualisations.",
      specificContribution: [
        "Vernacular architectural research into Ahmedabad Pol houses and passive cooling strategies",
        "Balcony and living room layout planning with thermal buffer zoning",
        "Custom furniture design, material board curation, 3D digital modeling, and photorealistic lighting rendering"
      ],
      learningOutcomes: [
        "Integrating vernacular passive cooling principles into contemporary residential space planning",
        "Developing space-efficient furniture layouts tailored to daily domestic routines and well-being",
        "Selecting thermally responsive regional materials that age gracefully with minimal maintenance"
      ],
      keyHighlights: [
        "Passive thermal comfort strategies significantly reducing reliance on artificial cooling",
        "Calm, clutter-free spatial planning enhancing visual harmony and everyday well-being",
        "Rich tactile material palette honoring sustainable and local craft traditions"
      ],
      relatedProjectSlugs: [
        "centre-table-furniture-design",
        "tide-and-terra-rooftop-cafe-pune"
      ]
    }
  },
  {
    number: "06",
    slug: "dining-chair-furniture-design",
    title: "Dining Chair",
    category: "Furniture",
    type: "Furniture Design",
    place: "Furniture Design Studio",
    year: "5th Semester, 2025",
    image: "/images/dining-chair.webp",
    seoImage: "/images/aanya-jain-dining-chair-furniture-design.webp",
    imageAlt:
      "Custom solid hardwood dining chairs and table suite arranged in an elegant sunlit dining hall with arched floor-to-ceiling windows overlooking a landscaped garden",
    metaTitle: "Dining Chair | Ergonomic Hardwood Furniture Design | Aanya Jain",
    metaDescription:
      "Discover Aanya Jain's Dining Chair case study: an exploration of 'Protection & Openness' featuring sculpted hardwood, curved cabriole legs, and woven cord backrest.",
    keywords: [
      "Dining Chair Design",
      "Ergonomic Furniture",
      "Sculpted Hardwood",
      "Furniture Design Studio",
      "Protection & Openness",
      "Industrial Design Portfolio",
      "Aanya Jain",
      "Banasthali Vidyapith"
    ],
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
      designBrief:
        "Sculpt an ergonomic wooden dining chair that resolves the tension between supportive posture and visual lightness, balancing structural integrity with tactile craftsmanship.",
      problemBrief:
        "Dining chairs often present a trade-off: rigid, formal chairs provide structure but feel unwelcoming, while deep lounge chairs are unsuited for dining postures. The challenge was to sculpt a chair whose backrest curves around the user to provide reassuring ergonomic support (protection) while remaining visually light and inviting (openness).",
      problemStatement:
        "Standard mass-manufactured dining chairs frequently fail to support the thoracic spine during extended social dining, while chairs offering adequate cushioning often feature bulky visual silhouettes that crowd dining tables.",
      researchSiteAnalysis: [
        "Anthropometric analysis of dining ergonomics: optimal seat height (440–460mm), seat depth (420–450mm), and back angle (98°–102°)",
        "Spinal posture exploration evaluating thoracic support during active dining vs relaxed post-meal conversation",
        "Visual lightness study in open dining areas to prevent bulky silhouettes from dominating table horizons",
        "Investigation of timber joinery techniques capable of handling multidirectional cantilever stresses"
      ],
      designObjectives: [
        "Curved ergonomic backrest delivering lumbar and thoracic support during extended dining",
        "Sculptural silhouette maintaining visual transparency across the dining room horizon",
        "Durable traditional mortise-and-tenon timber joinery handling dynamic load without flexing",
        "Tactile celebration of natural wood grain enhanced by woven cord detailing"
      ],
      designDevelopment: [
        "Ideation sketches exploring organic curvilinear contours inspired by embracing forms and human gestures",
        "Rapid form-finding using 1:5 scale clay and wire models to refine the three-dimensional backrest curve",
        "Construction of a full-scale 1:1 physical prototype to test ergonomic comfort, stability, and thigh clearance",
        "Joinery development detailing mortise-and-tenon connections between the curved back rail and rear legs",
        "Refinement of digital 3D models and rendering of material finishes"
      ],
      moodboardInspiration: [
        "Danish modern organic woodworking traditions (Hans Wegner, Finn Juhl, Nanna Ditzel)",
        "Anatomical spinal curvatures and human embrace gestures",
        "Natural woven rope, cord craft, and tactile hand-rubbed timber finishes"
      ],
      spacePlanningLayouts: [
        "Engineered dimensions fitting standard 750mm dining table clearance with ample knee and elbow space",
        "Armchair variant engineered for table heads; armless side chair variant for communal side placement",
        "Stacking and tuck-in clearance allowing chairs to push flush against the dining table apron"
      ],
      materialsFinishes: [
        "Solid natural hardwood (Ash/Teak) sculpted with smooth organic transitions",
        "Protective hand-rubbed matte clear oil finish highlighting natural wood grain",
        "High-resilience foam core seat cushion engineered for enduring comfort",
        "Textured woven upholstery fabric in warm neutral tones for breathability",
        "Natural woven cord lower-back detailing providing flexible lumbar contouring"
      ],
      furnitureLighting: [
        "Complete 8-seater dining room suite pairing sculpted armchairs and side chairs with a matching solid wood table",
        "Pendant luminaire suspended at 750mm above table surface for intimate, non-glare dining illumination",
        "Natural daylight optimization via expansive arched windows framing outdoor garden vistas"
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
      visualizations3D: [
        {
          title: "Architectural Dining Suite 3D Visualization",
          description:
            "Photorealistic 3D interior rendering showing the complete dining set in an arched window dining room overlooking a landscaped garden.",
          image: "/images/aanya-jain-dining-chair-furniture-design.webp"
        }
      ],
      finalOutcome:
        "A comprehensive furniture portfolio presentation detailing initial sketches, ergonomic studies, 1:1 prototype testing, joinery construction diagrams, and photorealistic 3D visualisations.",
      specificContribution: [
        "Ideation sketching and human anatomy posture exploration for dining ergonomics",
        "Physical 1:1 scale mockups testing seat comfort, backrest angles, and armrest height",
        "AutoCAD joinery detail drafting and 3D modeling and photorealistic interior scene rendering"
      ],
      learningOutcomes: [
        "Translating anthropometric human body data into comfortable, sculpted furniture geometry",
        "Hands-on full-scale prototyping to validate design assumptions and structural stability",
        "Detailing woodworking joinery and upholstery assemblies for practical manufacturing"
      ],
      keyHighlights: [
        "Organic continuous curved backrest delivering optimal lumbar and thoracic support",
        "Balanced visual presence offering generous comfort without physical or visual bulk",
        "Validated through physical 1:1 scale prototyping and rigorous joinery study"
      ],
      relatedProjectSlugs: [
        "centre-table-furniture-design",
        "tide-and-terra-rooftop-cafe-pune"
      ]
    }
  }
];

export const PROJECT_FILTERS = ["All", "Spatial", "Furniture"] as const;
export type ProjectFilter = (typeof PROJECT_FILTERS)[number];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
