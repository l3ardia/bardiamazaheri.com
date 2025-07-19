import { AnimatedSection } from "@/components/AnimatedSection";
export default function Contact() {
  return (
    <AnimatedSection>
      <h1 className="text-3xl font-bold mb-6">Get in touch</h1>
      <p className="text-gray-600 mb-8 max-w-lg">
        Tell me about your challenge and I’ll reply within one business day.
      </p>
      <form className="grid gap-4 max-w-lg">
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
    </AnimatedSection>
  );
}
