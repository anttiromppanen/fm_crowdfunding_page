import FundingHeader from "./FundingHeader";
import FundingProgressSection from "./FundingProgressSection";

export default function CrowdfundingSection() {
  return (
    <section className="-mt-10 flex w-full max-w-3xl flex-col gap-y-4 *:rounded-md *:bg-white *:px-10 *:py-6">
      <FundingHeader />
      <FundingProgressSection />
    </section>
  );
}
