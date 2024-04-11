import productLogoImg from "../../assets/images/logo-mastercraft.svg";

function FundingHeader() {
  return (
    <article className="flex flex-col items-center !pb-10">
      <img src={productLogoImg} alt="Product logo" className="-mt-14" />
      <h1 className="mt-8 text-2xl font-bold">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="text-userDarkGray mt-2">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="mt-8 flex w-full justify-between">
        <button
          type="button"
          className="bg-userDarkCyan rounded-full px-10 py-3 font-semibold text-white"
        >
          Back this project
        </button>
        <button
          type="button"
          className="bg-userDarkGray/20 text-userDarkCyan rounded-full px-10 py-3 font-semibold"
        >
          Bookmark
        </button>
      </div>
    </article>
  );
}

export default FundingHeader;
