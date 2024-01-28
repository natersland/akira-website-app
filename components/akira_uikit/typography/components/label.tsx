import React from "react";
import { TypographyProps } from "../typography";
import { TypographyVariants } from "../variants/typography_variants";

const Label = ({ text, intent, color, style, className }: TypographyProps) => {
  return (
    <label
      htmlFor={text}
      className={`${TypographyVariants({ intent, color, style })} ${className}`}
    >
      {text}
    </label>
  );
};

export default Label;
