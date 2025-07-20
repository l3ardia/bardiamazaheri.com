"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SkillCard } from "@/components/SkillCard";
import { skillCategories } from "@/data/skills";
import Link from "next/link";
import { ArrowDown, ArrowUp } from "lucide-react";
import { gameSkills } from "@/data/gameSkills";
import { GameSkillIcons } from "@/components/GameSkillIcons";

export default function Skills() {
  return (
    <AnimatedSection>
      <h1 id="top" className="text-3xl font-bold mb-6">
        Skills
      </h1>
      <p className="my-6">
        <Link
          href="#game-skills"
          className="text-blue-600 underline flex gap-1 items-center"
        >
          Jump over to Game Development Skills
          <ArrowDown size={18} />
        </Link>
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <SkillCard key={cat.title} category={cat} />
        ))}
      </div>

      <div id="game-skills" className="mt-20">
        <h2 className="text-2xl font-bold mb-6">Game Development Skills</h2>
        <p className="my-6">
          <Link
            href="#top"
            className="text-blue-600 underline flex gap-1 items-center"
          >
            Back to top
            <ArrowUp size={18} />
          </Link>
        </p>
        <GameSkillIcons />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameSkills.map((cat) => (
            <SkillCard key={cat.title} category={cat} />
          ))}
        </div>

        <p className="my-6">
          <Link
            href="#top"
            className="text-blue-600 underline flex gap-1 items-center"
          >
            Back to top
            <ArrowUp size={18} />
          </Link>
        </p>
      </div>
    </AnimatedSection>
  );
}
