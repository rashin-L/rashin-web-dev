"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useGetSkillQuery } from "@/redux/services/skill/skill";
import { useTranslation } from "react-i18next";
import { Zoom, Slide } from "react-awesome-reveal";
import Flip from "react-reveal/Flip";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Technologies = () => {
  const { t } = useTranslation(["translation"]);
  const theme = useTheme();
  const { data: skills } = useGetSkillQuery();
  const swiperRef = useRef(null);

  const [autoplayPaused, setAutoplayPaused] = useState(false);

  const handleMouseEnter = () => {
    setAutoplayPaused(true);
  };

  const handleMouseLeave = () => {
    setAutoplayPaused(false);
  };

  const uniqueSkillGroups = skills?.reduce((acc, skill) => {
    const existingGroup = acc.find(
      (group) => group.title === skill.skill_group?.title
    );
    if (!existingGroup) {
      acc.push({
        title: skill.skill_group?.title,
        skills: [skill],
      });
    } else {
      existingGroup.skills.push(skill);
    }

    return acc;
  }, []);

  return (
    <div dir="ltr" id="technologies">
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin="0 auto"
        paddingX={3}
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
              <Zoom>{t("components.technologies.title")}</Zoom>
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color={theme.palette.text.secondary}
              data-aos="fade-up"
              marginTop={4}
              marginBottom={6}
            >
              {/* Technologies i use to build my products */}
              {t("components.technologies.text")}
            </Typography>
          </Box>
          <div>
            {/* <!-- progress --> */}

            {/* -------------------------------------- */}
            <div className=" hidden md:flex justify-between flex-wrap mb-2 !bg-none py-3">
              <div className="w-full   ">
                <Swiper
                  style={{
                    "--swiper-navigation-color": theme.palette.primary.main,
                    "--swiper-pagination-color": theme.palette.primary.main,
                  }}
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    swiper.autoplay.start();
                  }}
                  onSlideChange={() => {
                    const swiper = swiperRef.current;
                    if (swiper) {
                      if (autoplayPaused) {
                        swiper.autoplay.stop();
                      } else {
                        swiper.autoplay.start();
                      }
                    }
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  <div
                    dir="rtl"
                    className=" m-auto w-full overflow-hidden flex flex-wrap "
                  >
                    {uniqueSkillGroups?.map((group) => (
                      <SwiperSlide key={group.title}>
                        <div
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          key={group.title}
                          className="mb-10 mr-5"
                        >
                          <Typography
                            variant="h4"
                            className=" flex items-center align-middle font-bold mt-5 text-lg text-light-blue dark:text-white"
                          >
                            {group.title}

                            <Image
                              src={`/images/group.svg`}
                              alt="group"
                              width={50}
                              height={40}
                              priority
                            />
                          </Typography>
                          <div className="flex flex-wrap justify-center min-w-[20rem] gap-8">
                            {group.skills?.map((skill) => (
                              <div
                                key={skill.id}
                                className="w-[15rem]   sm:w-[20rem]  "
                              >
                                {/* <p>{skill.title}</p> */}
                                <div className="  flex justify-between items-center align-middle mt-2 ">
                                  <Image
                                    alt="skill-icon"
                                    width={40}
                                    height={40}
                                    className=" w-8 h-8 mr-4 "
                                    src={`${skill.icon}`}
                                  />
                                  <div className="w-full">
                                    <div className=" mb-[1.4rem]">
                                      <div className="flex justify-between mb-1">
                                        <Typography
                                          color={theme.palette.text.secondary}
                                          className="skill_percent_text text-sm font-bold "
                                        >
                                          {skill.percent}%
                                        </Typography>
                                        <span className="text-base font-medium ml-2 dark:text-white">
                                          {skill.title}
                                        </span>
                                      </div>
                                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-white">
                                        {/* <Flip left > */}
                                        <Box
                                          sx={{
                                            backgroundColor:
                                              theme.palette.primary.main,
                                          }}
                                          className=" overflow-hidden skill_box skill_percent_fill  dark:bg-dark-blue h-2.5 rounded-full"
                                          style={{
                                            width: `${skill.percent}%`,
                                          }}
                                        ></Box>
                                        {/* </Flip> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="md:hidden">
              <Swiper
                style={{
                  "--swiper-navigation-color": theme.palette.primary.main,
                  "--swiper-pagination-color": theme.palette.primary.main,
                }}
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <div
                  dir="rtl"
                  className="  w-full overflow-hidden flex flex-wrap justify-center items-center "
                >
                  {uniqueSkillGroups?.map((group) => (
                    <SwiperSlide key={group.title}>
                      <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        key={group.title}
                        className="mb-10 mr-5"
                      >
                        <Typography
                          variant="h4"
                          className=" flex items-center align-middle font-bold mt-5 text-lg text-light-blue dark:text-white"
                        >
                          {group.title}

                          <Image
                            width={40}
                            height={40}
                            src={`/images/group.svg`}
                            alt="group"
                            priority
                          />
                        </Typography>
                        <div className="flex flex-wrap justify-center min-w-[20rem] gap-8">
                          {group.skills?.map((skill) => (
                            <div
                              key={skill.id}
                              className="w-[15rem]   sm:w-[20rem]  "
                            >
                              {/* <p>{skill.title}</p> */}
                              <div className="  flex justify-between items-center align-middle mt-2 ">
                                <Image
                                  alt="skill-icon"
                                  width={40}
                                  height={40}
                                  className=" w-8 h-8 mr-4 "
                                  src={`${skill.icon}`}
                                />
                                <div className="w-full">
                                  <div className=" mb-[1.4rem]">
                                    <div className="flex justify-between mb-1">
                                      <Typography
                                        color={theme.palette.text.secondary}
                                        className="skill_percent_text text-sm font-bold "
                                      >
                                        {skill.percent}%
                                      </Typography>
                                      <span className="text-base font-medium ml-2 dark:text-white">
                                        {skill.title}
                                      </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-white">
                                      {/* <Flip left cascade> */}
                                      <Box
                                        sx={{
                                          backgroundColor:
                                            theme.palette.primary.main,
                                        }}
                                        className=" overflow-hidden skill_box skill_percent_fill  dark:bg-dark-blue h-2.5 rounded-full"
                                        style={{
                                          width: `${skill.percent}%`,
                                        }}
                                      ></Box>
                                      {/* </Flip> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  {/* Make sure to pass the teacher object as a prop */}
                </div>
              </Swiper>
            </div>
          </div>
        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default React.memo(Technologies);
