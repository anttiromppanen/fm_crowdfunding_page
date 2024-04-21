/* eslint-disable jsx-a11y/label-has-associated-control */
import { AnimatePresence, Variants, motion } from "framer-motion";
import { MouseEventHandler } from "react";
import successImg from "../../assets/images/icon-check.svg";
import useGeneralStateStore from "../../store/useGeneralStateStore";
import Options from "./Options";
import ProductOptionRadioButton from "./ProductOptionRadioButton";

const submittedVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function ParticipationOverlay() {
  const isPledgeSubmitted = useGeneralStateStore(
    (state) => state.isPledgeSubmitted,
  );
  const setIsPledgeSubmitted = useGeneralStateStore(
    (state) => state.setIsPledgeSubmitted,
  );
  const setShowParticipationOverlay = useGeneralStateStore(
    (state) => state.setShowParticipationOverlay,
  );
  const resetParentClick: MouseEventHandler<HTMLDivElement> = (e) =>
    e.stopPropagation();

  const handleSubmittedClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setShowParticipationOverlay(false);
    setIsPledgeSubmitted(false);
  };

  const handleBackgroundClick = () => {
    setShowParticipationOverlay(false);
    setIsPledgeSubmitted(false);
  };

  return (
    <motion.div
      role="button"
      aria-label="Close overlay"
      tabIndex={0}
      onKeyDown={() => {}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackgroundClick}
      className="fixed left-0 top-0 z-50 flex min-h-[100dvh] w-full items-center justify-center !rounded-none !bg-black/50"
    >
      {isPledgeSubmitted ? (
        <AnimatePresence>
          <motion.div
            variants={submittedVariants}
            initial="initial"
            animate="animate"
            className="fixed left-1/2 top-1/2 flex w-96 !-translate-x-1/2 !-translate-y-1/2 flex-col items-center rounded-lg bg-white px-8 py-10 text-center"
          >
            <img src={successImg} alt="Success" />
            <h2 className="mt-10 text-2xl font-bold">
              Thanks for your support!
            </h2>
            <p className="mt-4 text-userDarkGray">
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign is completed. Got it!
            </p>
            <button
              type="button"
              onClick={handleSubmittedClick}
              className="mt-8 rounded-full bg-userModerateCyan px-8 py-3 text-sm font-bold text-white hover:bg-userDarkCyan"
            >
              Got it
            </button>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <Options resetParentClick={resetParentClick}>
            <ProductOptionRadioButton
              id="no-reward"
              heading="Pledge with no reward"
              text="
              Choose to support us without a reward if you simply believe in our project. As a backer, 
              you will be signed up to receive product updates via email.
            "
            />
            <ProductOptionRadioButton
              id="bamboo-stand"
              heading="Bamboo Stand"
              text="
            You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
            you’ll be added to a special Backer member list.
          "
            />
            <ProductOptionRadioButton
              id="black-edition-stand"
              heading="Black Edition Stand"
              text="
            You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
            member list. Shipping is included.
          "
            />
            <ProductOptionRadioButton
              id="mahogany-stand"
              heading="Mahogany Special Edition"
              text="
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
            to our Backer member list. Shipping is included.
          "
            />
          </Options>
        </AnimatePresence>
      )}
    </motion.div>
  );
}

export default ParticipationOverlay;
