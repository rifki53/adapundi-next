import DisclaimerRiplay from "@/components/riplay/disclaimer-riplay";
import DownloadRiplay from "@/components/riplay/download-riplay";
import GeneralRequirementsRiplay from "@/components/riplay/general-requirements-riplay";
import HeroRiplay from "@/components/riplay/hero-riplay";
import LoanSimulationRiplay from "@/components/riplay/loan-simulation-riplay";
import ProductIntroductionRiplay from "@/components/riplay/product-introduction-riplay";

export const metadata = {
  title: "Customers - Simple",
  description: "Page description",
};

export default function Riplay() {
  return (
    <>
      <HeroRiplay />
      <ProductIntroductionRiplay />
      <GeneralRequirementsRiplay />
      <LoanSimulationRiplay />
      <DisclaimerRiplay />
      <DownloadRiplay />
    </>
  );
}
