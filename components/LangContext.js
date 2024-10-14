"use client";
import React, { useState, createContext, useEffect } from "react";
// import MenuItem from "@mui/material/MenuItem";
// import { serverSideTranslations, useTranslation } from 'next-i18next';
import i18next from "i18next";
import { BiWorld } from "react-icons/bi";
// import iran from "../assets/images/iran-flag-icon.svg";
import iran from "../public/images/iran-flag-icon.svg";
import English from "../public/images/england-flag-icon.svg";
// import Turkey from "../assets/images/turkey-flag-icon.svg";
// import saudi from "../assets/images/saudi-arabia-flag-icon.svg";
import Fade from "@mui/material/Fade";
// import Bounce from 'react-reveal/Bounce';

import { Bounce } from "react-awesome-reveal";

// import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import Box from "@mui/material/Box";
import { alpha, useTheme } from "@mui/material/styles";
// import { useRouter } from 'next/router'

export const LangContext = createContext();

const LanguageProvider = ({ children }) => {
  const theme = useTheme();

  // const router = useRouter()
  // const [lang, setLang] = useState("en");
  const [currentLang, setCurrentLang] = useState("English");
  // const { t } = useTranslation();
  const [checked, setChecked] = React.useState(false);

  const handleLanguage = (selectedLang) => {
    // setLang(selectedLang);
    setCurrentLang(
      selectedLang === "en"
        ? "English"
        : selectedLang === "fa"
        ? "Persian"
        : selectedLang === "ar"
        ? "Arabic"
        : "en"
    );
    Cookies.set("selectedLang", selectedLang);

    i18next.changeLanguage(selectedLang);
    // window.location.reload();
  };

  const langBox = (
    <Box
      component="a"
      color="primary"
      size="small"
      variant="text"
      sx={{
        cursor: "pointer",
        color:
          theme.palette.mode === "dark"
            ? theme.palette.text.secondary
            : theme.palette.text.primary,
        fontSize: theme.typography.subtitle1,
        fontWeight: "medium",
        textTransform: "uppercase",
        mr: 2,
        "&:active": {
          color:
            theme.palette.mode === "dark"
              ? theme.palette.primary.contrastText
              : theme.palette.primary.main,
        },
        "&:hover": {
          color:
            theme.palette.mode === "dark"
              ? theme.palette.primary.contrastText
              : theme.palette.primary.main,
          // backgroundColor: 'rgb(255 255 255 / 0.3)'
        },
        "& svg": {
          mr: 0.5,
        },
      }}
    >
      <div className="flex items-center justify-center gap-2 ">
       
        {/* ------------------------------------------ */}
        <li className="relative group list-none">
          <div exact="true" className="h-[3.9rem] flex items-center justify-center  ">
              <BiWorld size={23} />
              <h3>{currentLang}</h3>
            </div>
          {/* ********************* */}
          
          <Box
                component="ul"
                sx={{
                  // backgroundColor: theme.palette.background.paper,
                  // borderRadius: "0.25rem",
                  // border: "2px solid " + theme.palette.text.secondary,
                  marginTop: "0.5rem",
                }}
                // className={`hidden  group-hover:block  z-[99] absolute w-[8rem]  space-y-4 child:m-auto   child:list-none text-center mb-4  `}
                className={`hidden  group-hover:block     !-mt-2   z-[99] absolute w-[8rem]  space-y-4 child:m-auto   child:list-none text-center mb-4  `}
              >
            <Bounce cascade effect="fadeInUp" effectOut="fadeOutLeft">
             
              <Box
                className={`!bg-[${theme.palette.background.blur}] backdrop-blur-[2px]   shadow-2xl rounded-md`}


                component="li"
                sx={{
                  "&:hover": {
                    color:theme.palette.text.secondary,
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "0.25rem",
                  },
                }}
                onClick={() => handleLanguage("en")}
              >
                <div className=" text-center  m-auto p-1">
                  English
                </div>
              </Box>
              <Box
                className={`!bg-[${theme.palette.background.blur}] backdrop-blur-[2px]   shadow-2xl rounded-md `}


                component="li"
                sx={{
                  "&:hover": {
                    color:theme.palette.text.secondary,
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "0.25rem",
                  },
                }}
                onClick={() => handleLanguage("ar")}
              >
                <div className=" text-center  m-auto p-1">
                  Arabic
                </div>
              </Box>
               <Box
                component="li"
                sx={{
                  "&:hover": {
                    color:theme.palette.text.secondary,
                    backgroundColor: theme.palette.primary.main,
                    // borderRadius: "0.30rem",
                  },
                }}
                className={`!bg-[${theme.palette.background.blur}] backdrop-blur-[2px]   shadow-2xl rounded-md`}

                onClick={() => handleLanguage("fa")}
              >
                <div className=" text-center  m-auto p-1 ">
                  Persian
                </div>
              </Box>
            </Bounce>
          </Box>
        </li>
      </div>
    </Box>
  );

  const contextData = {
    langBox: langBox,
    handleLanguage: handleLanguage,
    // t: t,
  };
  useEffect(() => {
    const selectedLang = Cookies.get("selectedLang");
    if (selectedLang) {
      // setLang(selectedLang);
      setCurrentLang(
        selectedLang === "fa"
          ? "Persian"
          : selectedLang === "ar"
          ? "Arabic"
          : selectedLang === "en"
          ? "English"
          : ""
      );
      i18next.changeLanguage(selectedLang);
      // window.location.reload()
    }
    // router.reload()

    // window.location.reload()
  }, []);

  return (
    <LangContext.Provider value={contextData}>{children}</LangContext.Provider>
  );
};

export default LanguageProvider;
