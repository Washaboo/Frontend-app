import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  target,
  rel,
  disabled = false,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex min-h-[48px] items-center justify-center rounded-xl px-5 text-sm font-semibold leading-none transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";

  const variants = {
    primary: "bg-[#2563EB] text-white shadow-sm hover:bg-[#1E40AF]",
    secondary:
      "border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950",
    ghost:
      "min-h-[42px] rounded-xl px-3 text-slate-600 hover:bg-slate-100 hover:text-slate-950",
  } as const;

  const classes = clsx(base, variants[variant], className);

  if (href && disabled) {
    return (
      <span className={classes} aria-disabled="true" aria-label={ariaLabel}>
        {children}
      </span>
    );
  }

  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}