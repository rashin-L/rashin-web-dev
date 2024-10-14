"use client";

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { alpha, useTheme } from '@mui/material/styles';
import DevicesIcon from '@mui/icons-material/DevicesOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import MenuIcon from '@mui/icons-material/Menu';
// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
library.add(faGraduationCap);
import CustomButton from '../components/CustomButton';
import { LangContext } from '@/components/LangContext';
import { useTranslation } from 'react-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import fs from 'fs/promises';
import Logo from './Logo';
import Light from './Light';




// const Navbar = ({ onSidebarOpen }) => {
const Navbar = ({ onSidebarOpen }, props) => {
    // const node = props.node;
    const { langBox } = useContext(LangContext);
    const { t } = useTranslation(['translation'])
    const theme = useTheme();
    // const colorMode = useContext(ColorModeContext);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 38,
    });

    return (
      <>
        {/* <PortfolioImage/> */}

        <AppBar
          className="!font-Yekan-Bakh-bold leading-[1.5rem]"
          position="sticky"
          elevation={trigger ? 1 : 0}
          //   elevation="1"
          sx={{
            top: 0,
            border: 0,
            backgroundColor: trigger
              ? theme.palette.background.default
              : "transparent",
            // alignItems:'flex-start'
          }}
        >
          <Toolbar sx={{ minHeight: 70 }}>
            <Box
              alignItems="center"
              sx={{ display: { md: "block", lg: "none" } }}
            >
              <Button
                onClick={() => onSidebarOpen()}
                aria-label="Menu"
                variant="outlined"
                sx={{
                  borderRadius: 2,
                  minWidth: "auto",
                  padding: 1,
                  color: theme.palette.primary.main,
                  borderColor: alpha(theme.palette.primary.main, 0.2),
                }}
              >
                <MenuIcon fontSize="medium" />
              </Button>
            </Box>
            <Logo trigger={trigger} />

            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                alignItems: "center",
                display: { lg: "flex", md: "none", xs: "none" },
              }}
            >
              {langBox}
              {/* <CustomButton
                href="/#home"
                icon={<HomeIcon />}
                text={t("layout.nav.home")}
              /> */}
              {/* <CustomButton href='/#home' icon={<HomeIcon />} text='Home' /> */}
              <CustomButton
                href="/#about"
                icon={<InfoIcon />}
                text={t("layout.nav.about")}
              />
              <CustomButton
                href="/#projects"
                icon={<ListIcon />}
                text={t("layout.nav.projects")}
              />
              <CustomButton
                href="/#technologies"
                icon={<DevicesIcon />}
                text={t("layout.nav.technologies")}
              />
              <CustomButton
                href="/#contact"
                icon={<EmailIcon />}
                text={t("layout.nav.contact")}
              />
            </Box>
            <Divider
              orientation="vertical"
              sx={{
                height: 32,
                mx: 2,
                display: { lg: "flex", md: "none", xs: "none" },
              }}
            />
            <Light />
            {/* <Box sx={{ display: 'flex' }}>
                        <IconButton
                            onClick={colorMode.toggleColorMode}
                            aria-label='Theme Mode'
                            color={theme.palette.mode === 'dark' ? 'warning' : 'inherit'}
                        >
                            {theme.palette.mode === 'dark' ? (
                                <LightModeIcon fontSize='medium' />
                            ) : (
                                <DarkModeIcon
                                    fontSize='medium'
                                    sx={{ color: theme.palette.text.primary }}
                                />
                            )}
                        </IconButton>
                    </Box> */}

            {theme.palette.mode === "dark" && <Divider />}
          </Toolbar>
        </AppBar>
      </>
    );
};

Navbar.propTypes = {
    onSidebarOpen: PropTypes.func,
};

export default Navbar;


// نمیخونه برو یاد بگیر سمت سرور


// export async function getStaticProps() {
//     console.log("get static**************************");
//     const filePath = path.join(process.cwd(), 'public', 'locales')
//     const locale = await fs.readFile(filePath)
//     console.log(locale);
//     return {
//         props: {
//             ...(await serverSideTranslations(locale, ['translation'])),
//         },
//     };
// }

// export default Navbar;


// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// export async function getStaticProps({ locale }) {
//     return {
//         props: {
//             ...(await serverSideTranslations(locale, [
//                 'common',
//                 // 'footer',
//             ])),
//             // Will be passed to the page component as props
//         },
//     }
// }
