import CsrTestimonial from "@/components/testimonial/csr-testimonial";
import CtaTestimonial from "@/components/testimonial/cta-testimonial";
import HeroTestimonial from "@/components/testimonial/hero-testimonial";
import ListTestimonial from "@/components/testimonial/list-testimonial";
import QuoteTestimonial from "@/components/testimonial/quote-testimonial";

export const metadata = {
  title: "Customers - Simple",
  description: "Page description",
};

export default function Loans() {
  return (
    <>
      <HeroTestimonial />
      <ListTestimonial />
      <QuoteTestimonial />
      <CsrTestimonial />
      <CtaTestimonial />
    </>
  );
}
