import useGeneralStateStore from "../../store/useGeneralStateStore";
import useOptionsStore from "../../store/useOptionsStore";
import { OptionIds } from "../../types/types";

interface OptionProps {
  id: OptionIds;
  heading: string;
  text: string;
}

function Option({ id, heading, text }: OptionProps) {
  const { requiredPledgeAmount, numOfLeft } = useOptionsStore((state) =>
    state.filterById(id),
  );
  const setShowParticipationOverlay = useGeneralStateStore(
    (state) => state.setShowParticipationOverlay,
  );
  const setActiveRadioTab = useGeneralStateStore(
    (state) => state.setActiveRadioTab,
  );

  const handleButtonClick = () => {
    setShowParticipationOverlay(true);
    setActiveRadioTab(id);
  };

  return (
    <div
      className={`
      border-product-option flex flex-col gap-y-6 rounded-lg
      ${numOfLeft === 0 && "opacity-50"}`}
    >
      <div className="px-8 py-10">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-black">{heading}</h3>
          <p className="text-sm font-bold text-userModerateCyan">
            {`Pledge $${requiredPledgeAmount} or more`}
          </p>
        </div>
        <p className="mt-6 text-userDarkGray">{text}</p>
        <div className="mt-6 flex justify-between">
          <p className="flex items-center text-sm text-userDarkGray">
            <span className="mr-2 text-3xl font-bold text-black">
              {numOfLeft}
            </span>{" "}
            left
          </p>
          <button
            type="button"
            onClick={handleButtonClick}
            className={`
            rounded-full bg-userModerateCyan px-7 py-3 text-sm text-white hover:bg-userDarkCyan
            md:min-w-[145px]
            ${numOfLeft === 0 && "bg-userDarkGray hover:cursor-default hover:bg-userDarkGray"}`}
          >
            {numOfLeft !== 0 ? "Select Reward" : "Out of stock"}
          </button>
        </div>
      </div>
    </div>
  );
}

function FundingOptions() {
  return (
    <article className="flex flex-col gap-y-12 text-userDarkGray">
      <h2 className="text-xl font-bold text-black">About this project</h2>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <div className="flex flex-col gap-y-6">
        <Option
          id="bamboo-stand"
          heading="Bamboo Stand"
          text="
          You get an ergonomic stand made of natural bamboo. You've
          helped us launch our promotional campaign, and you’ll be added to a
          special Backer member list.
        "
        />
        <Option
          id="black-edition-stand"
          heading="Black Edition Stand"
          text="
          You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
          member list. Shipping is included.
        "
        />
        <Option
          id="mahogany-stand"
          heading="Mahogany Special Edition"
          text="
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
          to our Backer member list. Shipping is included.
        "
        />
      </div>
    </article>
  );
}

export default FundingOptions;
