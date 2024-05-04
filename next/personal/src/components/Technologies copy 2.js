import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useGetSkillQuery } from '@/redux/services/skill/skill';

const Technologies = () => {
  const theme = useTheme();

  const { skill } = useGetSkillQuery();
  console.log(skill);


  // const fetchTechnologies = () => {
  //   axios
  //     .get('/technologies', {
  //       headers: {
  //         Accept: 'application/json',
  //         'Access-Control-Allow-Origin': process.env.BACKEND_URL,
  //       },
  //     })
  //     .then((response) => {
  //       setTechnologies(response.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   fetchTechnologies();
  // }, []);

  return (

    <div id='technologies'>
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin='0 auto'
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box>
          <Box marginBottom={4}>
            <Typography
              variant='h3'
              align='center'
              fontWeight={700}
              marginTop={theme.spacing(1)}
              data-aos='fade-up'
              gutterBottom
            >
              Technologies
            </Typography>
            <Typography
              variant='h6'
              align='center'
              color={theme.palette.text.secondary}
              data-aos='fade-up'
              marginTop={4}
              marginBottom={6}
            >
              Technologies we use to build our products
            </Typography>
          </Box>
          <div className=" pb-32">
            {/* <!-- progress --> */}
            <div>
              <div className=" flex justify-between  flex-wrap ">
                {/* {% for group in skillGroup_info %} */}
                <div className=" w-full sm:w-[40%]">
                  {skill?.skill_group?.map((group) => (
                    <>
                      <h5 classNameName="font-RobotoBold mt-5 text-lg text-light-blue dark:text-white">
                        {group.title}
                      </h5>

                      {data && data?.map((skill) => {
                        if (skill.skill_group_id === group.id) {
                          return (
                            <>
                              <div className='flex justify-between items-end mt-2'>
                                <div className=''>
                                  <i className="fa-lg  {{skill.icon.style}} fa-{{skill.icon.icon}}"
                                    style="color: #2563eb;"></i>
                                </div>
                                <div className='  w-[95%]'>
                                  <div className="">

                                    <div className="flex justify-between mb-1">

                                      <span className="text-base font-medium text-blue-700 dark:text-white">{ skill.title }</span>
                                      <span className="skill_percent_text text-sm font-medium text-blue-700 dark:text-white">{ skill.percent }%</span>
                                    </div>
                                    <div className=" w-full bg-gray-200 rounded-full h-2.5 dark:bg-white">
                                      <div data-to="{{skill.percent}}" className="animate__animated skill_box skill_percent_fill bg-blue-600 dark:bg-dark-blue h-2.5 rounded-full" style="width: {{skill.percent}}%"></div>
                                    </div>

                                  </div>

                                </div>
                              </div>
                            </>
                          );
                        }
                      })}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
      <Divider />
    </div>

  );
};

export default Technologies;
