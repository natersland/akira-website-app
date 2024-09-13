"use client";
import { Download, Send } from "lucide-react";
import React, { use, useEffect } from "react";
import HeroButton from "./components/hero_button";
import AkTypography from "@/components/akira_uikit/typography/typography";
import { Player } from "@lottiefiles/react-lottie-player";
import config from "@/tailwind.config";
import Typewriter from "typewriter-effect";
import EmailDialog from "./components/email_dialog";
import { useResumeStore } from "@/app/presentation/store/resume_store";
import { NavigationExtensionImpl } from "@/app/core/extensions/navigation_extension";

type Props = {};

const Hero = ({}: Props) => {
  const animationURL = config.theme.extend.animation.astro3 ?? "";
  const { resumeUrl, updatedAt, isEnabledDownloadCV, fetchResumeData } =
    useResumeStore();
  const navigationExtension = new NavigationExtensionImpl();

  useEffect(() => {
    fetchResumeData();
  }, [fetchResumeData]);

  console.log(resumeUrl);
  console.log(updatedAt);

  return (
    <section
      id="home"
      className="py-28  h-auto bg-primaryLight bg-repeat bg-bottom"
    >
      <div className="container mx-auto">
        <div className="flex justify-around gap-x-8 flex-col sm:!flex-col md:!flex-col lg:!flex-row xl:!flex-row">
          {/* text */}
          <div className="flex max-w-full flex-col justify-center mx-auto xl:mx-0 text-center sm:text-center md:text-center xl:text-start">
            <div className="">
              <AkTypography
                intent={"display"}
                color={"primary"}
                text={"Akira".toLocaleUpperCase()}
              />
              <AkTypography
                intent={"display"}
                color={"primary"}
                text={"Chenyavanij".toLocaleUpperCase()}
              />
            </div>
            <p className="text-secondary text-xl flex pb-4 justify-center sm:justify-center md:justify-center lg:justify-start">
              <span className="ml-1">
                {/* // TODO it's bug here, find other lib or other way to implement */}
                {/* <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "Flutter Developer",
                      "Full Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                /> */}
              </span>
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-2">
              <EmailDialog
                trickerConponent={
                  <HeroButton
                    buttonType={"Primary"}
                    icon={<Send size={18} />}
                    text={"Contact me"}
                  />
                }
              />

              <div className="flex flex-col">
                <HeroButton
                  buttonType={"Secondary"}
                  icon={<Download size={18} />}
                  text={"Download CV"}
                  disabled={!isEnabledDownloadCV}
                  onClick={
                    resumeUrl
                      ? () => navigationExtension.openUrl(resumeUrl)
                      : undefined
                  }
                />
              </div>
            </div>
            {isEnabledDownloadCV && (
              <AkTypography
                intent={"label"}
                color={"onSurface2"}
                text={`Last CV updated: ${updatedAt}`}
              />
            )}
            {/* socials */}
            {/* <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            /> */}
          </div>
          <Player
            autoplay
            loop
            src={animationURL}
            style={{ height: "400px", width: "400px" }}
          ></Player>
        </div>
      </div>
    </section>
  );
};

export default Hero;
