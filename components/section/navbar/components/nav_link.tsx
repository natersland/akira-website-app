import AkTypography from "@/components/typography/typography";
import React from "react";

type Props = {
  navigationLinkData: string[];
  navLinkType: "normal" | "hamber";
  onClick?: () => void;
};

const NavLink = (props: Props) => {
  const ulNormal =
    "hidden md:flex md:flex-1 justify-end items-center list-none";
  const ulHamber =
    "list-none m-0 p-0 h-full w-full flex flex-col justify-start items-start";
  const liNormal = "mx-4 cursor-pointer flex flex-col items-center";
  const liHamber = "m-4";
  const aHamber =
    "text-secondary text-lg uppercase font-medium transition duration-300 ease-in-out hover:text-primary";

  return (
    <ul className={props.navLinkType === "normal" ? ulNormal : ulHamber}>
      {props.navigationLinkData.map((item) => (
        <li
          className={props.navLinkType === "normal" ? liNormal : liHamber}
          key={`link-${item}`}
        >
          {props.navLinkType === "normal" ? (
            <div className="w-1 h-1 bg-transparent rounded-full mb-1"></div>
          ) : null}

          {props.navLinkType === "normal" ? (
            <AkTypography
              intent={"link"}
              color={"secondary"}
              text={item.toUpperCase()}
              link={`#${item}`}
            />
          ) : (
            <a
              href={`#${item}`}
              className={aHamber}
              onClick={() => props.onClick}
            >
              {item}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavLink;
