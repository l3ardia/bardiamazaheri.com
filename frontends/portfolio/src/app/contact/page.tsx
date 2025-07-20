"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { socialLinks } from "@/data/socialLinks";

export default function Contact() {
  return (
    <AnimatedSection>
      <h1 className="text-3xl font-bold mb-6">Get in touch</h1>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left column - Info */}
        <div className="text-gray-700 space-y-6">
          <p>
            I'm open to new collaborations if I have the capacity. You can
            contact me for:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Freelance or contract-based development</li>
            <li>Consulting as a Tech Lead, Scrum Master, or PM</li>
            <li>Team-based projects including design, development, QA</li>
            <li>Game or tech startup investment under $50K</li>
          </ul>
          <p className="text-sm text-gray-500 pt-4 border-t leading-6">
            <strong>Business Name:</strong> Mohammad Saleh Habibi Mazaheri{" "}
            <br />
            <strong>ABN:</strong> 20407238495
          </p>

          {/* Social links */}
          <div className="mt-12">
            <h2 className="text-lg font-semibold mb-4">Find me online</h2>
            <div className="flex gap-4">
              {socialLinks.map(({ name, href, icon: Icon }) => {
                const colorMap = {
                  GitHub: "bg-gray-800 hover:bg-gray-700 text-white",
                  LinkedIn: "bg-[#0A66C2] hover:bg-[#004182] text-white",
                };

                const colorClass =
                  name in colorMap
                    ? colorMap[name as keyof typeof colorMap]
                    : "bg-gray-600 hover:bg-gray-800 text-white";

                return (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition ${colorClass}`}
                    aria-label={name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right column - Form */}
        <form className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="border p-3 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="border p-3 rounded-md"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Describe your project…"
            className="border p-3 rounded-md"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
}
