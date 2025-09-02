export default (n: number, fractions: number | null = null) =>
  new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: fractions ?? 2,
  }).format(n);
