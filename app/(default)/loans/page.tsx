export const metadata = {
  title: "Customers - Simple",
  description: "Page description",
};

import WallOfLove from "@/components/del/wall-of-love";
import Cta from "@/components/del/cta-alternative";
import HeroCalculatorLoan from "@/components/loans/hero-calculator-loan";


export default function Customers() {
  return (
    <>
    <HeroCalculatorLoan />
      <WallOfLove />
      <Cta
        heading="Create your next project with Simple"
        buttonText="Start Free Trial"
        buttonLink="#0"
      />
    </>
  );
}
