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
// import { ImGithub } from "react-icons/im";
import { IoInformationCircle } from "react-icons/io5";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import React from "react";
import { Rotate } from "react-reveal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { Fade, Zoom, Slide, Bounce } from "react-awesome-reveal";
import Image from "next/image";



import Link from "next/link";


const Projects = () => {
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
      id="projects"
      className={`${
        selectedLang === "fa" || selectedLang === "ar" ? "rtl" : "ltr"
      }`}
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
            <Zoom>{t("components.projects.title")}</Zoom>
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
            {t("components.projects.desc")}
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {data &&
            data?.map((item, i) => (
              <>
                {item?.team_size === 1 && (
                  <Grid
                    onMouseLeave={() => setInfo("")}
                    className={`${
                      selectedLang === "fa" || selectedLang === "ar"
                        ? "rtl"
                        : "ltr"
                    } flex justify-center`}
                    key={i}
                    item
                    xs={12}
                    md={4}
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-offset={100}
                    data-aos-duration={600}
                  >
                    <Image
                      onMouseEnter={() => setInfo(item.id)}
                      src={item.project_main_img?.main_img}
                      alt={item.project_main_img?.title}
                      width={600}
                      height={500}
                      // className="w-[30%] h-[18rem] rounded-l-[4px]"
                      className={`w-full h-[16rem] rounded-l-[4px] ${
                        info === item.id
                          ? theme.palette.mode === "dark"
                            ? "blur-md"
                            : "blur-sm"
                          : ""
                      }`}
                      priority
                    />
                    {info === item.id && (
                    <Grid>
                      <Fade triggerOnce>
                        <div
                          dir={`${
                            selectedLang === "fa" || selectedLang === "ar"
                              ? "rtl"
                              : "ltr"
                          }`}
                        >
                          <Box
                            component={Card}
                            width={1}
                            display="flex"
                            flexDirection="column"
                            sx={{
                              // backgroundColor: "rgb(255 255 255 / 0.3)",
                              backgroundColor: `{${
                                theme.palette.mode === "dark"
                                  ? "!bg-[#a6a6a671]"
                                  : "!bg-[#ffffff71]"
                              }}`,
                              transition: "opacity 0.6s ease-in-out", // Add transition for fade effect
                              opacity: 1, // Initial opacity is 1 (fully visible)
                            }}
                            // dark:!bg-[#a6a6a671] !bg-[#ffffff71]
                            // !bg-[${theme.palette.primary.main}]
                            className={` !w-[-webkit-fill-available] m-auto p-2 ${
                              theme.palette.mode === "dark"
                                ? "[text-shadow:_0_1px_0_rgb(0_0_0_/_60%)]"
                                : "[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] "
                            }   backdrop-blur-[10px] !bg-[${
                              theme.palette.background.blur
                            }] shadow-2xl absolute  z-[90] left-8 top-0 h-[19rem] `}
                          >
                            <CardContent className="h-[20rem]  ">
                              <Zoom>
                                <Link
                                  passHref
                                  legacyBehavior
                                  align="right"
                                  href={item?.link}
                                  className={`flex   gap-1 items-center align-baseline mb- cursor-pointer pb-2 `}
                                >
                                  <a target="_blank">
                                    {item.project_main_img?.logo && (
                                      <Image
                                        src={`${item.project_main_img?.logo}`}
                                        alt={item.project_main_img?.title}
                                        width={100}
                                        height={100}
                                        className="w-auto h-[2.3rem] drop-shadow-2xl "
                                        priority
                                      />
                                    )}
                                    <Typography
                                      variant="h4"
                                      // gutterBottom
                                      // align="left"
                                      fontWeight={700}
                                      className={`self-end drop-shadow-2xl !text-[0.8rem] ${
                                        selectedLang === "fa" ||
                                        selectedLang === "ar"
                                          ? "text-right "
                                          : "text-left"
                                      } `}
                                    >
                                      {item.project_name}
                                    </Typography>
                                  </a>
                                </Link>
                              </Zoom>

                              <Typography
                                variant="h6"
                                fontWeight={700}
                                className={`!mt-2 ${
                                  selectedLang === "fa" || selectedLang === "ar"
                                    ? "text-right "
                                    : "text-left"
                                } drop-shadow-2xl`}
                                color={theme.palette.text.primary}
                              >
                                {item.short_description}
                              </Typography>

                              <Box
                                marginTop={2}
                                // display="flex"
                                // justifyContent="space-between"
                              >
                                <Box marginTop={2}>
                                  <Slide cascade>
                                    <Box className=" flex justify-between flex-wrap w-[17rem] sm:w-[20rem]">
                                      {item.skills_used.map((tag, i) => (
                                        <Chip
                                          className="drop-shadow-2xl !text-[0.87rem] !m-[2px]"
                                          key={i}
                                          label={tag.title}
                                          variant="outlined"
                                          sx={{ m: 1 }}
                                        />
                                      ))}
                                    </Box>
                                  </Slide>
                                </Box>
                              </Box>
                            </CardContent>
                            <div className=" flex items-start text-[1rem] gap-1 absolute bottom-0 ">
                              <Button
                                component="a"
                                onClick={() =>
                                  router?.push(`/project/${item?.slug}`)
                                }
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
                                      color: "#1B80B7",
                                    }}
                                    className=" flex items-center gap-1 text-[1rem]  "
                                  >
                                    <IoInformationCircle
                                      size={22}
                                      color="#1B80B7"
                                    />
                                    {t("components.projects.detail")}
                                  </Box>
                                </Zoom>
                              </Button>
                            </div>
                            <Box />
                          </Box>
                        </div>
                      </Fade>
                    </Grid>
                    )}
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

export default React.memo(Projects);
