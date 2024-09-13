import { Github, Link2Icon } from "lucide-react";
import Image from "next/image";
import React from "react";
import ProjectIconLink from "./icon_link";

type Props = {
  imageUrl: string;
  link: string;
  github: string;
};

function ProjectImage(props: Props) {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center bg-primaryLight bg-project_bg">
      <Image
        className="absolute bottom-50 shadow-2xl mt-4"
        src={
          props.imageUrl ??
          "https://res.cloudinary.com/dz74pimt6/image/upload/v1688884095/detective_lib3gp.png"
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
