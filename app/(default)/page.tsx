import { Metadata } from "next";
import { homePageSchemas, generateBreadcrumbSchema } from "@/utils/schemas";

// Komponen Halaman
import HeroHome from "@/components/home/hero-home";
import FeaturesHome from "@/components/home/features-home";
import HowItWorksHome from "@/components/home/how-it-works-home";
import LoanSection1Home from "@/components/home/loan-section-1-home";
import LoanSection2Home from "@/components/home/loan-section-2-home";
import LoanSection3Home from "@/components/home/loan-section-3-home";
import TestimonialsSection from "@/components/home/testimonials/testimonials-section";
import PartnerCarousel from "@/components/home/partner/partner-carousel";
import RegulatorSectionHome from "@/components/home/regulator-section-home";

export const metadata: Metadata = {
  title: "Home - Adapundi",
  description:
    "Pinjaman online cepat cair, aman, dan terpercaya. Simulasi pinjaman, proses mudah, dan keamanan data terjamin.",
};

export default function Home() {
  const breadcrumbSchema = generateBreadcrumbSchema(["home"]);

  return (
    <>
      {homePageSchemas.map((schema, index) => (
        <script
          key={`home-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Komponen-komponen visual halaman */}
      <HeroHome />
      <FeaturesHome />
      <HowItWorksHome />
      <LoanSection1Home />
      <LoanSection2Home />
      <LoanSection3Home />
      <TestimonialsSection />
      <PartnerCarousel />
      <RegulatorSectionHome />
    </>
  );
}
