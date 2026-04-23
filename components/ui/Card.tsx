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
    "rounded-[1.75rem] p-6 transition-colors duration-200";

  const variants = {
    default:
      "bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70",
    soft:
      "bg-slate-50/90 ring-1 ring-white/60",
  };

  return (
    <div className={clsx(base, variants[variant], className)}>
      {children}
    </div>
  );
}