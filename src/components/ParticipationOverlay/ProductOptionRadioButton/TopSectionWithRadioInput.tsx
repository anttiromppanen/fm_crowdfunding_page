import { ExtendedOptionIds as OptionIds } from "../../../types/types";
import ProductsLeftText from "./ProductsLeftText";

interface Props {
  id: OptionIds;
  numOfLeft: number;
  activeRadioTab: OptionIds;
  heading: string;
  requiredPledgeAmount: number;
}

function TopSectionWithRadioInput({
  id,
  numOfLeft,
  activeRadioTab,
  heading,
  requiredPledgeAmount,
}: Props) {
  return (
    <label
      htmlFor={id}
      className={numOfLeft === 0 ? "*:cursor-not-allowed" : ""}
    >
      <div className="flex justify-between">
        <div className="relative flex items-center">
          {/* RADIO BUTTON AND INNER CIRCLE DIV */}
          <input
            type="radio"
            name="bordered-option"
            checked={activeRadioTab === id}
            onChange={() => {}}
            disabled={numOfLeft === 0}
            id={id}
            className={`
                  peer h-6 min-h-6 w-6 min-w-6 appearance-none rounded-full border border-userDarkGray/20
                  ${numOfLeft === 0 ? "cursor-not-allowed" : "cursor-pointer"}
                `}
          />
          <div className="absolute left-[6px] hidden h-3 w-3 rounded-full bg-userModerateCyan peer-checked:block" />
          {/* OPTION HEADING & REQUIRED PLEDGE AMOUNT TEXT */}
          <div className="flex flex-col md:flex-row">
            <p
              className={`ml-4 font-bold ${numOfLeft !== 0 && "md:group-hover:text-userModerateCyan"}`}
            >
              {heading}
            </p>
            {heading !== "Pledge with no reward" && (
              <p className="ml-4 font-semibold text-userModerateCyan">
                Pledge ${requiredPledgeAmount} or more
              </p>
            )}
          </div>
        </div>
        {/* NUM OF PRODUCTS LEFT TEXT FOR DESKTOP */}
        {heading !== "Pledge with no reward" && (
          <ProductsLeftText numOfLeft={numOfLeft} variant="desktop" />
        )}
      </div>
    </label>
  );
}

export default TopSectionWithRadioInput;
