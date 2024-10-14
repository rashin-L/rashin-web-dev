import ProjectDetail from "@/components/ProjectDetail";
// import { useGetSlugProjectQuery } from "@/redux/services/project/project";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const page = ({ params }) => {
   
  const slug  = params ? params.slug : 'en';
  return <ProjectDetail slug={slug} />;
};
export default  page ;



export async function generateMetadata({ params }) {
  // const { data: projectData } = useGetSlugProjectQuery(params.slug);
  
  return {
    generator: "Next.js",
    applicationName: "Rashin WebDev",
    referrer: "origin-when-cross-origin",
    keywords: [
      "Next.js",
      "React",
      "Front-end Developer",
      "Back-end Developer",
      "django",
      "Senior Fullstack Developer",
    ],
    authors: [
      { name: "Rashin Latify" },
      { name: "Rashin Latify", url: "https://www.rashin-web-dev.com/" },
    ],
    creator: "Rashin Latify",
    publisher: "Rashin Latify",
    robots: {
      index: true,
      follow: true,
    },
    // title: params ? params.slug | "Rashin WebDev" : "Rashin WebDev",
    title: params ? params.slug : "Rashin WebDev",

    description:
      "Looking for a talented Senior Fullstack Developer?  I have 4 years of experience building scalable web applications.  Contact me to learn more!",

    // description: projectData[0] && projectData[0]?.short_description,
  };
}

