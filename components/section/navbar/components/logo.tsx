import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";
import React from "react";
import { AiTwotoneUpSquare } from "react-icons/ai";

type Props = {};

function Logo({}: Props) {
  return (
    <a className="flex items-center">
      <Rocket className="text-primary" style={{ fontSize: "1.5rem" }} />
      <span className="ml-3 self-center text-2xl text-onSurfaceVariant2 font-semibold whitespace-nowrap">
        Akira
      </span>
    </a>
  );
}

export default Logo;
