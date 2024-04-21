import { AnimatePresence, motion } from "framer-motion";
import { ChangeEvent, useState } from "react";
import useGeneralStateStore from "../../store/useGeneralStateStore";
import usePledgeStore from "../../store/usePledgeStore";
import { ExtendedOptionIds as OptionIds } from "../../types/types";
import useOptionsStore from "../../store/useOptionsStore";

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
        <label
          htmlFor={id}
          className={numOfLeft === 0 ? "*:cursor-not-allowed" : ""}
        >
          <div className="flex justify-between">
            <div className="relative flex">
              <input
                type="radio"
                name="bordered-option"
                checked={activeRadioTab === id}
                onChange={() => {}}
                disabled={numOfLeft === 0}
                id={id}
                className={`
                  peer h-6 w-6 appearance-none rounded-full border border-userDarkGray/20
                  ${numOfLeft === 0 ? "cursor-not-allowed" : "cursor-pointer"}
                `}
              />
              <div className="absolute left-[6px] top-[6px] hidden h-3 w-3 rounded-full bg-userModerateCyan peer-checked:block" />
              <p
                className={`ml-4 font-bold ${numOfLeft !== 0 && "group-hover:text-userModerateCyan"}`}
              >
                {heading}
              </p>
              {heading !== "Pledge with no reward" && (
                <p className="ml-4 font-semibold text-userModerateCyan">
                  Pledge ${requiredPledgeAmount} or more
                </p>
              )}
            </div>
            {heading !== "Pledge with no reward" && (
              <p className="text-sm font-semibold text-userDarkGray">
                <span className="mr-1 text-lg font-bold text-black">
                  {numOfLeft}
                </span>{" "}
                left
              </p>
            )}
          </div>
        </label>
        <p className="ml-10 mt-6 text-userDarkGray group-disabled:cursor-not-allowed">
          {text}
        </p>
      </div>

      <AnimatePresence>
        {activeRadioTab === id && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <hr className="" />
            <div className="flex items-center justify-between px-7 py-6">
              <p className="text-userDarkGray">Enter your pledge</p>
              <div className="flex gap-x-4">
                <div className="relative">
                  <input
                    type="number"
                    name=""
                    id=""
                    min={0}
                    value={pledgeInputValue}
                    onChange={handleInputChange}
                    className={`
                      w-20 rounded-full border border-userDarkGray/50 py-2 pl-5 pr-2 text-center font-bold transition-all
                      hover:border-userDarkCyan focus:w-28
                      ${isPledgeInputError && "!border-red-600"}
                    `}
                  />
                  <p
                    className={`
                    pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-sm text-userDarkGray/90 transition-all
                    ${pledgeInputValue !== "" && "left-3"}
                  `}
                  >
                    $
                  </p>
                </div>
                <button
                  type="submit"
                  onClick={handlePledgeAmountSubmit}
                  className="rounded-full bg-userModerateCyan px-5 text-white hover:bg-userDarkCyan"
                >
                  Continue
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProductOptionRadioButton;
