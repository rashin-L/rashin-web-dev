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


const Projects = () => {
  const router = useRouter();
  const { t } = useTranslation(["translation"]);
  // const [selectedLang, setselectedLang] = useState(null);
  const selectedLang = Cookies.get("selectedLang");

  // useEffect(() => {
  //   console.log(Cookies.get("selectedLang"));
  //   setselectedLang(Cookies.get("selectedLang"));
  // }, [Cookies.get("selectedLang")]);

    const { data } = useGetProjectQuery(selectedLang || 'en');

  const theme = useTheme();
  // const { data } = useGetProjectQuery();

  return (
    <div id="projects" className={`${selectedLang === "fa" ? "rtl" : "ltr"}`}>
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin="0 auto"
        paddingX={2}
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
            {t("components.projects.title")}
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
                {console.log(item)}
                {console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")}
                <Grid
                  className={`${
                    selectedLang === "fa" ? "rtl" : "ltr"
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
                  {/* <Rotate bottom> */}
                  {/* <Box
                      component={LazyLoadImage}
                      // effect='blur'
                      src={item.project_main_img?.main_img}
                      sx={{ objectFit: "fitContent", marginTop: "1rem" }}
                    /> */}
                  <Image
                    src={item.project_main_img?.main_img}
                    alt={item.project_main_img?.title}
                    width={200}
                    height={300}
                    className="w-[30%] h-[18rem] rounded-l-[4px]"
                    priority
                  />
                  {/* </Rotate> */}

                  <Box
                    component={Card}
                    width={1}
                    // height="19rem"
                    display="flex"
                    flexDirection="column"
                    sx={{ backgroundColor: "rgb(255 255 255 / 0.3)" }}
                    className="!rounded-l-none !w-[70%]"
                  >
                    <CardContent className="h-[18rem]  ">
                      <div
                        onClick={() => router?.push(`/project/${item?.slug}`)}
                        className=" flex gap-1 items-center align-baseline mb-2 cursor-pointer"
                      >
                        {item.project_main_img?.logo && (
                          // <img
                          //   src={`${item.project_main_img?.logo}`}
                          //   alt="project_icon"
                          //   className="w-8 h-8 mr-4 "
                          // />
                          <Image
                            src={`${item.project_main_img?.logo}`}
                            alt={item.project_main_img?.title}
                            width={100}
                            height={100}
                            className="w-[2rem] h-[2rem]"
                            priority
                          />
                        )}
                        <Typography
                          variant="h6"
                          // gutterBottom
                          align="left"
                          fontWeight={700}
                          className=" self-end"
                        >
                          {item.project_name}
                        </Typography>
                      </div>

                      <Typography
                        className={`${
                          selectedLang === "fa"
                            ? "text-right mr-2"
                            : selectedLang === "fa" && "text-left"
                        }`}
                        variant="subtitle2"
                        color={theme.palette.text.secondary}
                      >
                        {item.short_description}
                      </Typography>

                      <Box
                        marginTop={2}
                        display="flex"
                        justifyContent="space-between"
                      >
                        <Box marginTop={2}>
                          {item.skills_used.map((tag, i) => (
                            <Chip
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
                    {/* <CardActions>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        color={theme.palette.text.secondary}
                      >
                        {item.git && (
                          <div className=" flex items-center gap-1">
                            <ImGithub size={22} />
                            <Button
                              component="a"
                              href={item.git}
                              target="_blank"
                              sx={{
                                textTransform: "none",
                                flex: "0 0 auto",
                                color: theme.palette.text.secondary,
                              }}
                            >
                              Source Code
                            </Button>
                          </div>
                        )}
                      </Box>
                    </CardActions> */}
                  </Box> 
                </Grid>
              </>
            ))}
        </Grid>
      </Box>
      <Divider />
    </div>
  );
};

export default React.memo(Projects);
