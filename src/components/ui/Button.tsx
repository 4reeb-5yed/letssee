import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center
      font-body font-medium
      rounded-md
      transition-all duration-[--duration-micro] ease-[--ease-settle]
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus] focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const variants = {
      primary: `
        bg-[--color-ink] text-[--color-paper]
        hover:underline hover:underline-offset-4 decoration-2 decoration-[--color-accent]
        active:scale-[0.98]
      `,
      secondary: `
        bg-transparent text-[--color-ink] border border-[--color-ink]
        hover:border-[--color-accent] hover:text-[--color-accent]
        active:scale-[0.98]
      `,
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
