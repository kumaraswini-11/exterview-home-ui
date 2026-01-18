import Image from "next/image";

import { Badge } from "@/components/ui/badge";

export function SamayaSection() {
  return (
    <section className="mx-auto max-w-7xl pt-16 md:px-16">
      {/* Header */}
      <div className="text-center">
        <Badge className="px-6 py-1.5 text-sm font-bold">Samay</Badge>

        <h2 className="mt-4 text-[48px] font-semibold leading-tight text-black">
          Meet Smaya. Your AI Agent For End To End <br />
          Recruitment Activities
        </h2>
      </div>

      {/* Image */}
      <Image
        src="https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68cac43949a62a453deb5ba1_bento%20image%20for%20key%20features.png"
        alt="Samaya Section Image"
        width={1920}
        height={1080}
        className="mt-5 inline-block w-full object-contain"
        priority
      />
    </section>
  );
}
