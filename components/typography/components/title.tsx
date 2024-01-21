import React from "react";
import { TypographyVariants } from "../variants/typography_variants";
import { TypographyProps } from "@/components/typography/typography";

function Title({ text, intent, color, style, className }: TypographyProps) {
  return (
    <h5
      className={`${TypographyVariants({
        intent,
        color,
        style,
      })} ${className}`}
    >
      {text}
    </h5>
  );
}

export default Title;
