import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useGetSocialQuery } from '@/redux/services/main/about';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaGithub } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const { data } = useGetSocialQuery();

  const theme = useTheme();

  return (
    <>
      <Box
        backgroundColor={theme.palette.background.default}
        paddingTop='1px'
        // sticky footer - see four values below
        position='fixed'
        bottom='0'
        left='0'
        width='100%'
      >
        <Divider />
        <Box
          backgroundColor={theme.palette.background.default}
          position='relative'
        // padding={theme.spacing(0.25)}
        >
          <Grid container spacing={0}>
            <Grid container item xs={12} md={4}
              className="justify-center mt-6 items-baseline ">
              <List>
                <ListItemButton>
                  <ListItemText
                    primary={
                      <Box
                        variant='body2'
                        color={theme.palette.text.secondary}
                      // style={{ fontWeight:'bold' }}
                      >
                        <div className=' flex items-center gap-1 sm:ml[-17rem] '>
                          created with <FaHeart style={{ color: '#F6051F', display: 'inline' }} /> by
                          <Box component="span" sx={{
                            display: 'inline', color: '#F6051F',
                            marginLeft: '0.3rem',
                          }}>
                            <img width={70} height={10}  className='w-15 h-[1.4rem] ' src='../../images/signature.png' alt='signature' />
                          </Box>
                        </div>
                      </Box>
                    }
                  />
                </ListItemButton>
              </List>
            </Grid>
            <Grid container item xs={12} md={4} justifyContent='center'>
              <List>
                <ListItemButton>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex' }}>
                        {data &&
                          <>
                            <IconButton
                              aria-label='LinkedIn'
                              href={data[0]?.linkedin}
                              target='_blank'
                            >
                              <LinkedInIcon style={{ color: theme.palette.text.primary, }}
                                fontSize='medum' />
                            </IconButton>
                            <IconButton
                              aria-label='Github'
                              href={data[0]?.gitHub}
                              target='_blank'
                            >
                              <FaGithub style={{ color: theme.palette.text.primary, }}
                                size={20} fontSize='large' />
                            </IconButton>
                            <IconButton
                              aria-label='telegram'
                              href={data[0]?.telegram}
                              target='_blank'
                            >
                              <FaTelegramPlane style={{ color: theme.palette.text.primary, }}
                                size={20} fontSize='large' />
                            </IconButton>
                          </>}
                      </Box>
                    }
                  />
                </ListItemButton>
              </List>
            </Grid>

          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
