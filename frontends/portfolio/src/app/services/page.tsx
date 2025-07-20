"use client"

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
        <li>Contract-based software development for startups and businesses</li>
        <li>Leading and managing cross-functional teams (design, QA, PM, devs)</li>
        <li>Consulting as a fractional CTO, Tech Lead, or Scrum Master</li>
        <li>Investing in small-scale game or tech projects with strong teams</li>
      </ul>

      <div className="mt-10">
        <p className="text-lg font-medium text-gray-700 mb-4">
          Have a project or looking for a reliable partner?
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors duration-300"
        >
          Get in Touch
        </a>
      </div>
    </AnimatedSection>
  );
}
