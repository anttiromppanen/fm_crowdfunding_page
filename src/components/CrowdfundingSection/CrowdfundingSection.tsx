import { useState } from "react";
import FundingHeader from "./FundingHeader";
import FundingProgressSection from "./FundingProgressSection";
import ParticipationOverlay from "../ParticipationOverlay/ParticipationOverlay";
import FundingOptions from "./FundingOptions";

export default function CrowdfundingSection() {
  const [activeRadioTab, setActiveRadioTab] = useState("");
  const [showParticipationOverlay, setShowParticipationOverlay] =
    useState(false);

  return (
    <section className="-mt-10 flex w-full max-w-3xl flex-col gap-y-4 *:rounded-md *:bg-white *:px-10 *:pb-11 *:pt-14">
      {showParticipationOverlay && (
        <ParticipationOverlay
          setShowParticipationOverlay={setShowParticipationOverlay}
          activeRadioTab={activeRadioTab}
          setActiveRadioTab={setActiveRadioTab}
        />
      )}
      <FundingHeader
        setShowParticipationOverlay={setShowParticipationOverlay}
      />
      <FundingProgressSection />
      <FundingOptions
        setActiveRadioTab={setActiveRadioTab}
        setShowParticipationOverlay={setShowParticipationOverlay}
      />
    </section>
  );
}
