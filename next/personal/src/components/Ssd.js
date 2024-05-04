import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HeroButtons from './HeroButtons';
import { useGetInfoQuery } from '@/redux/services/main/about';
import LightSpeed from 'react-reveal/LightSpeed'

export async function getServerSideProps() {
  const api = createApi(); // Instantiate your API client
  const { data } = await api.endpoints.useGetInfoQuery(); // Fetch data using RTK Query
  console.log({ data });
  console.log('************');
  return {
    props: {
      posts: data,
    },
  };
}

const Hero = ({ posts }) => {
  console.log(posts);
  console.log('************');


  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });


  return (
    <div id='home'>
      <Box sx={{ width: 1, height: 1 }} >
        <Container padding={0} maxWidth='100%'>
          <Box
            display='flex'
            flexDirection={{ xs: 'column', md: 'row' }}
            position='relative'
            minHeight={{ md: 600 }}
          >
            <Box
              width={1}
              order={{ xs: 2, md: 1 }}
              display='flex'
              alignItems='center'
            >
              <Container>
                {posts && posts[0] && (
                  <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
                    <Box marginBottom={2}>
                      <Typography
                        color={theme.palette.text.primary}
                        variant='h2'
                        fontWeight={700}
                        align='left'
                      >
                        Hi i'am{' '}
                      </Typography>
                      <Typography
                        color={theme.palette.primary.main}
                        variant='h2'
                        fontWeight={900}
                        align='left'
                        marginBottom={3}
                        display='flex'
                        gap='5px'
                      >
                        <LightSpeed>
                          {posts[0].first_name}{posts[0].last_name}
                        </LightSpeed>
                      </Typography>
                    </Box>
                    <Box marginBottom={3} className=' mt-64 md:mt-0'>
                      <Typography
                        variant='h6'
                        component='p'
                        color={theme.palette.text.secondary}
                        align='justify'
                        
                      >
                        {posts[0].description}

                        {/* As a teenager, I fell in love with computers and programming.
                      Despite studying geology at university, I spent most of my free
                      time in the computer room trying to learn programming. It wasn't
                      until 10 years later, when I enrolled in professional programming
                      training at Dresman Academy, that I was finally able to follow my
                      dream and upload my first website(Momtaz Academy) by myself with
                      love and passion. Now, I am thrilled to continue doing what I love
                      professionally by creating my personal website. In everything I do,
                      I believe in going one level deeper, seeing the patterns, potential,
                      and purpose that drive my clients to thrive. I am passionate about
                      delivering high-quality work that exceeds my clients' expectations
                      and takes pride in ensuring their satisfaction. Programming for me
                      is like classical music - its challenges and difficulties excite me,
                      and I enjoy every bit of it. As I continue to learn and progress in
                      this field, I am grateful for the path that led me here and for the
                      opportunity to pursue my passion. */}
                      </Typography>
                    </Box>
                    <HeroButtons />
                  </Box>
                )}

              </Container>
            </Box>
            <Box
              sx={{
                flex: { xs: '0 0 100%', md: '0 0 50%' },
                position: 'relative',
                maxWidth: { xs: '100%', md: '50%' },
                order: { xs: 1, md: 2 },
              }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '50vw' },
                  height: '100%',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      overflow: 'hidden',
                      left: '0%',
                      width: 1,
                      height: 1,
                      position: { xs: 'relative', md: 'absolute' },
                      clipPath: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                      },
                      shapeOutside: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: { xs: 'auto', md: 1 },
                        '& img': {
                          objectFit: 'cover',
                        },
                        '& .lazy-load-image-loaded': {
                          height: 1,
                          width: 1,
                        },
                      }}
                    >
                      {/* <Box
                        component={LazyLoadImage}
                        src='/images/bg.jpg'
                        alt='Background Image'
                        effect='blur'
                        height={{ xs: 'auto', md: 1 }}
                        maxHeight={{ xs: 300, md: 1 }}
                        width={1}
                        maxWidth={1}
                      /> */}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
        <Divider sx={{ mt: 3 }} />
      </Box>
    </div>
  );
};




export default Hero;
// export async function getStaticProps() {
//   const { data } = await useGetInfoQuery().toPromise();
//   console.log({data});



//   return {
//     props: {
//       data,
//     },
//   };
// }

