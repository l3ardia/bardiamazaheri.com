import { AnimatedSection } from "@/components/AnimatedSection";
import { Timeline, TimelineItem } from "@/components/Timeline";

const items: TimelineItem[] = [
  {
    year: 1998,
    title: "First QBasic Game",
    description: "At age 9 I wrote my first game, discovering the magic of code.",
  },
  {
    year: 2006,
    title: "First Software Sale",
    description: "Built and sold a WinAmp‑inspired music player with playlist support.",
  },
  {
    year: "2010‑2014",
    title: "Startup Roller‑Coaster",
    description: "Founded 7 startups: 2 successes, 5 lessons learned.",
  },
  {
    year: "2015‑2021",
    title: "Freelance Full‑Stack & DevOps",
    description: "Delivered 30+ production releases across e‑commerce, fintech, health.",
  },
  {
    year: 2022,
    title: "Moved to Australia",
    description: "Relocated to Sydney to expand global reach and embrace contract leadership.",
  },
  {
    year: "2023‑Now",
    title: "Senior SE & Integrations Lead @ Vyro",
    description: "Scaled multi‑tenant AWS platform to 1 M+ monthly visits; cut deploy time 50 %.",
  },
  {
    year: "Side Quests",
    title: "Community & Hobbies",
    description: "Teach coding to kids, develop indie games, maintain open‑source ML tools.",
  },
];

export default function About() {
  return (
    <AnimatedSection>
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <p className="text-gray-600 mb-8">
        I’m Bardia Mazaheri, a contract Tech Lead who helps SaaS teams ship faster
        and safer by blending backend engineering, DevOps automation, and
        integration architecture—all while raising a family and occasionally
        composing game soundtracks.
      </p>
      <Timeline items={items} />
      <h2 className="text-2xl font-bold mt-12 mb-4">Full Story</h2>
      <p className="text-gray-600 mb-8">
        Father. Husband. Engineer. My journey began at nine, when strict
        “one‑hour‑of‑games” rules pushed me from playing to making them.
        Mr Hossein Rezaei introduced me to QBasic, and curiosity did the rest. At
        17 I sold a WinAmp‑style player with playlist support—proof that passion
        could pay.
      </p>
    </AnimatedSection>
  );
}
