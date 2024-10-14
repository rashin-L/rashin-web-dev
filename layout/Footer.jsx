"use client";

import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import { useGetSocialQuery } from "@/redux/services/main/about";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaGithub } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useGetInfoQuery } from "@/redux/services/main/about";
import Image from "next/image";
import Fade from "react-awesome-reveal";
import Container from "@mui/material/Container";

const Footer = () => {
  const { data } = useGetSocialQuery();
  const { data: info, isLoading } = useGetInfoQuery("en");

  const theme = useTheme();

  return (
    <>
      <Box
        backgroundColor={theme.palette.background.default}
        // sticky footer - see four values below
        position="relative"
        bottom="0"
        left="0"
        width="100%"
        className={`border-t ${
          theme.palette.mode === "dark"
            ? "border-y-[#66727c]"
            : "border-y-[#a3b4bc]"
        }  !z-50 !bg-[${theme.palette.background.default}] pl-6  `}
        // className={`border-solid border-t-2 border-[${theme.palette.text.secondary}]`}
      >
        {/* <Divider className={`!bg-[${theme.palette.text.secondary}]  `} /> */}
        {/* <Divider className={`bg-current border-cyan-300 h-2 `} /> */}
        {/* <hr className={` bg-slate-400  w-full `} /> */}

        <Grid container spacing={0}>
          <Grid
            container
            item
            xs={4}
            md={4}
            justifyContent="center"
            className="justify-center mt-6 items-baseline md:pt-2 "
          >
            <List className=" block sm:hidden">
              <ListItemButton>
                <Box
                  width={1}
                  display="flex"
                  alignItems="center"
                  className=" relative"
                >
                  {info && info[0] && (
                    <>
                      {theme.palette.mode === "dark" ? (
                        <Fade top>
                          <Image
                            src={info[0]?.media.logo_dark}
                            alt="logo-dark"
                            width={270}
                            height={20}
                            // className="w-[24rem] h-[7rem] md:w-[18rem] sm:h-auto"
                            className="w-auto h-[3rem] md:h-[4rem] py-1"
                            priority
                          />
                          {/* src='../../images/logo_dark.png' /> */}
                        </Fade>
                      ) : (
                        <Fade top>
                          <Image
                            alt="logo-light"
                            width={270}
                            height={20}
                            className="w-auto h-[3rem] md:h-[4rem] py-1"
                            src={info[0]?.media?.logo_light}
                          />
                          {/* src='../../images/logo.png' /> */}
                        </Fade>
                      )}
                    </>
                  )}
                </Box>
              </ListItemButton>
            </List>
            <Box width={1} className="  !hidden sm:!block">
              {info && info[0] && (
                <>
                  {theme.palette.mode === "dark" ? (
                    <Fade top>
                      <Image
                        src={info[0]?.media.logo_dark}
                        alt="logo-dark"
                        width={270}
                        height={20}
                        // className="w-[24rem] h-[7rem] md:w-[18rem] sm:h-auto"
                        className="w-auto h-[3rem] md:h-[4rem] py-1"
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
                        className="w-auto h-[3rem] md:h-[4rem] py-1"
                        src={info[0]?.media?.logo_light}
                      />
                      {/* src='../../images/logo.png' /> */}
                    </Fade>
                  )}
                </>
              )}
            </Box>
          </Grid>
          <Grid container item xs={4} md={4} justifyContent="center">
            <List>
              <ListItemButton>
                <ListItemText
                  primary={
                    <Box sx={{ display: "flex" }}>
                      {data && (
                        <>
                          <IconButton
                            aria-label="LinkedIn"
                            href={data[0]?.linkedin}
                            target="_blank"
                          >
                            <LinkedInIcon
                              style={{ color: theme.palette.text.primary }}
                              fontSize="medum"
                            />
                          </IconButton>
                          <IconButton
                            aria-label="Github"
                            href={data[0]?.gitHub}
                            target="_blank"
                          >
                            <FaGithub
                              style={{ color: theme.palette.text.primary }}
                              size={20}
                              fontSize="large"
                            />
                          </IconButton>
                          <IconButton
                            aria-label="telegram"
                            href={data[0]?.telegram}
                            target="_blank"
                          >
                            <FaTelegramPlane
                              style={{ color: theme.palette.text.primary }}
                              size={20}
                              fontSize="large"
                            />
                          </IconButton>
                        </>
                      )}
                    </Box>
                  }
                />
              </ListItemButton>
            </List>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default React.memo(Footer);
