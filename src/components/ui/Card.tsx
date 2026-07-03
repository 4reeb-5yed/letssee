import { forwardRef, type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "hoverable";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", className = "", children, ...props }, ref) => {
    const baseStyles = `
      rounded-md overflow-hidden
      bg-[--color-paper-alt]
      border border-[--color-line]
      transition-all duration-[--duration-base] ease-[--ease-settle]
    `;

    const variants = {
      default: ``,
      hoverable: `
        cursor-pointer
        hover:-translate-y-0.5
        hover:border-[--color-ink-soft]
        hover:shadow-[--shadow-card-hover]
      `,
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
