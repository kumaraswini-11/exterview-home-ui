import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-6">
      <div
        className="max-w-xl space-y-8 text-center"
        aria-live="polite"
        role="alert"
      >
        {/* 404 Image */}
        <div className="flex flex-nowrap items-center justify-center gap-4 text-[320px] leading-none font-bold tracking-tight">
          <span className="text-blue-300">4</span>
          <span>0</span>
          <span className="text-blue-300">4</span>
        </div>

        <h3 className="text-5xl font-semibold capitalize">
          Oops! Guess You&apos;re Lost in <br /> the Digital Wilderness
        </h3>

        <p className="text-lg text-gray-600">
          As you&apos;ve taken a detour into the world of 404, the digital
          universe is full of surprises. So, keep exploring, keep clicking, and
          most importantly, keep smiling!
        </p>

        <Button size="lg" asChild className="rounded-full">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
