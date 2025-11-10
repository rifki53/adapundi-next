import FraudPreventionAntifraud from "@/components/antifraud/fraud-prevention-antifraud";
import ReportFraudAntifraud from "@/components/antifraud/report-fraud-antifraud";
import SecurityGuidelinesAntifraud from "@/components/antifraud/security-guidelines-antifraud";
import HeroTitle from "@/components/hero-title";

export const metadata = {
  title: "Customers - Simple",
  description: "Page description",
};

export default function Antifraud() {
  return (
    <>
      <HeroTitle
        title="Waspada Penipuan!<br> Simak Tipsnya Agar Transaksi Aman"
        description="Kenali ciri-ciri penipuan pinjaman daring yang mengatasnamakan Adapundi dan selalu waspada!"
      />
      <SecurityGuidelinesAntifraud />
      <FraudPreventionAntifraud />
      <ReportFraudAntifraud />
    </>
  );
}
