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
    "inline-flex min-h-[52px] items-center justify-center rounded-2xl px-6 text-sm font-semibold leading-none transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";

  const variants = {
    primary:
      "bg-gradient-to-r from-[var(--brand-light)] via-[var(--brand)] to-[var(--brand-dark)] text-white shadow-[0_10px_30px_rgba(33,150,243,0.28)] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(33,150,243,0.34)]",
    secondary:
      "border border-slate-200/80 bg-white text-slate-900 shadow-sm hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md",
    ghost:
      "min-h-[44px] rounded-xl px-3 text-slate-700 hover:bg-slate-100/80 hover:text-slate-950",
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