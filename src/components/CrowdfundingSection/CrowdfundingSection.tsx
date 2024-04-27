import { AnimatePresence } from "framer-motion";
import ParticipationOverlay from "../ParticipationOverlay/ParticipationOverlay";
import FundingHeader from "./FundingHeader";
import FundingOptions from "./FundingOptions";
import FundingProgressSection from "./FundingProgressSection";
import useGeneralStateStore from "../../store/useGeneralStateStore";

function CrowdfundingSection() {
  const showParticipationOverlay = useGeneralStateStore(
    (state) => state.showParticipationOverlay,
  );
  return (
    <section
      className="
        mb-20 mt-56 flex w-full max-w-3xl flex-col gap-y-8 *:rounded-lg *:bg-white *:px-6 *:pb-11 *:pt-8
        *:shadow-sm 
        md:gap-y-4 md:*:px-10 md:*:pt-14"
    >
      <AnimatePresence>
        {showParticipationOverlay && <ParticipationOverlay />}
      </AnimatePresence>
      <FundingHeader />
      <FundingProgressSection />
      <FundingOptions />
    </section>
  );
}

export default CrowdfundingSection;
