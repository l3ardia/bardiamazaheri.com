import { SkillCategory } from "./skills";

export type GameSkillIcon = string[];

export interface GameSkill {
  name: string;
}

export const gameSkillIcons = [
  "/assets/unity-logo.png",
  "/assets/photon-logo.svg",
  "/assets/apple-logo.svg",
  "/assets/android-logo.png",
  "/assets/admob-logo.webp",
  "/assets/firebase-logo.png",
  "/assets/iron-source-logo.jpg",
];

export const gameSkills: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "C#"],
  },
  {
    title: "Technologies",
    items: [
      "Unity",
      "Multiplayer/Networking with Photon PUN",
      "Mobile Game Development",
      "Augmented Reality",
      "Unity Testing Library",
    ],
  },
  {
    title: "Unity Cloud",
    items: [
      "Analytics",
      "Player Authentication, Remote Config",
      "User-Generated Content",
      "Cloud Build",
      "Cloud Code",
      "Cloud Save",
      "Lobby, Matchmaker",
    ],
  },
  {
    title: "Google Services Integration",
    items: ["Firebase", "Google Analytics", "Crashlytics", "Remote Config", "In-app Reviews"],
  },
  {
    title: "Game Development Concepts",
    items: [
      "Game Physics",
      "State Machines",
      "Object Pooling",
      "Scene Management",
      "Animation Controllers",
      "Input System",
    ],
  },
  {
    title: "Tools & Asset Workflow",
    items: ["Git", "Addressables", "Unity Package Manager"],
  },
  {
    title: "Platform Publishing",
    items: [
      "App Store / Google Play Deployment",
      "Android & iOS Build Pipeline",
      "WebGL Deployment",
    ],
  },
  {
    title: "Monetization & Ad Integration",
    items: [
      "Unity Ads",
      "Google AdMob",
      "Ironsource",
      "Google Adsense"
    ],
  },  
  {
    title: "Backend & APIs",
    items: [
      "Express.js",
      "REST API Integration",
      "Serverless Functions (AWS Lambda)",
      "Realtime Events",
    ],
  },
];