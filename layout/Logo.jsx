"use client";

import React from 'react';
// import Fade from 'react-reveal/Fade';
import Fade from 'react-awesome-reveal';
import Link from '@mui/material/Link';
import { alpha, useTheme } from '@mui/material/styles';
import { useGetInfoQuery } from '@/redux/services/main/about';
import Cookies from "js-cookie";
// import config from '../../config';
import { useTranslation } from "react-i18next";
import Image from 'next/image';

function Logo() {
    const selectedLang = Cookies.get("selectedLang") || "en";
    // const { data, isLoading } = useGetInfoQuery(selectedLang || "en"); 
    const { data, isLoading } = useGetInfoQuery("en"); 

    const theme = useTheme();

    return (
      <Link href="/" style={{ textDecoration: "none" }}>
        {data && data[0] && (
          <>
            {theme.palette.mode === "dark" ? (
              <Fade top>
                {/* <img
              width={270}
              height={20}
              className="w-[24rem] h-[7rem] md:w-[18rem] sm:h-auto"
              src={infoData?.media?.logo_dark}
            /> */}
                <Image
                  src={data[0]?.media.logo_dark}
                  alt="logo-dark"
                  width={170}
                  height={20}
                  // className="w-[24rem] h-[7rem] md:w-[18rem] sm:h-auto"
                  className="w-auto h-16 sm:h-[6rem] py-1 mt-4"
                  priority
                />
                {/* src='../../images/logo_dark.png' /> */}
              </Fade>
            ) : (
              <Fade top>
                <Image
                  alt="logo-dark"
                  width={270}
                  height={20}
                  className="w-auto  h-16 sm:h-[6rem] py-1 mt-4"
                  src={data[0]?.media?.logo_light}
                />
                {/* src='../../images/logo.png' /> */}
              </Fade>
            )}
          </>
        )}
      </Link>
    );
}

export default React.memo(Logo);