import HeroTitle from "@/components/hero-title";
import ContentPrivacyPolicy from "@/components/privacy-policy/content-privacy-policy";
import CtaTestimonial from "@/components/testimonial/cta-testimonial";

export const metadata = {
  title: "Customers - Simple",
  description: "Page description",
};

export default function PrivacyPolicy() {
  return (
    <>
      <HeroTitle
        title="Kebijakan Privasi"
        description="Pembaruan terakhir: 15 Juli 2025"
      />
      <ContentPrivacyPolicy />
      <CtaTestimonial />
    </>
  );
}
