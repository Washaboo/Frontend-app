import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "soft";
};

export default function Card({
  children,
  className,
  variant = "default",
}: CardProps) {
  const base =
    "rounded-2xl p-5 transition-all duration-200";

  const variants = {
    default:
      "bg-white border border-slate-200 shadow-sm hover:shadow-md",
    soft:
      "bg-slate-50 border border-slate-200",
  } as const;

  return (
    <div className={clsx(base, variants[variant], className)}>
      {children}
    </div>
  );
}