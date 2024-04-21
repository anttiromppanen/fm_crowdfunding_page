import { create } from "zustand";
import { ExtendedOptionIds as OptionIds } from "../types/types";

interface GeneralStateStoreProps {
  activeRadioTab: OptionIds;
  showParticipationOverlay: boolean;
  isPledgeSubmitted: boolean;
  setActiveRadioTab: (option: OptionIds) => void;
  setShowParticipationOverlay: (value: boolean) => void;
  setIsPledgeSubmitted: (value: boolean) => void;
}

const useGeneralStateStore = create<GeneralStateStoreProps>()((set) => ({
  activeRadioTab: "",
  showParticipationOverlay: false,
  isPledgeSubmitted: false,
  setActiveRadioTab: (option) => set(() => ({ activeRadioTab: option })),
  setShowParticipationOverlay: (value) =>
    set(() => ({ showParticipationOverlay: value })),
  setIsPledgeSubmitted: (value) => set(() => ({ isPledgeSubmitted: value })),
}));

export default useGeneralStateStore;
