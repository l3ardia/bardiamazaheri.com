import { AnimatedSection } from "@/components/AnimatedSection";
import { SkillCard } from "@/components/SkillCard";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <AnimatedSection>
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <SkillCard key={cat.title} category={cat} />
        ))}
      </div>
    </AnimatedSection>
  );
}
