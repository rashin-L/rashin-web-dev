import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useGetProjectQuery } from "@/redux/services/project/project";
import { ImGithub } from "react-icons/im";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import React from "react";
import { Rotate } from "react-reveal";
import { useRouter } from "next/navigation";
// import Image from "next/image";
import { useState } from "react";
import {  Zoom, Slide, Bounce} from "react-awesome-reveal";
import Image from "next/image";
import { IoInformationCircle } from "react-icons/io5";
import Link from "next/link";


const Team = () => {
  const router = useRouter();
  const { t } = useTranslation(["translation"]);
  const selectedLang = Cookies.get("selectedLang");

  const { data } = useGetProjectQuery(selectedLang || "en");

  const theme = useTheme();

  return (
    <Box
      id="team_projects"
      className={`${
        selectedLang === "fa" || selectedLang === "ar" ? "text-rtl" : "ltr"
      } `}
    >
      <Box
        maxWidth={{ xs: 600, sm: 720, md: 1236 }}
        width={1}
        margin="0 auto"
        paddingX={4}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        {/* <Link href={`/project/${item.id}`}> my link</Link> */}

        <Box marginBottom={4}>
          <Typography
            variant="h3"
            align="center"
            fontWeight={700}
            marginTop={theme.spacing(1)}
            data-aos="fade-up"
            gutterBottom
          >
            <Zoom>{t("components.projects.team-title")}</Zoom>
          </Typography>
          <Typography
            variant="h6"
            color={theme.palette.text.secondary}
            align="center"
            data-aos="fade-up"
            marginTop={4}
            marginBottom={6}
          >
            {/* Showcasing My Solo Creations */}
            {t("components.projects.team-desc")}
          </Typography>
        </Box>
        <Box
          className={`${
            selectedLang === "fa" || selectedLang === "ar" ? "rtl" : "ltr"
          } flex flex-col   gap-4 `}
        >
          {data &&
            data?.map((item, i) => (
              <div key={i}>
                {item?.team_size > 1 && (
                  <>
                    <Box
                      key={i}
                      component={Card}
                      width={1}
                      sx={{
                        backgroundColor: "rgb(255 255 255 / 0.3)",
                        transition: "opacity 0.6s ease-in-out", // Add transition for fade effect
                        opacity: 1, // Initial opacity is 1 (fully visible)
                      }}
                      // dark:!bg-[#a6a6a671] !bg-[#ffffff71]
                      // !bg-[${theme.palette.primary.main}]
                      className={`w-full h-[37rem] md:h-[15rem]   backdrop-blur-[14px] !bg-[${theme.palette.background.blur}] shadow-2xl p-4 `}
                    >
                      <Link
                        href={item?.link}
                        passHref
                        legacyBehavior
                        className=" flex gap-1 items-center align-baseline mb-2 cursor-pointer"
                      >
                        <a target="_blank">
                          {item.project_main_img?.logo && (
                            <Zoom>
                              <Image
                                src={`${item.project_main_img?.logo}`}
                                alt={item.project_main_img?.title}
                                width={100}
                                height={100}
                                className="w-auto h-[2rem] drop-shadow-2xl mb-2"
                                priority
                              />
                            </Zoom>
                          )}
                        </a>
                      </Link>
                      <Box className="flex items-baseline mb-2 gap-1 flex-wrap">
                        <Typography
                          variant="h4"
                          // gutterBottom
                          align="left"
                          fontWeight={700}
                          className=" self-end drop-shadow-2xl"
                        >
                          {item.project_name}
                        </Typography>
                        ;
                        <Typography
                          // variant="h6"
                          fontWeight={700}
                          className={`${
                            selectedLang === "fa" || selectedLang === "ar"
                              ? "text-right mr-2 text-rtl"
                              : selectedLang === "en" && "text-left ltr"
                          } drop-shadow-2xl !text-[0.8rem]`}
                          color={theme.palette.text.secondary}
                        >
                          {item.short_description}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        className={`${
                          selectedLang === "fa" || selectedLang === "ar"
                            ? "text-right mr-2 text-rtl"
                            : selectedLang === "en" && "text-left ltr"
                        } drop-shadow-2xl`}
                        color={theme.palette.text.secondary}
                      >
                        {item.description}
                      </Typography>

                      {/* <Box marginTop={2}> */}
                      <Slide cascade>
                        <Box className=" flex justify-between flex-wrap w-[-webkit-fill-available] sm:w-max">
                          {item.skills_used.map((tag, i) => (
                            <Chip
                              className="drop-shadow-2xl"
                              key={i}
                              label={tag.title}
                              variant="outlined"
                              sx={{ m: 1 }}
                            />
                          ))}
                        </Box>
                      </Slide>
                      <div className=" flex items-start text-[1rem] gap-1 absolute bottom-0 ">
                        <Button
                          component="a"
                          onClick={() => router?.push(`/project/${item?.slug}`)}
                          target="_blank"
                          sx={{
                            textTransform: "none",
                            flex: "0 0 auto",
                            color: theme.palette.text.primary,
                          }}
                        >
                          <Zoom>
                            <Box
                              sx={{
                                color: theme.palette.primary.main,
                              }}
                              className=" flex items-center gap-1 text-[1rem]  "
                            >
                              <IoInformationCircle size={22} />
                              {t("components.projects.detail")}
                            </Box>
                          </Zoom>
                        </Button>
                      </div>
                    </Box>
                  </>
                )}
              </div>
            ))}
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default React.memo(Team);
