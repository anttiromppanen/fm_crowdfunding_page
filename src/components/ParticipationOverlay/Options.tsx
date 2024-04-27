import { motion } from "framer-motion";
import { MouseEventHandler, ReactNode } from "react";
import closeImg from "../../assets/images/icon-close-menu.svg";
import useGeneralStateStore from "../../store/useGeneralStateStore";

interface OptionsProps {
  resetParentClick: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}

function OverlayCloseButton({
  viewportVariant,
}: {
  viewportVariant: "mobile" | "desktop";
}) {
  const setShowParticipationOverlay = useGeneralStateStore(
    (state) => state.setShowParticipationOverlay,
  );

  return (
    <button
      type="button"
      onClick={() => setShowParticipationOverlay(false)}
      className={
        viewportVariant === "desktop"
          ? "absolute right-6 top-4 hidden p-2 md:block"
          : "p-2 md:hidden"
      }
    >
      <img
        src={closeImg}
        alt="Close overlay"
        className="brightness-50 filter"
      />
    </button>
  );
}

function Options({ resetParentClick, children }: OptionsProps) {
  return (
    <motion.div
      onClick={resetParentClick}
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ ease: "circOut" }}
      className="
      fixed left-1/2 top-1/2 h-4/5 w-[90%] !-translate-x-1/2 !-translate-y-1/2 cursor-default overflow-y-scroll
      rounded-lg bg-white px-6 py-8 text-left md:left-1/2
      md:w-[734px] md:max-w-[734px] md:px-12 md:py-14 
      lg:h-[700px] lg:w-auto lg:pb-10
      "
    >
      <OverlayCloseButton viewportVariant="desktop" />
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold md:text-2xl">Back this project</h2>
        <OverlayCloseButton viewportVariant="mobile" />
      </div>
      <p className="mt-7 text-userDarkGray">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <div className="mt-9 flex flex-col gap-y-6">{children}</div>
    </motion.div>
  );
}

export default Options;
