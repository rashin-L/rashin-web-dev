import React from 'react';
import Image from 'next/image';
import { useGetProjectQuery } from '@/redux/services/project/project';
// import { useParams } from 'react-router-dom';
import { useRouter } from 'next/router';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

function ProjectDetail() {
    const router = useRouter();
    const { id } = router.query;
    const { data } = useGetProjectQuery();
    const project = data?.filter((project_f) => project_f.id === id);

    if (!project) {
        // Handle the case when project is undefined
        return <div>Loading...</div>;
    }


    return (
        <div>
            <Header />
            <div className=" max-w-[90%]  mx-auto mt-14">
                <div className="flex justify-between flex-wrap align-baseline " >
                    <div className="grid grid-rows-1 owl-carousel owl-theme w-[600px] h-auto overflow-visible">
                        <Image width="2rem" height="1rem" className="item scale-100 hover:scale-125 ease-in duration-500 
            w-full sm:w-[50%] "
                            // src={data} alt="{{project_info.project_name}}" />
                            src={data} alt="jjjjjjjjjjjj" />
                        {/* {% for img in img_list %} */}

                        {/* <Image className="item scale-100 hover:scale-125 ease-in duration-500 w-full sm:w-[50%]"
                        src="{% static img %} " alt="" /> */}

                        {/* {% endfor %} */}

                    </div>

                    <div className="w-full md:w-[40%] child: font-OpenSansSemiBold text-light-blue  dark:text-white ">
                        <p className=" inline mb-3 font-OpenSansBold text-2xl text-blue-500 dark:text-dark-blue">
                            {/* {{project_info.project_type}} */}
                            ddtttttt
                            |
                            <p className="inline mb-3 text-xs  ">
                                {/* {{project_info.start_date}} - {{project_info.end_date}} */}
                                nnnnnnnn
                            </p>
                        </p>
                        <p className=" inline mb-3   ">
                            {/* {{project_info.project_name}} */}
                            dddddddddd
                            |
                            <p className="inline mb-3 text-xs  ">
                                {/* {{project_info.short_description}}  */}
                                rrrrr
                            </p>
                        </p>
                        {/* {% if project.link %} */}
                        {/* <a href="{{project.link}}">{{ project.link }}</a> */}
                        <a href="{{project.link}}">llllllllll</a>
                        {/* {% endif %}      */}
                        {/* {% if project.team_size|length > 0 %} */}
                        <p className="  ">
                            <span className="">team size :</span>
                            {/* {{project.team_size}} */}
                            bbbb
                        </p>
                        {/* {% endif %} */}
                        <p className="mb-3 mt-4">
                            <span className="font-OpenSansBold  mt-4 ">My function in the project</span>
                            {/* <span className="  block text-justify ">{{ project_info.your_role_project.all | join:" و "}}</span> */}
                            <span className="  block text-justify ">vvvvv</span>
                        </p>





                    </div>
                </div>


                <div className='flex justify-start gap-5 items-end mt-4 mb-11'>
                    {/* {% for skill in project_info.skills_used.all %}   */}
                    <div className="animate__animated skill_used flex justify-start gap-1 items-end border-r-2 p-2 border-blue-500 dark:border-dark-blue">
                        {/* {% if is_dark_theme %} */}
                        <div className=''>
                            <i className="fa-lg  {{skill.icon.style}} fa-{{skill.icon.icon}}"
                                style="color: #47D8E1;"></i>
                        </div>
                        {/* {% else %} */}
                        <div className=''>
                            <i className="fa-lg  {{skill.icon.style}} fa-{{skill.icon.icon}}"
                                style="color: #2563eb;"></i>
                        </div>
                        {/* {% endif %}  */}
                        {/* <h3 className="font-OpenSansSemiBold text-light-blue  dark:text-white">{{ skill.title }}</h3> */}
                        <h3 className="font-OpenSansSemiBold text-light-blue  dark:text-white">rrrrrr</h3>
                    </div>
                    {/* {% endfor %} */}
                </div>

                <div className="flex justify-between  items-baseline gap-2 flex-wrap " >
                    {/* {% if  project_info.objective.all|length > 0 %} */}
                    <div className=" flex flex-col gap-2 w-[38rem]  items-start justify-center ">
                        <h5 className=" font-RobotoBold mt-5 text-lg text-light-blue dark:text-white mb-3">
                            Objective
                        </h5>
                        {/* {% for objective in project_info.objective.all %} */}
                        <div className="flex rounded-lg w-full h-20 flex-none bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform">

                            <div className="col-span-12 md:col-span-1 ">

                                <svg fill="#3c6071" width="64px" height="64px" viewBox="-9.6 -9.6 35.20 35.20" id="calendar-add-16px" xmlns="http://www.w3.org/2000/svg" stroke="#3c6071" stroke-width="0.32"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_158" data-name="Path 158" d="M-12.5,1H-13V.5a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5V1h-8V.5a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5V1h-.5A2.5,2.5,0,0,0-26,3.5v10A2.5,2.5,0,0,0-23.5,16h11A2.5,2.5,0,0,0-10,13.5V3.5A2.5,2.5,0,0,0-12.5,1Zm0,1a1.5,1.5,0,0,1,1.408,1H-13V2ZM-14,2V3h-8V2Zm-9.5,0h.5V3h-1.908A1.5,1.5,0,0,1-23.5,2Zm11,13h-11A1.5,1.5,0,0,1-25,13.5V4h14v9.5A1.5,1.5,0,0,1-12.5,15ZM-14,9.5a.5.5,0,0,1-.5.5h-3v3a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V10h-3a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h3V6a.5.5,0,0,1,.5-.5.5.5,0,0,1,.5.5V9h3A.5.5,0,0,1-14,9.5Z" transform="translate(26)"></path> </g></svg>
                            </div>

                            <div className="col-span-11 ">
                                {/* <p className="font-OpenSansSemiBold text-light-blue  ">{{objective.description}}</p> */}
                                <p className="font-OpenSansSemiBold text-light-blue  ">ggggg</p>
                            </div>

                        </div>
                        {/* {% endfor %}  */}
                    </div>
                    {/* {% endif %} */}
                    {/* {% if project_info.outcomes_achieved.all|length > 0 %} */}
                    <div className=" flex flex-col gap-2 w-[38rem] items-start justify-center ">
                        <h5 className=" font-RobotoBold mt-5 text-lg text-light-blue dark:text-white mb-3">
                            Outcomes achieved
                        </h5>
                        {/* {% for outcome in project_info.outcomes_achieved.all %}  */}
                        <div className="flex rounded-lg  w-full h-20 flex-none bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform">

                            <div className="col-span-12 md:col-span-1 ">

                                <svg fill="#3c6071" width="64px" height="64px" viewBox="-8 -8 32.00 32.00" id="clalendar-check-16px" xmlns="http://www.w3.org/2000/svg" stroke="#3c6071" stroke-width="0.32"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_156" data-name="Path 156" d="M38.5,1H38V.5a.5.5,0,0,0-1,0V1H29V.5a.5.5,0,0,0-1,0V1h-.5A2.5,2.5,0,0,0,25,3.5v10A2.5,2.5,0,0,0,27.5,16h11A2.5,2.5,0,0,0,41,13.5V3.5A2.5,2.5,0,0,0,38.5,1Zm0,1a1.5,1.5,0,0,1,1.408,1H38V2ZM37,2V3H29V2ZM27.5,2H28V3H26.092A1.5,1.5,0,0,1,27.5,2Zm11,13h-11A1.5,1.5,0,0,1,26,13.5V4H40v9.5A1.5,1.5,0,0,1,38.5,15Zm-.646-8.854a.5.5,0,0,1,0,.708l-6,6a.5.5,0,0,1-.708,0l-3-3a.5.5,0,0,1,.708-.708L31.5,11.793l5.646-5.647A.5.5,0,0,1,37.854,6.146Z" transform="translate(-25)"></path> </g></svg>
                            </div>

                            <div className="col-span-11 ">
                                {/* <p className="font-OpenSansSemiBold text-light-blue   break-before-auto ">{{outcome.description}}</p> */}
                                <p className="font-OpenSansSemiBold text-light-blue   break-before-auto ">jjj</p>
                            </div>

                        </div>
                        {/* {% endfor %}  */}
                    </div>
                    {/* {% endif %} */}
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default ProjectDetail;