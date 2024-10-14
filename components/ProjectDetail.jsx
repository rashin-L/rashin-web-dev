"use client";
import React from "react";
import { useRouter } from "next/navigation";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { ImGithub } from "react-icons/im";
import Link from "next/link";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { PiCheckBold } from "react-icons/pi";
import Typography from "@mui/material/Typography";
// import config from "../../../config";
import Logo from "@/layout/Logo";
import PortfolioImage from "@/components/PortfolioImage";
import Light from "@/layout/Light";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useGetSlugProjectQuery } from "@/redux/services/project/project";

const ProjectDetail = ({ slug }) => {
  // const params = useParams();
  // const { data: projectData } = useGetSlugProjectQuery("personal-web-fa");
  const { data: projectData } = useGetSlugProjectQuery(slug);
  //   const projectData = project[0];
  // console.log(projectData);
  // const[project, setProject] = useState(projects?.filter(project_f => project_f?.slug === 'personal-web-fa'))
  // const { projects, myDate } = slugProject()
  // const [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //     setIsClient(true)
  // }, [])

  const { t } = useTranslation(["translation"]);
  const selectedLang = Cookies.get("selectedLang");
  const theme = useTheme();
  const router = useRouter();
  // const { slug } = navigation.router.query;
  // setProject(projects?.filter(project_f => project_f.slug === 'personal-web-fa'));
  // const project = projects.filter(project_f => project_f.slug === slug);

  return (
    <>
      <div className={`max-w-[90%]   flex justify-between `}>
        {/* <div  className={`max-w-[90%]   flex justify-between ${selectedLang === "fa" ||
        selectedLang === "ar"}`}></div> */}
        <div className=" ml-4 sm:ml-10 z-[99]">
          <Logo />
        </div>
        <div>
          <div className=" z-[99] absolute right-0 ">
            <Light />
          </div>
          <div className=" z-10 ">
            <PortfolioImage />
          </div>
        </div>
      </div>
      {projectData && projectData.length > 0 && (
        <div
          className={`max-w-[90%]  mx-auto mt-[18rem] md:mt-14 ${
            selectedLang === "fa" || selectedLang === "ar"
              ? "text-right mr-2 text-rtl md:mr-[50%] md:ml-8 sm:mt-[26rem]"
              : selectedLang === "en" && "text-left ltr "
          }`}
        >
          <div className="flex justify-between flex-wrap align-baseline ">
            <div className=" w-[50rem] h-auto overflow-visible">
              <Link
                legacyBehavior
                passHref
                href={`${projectData[0] && projectData[0]?.link}`}
              >
                <a target="_blank">
                  <Bounce left>
                    <div className="block mb-3 ">
                      <div className=" flex gap-1 items-center align-baseline mb-2">
                        {projectData[0] &&
                          projectData[0]?.project_main_img?.logo && (
                            <Link
                              passHref
                              legacyBehavior
                              align="right"
                              href={projectData[0] && projectData[0]?.link}
                            >
                              <a target="_blank">
                                <Image
                                  width={300}
                                  height={100}
                                  src={`${
                                    projectData[0] &&
                                    projectData[0]?.project_main_img?.logo
                                  }`}
                                  alt="project_icon"
                                  className="w-auto h-8  "
                                />
                              </a>
                            </Link>
                          )}
                        {/* <Typography
                          variant="h6"
                          align="left"
                          fontWeight={700}
                          className=" self-end"
                        >
                          {projectData[0] && projectData[0]?.project_name}
                        </Typography> */}
                      </div>
                      {/* <Box
                        sx={{
                          color: theme.palette.primary.main,
                        }}
                        className=" flex flex-wrap gap-1 items-center align-bottom"
                      >
                        <h4 className=" font-medium text-lg inline">
                          {projectData[0] && projectData[0]?.link}
                        </h4>
                      </Box> */}
                    </div>
                  </Bounce>
                </a>
              </Link>

              <div className=" mt-6 w-full  child: font-OpenSansSemiBold text-light-blue dark:text-white">
                <div className="flex flex-wrap  font-bold text-xl gap-1 items-baseline align-bottom">
                  {projectData[0] && projectData[0]?.project_type} |
                  <span className="inline  text-xs">
                    {/* {selectedLang === "fa" && isClient */}
                    {/* {selectedLang === "fa" 
                      ? `${myDate}`
                      : `${projectData[0] && projectData[0]?.start_date} - ${
                          projectData[0] && projectData[0]?.end_date
                        }`} */}
                    {` ${projectData[0] && projectData[0]?.start_date} - ${
                      projectData[0] && projectData[0]?.end_date
                    }`}
                  </span>
                </div>

                <Flip left cascade>
                  <div className="flex flex-wrap justify-start gap-1 items-end mt-4 mb-11">
                    {projectData[0] &&
                      projectData[0]?.skills_used?.map((skill) => (
                        <Box
                          sx={{
                            borderColor: theme.palette.primary.main,
                          }}
                          key={skill.id}
                          className="animate__animated skill_used flex justify-start gap-1 items-end border-r-2 p-2  "
                        >
                          <h3 className="font-OpenSansSemiBold text-light-blue  dark:text-white">
                            {skill.title}
                          </h3>
                        </Box>
                      ))}
                  </div>
                </Flip>
                <div className="block mb-3 ">
                  {/* {{project_info.project_name}} */}
                  <div className=" flex flex-wrap gap-1 items-center align-bottom">
                    <Typography fontWeight={700} className=" font-bold inline">
                      {projectData[0] && projectData[0]?.project_name}
                    </Typography>
                    |
                    <span className="inline  text-xs">
                      {/* {{project_info.short_description}}  */}
                      {projectData[0] && projectData[0]?.short_description}
                    </span>
                  </div>
                  {projectData[0] && projectData[0].description && (
                    <Typography
                      fontWeight={700}
                      className={`${
                        selectedLang === "fa" || selectedLang === "ar"
                          ? "text-right mr-2 text-rtl"
                          : selectedLang === "en" && "text-left ltr"
                      } drop-shadow-2xl mt-2`}
                      color={theme.palette.text.secondary}
                    >
                      {projectData[0] && projectData[0].description}
                    </Typography>
                  )}
                </div>
                {projectData[0] && projectData[0]?.git && (
                  <Link
                    legacyBehavior
                    href={`${projectData[0] && projectData[0]?.git}`}
                  >
                    <a target="_blank">
                      <div className="block mb-3 ">
                        {/* {{project_info.project_name}} */}
                        <div className=" flex flex-wrap gap-1 items-center align-bottom">
                          <ImGithub size={22} />
                          {/* Source Code */}
                          <h4 className=" font-bold inline">
                            {t("components.project.git")}
                          </h4>
                        </div>
                      </div>
                    </a>
                  </Link>
                )}
                <div className=" flex flex-wrap gap-3 justify-between">
                  {projectData[0] &&
                    (projectData[0]?.outcomes_achieved).length > 0 && (
                      <div className="md:mb-24 flex flex-col gap-2 min-w-[15rem] md:min-w-[25rem] lg:min-w-[30rem] items-start justify-center ">
                        <h5 className=" font-bold mt-5 text-lg  mb-1">
                          {t("components.project.achieved")}
                        </h5>
                        <Bounce left cascade>
                          <div className=" w-full">
                            {projectData[0] &&
                              projectData[0]?.outcomes_achieved?.map((item) => (
                                <Box
                                  sx={{
                                    // color: theme.palette.primary.main,
                                    backgroundColor: "rgb(255 255 255 / 0.3)",
                                  }}
                                  key={item?.id}
                                  className=" mb-1 flex rounded-lg  w-full h-12 flex-none  shadow p-3 gap-2 items-center"
                                >
                                  <div className="col-span-12 md:col-span-1 ">
                                    <PiCheckBold />

                                    {/* <svg fill="#3c6071" width="64px" height="64px" viewBox="-8 -8 32.00 32.00" id="clalendar-check-16px" xmlns="http://www.w3.org/2000/svg" stroke="#3c6071" stroke-width="0.32"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_156" data-name="Path 156" d="M38.5,1H38V.5a.5.5,0,0,0-1,0V1H29V.5a.5.5,0,0,0-1,0V1h-.5A2.5,2.5,0,0,0,25,3.5v10A2.5,2.5,0,0,0,27.5,16h11A2.5,2.5,0,0,0,41,13.5V3.5A2.5,2.5,0,0,0,38.5,1Zm0,1a1.5,1.5,0,0,1,1.408,1H38V2ZM37,2V3H29V2ZM27.5,2H28V3H26.092A1.5,1.5,0,0,1,27.5,2Zm11,13h-11A1.5,1.5,0,0,1,26,13.5V4H40v9.5A1.5,1.5,0,0,1,38.5,15Zm-.646-8.854a.5.5,0,0,1,0,.708l-6,6a.5.5,0,0,1-.708,0l-3-3a.5.5,0,0,1,.708-.708L31.5,11.793l5.646-5.647A.5.5,0,0,1,37.854,6.146Z" transform="translate(-25)"></path> </g></svg> */}
                                  </div>

                                  <div className="col-span-11 ">
                                    {/* <p className="font-OpenSansSemiBold text-light-blue   break-before-auto ">{{outcome.description}}</p> */}
                                    <div className="   break-before-auto ">
                                      {item?.description}
                                    </div>
                                  </div>
                                </Box>
                              ))}
                          </div>
                        </Bounce>

                        {/* {% endfor %}  */}
                      </div>
                    )}

                  <Bounce top cascade>
                    <div className="mb-44  mt-4 leading-10">
                      <span className=" text-lg font-bold mt-4">
                        {t("components.project.function")}
                      </span>
                      {/* <span className="  block text-justify ">{{ project_info.your_role_project.all | join:" و "}}</span> */}
                      {projectData[0] &&
                        projectData[0]?.your_role_project.map((role) => (
                          <div className=" flex items-center">
                            <LabelImportantIcon
                              color={`${theme.palette.primary.main}`}
                            />
                            <span key={role?.id} className="block text-justify">
                              {role.description}
                            </span>
                          </div>
                        ))}
                    </div>
                  </Bounce>
                </div>
              </div>
            </div>
          </div>

          {/* {% if project_info.outcomes_achieved.all|length > 0 %} */}

          {/* {% endif %} */}
        </div>
      )}
    </>
  );
};
export default React.memo(ProjectDetail);
