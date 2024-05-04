import React, { useState, createContext, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { BiWorld } from "react-icons/bi";
// import iran from "../assets/images/iran-flag-icon.svg";
// import English from "../assets/images/england-flag-icon.svg";
// import Turkey from "../assets/images/turkey-flag-icon.svg";
// import saudi from "../assets/images/saudi-arabia-flag-icon.svg";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
// import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";

export const LangContext = createContext();

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("fa");
  const [currentLang, setCurrentLang] = useState("Language");
  const { t } = useTranslation();
  const [checked, setChecked] = React.useState(false);

  const handleLanguage = (selectedLang) => {
    setLang(selectedLang);
    setCurrentLang(
      selectedLang === "tk"
        ? "Turkey"
        : selectedLang === "eng"
        ? "English"
        : selectedLang === "ar"
        ? "Arabic"
        : selectedLang === "fa"
        ? "Persian"
        : ""
    );
    Cookies.set("selectedLang", selectedLang);

    i18next.changeLanguage(selectedLang);
  };

  const langBox = (
    <MenuItem>
      <Typography sx={{ m: 0 }}>
        <div className="flex items-center justify-center gap-2">
          <ul className="relative group list-none transition duration-300 ease-in-out">
            <li
              onMouseEnter={() => setChecked(true)}
              onMouseLeave={() => setChecked(false)}
            >
              <div exact="true" className="text-white">
                <h3>{currentLang}</h3>
              </div>
              <Fade in={checked}>
                <ul className="bg-slate-900 pt-[0.8rem] z-[99] absolute w-[8rem]  space-y-4 child:m-auto   child:list-none text-center mb-4 [&>*:first-child]:w-[8rem] [&>*:first-child]:pt-8 [&>*:first-child]:border-[#c7cacf] [&>*:first-child]:border-t-[5px] [&>*:last-child]:pb-8">
                  <li
                    className="hover:text-amber-400 "
                    onClick={() => handleLanguage("fa")}
                  >
                    <div className=" flex items-center gap-1  m-auto">
                      {/* <img
                        src={iran}
                        alt="logo"
                        className=" h-[1rem] w-[2rem] block text-white"
                      /> */}
                      Persian
                    </div>
                  </li>
                  <li
                    className="hover:text-amber-400 "
                    onClick={() => handleLanguage("eng")}
                  >
                    <div className=" flex items-center gap-1  m-auto">
                      {/* <img
                        src={English}
                        alt="logo"
                        className=" h-[1rem] w-[2rem] block text-white"
                      /> */}
                      English
                    </div>
                  </li>

                  <li
                    className="cursor-pointer hover:text-amber-400"
                    onClick={() => handleLanguage("ar")}
                  >
                    <div className=" flex items-center gap-1">
                      {/* <img
                        src={saudi}
                        alt="logo"
                        className=" h-[1rem] w-[2rem] block  text-white"
                      /> */}
                      Arabic
                    </div>
                  </li>
                  <li
                    className="cursor-pointer hover:text-amber-400"
                    onClick={() => handleLanguage("tk")}
                  >
                    <div className=" flex items-center gap-1">
                      {/* <img
                        src={Turkey}
                        alt="logo"
                        className=" h-[1rem] w-[2rem] block  text-white"
                      /> */}
                      Turkish
                    </div>
                  </li>
                </ul>
              </Fade>
            </li>
          </ul>
          <BiWorld size={20} />
        </div>
      </Typography>
    </MenuItem>
  );

  const contextData = {
    langBox: langBox,
    handleLanguage: handleLanguage,
    t: t,
  };
  useEffect(() => {
    const selectedLang = Cookies.get('selectedLang');
    if (selectedLang) {
      setLang(selectedLang);
      setCurrentLang(
        selectedLang === 'fa' ? 'Persian' :
        selectedLang === 'eng' ? 'English' :
        selectedLang === 'ar' ? 'Arabic' :
        selectedLang === 'tk' ? 'Turkey' : ''
      );
      i18next.changeLanguage(selectedLang);
    }
  }, []);

  return (
    <LangContext.Provider value={contextData}>{children}</LangContext.Provider>
  );
};

export default LanguageProvider;
