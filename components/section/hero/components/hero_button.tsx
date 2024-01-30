import CommonTooltip from "@/components/common/common_tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {
  buttonType: "Primary" | "Secondary";
  icon: React.ReactNode;
  text: string;
  linkToSection?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const HeroButton = (props: Props) => {
  const buildButton = (
    <Link href={props.linkToSection ?? ""}>
      <Button
        className={`gap-x-2 rounded-full ${
          props.buttonType === "Primary"
            ? "bg-primary text-white"
            : "bg-white text-primary border border-primary hover:bg-primaryLight hover:text-primary"
        } transition-all duration-300`}
        disabled={props.disabled ?? false}
        onClick={props.onClick}
      >
        {props.text} {props.icon}
      </Button>
    </Link>
  );

  return props.disabled ? (
    <CommonTooltip
      tooltipTrigger={buildButton}
      tooltipContent={"Coming soon!"}
    />
  ) : (
    buildButton
  );
};

export default HeroButton;
