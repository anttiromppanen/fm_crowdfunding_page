/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import closeImg from "../../assets/images/icon-close-menu.svg";

interface Props {
  activeRadioTab: string;
  setActiveRadioTab: React.Dispatch<React.SetStateAction<string>>;
}

interface ParticipationOverlayProps extends Props {
  setShowParticipationOverlay: Dispatch<SetStateAction<boolean>>;
}

interface ProductOptionRadioButtonProps extends Props {
  id: string;
  heading: string;
  text: string;
  pledgeAmount?: number;
  numOfLeft?: number;
}

function ProductOptionRadioButton({
  id,
  heading,
  text,
  pledgeAmount,
  numOfLeft,
  activeRadioTab,
  setActiveRadioTab,
}: ProductOptionRadioButtonProps) {
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
              ${numOfLeft === 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
              />
              <div className="absolute left-[6px] top-[6px] hidden h-3 w-3 rounded-full bg-userModerateCyan peer-checked:block" />
              <p
                className={`ml-4 font-bold ${numOfLeft !== 0 && "group-hover:text-userModerateCyan"}`}
              >
                {heading}
              </p>
              {heading !== "Pledge with no reward" && (
                <p className="ml-4 font-semibold text-userModerateCyan">
                  Pledge ${pledgeAmount} or more
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

      {activeRadioTab === id && (
        <>
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
                  className="w-20 rounded-full border border-userDarkGray/50 py-2 pl-5 text-center font-bold hover:border-userDarkCyan"
                />
                <p className="absolute left-6 top-1/2 -translate-y-1/2 text-sm text-userDarkGray/90">
                  $
                </p>
              </div>
              <button
                type="submit"
                className="rounded-full bg-userModerateCyan px-5 text-white hover:bg-userDarkCyan"
              >
                Continue
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function ParticipationOverlay({
  setShowParticipationOverlay,
  activeRadioTab,
  setActiveRadioTab,
}: ParticipationOverlayProps) {
  const resetParentClick: MouseEventHandler<HTMLDivElement> = (e) =>
    e.stopPropagation();

  return (
    <div
      role="button"
      aria-label="Close overlay"
      tabIndex={0}
      onKeyDown={() => {}}
      onClick={() => setShowParticipationOverlay(false)}
      className="fixed left-0 top-0 z-50 flex min-h-[100dvh] w-full items-center justify-center !rounded-none !bg-black/50"
    >
      <div
        onClick={resetParentClick}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
        className="fixed top-0 w-full cursor-default overflow-y-scroll rounded-lg bg-white px-12 pb-40 pt-14 text-left md:h-[908px] md:w-[734px] md:max-w-[734px] lg:left-1/2 lg:top-1/2 lg:h-auto lg:w-auto lg:-translate-x-1/2 lg:-translate-y-1/2 lg:pb-10"
      >
        <button
          type="button"
          onClick={() => setShowParticipationOverlay(false)}
          className="absolute right-6 top-4 p-2"
        >
          <img
            src={closeImg}
            alt="Close overlay"
            className="brightness-50 filter"
          />
        </button>
        <h2 className="text-2xl font-bold">Back this project</h2>
        <p className="mt-7 text-userDarkGray">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className="mt-9 flex flex-col gap-y-6">
          <ProductOptionRadioButton
            id="bordered-option-1"
            heading="Pledge with no reward"
            text="
              Choose to support us without a reward if you simply believe in our project. As a backer, 
              you will be signed up to receive product updates via email.
            "
            activeRadioTab={activeRadioTab}
            setActiveRadioTab={setActiveRadioTab}
          />
          <ProductOptionRadioButton
            id="bordered-option-2"
            heading="Bamboo Stand"
            text="
            You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
            you’ll be added to a special Backer member list.
          "
            pledgeAmount={25}
            numOfLeft={101}
            activeRadioTab={activeRadioTab}
            setActiveRadioTab={setActiveRadioTab}
          />
          <ProductOptionRadioButton
            id="bordered-option-3"
            heading="Black Edition Stand"
            text="
            You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
            member list. Shipping is included.
          "
            pledgeAmount={75}
            numOfLeft={64}
            activeRadioTab={activeRadioTab}
            setActiveRadioTab={setActiveRadioTab}
          />
          <ProductOptionRadioButton
            id="bordered-option-4"
            heading="Mahogany Special Edition"
            text="
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
            to our Backer member list. Shipping is included.
          "
            pledgeAmount={200}
            numOfLeft={0}
            activeRadioTab={activeRadioTab}
            setActiveRadioTab={setActiveRadioTab}
          />
        </div>
      </div>
    </div>
  );
}

ProductOptionRadioButton.defaultProps = {
  pledgeAmount: undefined,
  numOfLeft: undefined,
};

export default ParticipationOverlay;
