import AdvantagesInvestment from "@/components/investments/advantages-investment";
import CtaInvestment from "@/components/investments/cta-investment";
import GuaranteeInvestment from "@/components/investments/guarantee-investment";
import HeroInvestment from "@/components/investments/hero-investment";

export const metadata = {
  title: "Customers - Simple",
  description: "Page description",
};

export default function Loans() {
  return (
    <>
      <HeroInvestment />
      <AdvantagesInvestment />
      <CtaInvestment />
      <GuaranteeInvestment />
    </>
  );
}
