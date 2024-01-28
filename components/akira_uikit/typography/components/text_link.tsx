import React from "react";
import { TypographyProps } from "../typography";
import { TypographyVariants } from "../variants/typography_variants";

function TextLink({
  text,
  intent,
  color,
  link,
  style,
  className,
}: TypographyProps) {
  return (
    <a
      href={link}
      className={`${TypographyVariants({
        intent,
        color,
        style,
      })} ${className}`}
    >
      {text}
    </a>
  );
}

export default TextLink;
