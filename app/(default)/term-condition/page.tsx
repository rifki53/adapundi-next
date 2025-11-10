import HeroTitle from "@/components/hero-title";
import ContentTermCondition from "@/components/term-condition/content-term-condition";
import DownloadCtaTermCondition from "@/components/term-condition/download-cta-term-condition";

export const metadata = {
  title: "Customers - Simple",
  description: "Page description",
};

export default function Loans() {
  return (
    <>
      <HeroTitle
        title="Syarat dan Ketentuan"
        description="Pembaruan terakhir: 19 Maret 2025"
      />
      <ContentTermCondition />
      <DownloadCtaTermCondition />
    </>
  );
}
