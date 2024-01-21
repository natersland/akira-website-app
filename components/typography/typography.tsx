import React from "react";
import Title from "./components/title";
import Label from "./components/label";
import TextLink from "./components/text_link";
import Display from "./components/display";
import Body from "./components/body";

export type TypographyProps = {
  intent:
    | "display"
    | "header"
    | "title"
    | "label"
    | "body1"
    | "body2"
    | "button"
    | "link";
  color:
    | "primary"
    | "secondary"
    | "onPrimary"
    | "onSecondary"
    | "onSurface1"
    | "onSurface2"
    | "success"
    | "error"
    | "parent";
  text: string;
  style?: "none" | "underline" | "overline" | "lineThrough";
  link?: string;
  className?: string;
};

function AkTypography({
  intent,
  color,
  text,
  link,
  style,
  className,
}: TypographyProps) {
  let content: JSX.Element;

  switch (intent) {
    case "display":
      content = (
        <Display intent={intent} color={color} text={text} style={style} />
      );
      break;
    case "header":
      content = <></>;
      break;
    case "title":
      content = (
        <Title intent={intent} color={color} text={text} style={style} />
      );
      break;
    case "label":
      content = (
        <Label intent={intent} color={color} text={text} style={style} />
      );
      break;
    case "body1":
      content = (
        <Body intent={intent} color={color} text={text} style={style} />
      );
      break;
    case "body2":
      content = (
        <Body intent={intent} color={color} text={text} style={style} />
      );
      break;
    case "button":
      content = <></>;
      break;
    case "link":
      content = (
        <TextLink
          intent={intent}
          color={color}
          text={text}
          link={link}
          style={style}
        />
      );
      break;
    default:
      content = <></>;
  }
  return content;
}

export default AkTypography;
