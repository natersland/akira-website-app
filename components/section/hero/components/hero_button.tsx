import { openUrlExtension } from "@/app/common/extension/openurl_extension";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {
  buttonType: "Primary" | "Secondary";
  icon: React.ReactNode;
  text: string;
  linkToSection?: string;
  isDownload?: boolean;
  onClick?: () => void;
};

const HeroButton = (props: Props) => {
  return (
    <Link href={props.linkToSection ?? ""}>
      <Button
        className={`gap-x-2 rounded-full ${
          props.buttonType === "Primary"
            ? "bg-primary text-white"
            : "bg-white text-primary border border-primary hover:bg-primaryLight hover:text-primary"
        } transition-all duration-300`}
        onClick={props.onClick}
      >
        {props.text} {props.icon}
      </Button>
    </Link>
  );
};

export default HeroButton;
