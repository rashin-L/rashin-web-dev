import React from "react";
import LandingPage from "../components/LandingPage";
// import { useSeoInfoQuery } from "@/redux/services/main/seo";
// import dynamic from 'next/dynamic';
// const seoInfo = dynamic(() => import('@/redux/services/main/seo'), {
//   ssr: false,
// });

// const { data: seoData, isLoading, error } = useSeoInfoQuery(); 
// console.log(seoData)

export async function generateMetadata() {

  let metaData = await getMetadata();
  return metaData;
}
const getMetadata = async ()=>{
    const res = await fetch("https://api.rashin-web-dev.com/seo");
    if (res.ok) {
        const data = await res.json();
        return {
          generator: data[0].generator,
          applicationName: data[0].applicationName,
            title:data[0].applicationName,
            referrer: 'origin-when-cross-origin',
            // description:data.desc,
            // alternates: {
            //   canonical: 'https://code.nkslearning.com'+data.path
            // },
            // openGraph: {
            //   title: data.title,
            //   description: data.desc,
            //   url: 'https://code.nkslearning.com'+data.path,
            //   siteName: 'NKS CODING LEARNINGS',
            //   images: [{url: data.img}],
            //   type: 'article',
            //   publishedTime:data.publishedTime,
            //   authors:["NITISH KUMAR SINGH"]
            // }
        };
    }else{
        // return default metadata or {} if default metadata exported from layout file
        return {};
    }
}


// export const metadata = {
//   generator: seoData.generator,
//   applicationName: seoData.applicationName,
//   referrer: 'origin-when-cross-origin',
//   keywords: ['Next.js', 'React', 'Front-end Developer', 'Back-end Developer', 'django', 'Senior Fullstack Developer'],
//   authors: [{ name: 'Rashin Latify' }, { name: 'Rashin Latify', url: 'https://www.rashin-web-dev.com/' }],
//   creator: 'Rashin Latify',
//   publisher: 'Rashin Latify',
//   robots: {
//     index: true,
//     follow: true,
//   },
//   title: "Rashin WebDev",
//   description: "Experienced Fullstack Developer with a proven track record of delivering complex web projects.  Proficient in React.js, Next.js, Python, and Django REST Framework.  Let's build something amazing together! ",
// };


export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
const page = () => {
  return <LandingPage />;
};

export default page;

