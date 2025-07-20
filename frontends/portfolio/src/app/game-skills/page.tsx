import { AnimatedSection } from "@/components/AnimatedSection";
import { GameSkillCard } from "@/components/GameSkillCard";
import Image from "next/image";
import { gameSkills, gameCertificates } from "@/data/gameSkills";
import Link from "next/link";

export default function GameSkills() {
  return (
    <AnimatedSection>
      <h1 className="text-3xl font-bold mb-6">Game Programming Skills</h1>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {gameSkills.map((skill) => (
          <GameSkillCard key={skill.name} skill={skill} />
        ))}
      </div>
      <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {gameCertificates.map((cert) => (
          <div key={cert.name} className="border rounded-xl p-4 bg-gray-50 flex justify-center">
            <Image src={cert.image} alt={cert.name} width={300} height={200} />
          </div>
        ))}
      </div>
      <p className="mt-6 text-center">
        <Link href="/skills" className="text-blue-600 underline">Back to Skills</Link>
      </p>
    </AnimatedSection>
  );
}
