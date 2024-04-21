import { motion } from "framer-motion";
import usePledgeStore from "../../store/usePledgeStore";

const maxFunding = 100_000;
const daysLeft = 56;

function FundingProgressSection() {
  const fundingAmount = usePledgeStore((state) => state.pledgeAmount);
  const backersAmount = usePledgeStore((state) => state.backersAmount);

  const progressBarWidth = ((fundingAmount / maxFunding) * 100).toFixed(0);

  return (
    <article>
      <div className="flex *:first-line:text-2xl *:first-line:font-bold [&>*:not(:last-child)]:border-r">
        <div className="pr-14">
          <p>{`$${fundingAmount.toLocaleString()}`}</p>
          <p>{`of $${maxFunding.toLocaleString()} backed`}</p>
        </div>
        <div className="px-14">
          <p>{backersAmount.toLocaleString()}</p>
          <p>total backers</p>
        </div>
        <div className="px-14">
          <p>{`${daysLeft}`}</p>
          <p>days left</p>
        </div>
      </div>
      <div className="mt-6 h-3 rounded-xl bg-userDarkGray/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Number(progressBarWidth)}%` }}
          transition={{ duration: 3, type: "spring" }}
          className="h-full rounded-xl bg-userModerateCyan"
        />
      </div>
    </article>
  );
}

export default FundingProgressSection;
