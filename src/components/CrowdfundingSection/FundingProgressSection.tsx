import { useState } from "react";

const maxFunding = 100_000;
const defaultBackersNum = 5007;
const daysLeft = 56;

function FundingProgressSection() {
  const [fundingAmount, setFundingAmount] = useState(89_914);

  const progressBarWidth = ((fundingAmount / maxFunding) * 100).toFixed(0);

  return (
    <article className="!pb-8">
      <div className="flex *:first-line:text-2xl *:first-line:font-bold [&>*:not(:last-child)]:border-r">
        <div className="pr-14">
          <p>{`$${fundingAmount.toLocaleString()}`}</p>
          <p>{`of $${maxFunding.toLocaleString()} backed`}</p>
        </div>
        <div className="px-14">
          <p>{`$${defaultBackersNum.toLocaleString()}`}</p>
          <p>total backers</p>
        </div>
        <div className="px-14">
          <p>{`${daysLeft}`}</p>
          <p>days left</p>
        </div>
      </div>
      <div className="bg-userDarkGray/10 mt-6 h-3 rounded-xl">
        <div
          className="bg-userModerateCyan h-full rounded-xl"
          style={{ width: `${Number(progressBarWidth)}%` }}
        />
      </div>
    </article>
  );
}

export default FundingProgressSection;
