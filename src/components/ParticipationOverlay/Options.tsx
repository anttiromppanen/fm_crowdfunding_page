import { motion } from "framer-motion";
import { MouseEventHandler, ReactNode } from "react";
import closeImg from "../../assets/images/icon-close-menu.svg";
import useGeneralStateStore from "../../store/useGeneralStateStore";

interface OptionsProps {
  resetParentClick: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}

function Options({ resetParentClick, children }: OptionsProps) {
  const setShowParticipationOverlay = useGeneralStateStore(
    (state) => state.setShowParticipationOverlay,
  );

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
          fixed bottom-0 left-0 top-0 h-full w-full cursor-default overflow-y-scroll rounded-lg bg-white px-12 pb-40 pt-14 text-left md:left-1/2 
          md:top-1/2 md:w-[734px] md:max-w-[734px] md:!-translate-x-1/2 md:!-translate-y-1/2 lg:h-[700px] lg:w-auto lg:pb-10
        "
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
      <div className="mt-9 flex flex-col gap-y-6">{children}</div>
    </motion.div>
  );
}

export default Options;
