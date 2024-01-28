import { cva } from "class-variance-authority";

export const TypographyVariants = cva(
  /* base style */
  "",
  {
    variants: {
      intent: {
        display:
          "mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl",
        header: "",
        title: "text-xl font-medium",
        label: "block mb-2 text-sm font-medium",
        body1: "mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 ",
        body2: "",
        button: "",
        link: "ml-auto text-sm transition duration-300 ease-in-out  hover:text-primary font-medium",
      },

      color: {
        primary: "text-primary",
        secondary: "text-secondary",
        onPrimary: "text-onPrimary",
        onSecondary: "text-onSecondary",
        onSurface1: "text-onSurfaceVariant1",
        onSurface2: "text-onSurfaceVariant2",
        success: "text-success",
        error: "text-error",
        parent: "text-current",
      },
      style: {
        none: "text-decoration-line: none",
        underline: "text-decoration-line: underline",
        overline: "text-decoration-line: overline",
        lineThrough: "text-decoration-line: line-through",
      },
    },

    defaultVariants: {
      intent: "body1",
      color: "onSurface1",
      style: "none",
    },
  }
);
