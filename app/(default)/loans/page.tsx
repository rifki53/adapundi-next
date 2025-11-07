export const metadata = {
  title: "Customers - Simple",
  description: "Page description",
};

import FeaturesLoan from "@/components/loans/features-loan";
import HeroCalculatorLoan from "@/components/loans/hero-calculator-loan";
import PaymentPartners from "@/components/loans/payment-partners";
import RiplayLoans from "@/components/loans/riplay-loans";
import SecurityLoans from "@/components/loans/security-loans";

export default function Loans() {
  return (
    <>
      <HeroCalculatorLoan />
      <FeaturesLoan />
      <PaymentPartners />
      <RiplayLoans />
      <SecurityLoans />
    </>
  );
}
