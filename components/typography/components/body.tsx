import React from "react";
import { TypographyProps } from "../typography";
import { TypographyVariants } from "../variants/typography_variants";

export default function Body({
  text,
  intent,
  color,
  style,
  className,
}: TypographyProps) {
  return (
    <p
      className={`${TypographyVariants({ intent, color, style })} ${className}`}
    >
      {text}
    </p>
  );
}
