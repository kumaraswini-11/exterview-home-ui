import { AutomationWorkflowSection } from "@/components/home/automation-workflow-section";
import { BlogInsightsSection } from "@/components/home/blog-insights-section";
import { FaqSection } from "@/components/home/faq-section";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import { HiringCTA } from "@/components/home/hiring-cta";
import { HiringImpact } from "@/components/home/hiring-impact";
import { HiringWorkflowSuite } from "@/components/home/hiring-workflow-suite";
import { SamayaSection } from "@/components/home/samaya-section";
import { StreamlineSection } from "@/components/home/streamline-section";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="relative flex flex-col pt-14">
        <HeroSection />
        <HiringImpact />
        <HiringWorkflowSuite />
        {/* <AutomationWorkflowSection /> */}
        <StreamlineSection />
        <SamayaSection />
        <FaqSection />
        <BlogInsightsSection />
        <HiringCTA />
      </main>

      <Footer />
    </>
  );
}
