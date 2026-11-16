export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  shortAnswer: string;
  category: "Identity & Background" | "Design Concepts" | "Portfolio & Collaboration";
  relatedLinks?: { label: string; href: string }[];
};

export const FAQS: FaqItem[] = [
  {
    id: "who-is-aanya-jain",
    question: "Who is Aanya Jain?",
    category: "Identity & Background",
    shortAnswer:
      "Aanya Jain is an interior and industrial design student in her 7th semester at Banasthali Vidyapith, Rajasthan, recognized in the top 20% of her branch.",
    answer:
      "Aanya Jain is an Indian interior and industrial design student currently in her 7th semester of the Bachelor of Design (B.Des) program at Banasthali Vidyapith, Rajasthan (2023–2027). Recognized among the top 20% of students in her branch, she focuses on sustainable spatial planning, ergonomic furniture, and human-centered design. Her academic portfolio showcases hands-on workshops at IIT Delhi, IIT Bombay, and resolved spatial and furniture prototypes.",
    relatedLinks: [
      { label: "About & Credentials", href: "/#about" },
      { label: "Academic Recognition", href: "/#certifications" }
    ]
  },
  {
    id: "design-specialization",
    question: "What is Aanya Jain’s design specialization?",
    category: "Identity & Background",
    shortAnswer:
      "Aanya specializes in sustainable spatial design, ergonomic furniture development, and climate-responsive interior planning.",
    answer:
      "Aanya specializes in sustainable spatial planning and ergonomic furniture design. Her work bridges interior architecture and industrial product design, focusing on passive thermal comfort, space-saving multifunctional kinematics, accessibility, and material exploration. Her design methodology combines anthropometric research with technical drafting in AutoCAD and 3D visualization in 3ds Max, ensuring spaces and objects are functional, culturally contextual, and aesthetically resolved.",
    relatedLinks: [
      { label: "Software & Capabilities", href: "/#skills" },
      { label: "Design Approach", href: "/#approach" }
    ]
  },
  {
    id: "location-based",
    question: "Where is Aanya Jain based?",
    category: "Identity & Background",
    shortAnswer:
      "Aanya Jain is based in Agra, Uttar Pradesh, India, and studies at Banasthali Vidyapith near Jaipur, Rajasthan.",
    answer:
      "Aanya Jain is based in Agra, Uttar Pradesh, India (PIN 283151), where she completed her senior secondary education in the PCM stream with distinction (88.4%). She undertakes her university design studies at the Department of Design, Banasthali Vidyapith, near Jaipur, Rajasthan. Her academic design projects span locations across India, including Bagru (Rajasthan), Ahmedabad (Gujarat), and Kothrud (Pune).",
    relatedLinks: [
      { label: "Contact & Location", href: "/#contact" },
      { label: "Education Timeline", href: "/#about" }
    ]
  },
  {
    id: "what-is-spatial-design",
    question: "What is spatial design?",
    category: "Design Concepts",
    shortAnswer:
      "Spatial design is a multidisciplinary discipline that organizes physical environments to enhance human movement, comfort, and interaction.",
    answer:
      "Spatial design is a multidisciplinary field integrating interior design, architectural planning, landscape, and environmental psychology. It focuses on how humans experience and move through three-dimensional space over time. Rather than treating rooms as static decorative surfaces, spatial design orchestrates daylight, acoustics, physical thresholds, circulation paths, and climatic elements to foster physical comfort, intuitive navigation, and emotional well-being.",
    relatedLinks: [
      { label: "Worker’s Module Spatial Case Study", href: "/projects/workers-module-bagru" },
      { label: "Tide & Terra Rooftop Lounge", href: "/projects/tide-and-terra-rooftop-cafe-pune" }
    ]
  },
  {
    id: "what-is-sustainable-interior-design",
    question: "What is sustainable interior design?",
    category: "Design Concepts",
    shortAnswer:
      "Sustainable interior design minimizes environmental impact through passive thermal comfort, low-carbon materials, and energy efficiency.",
    answer:
      "Sustainable interior design creates healthy indoor spaces while minimizing negative environmental impacts. Key strategies include passive cooling, solar orientation, natural cross-ventilation, and sourcing non-toxic, renewable, and locally sourced materials such as terracotta, Kota stone, and reclaimed timber. In projects like Shulabh in Ahmedabad, passive shading screens and breathable finishes significantly reduce energy consumption and HVAC dependency while improving indoor air quality.",
    relatedLinks: [
      { label: "Shulabh Residential Project", href: "/projects/shulabh-residential-interior-ahmedabad" }
    ]
  },
  {
    id: "what-is-ergonomic-furniture-design",
    question: "What is ergonomic furniture design?",
    category: "Design Concepts",
    shortAnswer:
      "Ergonomic furniture design applies human body measurements to create furniture supporting natural posture, comfort, and movement.",
    answer:
      "Ergonomic furniture design applies anthropometric measurements and human biomechanics to craft furniture that supports healthy posture, relieves musculoskeletal stress, and adapts to varied activities. In Aanya’s Dining Chair and Centre Table projects, seat heights (440–460mm), lumbar backrest curves (98°–102°), and nesting kinematics are validated through 1:1 scale prototyping, ensuring optimal comfort during dining, working, and casual conversation.",
    relatedLinks: [
      { label: "Dining Chair Ergonomics", href: "/projects/dining-chair-furniture-design" },
      { label: "Centre Table Kinematics", href: "/projects/centre-table-furniture-design" }
    ]
  },
  {
    id: "software-skills",
    question: "What software does Aanya Jain use?",
    category: "Identity & Background",
    shortAnswer:
      "Aanya uses AutoCAD, SketchUp, 3ds Max, Rayon, Adobe Illustrator, Adobe Photoshop, and Canva for design and drafting.",
    answer:
      "Aanya is proficient in industry-standard 2D and 3D design software. Her technical toolkit includes AutoCAD for 2D architectural drafting and joinery detailing, SketchUp and 3ds Max for 3D modeling and photorealistic rendering, Rayon for architectural space planning, and Adobe Illustrator, Photoshop, and Canva for concept moodboards, visual layouts, and portfolio presentations.",
    relatedLinks: [
      { label: "View Software Grid", href: "/#skills" },
      { label: "IIT Bombay AutoCAD Credential", href: "/#certifications" }
    ]
  },
  {
    id: "major-projects",
    question: "What are the major projects in Aanya Jain’s portfolio?",
    category: "Portfolio & Collaboration",
    shortAnswer:
      "Her portfolio features six verified projects: Worker’s Module, Centre Table, Tide & Terra, Universal Toilet, Shulabh, and Dining Chair.",
    answer:
      "Aanya’s portfolio features six verified academic projects: Worker’s Module (modular construction shelter in Bagru), Centre Table (space-saving nested living room furniture), Tide & Terra (hospitality rooftop lounge in Pune), Universal Toilet (barrier-free institutional restroom at Banasthali), Shulabh (passive-cooling residential interior in Ahmedabad), and Dining Chair (sculpted ergonomic hardwood seating). Each case study includes comprehensive technical drawings and 3D visualizations.",
    relatedLinks: [
      { label: "Explore All Selected Work", href: "/#work" }
    ]
  },
  {
    id: "space-planning-approach",
    question: "How does Aanya approach interior space planning?",
    category: "Design Concepts",
    shortAnswer:
      "Aanya follows a three-pillar framework: Observe (site, climate, user), Imagine (concepts, forms, materials), and Resolve (layouts, details, drawings).",
    answer:
      "Aanya follows an iterative three-step approach: Observe, Imagine, and Resolve. She begins by analyzing climatic conditions, daylight angles, circulation routes, and user rituals. Next, she generates spatial concepts and material boards responding to practical needs. Finally, she resolves the design into clear architectural plans, dimensioned sections, joinery details, and 3D renderings that guide fabrication and spatial execution.",
    relatedLinks: [
      { label: "Design Approach Framework", href: "/#approach" }
    ]
  },
  {
    id: "contact-collaboration",
    question: "How can someone contact Aanya for a design collaboration?",
    category: "Portfolio & Collaboration",
    shortAnswer:
      "Contact Aanya via email at aanyachandoriya2@gmail.com, phone at +91 7454876841, or through her portfolio contact section.",
    answer:
      "Design studios, interior firms, and research mentors can contact Aanya Jain via email at aanyachandoriya2@gmail.com or by telephone at +91 7454876841. She welcomes interior design internships, industrial design opportunities, and creative research collaborations. Visitors can also download her verified resume directly from the website or view her complete portfolio flipbook.",
    relatedLinks: [
      { label: "Contact Section", href: "/#contact" },
      { label: "Download Resume (PDF)", href: "/downloads/Aanya-Jain-Resume.pdf" }
    ]
  }
];
