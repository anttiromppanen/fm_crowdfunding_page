import { create } from "zustand";

interface PledgeState {
  pledgeAmount: number;
  backersAmount: number;
  increaseBackerAmount: () => void;
  increasePledgeAmount: (amount: number) => void;
}

const usePledgeStore = create<PledgeState>()((set) => ({
  pledgeAmount: 89_914,
  backersAmount: 5007,

  increaseBackerAmount: () =>
    set((state) => ({ backersAmount: state.backersAmount + 1 })),
  increasePledgeAmount: (amount) =>
    set((state) => ({ pledgeAmount: state.pledgeAmount + amount })),
}));

export default usePledgeStore;
