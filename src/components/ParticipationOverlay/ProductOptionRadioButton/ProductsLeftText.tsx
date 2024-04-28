function ProductsLeftText({
  numOfLeft,
  variant,
}: {
  numOfLeft: number;
  variant: "mobile" | "desktop";
}) {
  return (
    <p
      className={`
      text-sm font-semibold text-userDarkGray ${variant === "mobile" ? "mt-4 sm:hidden" : "hidden sm:block"}`}
    >
      <span className="mr-1 text-lg font-bold text-black">{numOfLeft}</span>{" "}
      left
    </p>
  );
}

export default ProductsLeftText;
