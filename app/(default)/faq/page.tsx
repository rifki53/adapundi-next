import FaqCta from "@/components/faq/faq-cta";
import GeneralQuestionsFaq from "@/components/faq/general-questions-faq";
import HeroTitle from "@/components/hero-title";

export const metadata = {
  title: "Customers - Simple",
  description: "Page description",
};

export default function Faq() {
  return (
    <>
      <HeroTitle
        title="Pertanyaan Seputar Adapundi"
        description="Temukan jawaban terkait layanan dan produk pinjaman dana tunai Adapundi"
      />
      <GeneralQuestionsFaq />
      <FaqCta />
    </>
  );
}
