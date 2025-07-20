"use client";
import Image from "next/image";
import { GameSkill } from "@/data/gameSkills";

export const GameSkillCard = ({ skill }: { skill: GameSkill }) => (
  <div className="flex flex-col items-center p-4 border rounded-xl bg-gray-50">
    <Image src={skill.icon} alt={skill.name} width={96} height={96} className="mb-2" />
    <span className="text-center">{skill.name}</span>
  </div>
);
