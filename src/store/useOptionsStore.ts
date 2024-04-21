import { create } from "zustand";
import { ExtendedOptionIds } from "../types/types";

interface Option {
  requiredPledgeAmount: number;
  numOfLeft: number;
}

interface OptionsStoreProps {
  options: { [K in ExtendedOptionIds]: Option };
  filterById: (id: ExtendedOptionIds) => Option;
  addNewPledge: (id: ExtendedOptionIds, pledgeAmount: number) => void;
}

const useOptionsStore = create<OptionsStoreProps>()((set, get) => ({
  options: {
    "bamboo-stand": { requiredPledgeAmount: 25, numOfLeft: 101 },
    "black-edition-stand": { requiredPledgeAmount: 75, numOfLeft: 64 },
    "mahogany-stand": { requiredPledgeAmount: 200, numOfLeft: 0 },
    "no-reward": {
      requiredPledgeAmount: 1,
      numOfLeft: Number.POSITIVE_INFINITY,
    },
    "": { requiredPledgeAmount: 0, numOfLeft: Number.POSITIVE_INFINITY },
  },
  filterById: (id) => {
    const state = get();
    return state.options[id];
  },
  addNewPledge: (id, amount) => {
    set((state) => {
      if (id === "") return state;
      if (
        id === "no-reward" &&
        amount >= state.options[id].requiredPledgeAmount
      )
        return state;
      if (
        state.options[id] &&
        state.options[id].numOfLeft > 0 &&
        amount >= state.options[id].requiredPledgeAmount
      ) {
        return {
          options: {
            ...state.options,
            [id]: {
              ...state.options[id],
              numOfLeft: state.options[id].numOfLeft - 1,
            },
          },
        };
      }
      return state;
    });
  },
}));

export default useOptionsStore;
