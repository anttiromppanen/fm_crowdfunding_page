import { useState } from "react";
import { BookmarkIcon } from "@heroicons/react/16/solid";
import productLogoImg from "../../assets/images/logo-mastercraft.svg";
import useGeneralStateStore from "../../store/useGeneralStateStore";

function FundingHeader() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const setShowParticipationOverlay = useGeneralStateStore(
    (state) => state.setShowParticipationOverlay,
  );

  const handleBookmarkClick = () => setIsBookmarked((state) => !state);

  return (
    <article className="flex flex-col items-center text-center md:text-left">
      <img
        src={productLogoImg}
        alt="Product logo"
        className="-mt-16 md:-mt-[86px]"
      />
      <h1 className="mt-6 text-2xl font-bold md:mt-8">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="mt-4 text-sm text-userDarkGray md:mt-2 md:text-base">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      {/* BOTTOM SECTION BUTTONS */}
      <div className="mt-8 flex w-full gap-x-2 sm:justify-between sm:gap-x-0">
        <button
          type="button"
          onClick={() => setShowParticipationOverlay(true)}
          className="
            w-4/5 rounded-full bg-userModerateCyan py-3 font-semibold text-white
            hover:bg-userDarkCyan sm:w-auto sm:px-10
          "
        >
          Back this project
        </button>
        <div className="w-1/5 sm:w-auto">
          <button
            type="button"
            onClick={handleBookmarkClick}
            className={`
            relative flex h-[58px] w-[58px] items-center rounded-full bg-userDarkGray/20 
            font-semibold text-userDarkGray
            transition-transform duration-300 hover:bg-userDarkGray/30 sm:w-auto
            ${isBookmarked && "bg-userDarkGray/5 !text-userDarkCyan"}
          `}
          >
            <div
              className={`
              flex h-full w-full items-center justify-center rounded-full bg-black sm:h-[58px] sm:w-[58px]
              ${isBookmarked && "!bg-userDarkCyan"}
            `}
            >
              <BookmarkIcon
                className={`h-5 w-5 text-gray-300 ${isBookmarked && "!text-white"}`}
              />
            </div>
            <p className="mx-6 hidden sm:block">
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </p>
          </button>
        </div>
      </div>
    </article>
  );
}

export default FundingHeader;
