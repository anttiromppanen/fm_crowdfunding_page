import { Dispatch, SetStateAction } from "react";
import productLogoImg from "../../assets/images/logo-mastercraft.svg";

interface Props {
  setShowParticipationOverlay: Dispatch<SetStateAction<boolean>>;
}

function FundingHeader({ setShowParticipationOverlay }: Props) {
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
          className="rounded-full bg-userModerateCyan px-10 py-3 font-semibold text-white"
        >
          Back this project
        </button>
        <button
          type="button"
          className="rounded-full bg-userDarkGray/20 px-10 py-3 font-semibold text-userDarkCyan"
        >
          Bookmark
        </button>
      </div>
    </article>
  );
}

export default FundingHeader;
