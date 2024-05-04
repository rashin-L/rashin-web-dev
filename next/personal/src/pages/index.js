import React from 'react';
import "../globals.css"
import '../../i18n'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, [
//         <>
//           <PortfolioImage />
//           <Hero />
//           <About />
//           <Projects />
//           <Technologies />
//           <Contact />
//         </>

//       ])),
//       // Will be passed to the page component as props
//     },
//   }
// }

import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import PortfolioImage from '@/components/PortfolioImage';

const Home = () => {
  return (
    // <LanguageProvider>
    <div id='home' className=' font-Barlow-Regular'>
      <PortfolioImage />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </div>
    // </LanguageProvider>
  );
};

export default Home;
