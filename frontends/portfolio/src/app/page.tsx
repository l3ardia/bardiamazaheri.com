"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <AnimatedSection>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Contract Tech Lead<br className="hidden md:block" /> who scales SaaS
          faster.
        </h1>
        <p className="max-w-xl text-lg text-gray-600 mb-8">
          I help product teams deliver integrations, CI/CD automation, and cloud
          architecture without the full-time overhead.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors"
        >
          Request a Contract <ArrowRight size={18} />
        </Link>
      </AnimatedSection>

      {/* Featured Work placeholder */}
      <AnimatedSection>
        <h2 className="text-2xl font-bold mb-4">Featured Work</h2>
        <p className="text-gray-600 mb-8">
          Hand-picked projects that show the breadth of integration & cloud work
          I deliver.
        </p>
        {/* Later map through project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
            <h3 className="font-semibold">Meta Commerce Integration</h3>
            <p className="text-sm text-gray-500 mb-2">Automotive inventory sync</p>
            <Link href="/work/meta-commerce" className="text-blue-600">Read more →</Link>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
            <h3 className="font-semibold">Google Merchant Center</h3>
            <p className="text-sm text-gray-500 mb-2">Scaled to 1 M items</p>
            <Link href="/work/google-merchant" className="text-blue-600">Read more →</Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
