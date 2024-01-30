"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import Logo from "./components/logo";
import NavLink from "./components/nav_link";
import { useNavBarStore } from "@/app/presentation/store/navbar_store";
import { useNavBarSelector } from "@/app/presentation/selector/nav_bar_selector";

type Props = {};

// TODO custom style
function Navbar({}: Props) {
  const navigationLinkData: string[] = [
    "home",
    // "work",
    // "skills",
    "project",
    // "contact",
  ];
  const toggle = useNavBarStore((state) => state.toggle);
  const { handleToggle } = useNavBarSelector();

  return (
    <nav className="w-full flex justify-between items-center p-4 bg-white backdrop-blur-md border border-white/18 fixed z-10">
      <div className="flex justify-start items-center">
        <Logo />
      </div>
      <NavLink navigationLinkData={navigationLinkData} navLinkType={"normal"} />
      <div className="md:hidden w-9 h-9 rounded-full relative flex justify-center items-center bg-primary">
        <HiMenuAlt4
          className="w-3/4 h-3/4 text-white"
          onClick={() => handleToggle(true)}
        />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="fixed top-0 bottom-0 right-0 z-20 p-4 w-3/5 h-screen flex justify-end items-end flex-col bg-onPrimary bg-cover bg-repeat"
          >
            <HiX
              className="w-9 h-9 text-secondary m-2"
              onClick={() => handleToggle(false)}
            />
            <NavLink
              navigationLinkData={navigationLinkData}
              navLinkType={"hamber"}
              onClick={() => handleToggle(false)}
            />
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
