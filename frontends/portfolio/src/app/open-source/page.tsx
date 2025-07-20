import { AnimatedSection } from "@/components/AnimatedSection";
import { OpenSourceItem } from "@/components/OpensourceItem";
import { openSourceProjects } from "@/data/openSourceProjects";

export default function OpenSource() {
  return (
    <AnimatedSection>
      <h1 className="text-3xl font-bold mb-6">Open Source</h1>
      <p className="text-gray-600 mb-8">
        Here I demonstrate my publications.
      </p>
      {openSourceProjects.map((proj) => (
        <OpenSourceItem key={proj.title} title={proj.title}>
          {proj.content}
        </OpenSourceItem>
      ))}
    </AnimatedSection>
  );
}
