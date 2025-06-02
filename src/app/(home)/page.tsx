// import Link from "next/link";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="py-12 flex items-center justify-center">
      <div className="text-center space-y-8 animate-fade-in">
        <h1 className="inline-flex items-center gap-2 text-2xl font-medium rounded-full px-4 py-1">
          NIKODE.IR
        </h1>

        <h2 className="text-2xl md:text-6xl font-bold tracking-tight text-primary">
          Start Your Frontend Journey
        </h2>

        <p className="text-lg">
          By{" "}
          <Link
            target="_blank"
            href={"https://alireza-nikzad.ir"}
            className="font-semibold text-2xl cursor-pointer"
          >
            Alireza Nikzad
          </Link>
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          Whether you&apos;re just opening your first{" "}
          <code className="px-2 py-1 text-zinc-500 rounded font-mono">
            &lt;html&gt;
          </code>{" "}
          tag or curious how React really works — you&apos;re in the right
          place.
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          Nikode.ir is a modern, no-fluff guide to frontend development for
          absolute beginners.
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          Learn step-by-step with real-world examples, simple explanations, and
          zero gatekeeping.
        </p>

        <p className="text-base md:text-lg font-semibold ">
          Start building. Stay curious. Code with clarity.
        </p>

        <Button
          className="text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transition-all hover:scale-105"
          asChild
        >
          <Link href={"/docs"}>Get Started</Link>
        </Button>
      </div>
    </main>
  );
}
