"use client";
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
// import Icon from '@mui/material/Icon';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useGetAboutQuery } from '@/redux/services/main/about';
// import { useGetAboutFaQuery } from '@/redux/services/main/about';
import Cookies from "js-cookie";
import { useTranslation } from 'react-i18next';
import { Fade, Zoom } from "react-awesome-reveal";
import SvgIcon from '@mui/material/SvgIcon';
// import { Image } from '@mui/icons-material';

import Image from 'next/image';


const About = () => {
  const { t } = useTranslation(['translation'])
  const selectedLang = Cookies.get('selectedLang')|| 'en';
  const theme = useTheme();
  const  {data} =  useGetAboutQuery(selectedLang || 'en') 
  


  return (
    <div
      className={`${
        selectedLang === "fa" || selectedLang === "ar"
          ? "text-right mr-2 text-rtl"
          : selectedLang === "en" && "text-left ltr"
      }`}
      id="about"
    >
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin="0 auto"
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box>
          <Box marginBottom={4}>
            <Typography
              variant="h3"
              align="center"
              fontWeight={700}
              marginTop={theme.spacing(1)}
              data-aos="fade-up"
              gutterBottom
            >
              {/* About Me */}
              <Zoom>{t("components.about.about")}</Zoom>
            </Typography>
            <Typography
              variant="h6"
              color={theme.palette.text.secondary}
              align="center"
              data-aos="fade-up"
              marginTop={4}
              marginBottom={6}
            >
              {t("components.about.text")}
              {/* Stay informed and engaged throughout your project with our open and clear communication channels. */}
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {data &&
              data.map((about) => (
                <Grid
                  className={`${
                    selectedLang === "fa" || selectedLang === "ar" ? "rtl" : ""
                  } !mb-16 sm:!mb-0`}
                  key={about.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <ListItem
                    component="div"
                    disableGutters
                    sx={{
                      alignItems: "flex-start",
                      padding: 0,
                      gap: "0.5rem",
                    }}
                  >
                    <ListItemAvatar>
                      {selectedLang === "en" && (
                        <Box color={theme.palette.primary.main}>
                          <Fade delay={500}>
                            <img
                              alt={`${about.icon?.title}`}
                              // className="w-[4.8rem] h-16 "
                              className="w-[12rem] h-[10rem]  absolute z-0 blur-sm left-8"
                              width={80}
                              height={80}
                              src={`${about.icon?.icon}`}
                              priority
                            />
                          </Fade>
                        </Box>
                      )}
                    </ListItemAvatar>
                    <ListItemText
                      className={` z-10 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]  ${
                        selectedLang === "fa" || selectedLang === "ar"
                          ? "text-right mr-2"
                          : selectedLang === "fa" ||
                            (selectedLang === "ar" && "text-left")
                      }`}
                      primary={about.title}
                      secondary={about.description}
                      primaryTypographyProps={{
                        variant: "h4",
                        gutterBottom: true,
                        sx: { fontWeight: 700 },
                      }}
                      secondaryTypographyProps={{
                        variant: "subtitle1",
                        gutterBottom: true,
                      }}
                    />
                    {(selectedLang === "fa" || selectedLang === "ar") && (
                      <Box color={theme.palette.primary.main}>
                        <Image
                          alt={`${about.icon?.title}`}
                          // className="w-36 h-16 "
                          className="w-[13rem] h-[10rem]  absolute z-0 blur-sm right-0"
                          width={80}
                          height={80}
                          src={`${about.icon?.icon}`}
                          priority
                        />
                      </Box>
                    )}
                  </ListItem>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default React.memo(About);
