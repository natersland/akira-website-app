import React from "react";
import { Github, Link2Icon } from "lucide-react";
import Link from "next/link";

type Props = {
  url: string;
  iconType: "Github" | "Website";
};

const ProjectIconLink = (props: Props) => {
  const iconColorDefualt = "text-white";
  const iconBuilder = () => {
    switch (props.iconType) {
      case "Github":
        return <Github className={iconColorDefualt} />;
      case "Website":
        return <Link2Icon className={iconColorDefualt} />;

      default:
        return <Link2Icon className={iconColorDefualt} />;
    }
  };
  return (
    <Link
      href={props.url}
      target="_blank"
      className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
    >
      {iconBuilder()}
    </Link>
  );
};

export default ProjectIconLink;
