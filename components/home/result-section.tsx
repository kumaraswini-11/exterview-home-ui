"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";

export function ResultSection() {
  const [hires, setHires] = useState(50);
  const [apps, setApps] = useState(50);
  const [timePer, setTimePer] = useState(50);

  // Calculated values
  const hoursSaved = Math.round((hires * apps * timePer) / 10000);
  const percent = Math.min(Math.round((hoursSaved / 100) * 100), 100);

  // Helper function for sliders
  const renderSlider = (
    label: string,
    value: number,
    onChange: (v: number) => void,
    max = 100,
    min = 0,
  ) => (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label className="text-sm font-medium text-black">{label}</label>
        <span className="text-sm font-semibold text-black">{value}</span>
      </div>
      <Slider
        value={[value]}
        onValueChange={(v) => onChange(v[0])}
        max={max}
        min={min}
        step={1}
        className="slider-blue"
      />
    </div>
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-18 md:px-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <Badge className="px-6 py-1.5 text-sm font-bold">Result</Badge>
        <h2 className="mt-4 text-[48px] font-semibold text-black capitalize">
          Drive Measurable Results
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Card */}
        <Card className="rounded-3xl shadow-lg">
          <CardHeader>
            <h5 className="text-[28px] font-semibold text-black">
              Enter your <br /> recruitment targets
            </h5>
          </CardHeader>

          <Separator className="my-2 w-full" />

          <CardContent className="space-y-8">
            {renderSlider(
              "Planned hires in the next 12 months",
              hires,
              setHires,
            )}
            {renderSlider("Number of applicants per position", apps, setApps)}
            {renderSlider(
              "Average time spent on screening candidates",
              timePer,
              setTimePer,
            )}
          </CardContent>

          <Separator className="my-2 w-full" />

          <CardFooter className="text-left">
            <Button variant="outline" className="rounded-full">
              Before
            </Button>
          </CardFooter>
        </Card>

        {/* Right Card */}
        <Card className="rounded-3xl bg-blue-600 text-white shadow-lg">
          <CardHeader>
            <h3 className="text-[28px] font-semibold">
              Time you will save on <br /> candidate screening
            </h3>
          </CardHeader>

          <Separator className="my-2 w-full" />

          <CardContent>
            <div className="text-center">
              <p className="text-3xl font-bold">- {hoursSaved} hours</p>

              <p className="mt-8 text-left text-lg">
                Compared to current process over a year
              </p>

              <p className="mt-5 text-[64px] leading-none font-bold">
                {percent}%
              </p>
            </div>
          </CardContent>

          <Separator className="w-full border-white/50" />

          <CardFooter className="text-right">
            <Button
              variant="outline"
              className="rounded-full border-white bg-transparent text-white"
            >
              After
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
