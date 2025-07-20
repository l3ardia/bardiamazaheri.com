import { AnimatedSection } from "@/components/AnimatedSection";
import { Timeline, TimelineItem } from "@/components/Timeline";
import {
  Gamepad2,
  CircleDollarSign,
  GraduationCap,
  Briefcase,
  Baby,
  BookOpen,
  Rocket,
  Phone,
  Box,
  Plane,
  Server,
} from "lucide-react";

const items: TimelineItem[] = [
  {
    year: 1998,
    title: "First QBasic Game",
    description: "At age 9, I wrote my first game and discovered the magic of programming.",
    icon: <Gamepad2 />
  },
  {
    year: 2006,
    title: "First Software Sale",
    description: "Built and sold a WinAmp-inspired music player with playlist features.",
    icon: <CircleDollarSign />
  },
  {
    year: 2010,
    title: "IT Bachelor's Graduation",
    description: "Graduated with a Bachelor's in Information Technology.",
    icon: <GraduationCap />
  },
  {
    year: 2011,
    title: "First Startup Founded",
    description: "Launched my first startup offering IT services to energy-sector companies.",
    icon: <Briefcase />
  },
  {
    year: 2012,
    title: "My Daughter Was Born",
    description: "The most important milestone of all—becoming a father.",
    icon: <Baby />
  },
  {
    year: 2014,
    title: "Master Degree in Software Engineering",
    description: "Earned a master's degree, this time in Software Engineering.",
    icon: <BookOpen />
  },
  {
    year: 2014,
    title: "Launched Boomerang",
    description: "Exited first startup and co-founded Boomerang, a new software venture.",
    icon: <Rocket />
  },
  {
    year: 2014,
    title: "Joined MCI Telecom",
    description: "Worked as a software engineer at MCI for 5 years, while growing my own startup on the side.",
    icon: <Phone />
  },
  {
    year: 2016,
    title: "Third Venture: Materials Trading",
    description: "Co-founded a new business in the construction materials import/export space.",
    icon: <Box />
  },
  {
    year: 2022,
    title: "Moved to Australia",
    description: "Relocated to Sydney to expand global reach and embrace contract leadership.",
    icon: <Plane />
  },
  {
    year: "2023 - Now",
    title: "Senior SE & Integrations Lead @ Vyro",
    description: "Scaled a multi-tenant AWS SaaS to 1M+ monthly visits, halved deployment time.",
    icon: <Server />
  },
];


export default function About() {

  const itemsDesc = [...items].reverse();
  return (
    <AnimatedSection>
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <p className="text-gray-600 mb-8">
        I'm Bardia Mazaheri, a contract Tech Lead who helps SaaS teams ship faster
        and safer by blending backend engineering, DevOps automation, and
        integration architecture—all while raising a family and occasionally
        composing game soundtracks.
      </p>
      <Timeline items={itemsDesc} />
    </AnimatedSection>
  );
}
