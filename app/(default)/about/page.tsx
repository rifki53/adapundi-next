import ComplaintPublicationsAbout from "@/components/about/complaint-publications-about";
import EventsAndActivitiesAbout from "@/components/about/events-and-activities-about";
import ExecutiveTeamAbout from "@/components/about/executive-team-about";
import FinancialReports from "@/components/about/financial-reports-about";
import FundingStatisticsAbout from "@/components/about/funding-statistics-about";
import HeroAbout from "@/components/about/hero-about";
import ShareholdersAbout from "@/components/about/shareholders-about";
import UncollectibleReceivablesAbout from "@/components/about/uncollectible-receivables-about";
import VisionMission from "@/components/about/vision-mission-about";

export const metadata = {
  title: "Customers - Simple",
  description: "Page description",
};

export default function Loans() {
  return (
    <>
      <HeroAbout />
      <VisionMission />
      <ExecutiveTeamAbout />
      <ShareholdersAbout />
      <FundingStatisticsAbout />
      <FinancialReports />
      <EventsAndActivitiesAbout />
      <UncollectibleReceivablesAbout />
      <ComplaintPublicationsAbout />
    </>
  );
}
