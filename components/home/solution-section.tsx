"use client";

import {
  CalendarIcon,
  MilestoneIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const logos = [
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f24103b7e55eca70579885_Vector.png",
    alt: "VAPT",
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f2416a4447263b9ed56415_Vector%20(1).png",
    alt: "GDPR",
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f241692ca6c90773fca318_Vector%20(2).png",
    alt: "ISO",
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f24169e3e80e36a346beb9_Vector%20(3).png",
    alt: "HIPAA",
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f241699d262f7549f0662b_Container.png",
    alt: "CERTN",
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f24169cd66e2d4f4e50f8d_Vector%20(4).png",
    alt: "AICPA",
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f241691196450b33e4b375_Container%20(1).png",
    alt: "CCPA",
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f24169221daaea94511a19_image%2023.png",
    alt: "Compliance",
  },
];

function FeatureItem({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      {/* Icon + Title Row */}
      <div className="flex items-center gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Icon className="size-5" />
        </div>

        <h3 className="text-2xl font-medium text-black">{title}</h3>
      </div>

      {/* Description aligned from icon */}
      <p className="ml-3 text-base text-black/80">{description}</p>
    </div>
  );
}

export function SolutionSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-18 md:px-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <Badge className="px-6 py-1.5 text-sm font-bold">Solutions</Badge>

        <h2 className="mt-4 text-[48px] font-semibold text-black capitalize">
          Solutions for Your Enterprise
        </h2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Card*/}
        <Card className="rounded-4xl bg-[#f3f3f3] shadow-none">
          <CardContent className="space-y-10 p-6">
            <FeatureItem
              icon={SlidersHorizontalIcon}
              title="Live Hiring KPIs"
              description="Visualize and track every stage of the sales process. Help users manage leads."
            />

            <FeatureItem
              icon={CalendarIcon}
              title="Predictive Hiring Analytics"
              description="Reduces manual effort and increases team efficiency. Focus on leads most likely to convert and saving time."
            />

            <FeatureItem
              icon={MilestoneIcon}
              title="24/7 AI Chatbot Support"
              description="Detailed sales insights with performance metrics, forecasts, and customizable reports."
            />
          </CardContent>
        </Card>

        {/* Right Card */}
        <Card className="rounded-4xl bg-black text-white shadow-none">
          <CardContent className="flex flex-row gap-12 p-8">
            {/* Left Text Block */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-lg font-medium">Client Satisfaction</h3>
              <p className="text-7xl font-medium">90%</p>
              <p className="text-[20px] font-semibold">
                Personalized <br /> Candidate Feedback
              </p>

              <p className="text-base text-white/80">
                We take pride in our journey <br />
                marked by powerful <br />
                collaborations
              </p>
            </div>

            {/* Logos Grid */}
            <div className="grid flex-1 grid-cols-2 place-items-center gap-6">
              {logos.map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
