import { ReactNode } from "react";

function BorderedOption({ children, handleClick }: { children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-lg border border-userDarkGray text-left *:hover:cursor-pointer"
    >
      {children}
    </button>
  );
}

export default BorderedOption;
