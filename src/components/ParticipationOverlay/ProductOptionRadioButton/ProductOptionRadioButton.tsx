import { AnimatePresence } from "framer-motion";
import { ChangeEvent, useState } from "react";
import useGeneralStateStore from "../../../store/useGeneralStateStore";
import useOptionsStore from "../../../store/useOptionsStore";
import usePledgeStore from "../../../store/usePledgeStore";
import { ExtendedOptionIds as OptionIds } from "../../../types/types";
import BottomPledgeAmountToggle from "./BottomPledgeAmountToggle";
import TopSectionWithRadioInput from "./TopSectionWithRadioInput";

interface ProductOptionRadioButtonProps {
  id: OptionIds;
  heading: string;
  text: string;
}

function ProductOptionRadioButton({
  id,
  heading,
  text,
}: ProductOptionRadioButtonProps) {
  const { requiredPledgeAmount, numOfLeft } = useOptionsStore((state) =>
    state.filterById(id),
  );
  const [pledgeInputValue, setPledgeInputValue] = useState("");
  const [isPledgeInputError, setIsPledgeInputError] = useState(false);
  const activeRadioTab = useGeneralStateStore((state) => state.activeRadioTab);
  const addNewPledge = useOptionsStore((state) => state.addNewPledge);
  const setIsPledgeSubmitted = useGeneralStateStore(
    (state) => state.setIsPledgeSubmitted,
  );
  const setActiveRadioTab = useGeneralStateStore(
    (state) => state.setActiveRadioTab,
  );
  const increaseFundingAmount = usePledgeStore(
    (state) => state.increasePledgeAmount,
  );
  const increaseBackersAmount = usePledgeStore(
    (state) => state.increaseBackerAmount,
  );

  const handlePledgeAmountSubmit = () => {
    if (Number(pledgeInputValue) < requiredPledgeAmount) {
      setIsPledgeInputError(true);
      return;
    }

    increaseBackersAmount();
    increaseFundingAmount(Number(pledgeInputValue));
    addNewPledge(id, Number(pledgeInputValue));
    setPledgeInputValue("");
    setIsPledgeSubmitted(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPledgeInputValue(e.target.value);
    setIsPledgeInputError(false);
  };

  return (
    <div
      role="button"
      aria-label={heading}
      tabIndex={0}
      onClick={() => setActiveRadioTab(id)}
      onKeyDown={() => setActiveRadioTab(id)}
      className={`
        group rounded-lg border border-userDarkGray/20 text-left
        *:hover:cursor-pointer focus:outline-orange-500
        ${numOfLeft === 0 && "pointer-events-none cursor-not-allowed opacity-50"}
        ${activeRadioTab === id && "outline outline-2 !outline-userModerateCyan"}
      `}
    >
      <div className="px-7 py-8">
        <TopSectionWithRadioInput
          id={id}
          numOfLeft={numOfLeft}
          activeRadioTab={activeRadioTab}
          heading={heading}
          requiredPledgeAmount={requiredPledgeAmount}
        />
        {/* BOTTOM TEXT SECTION */}
        <p className="mt-6 text-userDarkGray group-disabled:cursor-not-allowed md:ml-10">
          {text}
        </p>
      </div>

      {/* BOTTOM TOGGLE OPEN SECTION */}
      <AnimatePresence>
        {activeRadioTab === id && (
          <BottomPledgeAmountToggle
            pledgeInputValue={pledgeInputValue}
            handleInputChange={handleInputChange}
            isPledgeInputError={isPledgeInputError}
            handlePledgeAmountSubmit={handlePledgeAmountSubmit}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProductOptionRadioButton;
