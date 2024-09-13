import CommonTooltip from "@/components/common/common_tooltip";
import { Button } from "@/components/ui/button";
import { on } from "events";
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

const HeroButton = ({
  buttonType,
  icon,
  text,
  disabled,
  onClick,
  linkToSection,
}: Props) => {
  const buildButton = (
    <Link href={linkToSection ?? ""}>
      <Button
        className={`gap-x-2 rounded-full ${
          buttonType === "Primary"
            ? "bg-primary text-white"
            : "bg-white text-primary border border-primary hover:bg-primaryLight hover:text-primary"
        } transition-all duration-300`}
        disabled={disabled}
        onClick={onClick}
      >
        {text} {icon}
      </Button>
    </Link>
  );

  return disabled ? (
    <CommonTooltip
      tooltipTrigger={buildButton}
      tooltipContent={
        "Comming Soon! 🚀 Reach out to contact me for discuss more."
      }
    />
  ) : (
    buildButton
  );
};

export default HeroButton;
