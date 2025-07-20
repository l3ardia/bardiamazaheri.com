"use client";

import Image from "next/image";
import { gameSkillIcons } from "@/data/gameSkills";

export const GameSkillIcons = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
      {gameSkillIcons.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={80}
          height={100}
          className="h-12 w-auto"
        />
      ))}
    </div>
  );
};