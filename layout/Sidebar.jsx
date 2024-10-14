"use client";

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';
import DevicesIcon from '@mui/icons-material/Devices';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import { LangContext } from '@/components/LangContext';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

library.add(faGraduationCap);

import CustomButton from '../components/CustomButton';

const Sidebar = ({ open, onClose }) => {
  const { langBox } = useContext(LangContext);
  const { t } = useTranslation(['translation'])
  const theme = useTheme();

  return (
    <>
      <Drawer
        anchor="left"
        onClose={() => onClose()}
        open={open}
        variant="temporary"
        className=" !mt-12 z-[90]"
        sx={{
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: 280,
          },
          // "& .MuiButton-root": {
          //   marginTop: "3rem",
          // },
        }}
      >
        <Box
          className="!font-Yekan-Bakh-bold leading-[1.5rem]"
          sx={{ height: "100%", padding: 1 }} 
        >
          <Box width={1} paddingX={2} paddingY={1}>
            <Logo/>
          </Box>
          <Box
            paddingX={2}
            paddingY={2}
            className="!font-Yekan-Bakh-bold leading-[1.5rem]"
          >
            {/* <CustomButton
              className=" !mt-0"
              href="/#home"
              icon={<HomeIcon />}
              text={t("layout.nav.home")}
            /> */}
            <Box paddingY={1}>
              <CustomButton
              className=" !mt-0"
                href="/#about"
                icon={<InfoIcon />}
                text={t("layout.nav.about")}
              />
            </Box>
            <Box paddingY={1}>
              <CustomButton
              className=" !mt-0"
                href="/#projects"
                icon={<ListIcon />}
                text={t("layout.nav.projects")}
              />
            </Box>
            <Box paddingY={1}>
              <CustomButton
              className=" !mt-0"
                href="/#technologies"
                icon={<DevicesIcon />}
                text={t("layout.nav.technologies")}
              />
            </Box>
            <Box paddingY={1}>
              <CustomButton
              className=" !mt-0"
                href="/#contact"
                icon={<EmailIcon />}
                text={t("layout.nav.contact")}
              />
            </Box>
            <Box paddingBottom={1} marginLeft="-9rem">
              {langBox}
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default Sidebar;
