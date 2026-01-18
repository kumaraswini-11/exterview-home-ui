"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "What is Exterview?",
    answer: (
      <>
        Exterview is an{" "}
        <strong>AI Interview Talent Intelligence Platform</strong> that makes
        hiring faster, fairer, and more effective.
      </>
    ),
  },
  {
    question: "How does Exterview Job Creation work?",
    answer: (
      <>
        Upload a JD or give a prompt. Our AI extracts skills, suggests missing
        ones, shortlists candidates, and generates a ready-to-use JD and
        interview flow in minutes.
      </>
    ),
  },
  {
    question: "What makes Exterview screening process smarter?",
    answer: (
      <>
        AI ranks candidates with instant match scores, predicts success, and
        automates shortlisting and rejection.
      </>
    ),
  },
  {
    question: "How do AI Avatar and Voice Interviews work?",
    answer: (
      <>
        Candidates interact with 24/7 AI avatars or voice agents that run
        interviews, analyze skills and sentiment, and generate reports.
      </>
    ),
  },
  {
    question: "How is interview integrity ensured?",
    answer: (
      <>
        Fraud detection includes face recognition, liveness checks, lip-sync
        matching, tab-switch alerts, and secure recordings.
      </>
    ),
  },
  {
    question: "What integrations are supported?",
    answer: (
      <>
        Exterview integrates with 20+ ATS/HRMS platforms like Darwinbox,
        Workday, SAP, Greenhouse, and more.
      </>
    ),
  },
  {
    question: "How does Exterview mitigate bias?",
    answer: (
      <>
        It removes personal identifiers, standardizes evaluations, and provides
        real-time bias alerts to ensure fair hiring.
      </>
    ),
  },
  {
    question: "How secure and compliant is Exterview?",
    answer: (
      <>
        Fully compliant with SOC 2, ISO 27001, GDPR, and HIPAA with encryption,
        MFA, and role-based access.
      </>
    ),
  },
];

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div
      onClick={onToggle}
      className="cursor-pointer rounded-xl border border-neutral-200 bg-white transition-all"
    >
      {/* Question */}
      <div
        className="flex w-full items-center justify-between px-8 pt-5 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-black md:text-xl">
          {question}
        </h3>

        <ChevronDown
          className={cn(
            "size-5 shrink-0 text-neutral-500 transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </div>

      {/* Answer */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden px-8 pb-5 text-base leading-relaxed text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f3f8fe]">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-16">
        {/* Header */}
        <div className="text-center">
          <Badge className="px-6 py-1.5 text-sm font-bold">FAQs</Badge>
          <h2 className="mt-4 text-[36px] leading-tight font-bold text-black md:text-[56px]">
            Your Questions, Our Answers
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-12 space-y-5">
          {FAQS.map((faq, index) => (
            <FaqItem
              key={faq.question}
              {...faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
