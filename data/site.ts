/**
 * Central content + data for the Perceptyne clone.
 * Screenshots are the source of truth; copy transcribed from them.
 */

export const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PRODUCTS", href: "#products", hasPlus: true },
  { label: "CAREERS", href: "#careers" },
] as const;

/* ---------- Section 3: PR-OMNI ---------- */
export const OMNI_SPECS = [
  { title: "Dual Arms", detail: "7 DOF Arm with joint contacts" },
  { title: "Multimodal sensing", detail: "Vision, Force and Tactile" },
  { title: "Payload", detail: "10 kg combined" },
  { title: "Mobility", detail: "Differential drive, Vertical Gantry" },
] as const;

/* ---------- Section 4: PR-PHI ---------- */
export const PHI_SPECS = [
  {
    title: "Modular-Architecture",
    detail: "Skill modules for specific tasks.",
  },
  { title: "Visual Servo", detail: "Track moving objects without markers." },
  {
    title: "Multimodal perception",
    detail: "AI built using Vision, Force & Touch Data.",
  },
  { title: "Tele-Operation", detail: "For shared Autonomy." },
] as const;

/* ---------- Section 6: Why Perceptyne Exists ---------- */
export const WHY_CARDS = [
  {
    icon: "/icons/2.gif",
    title: "From 6 Months to\n10 Days",
    body: "Cut automation timelines dramatically with our deploy-ready systems.",
  },
  {
    icon: "/icons/3.gif",
    title: "Zero Production\nDowntime",
    body: "We deploy while you keep running, no shutdowns, no losses.",
  },
  {
    icon: "/icons/1.gif",
    title: "Intelligence Built-In",
    body: "Empower your teams to deploy and automate workflows with minimal training",
  },
  {
    icon: "/icons/4.gif",
    title: "No Overhaul\nNeeded",
    body: "Seamlessly integrates into existing infrastructure and workflows.",
  },
] as const;

/* ---------- Section 7: Built for Real Workflows (marquee rows) ---------- */
const U = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const MARQUEE_ROWS: ReadonlyArray<
  ReadonlyArray<{ src: string; alt: string }>
> = [
  [
    { src: U("photo-1581091226825-a6a2a5aee158"), alt: "Engineers on an automated production line" },
    { src: U("photo-1518770660439-4636190af475"), alt: "Circuit board assembly" },
    { src: U("photo-1567789884554-0b844b597180"), alt: "Robotics electronics close up" },
    { src: U("photo-1581092918056-0c4c3acd3789"), alt: "Technician working on machinery" },
    { src: U("photo-1565043666747-69f6646db940"), alt: "Automated warehouse" },
    { src: U("photo-1531973576160-7125cd663d86"), alt: "Engineer with laptop on factory floor" },
  ],
  [
    { src: U("photo-1504917595217-d4dc5ebe6122"), alt: "Precision assembly line" },
    { src: U("photo-1606760227091-3dd870d97f1d"), alt: "Laboratory testing of components" },
    { src: U("photo-1504328345606-18bbc8c9d7d1"), alt: "Industrial machinery" },
    { src: U("photo-1581094271901-8022df4466f9"), alt: "Robotics research" },
    { src: U("photo-1562408590-e32931084e23"), alt: "Automotive manufacturing" },
    { src: U("photo-1551434678-e076c223a692"), alt: "Team monitoring operations" },
  ],
];

/* ---------- Products dropdown (bottom-nav PRODUCTS panel) ---------- */
export const PRODUCTS = [
  { name: "PR-OMNI", img: U("photo-1485827404703-89b55fcc595e") },
  { name: "PR-DUO", img: U("photo-1535378917042-10a22c95931a") },
  { name: "PR-UNO", img: U("photo-1561144257-e32e8efc6c4f") },
  { name: "PR-PHI", phi: true as const },
  {
    name: "PR-SYNC",
    img: U("photo-1601132359864-c974e79890ac"),
    comingSoon: true as const,
  },
] as const;

/* ---------- About page ---------- */
export const ABOUT_MISSION =
  "Build AI powered robots that empower countless organizations / individuals bridge the physical skill availability gap they face today";

export const DICHOTOMIES = [
  "Having experience while not losing a first-principles mindset",
  "Moving fast while building robust, reliable systems",
  "Working on disruptive tech while hitting the market ASAP",
  "Thinking long-term while delivering real value today",
  "Being deeply technical while staying obsessed with the user",
] as const;

export const INVESTORS = [
  { name: "z21 ventures", sub: "" },
  { name: "Yali Capital", sub: "Deep Tech Fund" },
  { name: "Endiya", sub: "" },
  { name: "Venture Catalysts", sub: "India's #1 Integrated Incubator" },
  { name: "T-Hub", sub: "" },
  { name: "Whiteboard", sub: "" },
] as const;

export const TEAM = [
  {
    name: "Ravi Teja Chivukula",
    role: "CEO / Co-CTO",
    img: U("photo-1500648767791-00dcc994a43e"),
  },
  {
    name: "Jagga Raju Nadimpalli",
    role: "COO",
    img: U("photo-1507003211169-0a1dd7228f2d"),
  },
  {
    name: "Mrutyunjaya Nadiminti",
    role: "CBO / Co-CTO",
    img: U("photo-1472099645785-5658abf4ff4e"),
  },
] as const;

/* ---------- Section 9: Latest News ---------- */
export const NEWS = [
  {
    publication: "The New Indian Express",
    title: "Perceptyne Robots: Engineering India's rob...",
    body: "CE speaks to Jagga Rayudu Nadimpalli, co-founder of Perceptyne about building robots ground-up in India, vision to rival Chinese robotics and more.",
    accent: "from-[#5B3DF5] to-[#7C5CFB]",
  },
  {
    publication: "Business Standard",
    title: "Perceptyne Named Finalist at Global Huma...",
    body: "Hyderabad (Telangana) [India], October 15: Perceptyne, a pioneering Indian deep-tech robotics startup focused on intelligent humanoid robots, has been shortlisted as a finalist...",
    accent: "from-[#6A40F0] to-[#9B7BFC]",
  },
  {
    publication: "Forbes",
    title: "Partnered with D Globalist. I Unveiling the...",
    body: "Meet the Select 200 companies with global business potential being recognised at Forbes India presents D Globalist 2024-2025. These companies have emerged from over 1000 applications &...",
    accent: "from-[#5B3DF5] to-[#8B5CF6]",
  },
] as const;

/* ---------- Section 10: Footer ---------- */
export const FOOTER_COLUMNS = {
  company: {
    title: "Company",
    links: ["Home", "About", "Careers", "Contact Us"],
  },
  legal: {
    title: "Legal",
    links: [
      "Privacy Policy",
      "Terms & Conditions",
      "Copyright Policy",
      "Policy for Equal Opportunity",
    ],
  },
  legalExtra: {
    title: "",
    links: [
      "Grievance Redressal Policy",
      "Data Processing Addendum",
      "Support & Availability Policy",
    ],
  },
} as const;
