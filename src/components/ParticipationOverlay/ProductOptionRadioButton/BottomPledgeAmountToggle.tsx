import { motion } from "framer-motion";
import { ChangeEventHandler } from "react";

interface Props {
  pledgeInputValue: string;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  isPledgeInputError: boolean;
  handlePledgeAmountSubmit: () => void;
}

export default function BottomPledgeAmountToggle({
  pledgeInputValue,
  handleInputChange,
  isPledgeInputError,
  handlePledgeAmountSubmit,
}: Props) {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden"
    >
      <hr className="" />
      <div className="flex flex-wrap items-center justify-between px-7 py-6 sm:flex-nowrap">
        <p className="mb-6 basis-full text-center text-userDarkGray sm:mb-0 sm:text-left">
          Enter your pledge
        </p>
        {/* INPUT & BUTTON CONTAINER */}
        <div className="flex w-full justify-center gap-x-4 sm:w-auto">
          {/* INPUT */}
          <div className="relative">
            <input
              type="number"
              name=""
              id=""
              min={0}
              value={pledgeInputValue}
              onChange={handleInputChange}
              className={`
                w-full rounded-full border border-userDarkGray/50 py-2 pl-5 pr-2 text-center font-bold transition-all hover:border-userDarkCyan
                sm:w-20 sm:focus:w-28
                ${isPledgeInputError && "!border-red-600"}
              `}
            />
            <p
              className={`
                pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-sm text-userDarkGray/90 transition-all
                ${pledgeInputValue !== "" && "!left-3"}
              `}
            >
              $
            </p>
          </div>
          <button
            type="submit"
            onClick={handlePledgeAmountSubmit}
            className="w-1/2 rounded-full bg-userModerateCyan px-5 text-white hover:bg-userDarkCyan sm:w-auto"
          >
            Continue
          </button>
        </div>
      </div>
    </motion.div>
  );
}
