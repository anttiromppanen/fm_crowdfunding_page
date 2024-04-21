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
    <article className="flex flex-col items-center">
      <img src={productLogoImg} alt="Product logo" className="-mt-[86px]" />
      <h1 className="mt-8 text-2xl font-bold">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="mt-2 text-userDarkGray">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="mt-8 flex w-full justify-between">
        <button
          type="button"
          onClick={() => setShowParticipationOverlay(true)}
          className="rounded-full bg-userModerateCyan px-10 py-3 font-semibold text-white hover:bg-userDarkCyan"
        >
          Back this project
        </button>
        <button
          type="button"
          onClick={handleBookmarkClick}
          className={`
            relative flex items-center rounded-full bg-userDarkGray/20 font-semibold text-userDarkGray transition-all duration-300
            ${isBookmarked && "bg-userDarkGray/5 !text-userDarkCyan"}
          `}
        >
          <div
            className={`
            flex h-12 w-12 items-center justify-center rounded-full bg-userDarkGray
            ${isBookmarked && "bg-userDarkCyan"}
            `}
          >
            <BookmarkIcon
              className={`h-4 w-4 text-gray-300 ${isBookmarked && "!text-white"}`}
            />
          </div>

          <p className="mx-6">{isBookmarked ? "Bookmarked" : "Bookmark"}</p>
        </button>
      </div>
    </article>
  );
}

export default FundingHeader;
