import { AnimatePresence } from "framer-motion";
import ParticipationOverlay from "../ParticipationOverlay/ParticipationOverlay";
import FundingHeader from "./FundingHeader";
import FundingOptions from "./FundingOptions";
import FundingProgressSection from "./FundingProgressSection";
import useGeneralStateStore from "../../store/useGeneralStateStore";

export default function CrowdfundingSection() {
  const showParticipationOverlay = useGeneralStateStore(
    (state) => state.showParticipationOverlay,
  );
  return (
    <section className="-mt-10 mb-20 flex w-full max-w-3xl flex-col gap-y-4 *:rounded-md *:bg-white *:px-10 *:pb-11 *:pt-14">
      <AnimatePresence>
        {showParticipationOverlay && <ParticipationOverlay />}
      </AnimatePresence>
      <FundingHeader />
      <FundingProgressSection />
      <FundingOptions />
    </section>
  );
}
