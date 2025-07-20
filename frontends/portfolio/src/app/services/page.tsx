import { AnimatedSection } from "@/components/AnimatedSection";

export default function Services() {
  return (
    <AnimatedSection>
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <p className="text-gray-600 mb-8">
        I help SaaS teams deliver reliable software faster. Here are some of the ways I can assist:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-800">
        <li>Architecting scalable cloud infrastructure and backend systems</li>
        <li>Automating CI/CD pipelines and developer workflows</li>
        <li>Integrating third-party services and APIs</li>
        <li>Leading engineering teams and mentoring developers</li>
        <li>Reviewing codebases and advising on best practices</li>
      </ul>
    </AnimatedSection>
  );
}
