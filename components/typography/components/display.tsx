import React from "react";
import { TypographyProps } from "@/components/typography/typography";
import { TypographyVariants } from "../variants/typography_variants";

type Props = {};

const Display = ({
  text,
  intent,
  color,
  style,
  className,
}: TypographyProps) => {
  return (
    <h1
      className={`${TypographyVariants({ intent, color, style })} ${className}`}
    >
      {text}
    </h1>
  );
};

export default Display;
