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
import {
  useGetProjectQuery,
} from "@/redux/services/project/project";
import { ImGithub } from "react-icons/im";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import React from "react";
import { Rotate } from "react-reveal";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";

const Team = () => {
  const router = useRouter();
  const { t } = useTranslation(["translation"]);
  const [info, setInfo] = useState('');
  const selectedLang = Cookies.get("selectedLang");

  // useEffect(() => {
  //   console.log(Cookies.get("selectedLang"));
  //   setselectedLang(Cookies.get("selectedLang"));
  // }, [Cookies.get("selectedLang")]);

    const { data } = useGetProjectQuery(selectedLang || 'en');

  const theme = useTheme();
  // const { data } = useGetProjectQuery();

  return (
    <Box
      id="team_projects"
      className={`${selectedLang === "fa" ? "text-rtl" : "ltr"} `}
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
            {/* Projects */}
            {t("components.projects.team-title")}
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
        <Grid container spacing={12}>
          {data &&
            data?.map((item, i) => (
              <>
                {item?.team_size > 1 && (
                  <Grid
                    className={`${
                      selectedLang === "fa" || selectedLang === "ar"
                        ? "rtl"
                        : "ltr"
                    } flex justify-center m-4 sm:m-0 !pt-[3rem] `}
                    // } flex justify-center m-4 sm:m-0 h-[21rem] sm:h-[16rem]`}
                    key={i}
                    item
                    xs={12}
                    md={4}
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-offset={100}
                    data-aos-duration={600}
                  >
                    {/* <Image
                      onMouseEnter={() => setInfo(item.id)}
                      // onMouseLeave={() => setInfo('')}
                      // onMouseOut={() => setInfo(null)}
                      // onMouseOver={() => setInfo(null)}
                      src={item.project_main_img?.main_img}
                      alt={item.project_main_img?.title}
                      width={600}
                      height={500}
                      // className="w-[30%] h-[18rem] rounded-l-[4px]"
                      className="w-full h-[18rem] rounded-l-[4px]"
                      priority
                    /> */}
                    {/* <Fade> */}
                    {/* {info === item.id && ( */}
                    <Box
                      component={Card}
                      width={1}
                      display="flex"
                      flexDirection="column"
                      sx={{
                        backgroundColor: "rgb(255 255 255 / 0.3)",
                        transition: "opacity 0.6s ease-in-out", // Add transition for fade effect
                        opacity: 1, // Initial opacity is 1 (fully visible)
                      }}
                      // dark:!bg-[#a6a6a671] !bg-[#ffffff71]
                      // !bg-[${theme.palette.primary.main}]
                      className={`w-full h-auto   backdrop-blur-[14px] !bg-[${theme.palette.background.blur}] shadow-2xl absolute  z-[90] top-0`}
                    >
                      <CardContent className="h-auto  ">
                        <div
                          onClick={() => router?.push(`/project/${item?.slug}`)}
                          className=" flex gap-1 items-center align-baseline mb-2 cursor-pointer"
                        >
                          {item.project_main_img?.logo && (
                            <>
                              <img
                                src={`${item.project_main_img?.logo}`}
                                alt={item.project_main_img?.title}
                                width={100}
                                height={100}
                                className="w-auto h-[2rem] drop-shadow-2xl"
                                priority
                              />
                            </>
                          )}
                        </div>
                        <Box className="flex">
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
                            variant="h6"
                            fontWeight={700}
                            className={`${
                              selectedLang === "fa" || selectedLang === "ar"
                                ? "text-right mr-2 text-rtl"
                                : selectedLang === "en" && "text-left ltr"
                            } drop-shadow-2xl`}
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

                        <Box
                          marginTop={2}
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Box marginTop={2}>
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
                        </Box>
                      </CardContent>
                      <Box />
                    </Box>
                    {/* </Fade> */}
                  </Grid>
                )}
              </>
            ))}
        </Grid>
      </Box>
      <Divider />
    </Box>
  );
};

export default React.memo(Team);
