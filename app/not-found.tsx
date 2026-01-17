import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="max-w-xl space-y-8 text-center">
      {/* 404 Image */}
      <div className="flex flex-nowrap items-center justify-center gap-4 text-9xl font-bold tracking-tight">
        <span className="text-blue-400">4</span>
        <span>0</span>
        <span className="text-blue-400">4</span>
      </div>

      <h3 className="text-4xl font-bold capitalize">
        Oops! Guess You&apos;re Lost in <br /> the Digital Wilderness
      </h3>
      <p className="text-secondary text-lg">
        As you&apos;ve taken a detour into the world of 404, the digital
        universe is full of surprises. So, keep exploring, keep clicking, and
        most importantly, keep smiling!
      </p>
      <Link href="/" className="">
        Go Home
      </Link>
    </div>
  );
}
