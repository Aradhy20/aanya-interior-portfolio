export type CertificateCategory =
  | "All Certificates"
  | "Academic Recognition"
  | "Design & CAD"
  | "3D & Digital Design"
  | "AI & Digital Skills"
  | "Creative Achievement"
  | "Personal Development";

export interface CertificateItem {
  id: string;
  order: number;
  filename: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  category: string;
  filterCategory: CertificateCategory;
  image: string;
  previewImage?: string;
  downloadFilename: string;
  isFeatured?: boolean;
  featuredBadge?: string;
  aspectRatio: "portrait" | "landscape";
  verificationNote?: string;
}

export const CERTIFICATE_CATEGORIES: CertificateCategory[] = [
  "All Certificates",
  "Academic Recognition",
  "Design & CAD",
  "3D & Digital Design",
  "AI & Digital Skills",
  "Creative Achievement",
  "Personal Development"
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "03-banasthali-top-20",
    order: 1,
    filename: "03-banasthali-top-20-percent.jpg",
    title: "Top 20% — Industrial Design",
    issuer: "Banasthali Vidyapith, Department of Design",
    date: "09 March 2026",
    description:
      "Official academic recognition confirming that Aanya Jain was among the top 20% of the Industrial Design branch based on total marks secured during the sixth semester.",
    category: "Academic Recognition",
    filterCategory: "Academic Recognition",
    image: "/certificates/03-banasthali-top-20-percent.jpg",
    previewImage: "/certificates/03-banasthali-top-20-percent-preview.jpg",
    downloadFilename: "Aanya-Jain-Banasthali-Top-20-Academic-Recognition.jpg",
    isFeatured: true,
    featuredBadge: "Top 20% Rank",
    aspectRatio: "portrait",
    verificationNote: "Ref: DD/ADMIN/2026/03/004 · Signed by Head of Department"
  },
  {
    id: "01-iit-delhi-interior-design",
    order: 2,
    filename: "01-iit-delhi-interior-design-basics.jpg",
    title: "Interior Design Basics & Entrepreneurship",
    issuer: "World Technocon in association with TRYST-2025, IIT Delhi",
    date: "02 March 2025",
    description:
      "Successfully completed a one-day workshop programme on Interior Design Basics and Entrepreneurship at IIT Delhi.",
    category: "Design Workshop",
    filterCategory: "Design & CAD",
    image: "/certificates/01-iit-delhi-interior-design-basics.jpg",
    downloadFilename: "Aanya-Jain-IIT-Delhi-Interior-Design-Workshop.jpg",
    aspectRatio: "landscape",
    verificationNote: "TRYST-2025 · Certificate # 2TCG56SMKRTCPEH"
  },
  {
    id: "02-iit-bombay-autocad",
    order: 3,
    filename: "02-iit-bombay-autocad-techfest.jpg",
    title: "AutoCAD Workshop",
    issuer: "Techfest, IIT Bombay",
    date: "22–24 December 2025",
    description:
      "Certificate of completion for participation in the AutoCAD workshop conducted by Techfest, IIT Bombay.",
    category: "Design & CAD Workshop",
    filterCategory: "Design & CAD",
    image: "/certificates/02-iit-bombay-autocad-techfest.jpg",
    downloadFilename: "Aanya-Jain-IIT-Bombay-AutoCAD-Workshop.jpg",
    aspectRatio: "landscape",
    verificationNote: "Techfest 2025 · Faculty Advisor & Coordinator Endorsed"
  },
  {
    id: "04-banasthali-zbrush",
    order: 4,
    filename: "04-banasthali-zbrush-3d-sculpting.jpg",
    title: "Game 3D Sculpting Using Z Brush",
    issuer: "Banasthali Vidyapith, Department of Design",
    date: "26–30 December 2024",
    description:
      "Certificate of Participation for successfully completing a five-day hands-on workshop on Game 3D Sculpting Using Z Brush, conducted as part of HOW 2024.",
    category: "3D & Digital Design Workshop",
    filterCategory: "3D & Digital Design",
    image: "/certificates/04-banasthali-zbrush-3d-sculpting.jpg",
    downloadFilename: "Aanya-Jain-ZBrush-3D-Sculpting-Workshop.jpg",
    aspectRatio: "landscape",
    verificationNote: "HOW 2024 · 5-Day Intensive Hands-on Workshop"
  },
  {
    id: "05-banasthali-mehndi",
    order: 5,
    filename: "05-banasthali-mehndi-second-place.jpg",
    title: "Second Position — Mehndi Competition",
    issuer: "Banasthali Vidyapith, Department of Design",
    date: "26 July 2025",
    description:
      "Certificate of Achievement recognising Aanya Jain for securing second position in the Mehndi Competition organised by the Department of Design.",
    category: "Creative Achievement",
    filterCategory: "Creative Achievement",
    image: "/certificates/05-banasthali-mehndi-second-place.jpg",
    downloadFilename: "Aanya-Jain-Mehndi-Competition-Second-Position.jpg",
    aspectRatio: "landscape",
    verificationNote: "Department of Design · Creative Competition Award"
  },
  {
    id: "06-be10x-ai-tools",
    order: 6,
    filename: "06-be10x-ai-tools-chatgpt-workshop.jpg",
    title: "AI Tools & ChatGPT Workshop",
    issuer: "be10x",
    date: "22 March 2026",
    description:
      "Successfully completed an AI Tools and ChatGPT workshop covering AI-assisted presentation creation, data analysis, coding and debugging.",
    category: "AI & Digital Skills",
    filterCategory: "AI & Digital Skills",
    image: "/certificates/06-be10x-ai-tools-chatgpt-workshop.jpg",
    downloadFilename: "Aanya-Jain-be10x-AI-Tools-Workshop.jpg",
    aspectRatio: "landscape",
    verificationNote: "be10x Verified · AI Workflow Optimization"
  },
  {
    id: "07-temple-leadership",
    order: 7,
    filename: "07-temple-employability-leadership.jpg",
    title: "Employability, Personality & Leadership Enrichment",
    issuer: "TEMPLE Certificate of Achievement, 2023–24",
    date: "Session 2023–24",
    description:
      "Recognition for workshop participation and engagement in a programme exploring music, acting, VFX, photography, filmmaking and writing, facilitated by Randeep Jha.",
    category: "Personal & Professional Development",
    filterCategory: "Personal Development",
    image: "/certificates/07-temple-employability-leadership.jpg",
    downloadFilename: "Aanya-Jain-TEMPLE-Leadership-Workshop.jpg",
    aspectRatio: "portrait",
    verificationNote: "Facilitated by Randeep Jha (Writer-Director)"
  }
];
