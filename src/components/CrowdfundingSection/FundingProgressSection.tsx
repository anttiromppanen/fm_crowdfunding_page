import { motion } from "framer-motion";
import usePledgeStore from "../../store/usePledgeStore";

const maxFunding = 100_000;
const daysLeft = 56;

function VerticalDividerLine() {
  return (
    <div className="mx-auto my-6 w-1/4 border-t-[1px] border-t-userDarkGray/40 md:hidden" />
  );
}

function FundingProgressSection() {
  const fundingAmount = usePledgeStore((state) => state.pledgeAmount);
  const backersAmount = usePledgeStore((state) => state.backersAmount);

  const progressBarWidth = ((fundingAmount / maxFunding) * 100).toFixed(0);

  return (
    <article>
      <div
        className="
        *:after: flex flex-col items-center text-center *:first-line:text-3xl *:first-line:font-bold
        md:flex-row
        md:items-start md:text-left md:*:first-line:text-2xl md:[&>*:not(:last-child)]:border-r"
      >
        <div className="md:pr-14">
          <p
            className={
              fundingAmount >= maxFunding ? "text-green-600" : "text-black"
            }
          >{`$${fundingAmount.toLocaleString("en-US")}`}</p>
          <p className="mt-2 text-sm text-userDarkGray md:mt-0 md:text-base">{`of $${maxFunding.toLocaleString("en-US")} backed`}</p>
        </div>
        <VerticalDividerLine />
        <div className="md:px-14">
          <p>{backersAmount.toLocaleString("en-US")}</p>
          <p className="mt-2 text-sm text-userDarkGray md:mt-0 md:text-base">
            total backers
          </p>
        </div>
        <VerticalDividerLine />
        <div className="md:px-14">
          <p>{`${daysLeft}`}</p>
          <p className="mt-2 text-sm text-userDarkGray md:mt-0 md:text-base">
            days left
          </p>
        </div>
      </div>
      <div className="mt-8 h-3 rounded-xl bg-userDarkGray/10 md:mt-6">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${Number(progressBarWidth)}%` }}
          viewport={{ once: true }}
          transition={{ duration: 3, type: "spring" }}
          className="h-full rounded-xl bg-userModerateCyan"
        />
      </div>
    </article>
  );
}

export default FundingProgressSection;
