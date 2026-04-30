// NextGen Web Agency Brand Constants
export const BRAND = {
  name: "NextGen Web Agency",
  founder: "Neer Pandey",
  role: "Full-Stack Developer & Founder",
  tagline: "Vibe Coding - Fast, AI-Native Development",
  location: "Rewa & Sirmour, Madhya Pradesh",
  description:
    "Specializing in real-time gaming tournaments, premium UI/UX design with 3D interactions, and full-stack e-commerce solutions using cutting-edge technologies.",
};

export const SERVICES = [
  {
    id: 1,
    title: "Real-Time Gaming Tournaments",
    description:
      "High-performance tournament apps with dynamic wallet systems and Firebase real-time backend. Expert in dashboard design and admin controls.",
    skills: ["Firebase Realtime DB", "Wallet Systems", "Admin Dashboards", "React", "Vercel"],
    icon: "🎮",
  },
  {
    id: 2,
    title: "Premium UI/UX Design",
    description:
      "Sophisticated glassmorphism designs and interactive 3D experiences. We craft premium, high-contrast interfaces that captivate users.",
    skills: ["Glassmorphism", "3D Interactions", "Three.js", "Interactive Design", "Motion Design"],
    icon: "✨",
  },
  {
    id: 3,
    title: "Full-Stack E-commerce Solutions",
    description:
      "End-to-end e-commerce platforms with secure payment integration, inventory management, and dynamic pricing modules.",
    skills: ["React", "Node.js", "Firebase", "Stripe", "Real-time Updates"],
    icon: "🛒",
  },
];

export const PROJECTS = [
  {
    id: 1,
    number: "01",
    title: "FireBattle",
    category: "Gaming Tournament Platform",
    description:
      "A high-performance real-money tournament app featuring dynamic wallet systems, Firebase Firestore backend, and sophisticated admin dashboards.",
    tools: ["React", "Firebase", "Wallet Integration", "Real-time DB", "Admin Dashboard"],
    color: "#FF6B6B",
    liveUrl: "https://firebattle-demo.vercel.app",
    image: "/images/firebattle.webp",
  },
  {
    id: 2,
    number: "02",
    title: "NeerAlingx Garage",
    category: "Automotive Services",
    description:
      "Sophisticated automotive service landing page featuring 5D wheel alignment booking system and dynamic pricing modules with real-time availability.",
    tools: ["React", "Three.js", "Tailwind CSS", "Dynamic Pricing", "Booking System"],
    color: "#4ECDC4",
    liveUrl: "https://neeralingx-garage.vercel.app",
    image: "/images/neeraling.webp",
  },
  {
    id: 3,
    number: "03",
    title: "Neer-AI",
    category: "AI Image Generation",
    description:
      "Multi-account AI image generation platform with advanced device fingerprinting and credit rotation logic for seamless user experience.",
    tools: ["React", "AI Integration", "Device Fingerprinting", "Credit System", "v0.dev"],
    color: "#B800E6",
    liveUrl: "https://neer-ai-demo.vercel.app",
    image: "/images/neer-ai.webp",
  },
];

export const TECH_STACK = [
  {
    name: "React",
    image: "/images/react2.webp",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    image: "/images/tailwind.webp",
    category: "Styling",
  },
  {
    name: "Firebase",
    image: "/images/firebase.webp",
    category: "Backend",
  },
  {
    name: "Vercel",
    image: "/images/vercel.webp",
    category: "Deployment",
  },
  {
    name: "v0.dev",
    image: "/images/v0.webp",
    category: "Development",
  },
  {
    name: "Three.js",
    image: "/images/threejs.webp",
    category: "3D Graphics",
  },
];

export const CONTACT_INFO = {
  email: "hello@neertech.dev",
  phone: "+91 9999 999 999",
  github: "https://github.com/Neerpandey",
  linkedin: "https://linkedin.com/in/neerpandey",
  twitter: "https://twitter.com/neerpandey",
  instagram: "https://instagram.com/neerpandey",
};

export const THEME = {
  colors: {
    primary: "#0f4c75", // NextGen Blue
    secondary: "#b800e6", // Neon Purple
    accent: "#00d4ff", // Cyan
    background: "#0a0e27",
    surface: "#141b2f",
    text: "#ffffff",
    textMuted: "#a0a9c9",
  },
  gradients: {
    hero: "linear-gradient(135deg, #0f4c75 0%, #b800e6 100%)",
    button: "linear-gradient(135deg, #00d4ff 0%, #0f4c75 100%)",
  },
};

// Firebase Configuration
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDq8p_example_key_here",
  authDomain: "next-gen-agency-25ad4.firebaseapp.com",
  projectId: "next-gen-agency-25ad4",
  storageBucket: "next-gen-agency-25ad4.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456",
  databaseURL: "https://next-gen-agency-25ad4.firebaseio.com",
};
