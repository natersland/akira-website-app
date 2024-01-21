import { Github, Link2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectIconLink from "./icon_link";

type Props = {
  imageUrl: string;
  link: string;
  github: string;
};

function ProjectImage(props: Props) {
  console.log(props.github);
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center bg-primaryLight bg-project_bg">
      <Image
        className="absolute bottom-50 shadow-2xl mt-4"
        src={
          `${process.env.AKIRA_WEBSITE_API}${props.imageUrl}` ??
          "bg-placeholder_image"
        }
        width={347}
        height={350}
        alt=""
        priority
      />
      {/* btn links */}
      <div className="flex gap-x-4">
        <ProjectIconLink url={props.link} iconType={"Website"} />
        <ProjectIconLink url={props.github} iconType={"Github"} />
      </div>
    </div>
  );
}

export default ProjectImage;
