import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { alpha, useTheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DevicesIcon from '@mui/icons-material/DevicesOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import MenuIcon from '@mui/icons-material/Menu';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faGraduationCap);

import ColorModeContext from '../components/ColorModeContext';
import CustomButton from '../components/CustomButton';
import PortfolioImage from '@/components/PortfolioImage';
import { FaGithub } from "react-icons/fa6";
import { useGetSocialQuery } from '@/redux/services/main/about';
import { FaTelegramPlane } from "react-icons/fa";
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import { LangContext } from '@/components/LangContext';


const Navbar = ({ onSidebarOpen }) => {
    const { data } = useGetSocialQuery();
    const { langBox, t } = useContext(LangContext);
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 38,
    });

    return (
        <>
            {/* <PortfolioImage/> */}

            <AppBar
                position='sticky'
                elevation={theme.palette.mode === 'dark' ? 0 : trigger ? 1 : 0}
                sx={{
                    top: 0,
                    border: 0,
                    backgroundColor: trigger
                        ? theme.palette.background.default
                        : 'transparent',
                    // alignItems:'flex-start'
                }}
            >
                <Toolbar sx={{ minHeight: 70 }}>
                    <Box
                        alignItems='center'
                        sx={{ display: { md: 'block', lg: 'none' } }}
                    >
                        <Button
                            onClick={() => onSidebarOpen()}
                            aria-label='Menu'
                            variant='outlined'
                            sx={{
                                borderRadius: 2,
                                minWidth: 'auto',
                                padding: 1,
                                color: theme.palette.primary.main,
                                borderColor: alpha(theme.palette.primary.main, 0.2),
                            }}
                        >
                            <MenuIcon fontSize='medium' />
                        </Button>
                    </Box>
                    <Link href='/' style={{ textDecoration: 'none' }}>
                        {theme.palette.mode === 'dark' ?
                            <Fade top>
                                <img width={270} height={20}
                                    className="w-[27rem] h-[9rem] sm:w-[18rem] sm:h-auto"
                                    src='../../images/logo_dark.png' />
                            </Fade>
                            :
                            <Fade top>
                                <img width={270} height={20}
                                    className="w-[27rem] h-[9rem] sm:w-[18rem] sm:h-auto"
                                    src='../../images/logo.png' />
                            </Fade>
                        }


                        {/* <IconButton size='large' disabled> */}
                        {/* <Avatar
                                variant='rounded'
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    height: 52,
                                    width: 52,
                                    marginRight: '15px',
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faGraduationCap}
                                    style={{
                                        color: theme.palette.common.white,
                                        height: 30,
                                        width: 30,
                                    }}
                                />
                            </Avatar> */}
                        {/* <Typography
                                variant='h3'
                                component='div'
                                sx={{
                                    flexGrow: 1,
                                    color: theme.palette.text.primary,
                                    fontFamily: '"Love Ya Like A Sister", cursive',
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                    display: { md: 'inline', xs: 'none' },
                                }}
                            >
                                Rashin Web Dev
                            </Typography> */}
                        {/* </IconButton> */}
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: { lg: 'flex', md: 'none', xs: 'none' },
                        }}
                    >
                        {langBox}
                        <CustomButton href='http://localhost:3000/#home' icon={<HomeIcon />} text={t("nav")} />
                        {/* <CustomButton href='http://localhost:3000/#home' icon={<HomeIcon />} text='Home' /> */}
                        <CustomButton href='http://localhost:3000/#about' icon={<InfoIcon />} text='About' />
                        <CustomButton
                            href='http://localhost:3000/#projects'
                            icon={<ListIcon />}
                            text='Projects'
                        />
                        <CustomButton
                            href='http://localhost:3000/#technologies'
                            icon={<DevicesIcon />}
                            text='Technologies'
                        />
                        <CustomButton href='http://localhost:3000/#contact' icon={<EmailIcon />} text='Contact' />
                    </Box>
                    <Divider
                        orientation='vertical'
                        sx={{
                            height: 32,
                            mx: 2,
                            display: { lg: 'flex', md: 'none', xs: 'none' },
                        }}
                    />
                    <Box sx={{ display: 'flex' }}>
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
                    </Box>
                    {/* <Divider
                        orientation='vertical'
                        sx={{
                            height: 32,
                            mx: 2,
                            display: { lg: 'flex', md: 'none', xs: 'none' },
                        }}
                    />
                    <Box sx={{ display: { lg: 'flex', md: 'none', xs: 'none' } }}>
                        {data &&
                            <>
                                <IconButton
                                    aria-label='LinkedIn'
                                    href={data[0]?.linkedin}
                                    target='_blank'
                                >
                                    <LinkedInIcon style={{ color: theme.palette.text.primary, }}
                                        fontSize='large' />
                                </IconButton>
                                <IconButton
                                    aria-label='Github'
                                    href={data[0]?.gitHub}
                                    target='_blank'
                                >
                                    <FaGithub style={{ color: theme.palette.text.primary, }}
                                        size={30} fontSize='large' />
                                </IconButton>
                                <IconButton
                                    aria-label='telegram'
                                    href={data[0]?.telegram}
                                    target='_blank'
                                >
                                    <FaTelegramPlane style={{ color: theme.palette.text.primary, }}
                                        size={30} fontSize='large' />
                                </IconButton>
                            </>}
                    </Box> */}
                    {theme.palette.mode === 'dark' && <Divider />}
                </Toolbar>
            </AppBar>

        </>
    );
};

Navbar.propTypes = {
    onSidebarOpen: PropTypes.func,
};

export default Navbar;
