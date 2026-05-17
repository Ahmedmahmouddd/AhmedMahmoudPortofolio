export const SECTIONS = [
  { id: "about", file: "about.dart", icon: "dart" },
  { id: "experience", file: "experience.dart", icon: "dart" },
  { id: "projects", file: "projects.dart", icon: "dart" },
  { id: "skills", file: "skills.dart", icon: "dart" },
  { id: "education", file: "education.dart", icon: "dart" },
  { id: "contact", file: "contact.dart", icon: "dart" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

export const TERMINAL_USER = "ahmed@portfolio";

export const PROFILE = {
  name: "Ahmed Mahmoud",
  role: "Junior Flutter Developer",
  email: "ahmedmahmouddd57@gmail.com",
  phone: "+20 101 709 4431",
  location: "Cairo, Egypt",
  github: "https://github.com/Ahmedmahmouddd",
  linkedin: "https://www.linkedin.com/in/ahmed-mahmoud-657492292/",
  summary:
    "Junior Flutter Developer with nearly 2 years of experience building real-world mobile and desktop applications with Dart and Flutter, including maintaining and improving legacy code, taking projects from early-stage development to full deployment on App Store and Google Play, and contributing to UI/UX, testing, and collaborative development.",
  aboutLines: [
    "Junior Flutter Developer with nearly 2 years of experience building",
    "real-world mobile and desktop applications with Dart and Flutter,",
    "including legacy code, App Store & Play deployment, UI/UX, testing & teamwork.",
  ],
  focus: ["Mobile UX", "Clean Architecture", "End-to-End Delivery"],
  roleLine:
    "Building real-world mobile & desktop apps with Dart & Flutter — UI/UX, testing & full deployment",
};

export const SKILLS = {
  languagesAndFrameworks: ["Dart", "Flutter", "Android", "iOS"],
  architecturePatterns: ["MVC", "MVP", "MVVM", "MVI", "Clean Architecture"],
  stateManagement: ["BLoC", "Riverpod", "Provider"],
  notifications: ["Push Notifications", "Local Notifications"],
  cachingAndStorage: ["Local Database", "Caching Strategies"],
  toolsAndServices: [
    "Git",
    "GitHub",
    "Firebase",
    "RESTful APIs",
    "GraphQL",
    "Google Maps API",
    "Payment Gateways",
  ],
  multiModuleAndMonorepo: ["Flavors"],
  cloudAndDatabases: ["Firebase Firestore", "SQLite", "MySQL"],
  developmentPractices: [
    "Test-Driven Development (TDD)",
    "Continuous Integration/Continuous Deployment (CI/CD)",
  ],
} as const;

export const EXPERIENCE = [
  {
    company: "Terhal",
    project: "Travel Booking Application",
    location: "Remotely, Kuwait",
    role: "Full-Time Flutter Developer",
    period: "Oct 2025 — Present",
    impact: [
      "Led end-to-end development, transforming an incomplete product into a deployed application on App Store and Play Store",
      "Contributed to UI/UX decisions, designing and refining key components to improve usability",
      "Set up and maintained multi-environment app flavors (dev/staging/prod) to streamline testing, QA, and production releases",
      "Maintained and enhanced the application post-launch with ongoing updates and performance optimizations",
    ],
  },
  {
    company: "Cattle App",
    project: "Cattle Management Application",
    location: "Remotely, Kuwait",
    role: "Full-Time Flutter Developer",
    period: "Dec 2025 — Present",
    impact: [
      "Rescued a 12+ month delayed project, advancing it to production readiness within a 4-month structured release plan",
      "Executed a complete redesign to modernize UI/UX and align the product with updated business requirements",
      "Refactored legacy modules with BLoC and Clean Architecture, improving stability and accelerating delivery toward launch",
      "Currently leading final testing and preparing for production release, with ongoing updates and enhancements post-launch",
    ],
  },
  {
    company: "POS System",
    project: "Coffee Shops",
    location: "Freelance",
    role: "Freelance Flutter Developer",
    period: "Jul 2025 — Sep 2025",
    impact: [
      "Successfully delivered and deployed the system to three coffee shop locations, demonstrating practical business impact",
      "Built a role-based POS system supporting admin and cashier operations",
      "Implemented inventory, sales tracking, and financial workflows in collaboration with domain experts",
      "Designed the complete UI/UX from scratch after extensive research on POS workflows, staff needs, and daily operations",
    ],
  },
  {
    company: "I&C",
    project: "Flutter Paid Internship",
    location: "Remotely, Saudi Arabia",
    role: "Flutter Paid Intern",
    period: "Jun 2025 — Aug 2025",
    impact: [
      "Delivered multiple features over a 3-month internship through Git workflows, pull requests, and peer code reviews",
      "Applied clean code practices and contributed to structured codebases",
      "Supported sprint delivery across a cross-functional development team",
    ],
  },
  {
    company: "POS System",
    project: "Kids Activity Center",
    location: "Freelance",
    role: "Freelance Flutter Developer",
    period: "May 2025 — Jul 2025",
    impact: [
      "Built a Flutter desktop app for 1 activity center, automating session tracking, timers, and staff notifications",
      "Designed the complete UI/UX from scratch after extensive research on session-tracking workflows and staff usability",
    ],
  },
  {
    company: "BayanatZ",
    project: "Flutter Paid Internship",
    location: "On-site, Cairo",
    role: "Flutter Paid Intern",
    period: "Feb 2025 — May 2025",
    impact: [
      "Refactored 4+ legacy Flutter modules over a 4-month internship, improving maintainability and feature delivery speed",
      "Developed responsive, multi-platform user interfaces",
      "Participated in code reviews and testing processes",
      "Built applications using Clean Architecture and various state management tools",
    ],
  },
] as const;

export const PROJECTS = [
  {
    path: "/ride-hailing-platform",
    featured: true,
    stack: [
      "Flutter",
      "Dart",
      "BLoC",
      "Firebase",
      "Google Maps API",
      "FCM",
      "Cloud Firestore",
    ],
    summary:
      "A production-grade, real-time ride-hailing platform engineered for scale — dual-role flows, live trip orchestration, and intelligent fare logic end to end.",
    architecture: "Clean Architecture · BLoC · Repository Pattern · Feature-first modules",
    items: [
      "Dual-role authentication (rider & driver) with secure session handling and role-based navigation",
      "Google Maps integration: live tracking, pickup/drop-off pins, polylines, and efficient route optimization",
      "Real-time trip updates powered by Firebase — request, match, en-route, complete, and cancel states synced instantly",
      "Push notifications (FCM) for trip events, driver arrival, and promotional alerts",
      "Smart pricing engine with dynamic fare calculation, distance/time rules, and surge-ready architecture",
      "Adaptive UI with dark/light mode, responsive layouts, and accessibility-conscious components",
      "Firebase backend (Auth, Firestore, Cloud Messaging) designed for seamless scalability and low-latency reads",
      "BLoC-driven state management separating presentation, domain, and data layers for testable, maintainable growth",
    ],
  },
  {
    path: "/payment-gateway-app",
    stack: ["Flutter", "Dart", "Stripe", "Paymob", "RESTful APIs"],
    summary:
      "A dual-provider payment app integrating Stripe and Paymob with a minimal UI and correct end-to-end checkout flows for each gateway.",
    items: [
      "Simple, focused UI with two primary actions — Pay with Stripe and Pay with Paymob",
      "Stripe integration: payment session setup, confirmation handling, and clear success/error feedback",
      "Paymob integration: regional gateway configuration, transaction flow, and callback handling",
      "Consistent payment state handling across providers (pending, success, failed, cancelled)",
      "Clean separation of payment services for maintainable, testable gateway-specific logic",
    ],
  },
  {
    path: "/terhal-travel-booking",
    stack: ["Flutter", "Dart", "BLoC", "App Flavors"],
    items: [
      "Travel booking app — incomplete product to App Store & Play Store deployment",
      "Multi-environment flavors (dev/staging/prod) for QA and production releases",
      "UI/UX refinement and post-launch performance optimizations",
    ],
  },
  {
    path: "/cattle-management",
    stack: ["Flutter", "BLoC", "Clean Architecture"],
    items: [
      "12+ month delayed project advanced to production readiness in 4 months",
      "Full UI/UX redesign aligned with updated business requirements",
      "Legacy refactor with BLoC & Clean Architecture toward production launch",
    ],
  },
  {
    path: "/coffee-shop-pos",
    stack: ["Flutter", "Dart", "RESTful APIs"],
    items: [
      "Deployed to three coffee shop locations with admin & cashier roles",
      "Inventory, sales tracking, and financial workflows",
      "UI/UX designed from scratch after POS workflow research",
    ],
  },
  {
    path: "/kids-activity-center-pos",
    stack: ["Flutter", "Desktop"],
    items: [
      "Desktop app automating session tracking, timers, and staff notifications",
      "Built for 1 activity center with staff-focused usability",
      "UI/UX from research on session-tracking workflows",
    ],
  },
] as const;

export const EDUCATION = [
  {
    from: "Faculty of Computer and Information",
    to: "Suez Canal University · Ismailia, Egypt (2020 — 2024)",
  },
] as const;
