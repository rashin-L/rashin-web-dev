import React, { Component } from "react";
import Image from 'next/image';
import { useGetProjectQuery } from '@/redux/services/project/project';
// import { useParams } from 'react-router-dom';
import { useRouter } from 'next/router';
import Header from '@/layout/Header';

import Footer from '@/layout/Footer';
import "../../globals.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SendTimeExtensionRoundedIcon from '@mui/icons-material/SendTimeExtensionRounded';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { ImGithub } from "react-icons/im";
import Link from "next/link";
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { PiCheckBold } from "react-icons/pi";
import Typography from '@mui/material/Typography';




function ProjectDetail({ projects }) {
    const theme = useTheme();
    const router = useRouter();
    const { id } = router.query;
    // const { data } = useGetProjectQuery();
    // let project = [];
    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear"
    // };

    // if (data) {
    //     project = data.filter(project_f => project_f.id === Number(id));
    // }


    // console.log(id)
    // console.log(data)
    // console.log(project)
    // if (!project) {
    //     // Handle the case when project is undefined
    //     return <div>Loading...</div>;
    // }
    const project = projects.filter(project_f => project_f.id === Number(id));




    return (

        <div className=" max-w-[90%]  mx-auto mt-14 ">
            <div className="flex justify-between flex-wrap align-baseline " >
                <div className=" w-[50rem] h-auto overflow-visible">
                    <Link legacyBehavior href={`${project[0]?.link}`}>
                        <a target="_blank">
                            <Bounce left >
                                <Box className="block mb-3 "
                                >

                                    {/* {{project_info.project_name}} */}
                                    <div className=' flex gap-1 items-center align-baseline mb-2' >
                                        {project[0]?.icon &&
                                            <img src={`${project[0]?.icon}`} alt='project_icon' className='w-8 h-8 mr-4 ' />
                                        }
                                        <Typography
                                            variant='h6'
                                            // gutterBottom
                                            align='left'
                                            fontWeight={700}
                                            className=' self-end'
                                        >
                                            {project[0]?.project_name}
                                        </Typography>
                                    </div>
                                    <Box
                                        sx={{
                                            color: theme.palette.primary.main,
                                        }} className=" flex flex-wrap gap-1 items-center align-bottom">
                                        {/* <ImGithub size={22} /> */}
                                        <h4 className=" font-medium text-lg inline">{project[0]?.link}</h4>
                                    </Box>
                                </Box>
                            </Bounce>
                        </a>
                    </Link>

                    <div className=" mt-6 w-full  child: font-OpenSansSemiBold text-light-blue dark:text-white">

                        <div className="flex flex-wrap items-baseline mb-3 font-bold text-xl ">
                            {/* {{project_info.project_type}} */}
                            {project[0]?.project_type}
                            |
                            <span className="inline mb-3 text-xs">
                                {/* {{project_info.start_date}} - {{project_info.end_date}} */}
                                {project[0]?.start_date}-{project[0]?.end_date}
                            </span>
                        </div>

                        <Flip left cascade>
                            <div className='flex flex-wrap justify-start gap-1 items-end mt-4 mb-11'>
                                {/* {% for skill in project_info.skills_used.all %}   */}
                                {project[0]?.skills_used?.map((skill) => (
                                    <Box
                                        sx={{
                                            borderColor: theme.palette.primary.main,
                                        }}
                                        key={skill.id} className="animate__animated skill_used flex justify-start gap-1 items-end border-r-2 p-2  ">
                                        <h3 className="font-OpenSansSemiBold text-light-blue  dark:text-white">{skill.title}</h3>
                                    </Box>
                                ))}

                                {/* {% endfor %} */}
                            </div>
                        </Flip>
                        <div className="block mb-3 ">
                            {/* {{project_info.project_name}} */}
                            <div className=" flex flex-wrap gap-1 items-center align-bottom">
                                <h4 className=" font-bold inline">{project[0]?.project_name}</h4>
                                |
                                <span className="inline  text-xs">
                                    {/* {{project_info.short_description}}  */}
                                    {project[0]?.short_description}
                                </span>
                            </div>
                        </div>
                        {project[0]?.git &&
                            <Link legacyBehavior href={`${project[0]?.git}`}>
                                <a target="_blank">
                                    <div className="block mb-3 ">
                                        {/* {{project_info.project_name}} */}
                                        <div className=" flex flex-wrap gap-1 items-center align-bottom">
                                            <ImGithub size={22} />
                                            <h4 className=" font-bold inline">Source Code</h4>

                                        </div>
                                    </div>
                                </a>
                            </Link>
                        }
                        {/* {% if project.link %} */}
                        {/* <a href="{{project.link}}">{{ project.link }}</a> */}
                        {/* <a href={`${project[0]?.link}`}>{project[0]?.link}</a> */}
                        {/* {% endif %}      */}
                        {/* {% if project.team_size|length > 0 %} */}
                        {/* <p className="">
                            <span className="">team size :</span>
                            {project[0]?.team_size}
                        </p> */}
                        {/* {% endif %} */}
                        <div className=" flex flex-wrap gap-3 justify-between">
                            <div className="md:mb-24 flex flex-col gap-2 min-w-[15rem] md:min-w-[25rem] lg:min-w-[30rem] items-start justify-center ">
                                <h5 className=" font-bold mt-5 text-lg  mb-1">
                                    Outcomes achieved
                                </h5>
                                {/* {% for outcome in project_info.outcomes_achieved.all %}  */}
                                <Bounce left cascade>
                                    <div className=" w-full">

                                        {project[0]?.outcomes_achieved?.map((item) => (
                                            <Box
                                                sx={{
                                                    // color: theme.palette.primary.main,
                                                    backgroundColor: 'rgb(255 255 255 / 0.3)'
                                                }}
                                                key={item?.id} className=" mb-1 flex rounded-lg  w-full h-12 flex-none  shadow p-3 gap-2 items-center">

                                                <div className="col-span-12 md:col-span-1 ">
                                                    <PiCheckBold />

                                                    {/* <svg fill="#3c6071" width="64px" height="64px" viewBox="-8 -8 32.00 32.00" id="clalendar-check-16px" xmlns="http://www.w3.org/2000/svg" stroke="#3c6071" stroke-width="0.32"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_156" data-name="Path 156" d="M38.5,1H38V.5a.5.5,0,0,0-1,0V1H29V.5a.5.5,0,0,0-1,0V1h-.5A2.5,2.5,0,0,0,25,3.5v10A2.5,2.5,0,0,0,27.5,16h11A2.5,2.5,0,0,0,41,13.5V3.5A2.5,2.5,0,0,0,38.5,1Zm0,1a1.5,1.5,0,0,1,1.408,1H38V2ZM37,2V3H29V2ZM27.5,2H28V3H26.092A1.5,1.5,0,0,1,27.5,2Zm11,13h-11A1.5,1.5,0,0,1,26,13.5V4H40v9.5A1.5,1.5,0,0,1,38.5,15Zm-.646-8.854a.5.5,0,0,1,0,.708l-6,6a.5.5,0,0,1-.708,0l-3-3a.5.5,0,0,1,.708-.708L31.5,11.793l5.646-5.647A.5.5,0,0,1,37.854,6.146Z" transform="translate(-25)"></path> </g></svg> */}
                                                </div>

                                                <div className="col-span-11 ">
                                                    {/* <p className="font-OpenSansSemiBold text-light-blue   break-before-auto ">{{outcome.description}}</p> */}
                                                    <div

                                                        className="   break-before-auto ">{item?.description}
                                                    </div>
                                                </div>

                                            </Box>
                                        ))}

                                    </div>
                                </Bounce>


                                {/* {% endfor %}  */}
                            </div>
                            <Bounce top cascade>
                                <div className="mb-44  mt-4 leading-10">
                                    <span className=" text-lg font-bold mt-4">My function in the project</span>
                                    {/* <span className="  block text-justify ">{{ project_info.your_role_project.all | join:" و "}}</span> */}
                                    {project[0]?.your_role_project.map((role) => (
                                        <div className=" flex items-center">
                                            <LabelImportantIcon />
                                            <span key={role?.id} className="block text-justify">{role.description}</span>
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
    );
}
// export async function getStaticPaths() {
//     console.log( useGetProjectQuery())
//     const { data } =  useGetProjectQuery();

//     // Generate the paths for all project IDs
//     const paths = data.map(project => ({
//         params: { id: project.id.toString() },
//     }));

//     return {
//         paths,
//         fallback: false, // Set it to true if you have more dynamic paths to handle
//     };
// }

// export async function getStaticProps({ params }) {
//     const { id } = params;

//     // Fetch the project data using the RTK Query
//     const { data } =  useGetProjectQuery();

//     // Filter the project data based on the ID
//     const project = data.filter(project_f => project_f.id === Number(id));

//     return {
//         props: {
//             project,
//         },
//     };
// }




export default ProjectDetail;
import axios from 'axios';

export async function getServerSideProps() {
    try {
        const response = await axios.get('http://127.0.0.1:8000/project/projects');

        if (response.status === 200) {
            const data = response.data;
            console.log('datasss');
            console.log(data);
            console.log('datahhh');

            return {
                props: {
                    projects: data
                }
            };
        } else {
            console.log('Response is not successful');
            return {
                props: {
                    projects: []
                }
            };
        }
    } catch (error) {
        console.log('Error occurred while fetching data:', error);
        return {
            props: {
                projects: []
            }
        };
    }
}