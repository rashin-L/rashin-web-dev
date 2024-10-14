"use client";
import React, { useState, useEffect } from "react";
import "../app/globals.css";
import "../i18n";

import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
// import Projects from "../components/Projects";
import Projects from "@/components/Projects";
import Team from "@/components/Team"
import Technologies from "./Technologies";
import PortfolioImage from "@/components/PortfolioImage";
import Navbar from "@/layout/Navbar";
import Sidebar from "@/layout/Sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ParticlesContainer } from "./ParticlesContainer";
import Cookies from "js-cookie";
import Link from "next/link";



const LandingPage = () => {
  const selectedLang = Cookies.get("selectedLang") || "en";
  const theme = useTheme();
  const [Loading, setIsLoading] = useState(true);

  const isLg = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isLg ? false : openSidebar;

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (Loading) {
    return <ParticlesContainer />;
  }
  return (
    <>
      <Navbar onSidebarOpen={handleSidebarOpen} />
      {/* <Link
        legacyBehavior
        // href={`/project/${item.id}`}
        href="/project/personal-web-fa"
        // href='/'
      >
      </Link> */}
      <Sidebar onClose={handleSidebarClose} open={open} />
      <div
        id="home"
        className={`${
          selectedLang === "fa" || selectedLang === "ar"
            ? " font-Yekan-Bakh-bold"
            : "ltr font-Barlow-Regular"
        } font`}
      >
        {/* <div id="home" className={`font-Barlow-Regular `}> */}
        <PortfolioImage />
        <Hero selectedLang={selectedLang} />
        <About />
        <Projects />
        <Team />
        <Technologies />
        <Contact />
      </div>
    </>
  );
};

export default React.memo(LandingPage);
