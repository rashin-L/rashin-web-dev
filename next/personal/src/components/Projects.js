import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useGetAboutQuery } from '@/redux/services/main/about';
import { useGetProjectQuery } from '@/redux/services/project/project';
import Link from "next/link";
import { ImGithub } from "react-icons/im";


const Projects = () => {
  const theme = useTheme();
  const { data } = useGetProjectQuery();

  return (
    <div id='projects'>
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin='0 auto'
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box marginBottom={4}>
          <Typography
            variant='h3'
            align='center'
            fontWeight={700}
            marginTop={theme.spacing(1)}
            data-aos='fade-up'
            gutterBottom
          >
            Projects
          </Typography>
          <Typography
            variant='h6'
            color={theme.palette.text.secondary}
            align='center'
            data-aos='fade-up'
            marginTop={4}
            marginBottom={6}
          >
            Showcasing My Solo Creations
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {data && data?.map((item, i) => (
            <Grid
              key={i}
              item
              xs={12}
              md={4}
              data-aos='fade-up'
              data-aos-delay={100}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Box
                display='block'
                width={1}
                height={1}
                sx={{
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },

                }}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  display='flex'
                  flexDirection='column'
                  sx={{ backgroundColor: 'rgb(255 255 255 / 0.3)' }}
                >
                  <CardMedia
                    title={item.project_name}
                    sx={{
                      position: 'relative',
                      height: { xs: 240, sm: 340, md: 280 },
                      overflow: 'hidden',
                      '& .slick-slide img': {
                        objectFit: 'cover',
                      },
                      '& .slick-prev, & .slick-next': {
                        zIndex: 2,
                        top: 0,
                        bottom: '100%',
                        left: '100%',
                        right: 0,
                        transform: 'translate(-100%, 50%)',
                        marginLeft: theme.spacing(-2),
                        width: 32,
                        height: 32,
                        '&:before': {
                          fontSize: theme.spacing(3),
                        },
                      },
                      '& .slick-prev': {
                        marginLeft: theme.spacing(-6),
                      },
                      '& .lazy-load-image-background.lazy-load-image-loaded': {
                        display: 'flex !important',
                      },
                    }}
                  >
                    <Box
                      component={LazyLoadImage}
                      // effect='blur'
                      src={item.main_img}
                      height={{ xs: 240, sm: 340, md: 280 }}
                      width='100%'
                      sx={{ objectFit: 'cover' }}
                    />
                  </CardMedia>
                  <CardContent>
                    <Link legacyBehavior 
                    // href={`/project/${item.id}`}
                    href={{
                      pathname:'/project/[id]',
                      query:{id:item.id}
                    }}
                    >
                      <a className=' cursor-pointer' target='_blank' >
                        <div className=' flex gap-1 items-center align-baseline mb-2' >
                          {item.icon &&
                            <img src={`${item.icon}`} alt='project_icon' className='w-8 h-8 mr-4 ' />
                          }
                          <Typography
                            variant='h6'
                            // gutterBottom
                            align='left'
                            fontWeight={700}
                            className=' self-end'
                          >
                            {item.project_name}
                          </Typography>
                        </div>

                        <Typography
                          variant='subtitle2'
                          color={theme.palette.text.secondary}
                          align='left'
                        >
                          {item.short_description}
                        </Typography>
                      </a>
                    </Link>

                    <Box
                      marginTop={2}
                      display='flex'
                      justifyContent='space-between'
                    >
                      <Box marginTop={2}>
                        {item.skills_used.map((tag, i) => (
                          <Chip
                            key={i}
                            label={tag.title}
                            variant='outlined'
                            sx={{ m: 1 }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                  <Box />
                  <CardActions>
                    <Box
                      display='flex'
                      justifyContent='space-between'
                      color={theme.palette.text.secondary}>
                      {item.git &&
                        <div className=' flex items-center gap-1'>
                          <ImGithub size={22} />
                          <Button
                            component='a'
                            href={item.git}
                            target='_blank'
                            sx={{
                              textTransform: 'none', flex: '0 0 auto',
                              color: theme.palette.text.secondary

                            }}
                          >
                            Source Code
                          </Button>
                        </div>

                      }
                      {/* <Button
                        component='a'
                        href={`/project/${item.id}`}
                        target='_blank'
                        sx={{ textTransform: 'none', flex: '0 0 auto' }}
                      >
                        Detail
                      </Button> */}
                    </Box>
                  </CardActions>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider />
    </div>
  );
};


export default Projects;
