import { AnimatedSection } from "@/components/AnimatedSection";
import { SkillCard } from "@/components/SkillCard";
import { skillCategories } from "@/data/skills";
import Link from "next/link";

export default function Skills() {
  return (
    <AnimatedSection>
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <SkillCard key={cat.title} category={cat} />
        ))}
      </div>
      <p className="mt-6 text-center">
        <Link href="/game-skills" className="text-blue-600 underline">View Game Programming Skills</Link>
      </p>
    </AnimatedSection>
  );
}
